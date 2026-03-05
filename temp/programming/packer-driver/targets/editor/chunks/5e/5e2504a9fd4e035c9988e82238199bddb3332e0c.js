System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, fgui, ScreenBase, GameHUDController, _crd;

  function _reportPossibleCrUseOfScreenBase(extras) {
    _reporterNs.report("ScreenBase", "./ScreenBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioActions(extras) {
    _reporterNs.report("AudioActions", "./UIContracts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameActions(extras) {
    _reporterNs.report("GameActions", "./UIContracts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMissActions(extras) {
    _reporterNs.report("MissActions", "./UIContracts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScoreActions(extras) {
    _reporterNs.report("ScoreActions", "./UIContracts", _context.meta, extras);
  }

  _export("GameHUDController", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      fgui = _unresolved_2;
    }, function (_unresolved_3) {
      ScreenBase = _unresolved_3.ScreenBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "472d0qT4SZMWq7MzCdZjZgX", "GameHUDController", undefined);

      _export("GameHUDController", GameHUDController = class GameHUDController extends (_crd && ScreenBase === void 0 ? (_reportPossibleCrUseOfScreenBase({
        error: Error()
      }), ScreenBase) : ScreenBase) {
        constructor(packageName, game, audio, scores, misses) {
          var _this$view$getChild, _this$view$getChild2, _this$view$getChild$a, _this$view$getChild3, _ref, _ref2, _this$view$getChild$a2, _this$view$getChild4, _this$view$getChild5, _this$view$getChild6, _this$view$getChild7, _missedItems$getChild, _missedItems$getChild2, _missedItems$getChild3, _missedItems$getChild4, _missedItems$getChild5, _missedItems$getChild6;

          super(fgui.UIPackage.createObject(packageName, "GameHUDPanel").asCom);
          this.scoreText = null;
          this.countDownText = null;
          this.miss1 = null;
          this.miss2 = null;
          this.miss3 = null;

          this.updateScore = score => {
            if (this.scoreText) this.scoreText.text = String(score);
          };

          this.updateMissUI = currentMisses => {
            this.resetMissUI();
            if (currentMisses >= 1 && this.miss3) this.miss3.url = "ui://FGUI_Tutorial/RedX";
            if (currentMisses >= 2 && this.miss2) this.miss2.url = "ui://FGUI_Tutorial/RedX";
            if (currentMisses >= 3 && this.miss1) this.miss1.url = "ui://FGUI_Tutorial/RedX";
          };

          this.game = game;
          this.audio = audio;
          this.scores = scores;
          this.misses = misses;
          const pauseButton = (_this$view$getChild = this.view.getChild("PauseButton")) == null ? void 0 : _this$view$getChild.asButton;
          const inputButton = (_this$view$getChild2 = this.view.getChild("InputButton")) == null ? void 0 : _this$view$getChild2.asButton;
          this.scoreText = (_this$view$getChild$a = (_this$view$getChild3 = this.view.getChild("ScoreText")) == null ? void 0 : _this$view$getChild3.asTextField) != null ? _this$view$getChild$a : null;
          this.countDownText = (_ref = (_ref2 = (_this$view$getChild$a2 = (_this$view$getChild4 = this.view.getChild("CountDownText")) == null ? void 0 : _this$view$getChild4.asTextField) != null ? _this$view$getChild$a2 : (_this$view$getChild5 = this.view.getChild("CountdownText")) == null ? void 0 : _this$view$getChild5.asTextField) != null ? _ref2 : (_this$view$getChild6 = this.view.getChild("Countdown")) == null ? void 0 : _this$view$getChild6.asTextField) != null ? _ref : null;

          if (!this.scoreText) {
            console.warn("GameHUDController: 'ScoreText' not found in GameHUDPanel.");
          }

          if (!this.countDownText) {
            console.warn("GameHUDController: countdown text not found (expected CountDownText/CountdownText/Countdown).");
          }

          const missedItems = (_this$view$getChild7 = this.view.getChild("MissedItems")) == null ? void 0 : _this$view$getChild7.asCom;
          this.miss1 = (_missedItems$getChild = missedItems == null ? void 0 : (_missedItems$getChild2 = missedItems.getChild("1")) == null ? void 0 : _missedItems$getChild2.asLoader) != null ? _missedItems$getChild : null;
          this.miss2 = (_missedItems$getChild3 = missedItems == null ? void 0 : (_missedItems$getChild4 = missedItems.getChild("2")) == null ? void 0 : _missedItems$getChild4.asLoader) != null ? _missedItems$getChild3 : null;
          this.miss3 = (_missedItems$getChild5 = missedItems == null ? void 0 : (_missedItems$getChild6 = missedItems.getChild("3")) == null ? void 0 : _missedItems$getChild6.asLoader) != null ? _missedItems$getChild5 : null;
          this.countDownText && (this.countDownText.visible = false);
          pauseButton == null ? void 0 : pauseButton.onClick(this.onPauseClicked, this);
          inputButton == null ? void 0 : inputButton.onClick(this.onInputClicked, this);
        }

        onShow() {
          this.scores.onScoreChanged(this.updateScore);
          this.misses.onMissChanged(this.updateMissUI);
          this.updateScore(this.scores.getScore());
          this.updateMissUI(this.misses.getCurrentMisses());
        }

        onHide() {
          this.scores.offScoreChanged(this.updateScore);
          this.misses.offMissChanged(this.updateMissUI);
        }

        async playCountdown(onComplete) {
          if (!this.countDownText) {
            onComplete();
            return;
          }

          this.countDownText.visible = true;

          for (let i = 3; i > 0; i -= 1) {
            this.countDownText.text = String(i);
            await this.delay(1000);
          }

          this.countDownText.text = "GO!";
          await this.delay(500);
          this.countDownText.visible = false;
          onComplete();
        }

        resetMissUI() {
          if (this.miss1) this.miss1.url = "ui://FGUI_Tutorial/BlueX";
          if (this.miss2) this.miss2.url = "ui://FGUI_Tutorial/BlueX";
          if (this.miss3) this.miss3.url = "ui://FGUI_Tutorial/BlueX";
        }

        onPauseClicked() {
          this.game.pauseGame();
          this.audio.playButtonClick();
        }

        onInputClicked() {
          this.game.onScreenClicked();
        }

        delay(ms) {
          return new Promise(resolve => setTimeout(resolve, ms));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5e2504a9fd4e035c9988e82238199bddb3332e0c.js.map