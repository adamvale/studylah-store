// The tutor voices Gugu can speak in. Each `id` is both the ElevenLabs voice id
// and the audio folder name under /audio/gugu/<id>/. `available` means the voice
// is offered to students (has generated audio and is switched on); a stagnant
// voice stays here, ready to activate later, without being shown as a choice.
//
// Eventually a student picks their tutor; for now Amy (female) is the default,
// and Jay (male) is kept ready but not yet offered.

export interface TutorVoice {
  id: string;
  name: string;
  gender: "female" | "male";
  available: boolean;
}

export const TUTOR_VOICES: TutorVoice[] = [
  { id: "OZxMHsGaBmV5pjMIDIn0", name: "Amy", gender: "female", available: true },
  { id: "8Ln42OXYupYsag45MAUy", name: "Jay", gender: "male", available: false },
];

// The tutor a student gets unless they choose otherwise. Also the fallback voice
// speak() uses if /audio/gugu/active.json is missing.
export const DEFAULT_TUTOR_VOICE_ID = "OZxMHsGaBmV5pjMIDIn0"; // Amy

export function tutorVoice(id: string): TutorVoice | undefined {
  return TUTOR_VOICES.find((v) => v.id === id);
}
