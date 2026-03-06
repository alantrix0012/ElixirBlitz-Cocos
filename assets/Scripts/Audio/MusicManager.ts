import { _decorator, Component, AudioClip, AudioSource } from "cc";
import { MusicType } from "./AudioEnums";
import { AudioManager } from "./AudioManager";

const { ccclass, property } = _decorator;

@ccclass("MusicManager")
export class MusicManager extends Component {
  public static instance: MusicManager;

  @property(AudioSource)
  source: AudioSource = null;

  @property(AudioClip)
  homeMusic: AudioClip = null;

  @property(AudioClip)
  gameMusic: AudioClip = null;

  @property(AudioClip)
  gameOverMusic: AudioClip = null;

  onLoad() {
    MusicManager.instance = this;
  }

  playMusic(type: MusicType) {
    let clip: AudioClip = null;

    switch (type) {
      case MusicType.Home:
        clip = this.homeMusic;
        break;

      case MusicType.Game:
        clip = this.gameMusic;
        break;

      case MusicType.GameOver:
        clip = this.gameOverMusic;
        break;
    }

    if (!clip) return;

    this.source.stop();
    this.source.clip = clip;
    this.source.loop = true;
    this.source.volume = AudioManager.instance.getMusicVolume();
    this.source.play();
  }
}
