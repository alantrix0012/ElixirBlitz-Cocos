System.register(["__unresolved_0", "cc", "fairygui-cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, fgui, ScreenBase, UIPanelType, MainMenuController, _crd;

  function _reportPossibleCrUseOfScreenBase(extras) {
    _reporterNs.report("ScreenBase", "./ScreenBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioActions(extras) {
    _reporterNs.report("AudioActions", "./UIContracts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameActions(extras) {
    _reporterNs.report("GameActions", "./UIContracts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIActions(extras) {
    _reporterNs.report("UIActions", "./UIContracts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPanelType(extras) {
    _reporterNs.report("UIPanelType", "./UIPanelType", _context.meta, extras);
  }

  _export("MainMenuController", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_fairyguiCc) {
      fgui = _fairyguiCc;
    }, function (_unresolved_2) {
      ScreenBase = _unresolved_2.ScreenBase;
    }, function (_unresolved_3) {
      UIPanelType = _unresolved_3.UIPanelType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d72d6odrcBFqbbK7YKwJVxP", "MainMenuController", undefined);

      _export("MainMenuController", MainMenuController = class MainMenuController extends (_crd && ScreenBase === void 0 ? (_reportPossibleCrUseOfScreenBase({
        error: Error()
      }), ScreenBase) : ScreenBase) {
        constructor(packageName, game, ui, audio) {
          super(fgui.UIPackage.createObject(packageName, "MainMenuPanel").asCom);
          this.game = game;
          this.ui = ui;
          this.audio = audio;
          this.init();
        }

        init() {
          const playBtn = this.view.getChild("PlayButton");
          const settingsBtn = this.view.getChild("SettingsButton");
          const leaderboardBtn = this.view.getChild("LeaderboardButton");
          playBtn.onClick(this.onPlayClicked, this);
          settingsBtn.onClick(this.onSettingsClicked, this);
          leaderboardBtn.onClick(this.onLeaderboardClicked, this);
        }

        onPlayClicked() {
          this.game.startGame();
          this.audio.playButtonClick();
        }

        onSettingsClicked() {
          this.ui.show((_crd && UIPanelType === void 0 ? (_reportPossibleCrUseOfUIPanelType({
            error: Error()
          }), UIPanelType) : UIPanelType).SettingsPanel);
          this.audio.playButtonClick();
        }

        onLeaderboardClicked() {
          this.ui.show((_crd && UIPanelType === void 0 ? (_reportPossibleCrUseOfUIPanelType({
            error: Error()
          }), UIPanelType) : UIPanelType).LeaderboardPanel);
          this.audio.playButtonClick();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c748e66bebda0a96e35b0dcd57b1e7a320b54a8d.js.map