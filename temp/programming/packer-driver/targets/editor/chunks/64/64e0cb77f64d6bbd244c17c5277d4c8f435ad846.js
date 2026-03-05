System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, fgui, ScreenBase, UIPanelType, SettingsController, _crd;

  function _reportPossibleCrUseOfScreenBase(extras) {
    _reporterNs.report("ScreenBase", "./ScreenBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioActions(extras) {
    _reporterNs.report("AudioActions", "./UIContracts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIActions(extras) {
    _reporterNs.report("UIActions", "./UIContracts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVolumeActions(extras) {
    _reporterNs.report("VolumeActions", "./UIContracts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPanelType(extras) {
    _reporterNs.report("UIPanelType", "./UIPanelType", _context.meta, extras);
  }

  _export("SettingsController", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      fgui = _unresolved_2;
    }, function (_unresolved_3) {
      ScreenBase = _unresolved_3.ScreenBase;
    }, function (_unresolved_4) {
      UIPanelType = _unresolved_4.UIPanelType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c17baU/EYtEJZNSpkCp2nMu", "SettingsController", undefined);

      _export("SettingsController", SettingsController = class SettingsController extends (_crd && ScreenBase === void 0 ? (_reportPossibleCrUseOfScreenBase({
        error: Error()
      }), ScreenBase) : ScreenBase) {
        constructor(packageName, ui, audio, volumes) {
          super(fgui.UIPackage.createObject(packageName, "SettingsPanel").asCom);
          this.mainVolSlider = void 0;
          this.musicSlider = void 0;
          this.sfxSlider = void 0;
          this.ui = ui;
          this.audio = audio;
          this.volumes = volumes;
          this.popup = this.view.getChild("SettingsPopup").asCom;
          this.mainVolSlider = this.popup.getChild("MainVolSlider");
          this.musicSlider = this.popup.getChild("MusicVolSlider");
          this.sfxSlider = this.popup.getChild("SFXVolSlider");
          this.init();
        }

        hide() {
          this.playTransition("Hide", () => {
            this.view.visible = false;
          });
        }

        onShow() {
          this.setSliderValuesFromState();
          this.playTransition("Show");
        }

        init() {
          const backBtn = this.popup.getChild("BackButton");
          this.mainVolSlider.on(fgui.Event.STATUS_CHANGED, this.onMainVolumeChanged, this);
          this.musicSlider.on(fgui.Event.STATUS_CHANGED, this.onMusicVolumeChanged, this);
          this.sfxSlider.on(fgui.Event.STATUS_CHANGED, this.onSfxVolumeChanged, this);
          backBtn.onClick(this.onBackClicked, this);
        }

        onMainVolumeChanged() {
          this.volumes.setMainVolume(this.mainVolSlider.value * 0.01);
        }

        onMusicVolumeChanged() {
          this.volumes.setMusicVolume(this.musicSlider.value * 0.01);
        }

        onSfxVolumeChanged() {
          this.volumes.setSfxVolume(this.sfxSlider.value * 0.01);
        }

        onBackClicked() {
          this.ui.show((_crd && UIPanelType === void 0 ? (_reportPossibleCrUseOfUIPanelType({
            error: Error()
          }), UIPanelType) : UIPanelType).MainMenuPanel);
          this.audio.playButtonClick();
        }

        setSliderValuesFromState() {
          this.mainVolSlider.value = this.volumes.getMainVolume() * 100;
          this.musicSlider.value = this.volumes.getMusicVolume() * 100;
          this.sfxSlider.value = this.volumes.getSfxVolume() * 100;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=64e0cb77f64d6bbd244c17c5277d4c8f435ad846.js.map