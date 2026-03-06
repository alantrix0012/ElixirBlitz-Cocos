import * as fgui from "../../Plugins/FairyGUI/fairygui.mjs";
import { SFXType } from "../Audio/AudioEnums";
import { SFXManager } from "../Audio/SFXManager";
import { ScreenBase } from "./ScreenBase";
import { AudioActions, UIActions, VolumeActions } from "./UIContracts";
import { UIPanelType } from "./UIPanelType";

export class SettingsController extends ScreenBase {
  private mainVolSlider: fgui.GSlider;
  private musicSlider: fgui.GSlider;
  private sfxSlider: fgui.GSlider;

  constructor(
    packageName: string,
    private readonly ui: UIActions,
    private readonly audio: AudioActions,
    private readonly volumes: VolumeActions,
  ) {
    super(fgui.UIPackage.createObject(packageName, "SettingsPanel").asCom);
    this.popup = this.view.getChild("SettingsPopup").asCom;

    this.mainVolSlider = this.popup.getChild("MainVolSlider") as fgui.GSlider;
    this.musicSlider = this.popup.getChild("MusicVolSlider") as fgui.GSlider;
    this.sfxSlider = this.popup.getChild("SFXVolSlider") as fgui.GSlider;

    this.init();
  }

  override hide() {
    this.playTransition("Hide", () => {
      this.view.visible = false;
    });
  }

  protected onShow() {
    this.setSliderValuesFromState();
    this.playTransition("Show");
  }

  private init() {
    const backBtn = this.popup!.getChild("BackButton") as fgui.GButton;

    this.mainVolSlider.on(
      fgui.Event.STATUS_CHANGED,
      this.onMainVolumeChanged,
      this,
    );
    this.musicSlider.on(
      fgui.Event.STATUS_CHANGED,
      this.onMusicVolumeChanged,
      this,
    );
    this.sfxSlider.on(fgui.Event.STATUS_CHANGED, this.onSfxVolumeChanged, this);

    backBtn.onClick(this.onBackClicked, this);
  }

  private onMainVolumeChanged() {
    this.volumes.setMainVolume(this.mainVolSlider.value * 0.01);
  }

  private onMusicVolumeChanged() {
    this.volumes.setMusicVolume(this.musicSlider.value * 0.01);
  }

  private onSfxVolumeChanged() {
    this.volumes.setSfxVolume(this.sfxSlider.value * 0.01);
  }

  private onBackClicked() {
    this.ui.show(UIPanelType.MainMenuPanel);
    this.audio.playButtonClick();
    SFXManager.instance.play(SFXType.ButtonClick);
  }

  private setSliderValuesFromState() {
    this.mainVolSlider.value = this.volumes.getMainVolume() * 100;
    this.musicSlider.value = this.volumes.getMusicVolume() * 100;
    this.sfxSlider.value = this.volumes.getSfxVolume() * 100;
  }
}
