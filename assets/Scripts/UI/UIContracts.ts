import { UIPanelType } from "./UIPanelType";

export interface GameActions {
  startGame(): void;
  pauseGame(): void;
  resumeGame(): void;
  retryGame(): void;
  goToHome(): void;
  onScreenClicked(): void;
}

export interface AudioActions {
  playButtonClick(): void;
}

export interface VolumeActions {
  setMainVolume(volume: number): void;
  setMusicVolume(volume: number): void;
  setSfxVolume(volume: number): void;
  getMainVolume(): number;
  getMusicVolume(): number;
  getSfxVolume(): number;
}

export interface ScoreActions {
  getScore(): number;
  getHighScore(): number;
  onScoreChanged(listener: (score: number) => void): void;
  offScoreChanged(listener: (score: number) => void): void;
}

export interface MissActions {
  getCurrentMisses(): number;
  onMissChanged(listener: (misses: number) => void): void;
  offMissChanged(listener: (misses: number) => void): void;
}

export interface UIActions {
  show(panel: UIPanelType): void;
}
