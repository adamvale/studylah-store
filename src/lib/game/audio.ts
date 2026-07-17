"use client";

// ── StudyLah Legends music + sound ──────────────────────────────────────────
// BGM loops, ME jingles (duck the BGM, then restore) and SE one-shots from
// the curated MZ audio set (converted to m4a so iOS/Safari decode it).
// Autoplay-safe: nothing plays until the first user gesture unlocks audio;
// the requested BGM is remembered and starts at that moment. The mute
// preference is its own key (separate from the site chiptune sfx toggle)
// and persists.

const KEY = "studylah_game_audio";
const EVT = "studylah:game-audio";

let unlocked = false;
let currentBgm: HTMLAudioElement | null = null;
let currentBgmName: string | null = null;
let wantedBgm: string | null = null;
let fadeTimer: number | null = null;

export function gameAudioMuted(): boolean {
  try {
    return localStorage.getItem(KEY) === "off";
  } catch {
    return false;
  }
}

export function setGameAudioMuted(muted: boolean): void {
  try {
    localStorage.setItem(KEY, muted ? "off" : "on");
  } catch {
    // storage unavailable, session-only preference
  }
  if (muted) stopBgm();
  else if (wantedBgm) playBgm(wantedBgm);
  window.dispatchEvent(new Event(EVT));
}

export function subscribeGameAudio(fn: () => void): () => void {
  window.addEventListener(EVT, fn);
  return () => window.removeEventListener(EVT, fn);
}

// Call from the first pointer/key handler: browsers allow playback started
// inside a user gesture, so we begin whatever BGM is pending right there.
export function unlockAudio(): void {
  if (unlocked) return;
  unlocked = true;
  if (wantedBgm && !gameAudioMuted()) playBgm(wantedBgm);
}

const BGM_VOL = 0.35;
const ME_VOL = 0.5;
const SE_VOL = 0.45;

function fadeOut(el: HTMLAudioElement, ms: number) {
  const start = el.volume;
  const t0 = performance.now();
  const step = () => {
    const k = Math.min(1, (performance.now() - t0) / ms);
    el.volume = start * (1 - k);
    if (k < 1) requestAnimationFrame(step);
    else {
      el.pause();
      el.src = "";
    }
  };
  requestAnimationFrame(step);
}

// Loop a BGM track by name (public/game/audio/bgm/<name>.m4a). Re-calling
// with the same name is a no-op; a new name crossfades.
export function playBgm(name: string | null): void {
  wantedBgm = name;
  if (!unlocked || gameAudioMuted()) return;
  if (name === currentBgmName) return;
  if (currentBgm) {
    fadeOut(currentBgm, 600);
    currentBgm = null;
  }
  currentBgmName = name;
  if (!name) return;
  const el = new Audio(`/game/audio/bgm/${name}.m4a`);
  el.loop = true;
  el.volume = BGM_VOL;
  el.play().catch(() => {
    // codec/policy failure: the game stays silent rather than broken
  });
  currentBgm = el;
}

export function stopBgm(): void {
  if (fadeTimer) window.clearTimeout(fadeTimer);
  if (currentBgm) fadeOut(currentBgm, 300);
  currentBgm = null;
  currentBgmName = null;
}

// A jingle: duck the BGM, play once, restore.
export function playMe(name: string): void {
  if (!unlocked || gameAudioMuted()) return;
  const bgm = currentBgm;
  if (bgm) bgm.volume = BGM_VOL * 0.25;
  const el = new Audio(`/game/audio/me/${name}.m4a`);
  el.volume = ME_VOL;
  el.play().catch(() => {});
  el.onended = () => {
    if (bgm && bgm === currentBgm) bgm.volume = BGM_VOL;
  };
}

// One-shot SE with a tiny element pool so rapid hits overlap cleanly.
const sePool: HTMLAudioElement[] = [];
export function playSe(name: string, volume = SE_VOL): void {
  if (!unlocked || gameAudioMuted()) return;
  let el = sePool.find((e) => e.paused || e.ended);
  if (!el) {
    if (sePool.length >= 8) return;
    el = new Audio();
    sePool.push(el);
  }
  el.src = `/game/audio/se/${name}.m4a`;
  el.volume = volume;
  el.play().catch(() => {});
}

// ── the score sheet: game moments → tracks ──────────────────────────────────
export function bgmForZone(zoneId: string, biomeBgm?: string): string {
  if (zoneId === "hub") return "Town1";
  if (zoneId.startsWith("int:")) return "Town2";
  if (zoneId === "reading") return "Scene5";
  if (zoneId.startsWith("under:")) return "Dungeon2";
  if (zoneId === "cells") return "Dungeon4";
  if (zoneId === "saltwind" || zoneId === "lantern") return "Ship1";
  if (zoneId === "summit") return "Theme6";
  if (zoneId === "campus") return "Scene5";
  if (zoneId.startsWith("prov:")) return biomeBgm ?? "Field1";
  return "Field1";
}

export const BATTLE_BGM = {
  wild: "Battle1",
  trainer: "Battle2",
  boss: "Battle4",
  championship: "Battle7",
} as const;

export const SFX = {
  cursor: () => playSe("Cursor1", 0.3),
  confirm: () => playSe("Decision1", 0.35),
  cancel: () => playSe("Cancel1", 0.3),
  buzzer: () => playSe("Buzzer1", 0.35),
  attack: () => playSe("Attack2"),
  hit: () => playSe("Blow3"),
  slash: () => playSe("Slash1"),
  damage: () => playSe("Damage4"),
  evade: () => playSe("Evasion1", 0.4),
  heal: () => playSe("Heal1"),
  absorb: () => playSe("Absorb1"),
  powerup: () => playSe("Powerup"),
  levelup: () => playSe("Up4"),
  save: () => playSe("Save1", 0.4),
  coin: () => playSe("Coin", 0.4),
  chime: () => playSe("Chime2", 0.4),
  bell: () => playSe("Bell1", 0.4),
  door: () => playSe("Door1", 0.4),
  run: () => playSe("Run", 0.4),
  teleport: () => playSe("Teleport", 0.4),
  monster: () => playSe("Monster1", 0.45),
  collapse: () => playSe("Collapse1", 0.45),
  shine: () => playSe("Starlight", 0.45),
  book: () => playSe("Book1", 0.4),
  chest: () => playSe("Chest1", 0.4),
} as const;
