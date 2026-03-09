import { _decorator, Component } from "cc";
import { VolumeActions } from "../UI/UIContracts";
import { MusicManager } from "./MusicManager";

const { ccclass } = _decorator;

@ccclass("AudioManager")
export class AudioManager extends Component implements VolumeActions {
  public static instance: AudioManager;

  private mainVolume = 1;
  private musicVolume = 1;
  private sfxVolume = 1;

  onLoad() {
    AudioManager.instance = this;
  }

  setMainVolume(volume: number): void {
    this.mainVolume = volume;
    this.updateMusicVolume();
  }

  setMusicVolume(volume: number): void {
    this.musicVolume = volume;
    this.updateMusicVolume();
  }

  setSfxVolume(volume: number): void {
    this.sfxVolume = volume;
  }

  getMainVolume(): number {
    return this.mainVolume;
  }

  getMusicVolume(): number {
    return this.musicVolume;
  }

  getSfxVolume(): number {
    return this.sfxVolume;
  }

  getFinalMusicVolume(): number {
    return this.mainVolume * this.musicVolume;
  }

  getFinalSfxVolume(): number {
    return this.mainVolume * this.sfxVolume;
  }

  private updateMusicVolume() {
    if (MusicManager.instance) {
      MusicManager.instance.updateVolume();
    }
  }
}
