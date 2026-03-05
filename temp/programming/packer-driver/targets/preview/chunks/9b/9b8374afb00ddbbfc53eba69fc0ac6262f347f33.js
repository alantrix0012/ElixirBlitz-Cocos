System.register(["__unresolved_0", "cc", "fairygui-cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, fgui, ScreenBase, PausePanelController, _crd;

  function _reportPossibleCrUseOfScreenBase(extras) {
    _reporterNs.report("ScreenBase", "./ScreenBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioActions(extras) {
    _reporterNs.report("AudioActions", "./UIContracts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameActions(extras) {
    _reporterNs.report("GameActions", "./UIContracts", _context.meta, extras);
  }

  _export("PausePanelController", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_fairyguiCc) {
      fgui = _fairyguiCc;
    }, function (_unresolved_2) {
      ScreenBase = _unresolved_2.ScreenBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3fadfe0O/pFPrkLkiyxi3We", "PausePanelController", undefined);

      _export("PausePanelController", PausePanelController = class PausePanelController extends (_crd && ScreenBase === void 0 ? (_reportPossibleCrUseOfScreenBase({
        error: Error()
      }), ScreenBase) : ScreenBase) {
        constructor(packageName, game, audio) {
          super(fgui.UIPackage.createObject(packageName, "Pause Panel").asCom);
          this.game = game;
          this.audio = audio;
          this.popup = this.view.getChild("PausePopup").asCom;
          this.init();
        }

        hide() {
          this.playTransition("Hide", () => {
            this.view.visible = false;
          });
        }

        onShow() {
          this.playTransition("Show");
        }

        init() {
          var playButton = this.popup.getChild("PlayButton").asButton;
          var homeButton = this.popup.getChild("HomeButton").asButton;
          var retryButton = this.popup.getChild("RetryButton").asButton;
          playButton.onClick(this.onPlayClicked, this);
          homeButton.onClick(this.onHomeClicked, this);
          retryButton.onClick(this.onRetryClicked, this);
        }

        onPlayClicked() {
          this.game.resumeGame();
          this.audio.playButtonClick();
        }

        onHomeClicked() {
          this.game.goToHome();
          this.audio.playButtonClick();
        }

        onRetryClicked() {
          this.game.retryGame();
          this.audio.playButtonClick();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9b8374afb00ddbbfc53eba69fc0ac6262f347f33.js.map