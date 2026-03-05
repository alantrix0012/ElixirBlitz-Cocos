System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, sys, GameManager, GameState, _dec, _class, _class2, _crd, ccclass, ScoreManager;

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "./GameManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      GameManager = _unresolved_2.GameManager;
      GameState = _unresolved_2.GameState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "13933GN1ftDZpFPdXK6cWC4", "ScoreManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'sys']);

      ({
        ccclass
      } = _decorator);

      _export("ScoreManager", ScoreManager = (_dec = ccclass("ScoreManager"), _dec(_class = (_class2 = class ScoreManager extends Component {
        constructor(...args) {
          super(...args);
          this._score = 0;
          this._highScore = 0;
          this.scoreListeners = new Set();
        }

        get score() {
          return this._score;
        }

        get highScore() {
          return this._highScore;
        }

        onLoad() {
          var _sys$localStorage$get;

          ScoreManager.instance = this;
          this._highScore = Number((_sys$localStorage$get = sys.localStorage.getItem(ScoreManager.HIGH_SCORE_KEY)) != null ? _sys$localStorage$get : 0);
        }

        addScore(points) {
          if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).instance.currentState !== (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).Playing) return;
          this._score += points;
          this.emitScoreChanged();
        }

        resetScore() {
          this._score = 0;
          this.emitScoreChanged();
        }

        checkForHighScore() {
          if (this._score > this._highScore) {
            this._highScore = this._score;
            sys.localStorage.setItem(ScoreManager.HIGH_SCORE_KEY, String(this._highScore));
          }
        }

        getScore() {
          return this._score;
        }

        getHighScore() {
          return this._highScore;
        }

        onScoreChanged(listener) {
          this.scoreListeners.add(listener);
        }

        offScoreChanged(listener) {
          this.scoreListeners.delete(listener);
        }

        emitScoreChanged() {
          this.scoreListeners.forEach(listener => listener(this._score));
        }

      }, _class2.instance = void 0, _class2.HIGH_SCORE_KEY = "HIGH_SCORE", _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d5c313f41415a342882c8104913a3af38b07c1c5.js.map