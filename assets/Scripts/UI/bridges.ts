import { AudioActions, VolumeActions } from "./UIContracts";

export class NullAudioBridge implements AudioActions {
  playButtonClick(): void {
    // Intentionally empty: replace with your own audio integration.
  }
}

export class NullVolumeBridge implements VolumeActions {
  private main = 1;
  private music = 1;
  private sfx = 1;

  setMainVolume(volume: number): void {
    this.main = volume;
  }

  setMusicVolume(volume: number): void {
    this.music = volume;
  }

  setSfxVolume(volume: number): void {
    this.sfx = volume;
  }

  getMainVolume(): number {
    return this.main;
  }

  getMusicVolume(): number {
    return this.music;
  }

  getSfxVolume(): number {
    return this.sfx;
  }
}
