import Anthropic from "@anthropic-ai/sdk";

// Project Loudspeaker speech engine. Claude cannot hear audio, so pronunciation
// is scored by Azure Speech Pronunciation Assessment (covers en-GB and zh-CN
// with phoneme and tone level scores). Guru then turns those raw scores into
// warm, plain-language coaching in the house voice. The raw audio is used only
// to score, never stored.
//
// Owner setup required to go live: set AZURE_SPEECH_KEY and AZURE_SPEECH_REGION
// (e.g. "southeastasia"). Without them the feature runs in a practice-only mode
// (record and read, no score) rather than erroring.

export function speechConfigured(): boolean {
  return Boolean(process.env.AZURE_SPEECH_KEY && process.env.AZURE_SPEECH_REGION);
}

export interface PronScores {
  ok: true;
  transcript: string;
  accuracy: number | null;
  fluency: number | null;
  completeness: number | null;
  overall: number | null;
}
export interface PronError {
  ok: false;
  reason: string;
  notConfigured?: boolean;
}

export async function assessPronunciation(opts: {
  audioBase64: string;
  mediaType: string; // e.g. "audio/webm; codecs=opus"
  referenceText: string; // "" for unscripted conversation
  langCode: "zh-CN" | "en-GB";
  scripted: boolean; // read-aloud = true (miscue on), conversation = false
}): Promise<PronScores | PronError> {
  const key = process.env.AZURE_SPEECH_KEY;
  const region = process.env.AZURE_SPEECH_REGION;
  if (!key || !region) {
    return {
      ok: false,
      notConfigured: true,
      reason: "Pronunciation scoring is not switched on yet. You can still record and practise.",
    };
  }

  const assessConfig = {
    ReferenceText: opts.scripted ? opts.referenceText : "",
    GradingSystem: "HundredMark",
    Granularity: "Phoneme",
    Dimension: "Comprehensive",
    EnableMiscue: opts.scripted,
  };
  const header = Buffer.from(JSON.stringify(assessConfig)).toString("base64");
  const url = `https://${region}.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1?language=${opts.langCode}&format=detailed`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Ocp-Apim-Subscription-Key": key,
        "Content-Type": opts.mediaType,
        "Pronunciation-Assessment": header,
        Accept: "application/json",
      },
      body: Buffer.from(opts.audioBase64, "base64"),
    });
    if (!res.ok) {
      const detail = await res.text();
      console.error("Azure pronunciation error", res.status, detail.slice(0, 300));
      return { ok: false, reason: "The scoring service could not read that clip. Try recording again in a quiet spot." };
    }
    const data = (await res.json()) as {
      RecognitionStatus?: string;
      NBest?: Array<{
        Display?: string;
        PronunciationAssessment?: {
          AccuracyScore?: number;
          FluencyScore?: number;
          CompletenessScore?: number;
          PronScore?: number;
        };
      }>;
    };
    const best = data.NBest?.[0];
    if (!best || data.RecognitionStatus !== "Success") {
      return { ok: false, reason: "I couldn't hear that clearly. Move somewhere quieter and try again." };
    }
    const pa = best.PronunciationAssessment ?? {};
    return {
      ok: true,
      transcript: best.Display ?? "",
      accuracy: pa.AccuracyScore ?? null,
      fluency: pa.FluencyScore ?? null,
      completeness: pa.CompletenessScore ?? null,
      overall: pa.PronScore ?? null,
    };
  } catch (err) {
    console.error("Azure pronunciation call failed", err);
    return { ok: false, reason: "Something went wrong scoring that. Try again in a moment." };
  }
}

// Guru turns the numbers into coaching. Falls back to a compliant template
// when Claude is unavailable, so the feature never hard-fails.
function deDash(s: string): string {
  return s.replace(/\s*[—–]\s*/g, ", ").replace(/[—–]/g, "-");
}

export async function coachPronunciation(opts: {
  scores: PronScores;
  langCode: "zh-CN" | "en-GB";
  referenceText: string;
  scripted: boolean;
}): Promise<string> {
  const { scores } = opts;
  const langName = opts.langCode === "zh-CN" ? "Chinese" : "English";
  const template = `You scored ${Math.round(scores.overall ?? 0)} out of 100 for pronunciation. Accuracy ${Math.round(
    scores.accuracy ?? 0
  )}, fluency ${Math.round(scores.fluency ?? 0)}. Keep practising the words that felt awkward and record it again.`;

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return template;

  const system = `You are Guru, StudyLah's warm oral-exam coach for a Singapore student (aged 13 to 17) practising ${langName} for the Paper 4 oral. You are given pronunciation scores from a speech engine. Give short, encouraging, practical coaching in point form: what went well, then the ONE or TWO things to fix, and a concrete tip for each. ${
    opts.langCode === "zh-CN" ? "For Chinese, comment on tones where relevant." : "For English, comment on clear word endings and stress."
  }
Rules: warm and honest, never harsh. A Singaporean accent is fine, coach for exam clarity, never tell the student their accent is wrong. No emojis. No em or en dashes. Never promise a grade or mark. Keep it under 90 words. Plain text only.`;

  const detail = `Scores out of 100: overall ${scores.overall}, accuracy ${scores.accuracy}, fluency ${scores.fluency}, completeness ${scores.completeness}. ${
    opts.scripted ? `They read this aloud: "${opts.referenceText}".` : "This was an open conversation answer."
  } The engine heard: "${scores.transcript}".`;

  try {
    const client = new Anthropic({ apiKey });
    const res = await client.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 300,
      system,
      messages: [{ role: "user", content: detail }],
    });
    const text = res.content.map((b) => (b.type === "text" ? b.text : "")).join("").trim();
    return text ? deDash(text) : template;
  } catch (err) {
    console.error("Guru coaching failed", err);
    return template;
  }
}
