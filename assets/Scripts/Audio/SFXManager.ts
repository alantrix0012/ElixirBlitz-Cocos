import { _decorator, Component, AudioClip, AudioSource, Enum } from "cc";
import { SFXType } from "./AudioEnums";
import { AudioManager } from "./AudioManager";

const { ccclass, property } = _decorator;

@ccclass("SFXEntry")
export class SFXEntry {
  @property({ type: Enum(SFXType) })
  type: SFXType = SFXType.ButtonClick;

  @property(AudioClip)
  clip: AudioClip = null;
}

@ccclass("SFXManager")
export class SFXManager extends Component {
  public static instance: SFXManager;

  @property(AudioSource)
  source: AudioSource = null;

  @property([SFXEntry])
  sfxList: SFXEntry[] = [];

  private sfxMap = new Map<SFXType, any>();

  onLoad() {
    SFXManager.instance = this;

    for (const entry of this.sfxList) {
      this.sfxMap.set(entry.type, entry.clip);
    }
  }

  play(type: SFXType) {
    const clip = this.sfxMap.get(type);
    if (!clip || !this.source) return;

    this.source.playOneShot(clip, AudioManager.instance.getFinalSfxVolume());

    console.log(`Playing SFX: ${SFXType[type]}`);
  }
}
