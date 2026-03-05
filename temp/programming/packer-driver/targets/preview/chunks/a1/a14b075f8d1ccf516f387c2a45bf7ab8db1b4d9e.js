System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Prefab, instantiate, Vec3, view, Potion, GameManager, GameState, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _dec3, _dec4, _class4, _class5, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, WeightedPotionType, PotionSpawner;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPotion(extras) {
    _reporterNs.report("Potion", "./Potion", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./Managers/GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "./Managers/GameManager", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Vec3 = _cc.Vec3;
      view = _cc.view;
    }, function (_unresolved_2) {
      Potion = _unresolved_2.Potion;
    }, function (_unresolved_3) {
      GameManager = _unresolved_3.GameManager;
      GameState = _unresolved_3.GameState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c7b2dwJhtdGLItyPIRssndo", "PotionSpawner", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Prefab', 'instantiate', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("WeightedPotionType", WeightedPotionType = (_dec = ccclass("WeightedPotionType"), _dec2 = property(Prefab), _dec(_class = (_class2 = class WeightedPotionType {
        constructor() {
          _initializerDefineProperty(this, "prefab", _descriptor, this);

          _initializerDefineProperty(this, "spawnPercentage", _descriptor2, this);

          this.pool = [];
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spawnPercentage", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      _export("PotionSpawner", PotionSpawner = (_dec3 = ccclass("PotionSpawner"), _dec4 = property([WeightedPotionType]), _dec3(_class4 = (_class5 = class PotionSpawner extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "weightedTypes", _descriptor3, this);

          _initializerDefineProperty(this, "poolSizePerType", _descriptor4, this);

          _initializerDefineProperty(this, "spawnMinInterval", _descriptor5, this);

          _initializerDefineProperty(this, "spawnMaxInterval", _descriptor6, this);

          _initializerDefineProperty(this, "speedIncreaseInterval", _descriptor7, this);

          _initializerDefineProperty(this, "speedIncreaseAmount", _descriptor8, this);

          this.laneX = [0, 0, 0];
          this.timer = 0;
          this.nextSpawnTime = 1;
          this.currentSpeedBonus = 0;
          this.initialized = false;
          this.speedTimer = 0;
        }

        update(dt) {
          if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).instance.currentState !== (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).Playing) return;
          this.timer += dt;
          this.speedTimer += dt;

          if (this.timer >= this.nextSpawnTime) {
            this.spawnPotion();
            this.timer = 0;
            this.nextSpawnTime = this.randomRange(this.spawnMinInterval, this.spawnMaxInterval);
          }

          if (this.speedTimer >= this.speedIncreaseInterval) {
            this.speedTimer = 0;
            this.currentSpeedBonus = Math.min(this.currentSpeedBonus + this.speedIncreaseAmount, 4);
            this.applySpeedBonusToActive();
          }
        }

        initializeSpawner() {
          this.nextSpawnTime = this.randomRange(this.spawnMinInterval, this.spawnMaxInterval);

          if (!this.initialized) {
            this.calculateLanePositions();
            this.createPools();
            this.initialized = true;
          }

          this.timer = 0;
          this.speedTimer = 0;
          this.currentSpeedBonus = 0;
        }

        resetSpawner() {
          this.timer = 0;

          for (var type of this.weightedTypes) {
            for (var potion of type.pool) {
              potion.node.active = false;
            }
          }
        }

        returnToPool(potion) {
          potion.node.active = false;
        }

        createPools() {
          for (var type of this.weightedTypes) {
            type.pool = [];

            for (var i = 0; i < this.poolSizePerType; i += 1) {
              if (!type.prefab) continue;
              var node = instantiate(type.prefab);
              this.node.addChild(node);
              var potion = node.getComponent(_crd && Potion === void 0 ? (_reportPossibleCrUseOfPotion({
                error: Error()
              }), Potion) : Potion);
              if (!potion) continue;
              potion.initialize(this);
              node.active = false;
              type.pool.push(potion);
            }
          }
        }

        spawnPotion() {
          var selected = this.getWeightedPotionType();
          if (!selected) return;
          var potion = selected.pool.find(p => !p.node.active);
          if (!potion) return;
          var lane = Math.floor(Math.random() * 3);
          potion.node.setPosition(new Vec3(this.laneX[lane], this.getSpawnY(), 0));
          potion.setSpeedBonus(this.currentSpeedBonus);
          potion.node.active = true;
        }

        getWeightedPotionType() {
          var totalWeight = this.weightedTypes.reduce((s, t) => s + t.spawnPercentage, 0);
          if (totalWeight <= 0) return null;
          var r = Math.random() * totalWeight;
          var current = 0;

          for (var type of this.weightedTypes) {
            current += type.spawnPercentage;
            if (r < current) return type;
          }

          return null;
        }

        applySpeedBonusToActive() {
          for (var type of this.weightedTypes) {
            for (var p of type.pool) {
              if (p.node.active) p.setSpeedBonus(this.currentSpeedBonus);
            }
          }
        }

        calculateLanePositions() {
          var width = view.getVisibleSize().width;
          this.laneX[0] = -width * 0.3;
          this.laneX[1] = 0;
          this.laneX[2] = width * 0.3;
        }

        getSpawnY() {
          return view.getVisibleSize().height * 0.6;
        }

        randomRange(min, max) {
          return min + Math.random() * (max - min);
        }

      }, (_descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "weightedTypes", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "poolSizePerType", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "spawnMinInterval", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class5.prototype, "spawnMaxInterval", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class5.prototype, "speedIncreaseInterval", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class5.prototype, "speedIncreaseAmount", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      })), _class5)) || _class4));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a14b075f8d1ccf516f387c2a45bf7ab8db1b4d9e.js.map