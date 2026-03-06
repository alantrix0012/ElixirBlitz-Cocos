import { _decorator, Component } from "cc";
const { ccclass } = _decorator;

@ccclass("AudioManager")
export class AudioManager extends Component {
  public static instance: AudioManager;

  private masterVolume = 1;
  private musicVolume = 1;
  private sfxVolume = 1;

  onLoad() {
    AudioManager.instance = this;
  }

  setMasterVolume(v: number) {
    this.masterVolume = v;
  }

  setMusicVolume(v: number) {
    this.musicVolume = v;
  }

  setSFXVolume(v: number) {
    this.sfxVolume = v;
  }

  getMusicVolume() {
    return this.masterVolume * this.musicVolume;
  }

  getSFXVolume() {
    return this.masterVolume * this.sfxVolume;
  }
}
