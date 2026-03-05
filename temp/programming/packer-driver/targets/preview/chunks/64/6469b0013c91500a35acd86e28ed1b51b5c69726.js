System.register(["__unresolved_0", "cc", "fairygui-cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, fgui, ScreenBase, UIPanelType, GameHUDController, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

  function _reportPossibleCrUseOfUIActions(extras) {
    _reporterNs.report("UIActions", "./UIContracts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPanelType(extras) {
    _reporterNs.report("UIPanelType", "./UIPanelType", _context.meta, extras);
  }

  _export("GameHUDController", void 0);

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

      _cclegacy._RF.push({}, "472d0qT4SZMWq7MzCdZjZgX", "GameHUDController", undefined);

      _export("GameHUDController", GameHUDController = class GameHUDController extends (_crd && ScreenBase === void 0 ? (_reportPossibleCrUseOfScreenBase({
        error: Error()
      }), ScreenBase) : ScreenBase) {
        constructor(packageName, game, ui, audio, scores, misses) {
          super(fgui.UIPackage.createObject(packageName, "GameHUDPanel").asCom);
          this.scoreText = void 0;
          this.countDownText = void 0;
          this.miss1 = void 0;
          this.miss2 = void 0;
          this.miss3 = void 0;

          this.updateScore = score => {
            this.scoreText.text = String(score);
          };

          this.updateMissUI = currentMisses => {
            this.resetMissUI();
            if (currentMisses >= 1) this.miss3.url = "ui://FGUI_Tutorial/RedX";
            if (currentMisses >= 2) this.miss2.url = "ui://FGUI_Tutorial/RedX";
            if (currentMisses >= 3) this.miss1.url = "ui://FGUI_Tutorial/RedX";
          };

          this.game = game;
          this.ui = ui;
          this.audio = audio;
          this.scores = scores;
          this.misses = misses;
          var pauseButton = this.view.getChild("PauseButton");
          var inputButton = this.view.getChild("InputButton");
          this.scoreText = this.view.getChild("ScoreText");
          this.countDownText = this.view.getChild("CountDownText");
          var missedItems = this.view.getChild("MissedItems").asCom;
          this.miss1 = missedItems.getChild("1");
          this.miss2 = missedItems.getChild("2");
          this.miss3 = missedItems.getChild("3");
          this.countDownText.visible = false;
          pauseButton.onClick(this.onPauseClicked, this);
          inputButton.onClick(this.onInputClicked, this);
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

        playCountdown(onComplete) {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.countDownText.visible = true;

            for (var i = 3; i > 0; i -= 1) {
              _this.countDownText.text = String(i);
              yield _this.delay(1000);
            }

            _this.countDownText.text = "GO!";
            yield _this.delay(500);
            _this.countDownText.visible = false;
            onComplete();
          })();
        }

        resetMissUI() {
          this.miss1.url = "ui://FGUI_Tutorial/BlueX";
          this.miss2.url = "ui://FGUI_Tutorial/BlueX";
          this.miss3.url = "ui://FGUI_Tutorial/BlueX";
        }

        onPauseClicked() {
          this.game.pauseGame();
          this.ui.show((_crd && UIPanelType === void 0 ? (_reportPossibleCrUseOfUIPanelType({
            error: Error()
          }), UIPanelType) : UIPanelType).PausePanel);
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
//# sourceMappingURL=6469b0013c91500a35acd86e28ed1b51b5c69726.js.map