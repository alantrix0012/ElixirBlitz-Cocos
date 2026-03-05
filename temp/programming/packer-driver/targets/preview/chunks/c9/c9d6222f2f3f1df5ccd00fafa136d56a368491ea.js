System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, PotionType, PotionSpawner, PotMovement, ScoreManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _crd, ccclass, property, GameState, GameManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPotion(extras) {
    _reporterNs.report("Potion", "../Potion", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPotionType(extras) {
    _reporterNs.report("PotionType", "../Potion", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPotionSpawner(extras) {
    _reporterNs.report("PotionSpawner", "../PotionSpawner", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPotMovement(extras) {
    _reporterNs.report("PotMovement", "../PotMovement", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScoreManager(extras) {
    _reporterNs.report("ScoreManager", "./ScoreManager", _context.meta, extras);
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
    }, function (_unresolved_2) {
      PotionType = _unresolved_2.PotionType;
    }, function (_unresolved_3) {
      PotionSpawner = _unresolved_3.PotionSpawner;
    }, function (_unresolved_4) {
      PotMovement = _unresolved_4.PotMovement;
    }, function (_unresolved_5) {
      ScoreManager = _unresolved_5.ScoreManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d1789hstx1FKaJbAiBKFyA6", "GameManager", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameState", GameState = /*#__PURE__*/function (GameState) {
        GameState[GameState["MainMenu"] = 0] = "MainMenu";
        GameState[GameState["Playing"] = 1] = "Playing";
        GameState[GameState["Paused"] = 2] = "Paused";
        GameState[GameState["GameOver"] = 3] = "GameOver";
        return GameState;
      }({}));

      _export("GameManager", GameManager = (_dec = ccclass("GameManager"), _dec2 = property(_crd && PotionSpawner === void 0 ? (_reportPossibleCrUseOfPotionSpawner({
        error: Error()
      }), PotionSpawner) : PotionSpawner), _dec3 = property(_crd && PotMovement === void 0 ? (_reportPossibleCrUseOfPotMovement({
        error: Error()
      }), PotMovement) : PotMovement), _dec(_class = (_class2 = (_class3 = class GameManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "spawner", _descriptor, this);

          _initializerDefineProperty(this, "pot", _descriptor2, this);

          _initializerDefineProperty(this, "maxMisses", _descriptor3, this);

          this._currentState = GameState.MainMenu;
          this._currentMisses = 0;
          this.missListeners = new Set();
        }

        get currentState() {
          return this._currentState;
        }

        onLoad() {
          GameManager.instance = this;
        }

        start() {
          this.setState(GameState.MainMenu);
        }

        startGame() {
          var _this$spawner, _this$pot;

          this._currentMisses = 0;
          this.emitMissChanged();
          (_crd && ScoreManager === void 0 ? (_reportPossibleCrUseOfScoreManager({
            error: Error()
          }), ScoreManager) : ScoreManager).instance.resetScore();
          (_this$spawner = this.spawner) == null ? void 0 : _this$spawner.initializeSpawner();
          (_this$pot = this.pot) == null ? void 0 : _this$pot.resetPot();
          this.setState(GameState.Playing);
        }

        onScreenClicked() {
          var _this$pot2;

          if (this._currentState !== GameState.Playing) return;
          (_this$pot2 = this.pot) == null ? void 0 : _this$pot2.handleInput();
        }

        registerMiss() {
          if (this._currentState !== GameState.Playing) return;
          this._currentMisses += 1;
          this.emitMissChanged();

          if (this._currentMisses >= this.maxMisses) {
            this.gameOver();
          }
        }

        onPotionCollected(potion) {
          if (this._currentState !== GameState.Playing) return;

          if (potion.potionType === (_crd && PotionType === void 0 ? (_reportPossibleCrUseOfPotionType({
            error: Error()
          }), PotionType) : PotionType).Poison) {
            this.gameOver();
          } else {
            (_crd && ScoreManager === void 0 ? (_reportPossibleCrUseOfScoreManager({
              error: Error()
            }), ScoreManager) : ScoreManager).instance.addScore(potion.score);
          }

          potion.returnToPool();
        }

        pauseGame() {
          if (this._currentState !== GameState.Playing) return;
          this.setState(GameState.Paused);
        }

        resumeGame() {
          if (this._currentState !== GameState.Paused) return;
          this.setState(GameState.Playing);
        }

        goToHome() {
          var _this$spawner2, _this$pot3;

          (_this$spawner2 = this.spawner) == null ? void 0 : _this$spawner2.resetSpawner();
          (_this$pot3 = this.pot) == null ? void 0 : _this$pot3.resetPot();
          (_crd && ScoreManager === void 0 ? (_reportPossibleCrUseOfScoreManager({
            error: Error()
          }), ScoreManager) : ScoreManager).instance.resetScore();
          this._currentMisses = 0;
          this.emitMissChanged();
          this.setState(GameState.MainMenu);
        }

        gameOver() {
          if (this._currentState !== GameState.Playing) return;
          (_crd && ScoreManager === void 0 ? (_reportPossibleCrUseOfScoreManager({
            error: Error()
          }), ScoreManager) : ScoreManager).instance.checkForHighScore();
          this.setState(GameState.GameOver);
        }

        retryGame() {
          var _this$spawner3, _this$pot4;

          (_this$spawner3 = this.spawner) == null ? void 0 : _this$spawner3.resetSpawner();
          (_this$pot4 = this.pot) == null ? void 0 : _this$pot4.resetPot();
          (_crd && ScoreManager === void 0 ? (_reportPossibleCrUseOfScoreManager({
            error: Error()
          }), ScoreManager) : ScoreManager).instance.resetScore();
          this.startGame();
        }

        getCurrentMisses() {
          return this._currentMisses;
        }

        onMissChanged(listener) {
          this.missListeners.add(listener);
        }

        offMissChanged(listener) {
          this.missListeners.delete(listener);
        }

        emitMissChanged() {
          this.missListeners.forEach(listener => listener(this._currentMisses));
        }

        setState(state) {
          this._currentState = state;
        }

      }, _class3.instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spawner", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pot", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "maxMisses", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c9d6222f2f3f1df5ccd00fafa136d56a368491ea.js.map