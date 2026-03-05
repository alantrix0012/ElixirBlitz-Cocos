System.register(["__unresolved_0", "cc", "fairygui-cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, fgui, ScreenBase, GameOverController, _crd;

  function _reportPossibleCrUseOfScreenBase(extras) {
    _reporterNs.report("ScreenBase", "./ScreenBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioActions(extras) {
    _reporterNs.report("AudioActions", "./UIContracts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameActions(extras) {
    _reporterNs.report("GameActions", "./UIContracts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScoreActions(extras) {
    _reporterNs.report("ScoreActions", "./UIContracts", _context.meta, extras);
  }

  _export("GameOverController", void 0);

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

      _cclegacy._RF.push({}, "ceb95/Hn1JMJY4gRwOqw0Se", "GameOverController", undefined);

      _export("GameOverController", GameOverController = class GameOverController extends (_crd && ScreenBase === void 0 ? (_reportPossibleCrUseOfScreenBase({
        error: Error()
      }), ScreenBase) : ScreenBase) {
        constructor(packageName, game, audio, scores) {
          super(fgui.UIPackage.createObject(packageName, "Game Over Panel").asCom);
          this.game = game;
          this.audio = audio;
          this.scores = scores;
          this.init();
        }

        onShow() {
          const scoreText = this.view.getChild("Scorebox").asCom.getChild("Score");
          scoreText.text = `SCORE : ${this.scores.getScore()}`;
        }

        init() {
          const homeBtn = this.view.getChild("HomeButton");
          const retryBtn = this.view.getChild("RetryButton");
          homeBtn.onClick(this.onHomeClicked, this);
          retryBtn.onClick(this.onRetryClicked, this);
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
//# sourceMappingURL=b132199b4e99789a5977e12c343c53bfc254a7b1.js.map