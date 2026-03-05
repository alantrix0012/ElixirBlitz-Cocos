System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, view, UITransform, Collider2D, Contact2DType, PotMovement, GameManager, GameState, _dec, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, PotionType, Potion;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPotionSpawner(extras) {
    _reporterNs.report("PotionSpawner", "./PotionSpawner", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPotMovement(extras) {
    _reporterNs.report("PotMovement", "./PotMovement", _context.meta, extras);
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
      view = _cc.view;
      UITransform = _cc.UITransform;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
    }, function (_unresolved_2) {
      PotMovement = _unresolved_2.PotMovement;
    }, function (_unresolved_3) {
      GameManager = _unresolved_3.GameManager;
      GameState = _unresolved_3.GameState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "60c1d8Lp+JGuIx2BzDkj7Lc", "Potion", undefined);

      __checkObsolete__(['_decorator', 'Component', 'view', 'UITransform', 'Collider2D', 'Contact2DType', 'IPhysics2DContact']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PotionType", PotionType = /*#__PURE__*/function (PotionType) {
        PotionType[PotionType["Potion1"] = 0] = "Potion1";
        PotionType[PotionType["Potion2"] = 1] = "Potion2";
        PotionType[PotionType["Poison"] = 2] = "Poison";
        return PotionType;
      }({}));

      _export("Potion", Potion = (_dec = ccclass("Potion"), _dec(_class = (_class2 = class Potion extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "fallSpeed", _descriptor, this);

          _initializerDefineProperty(this, "score", _descriptor2, this);

          _initializerDefineProperty(this, "potionType", _descriptor3, this);

          this._spawner = null;
          this._baseSpeed = 5;
        }

        onLoad() {
          this._baseSpeed = this.fallSpeed;
          var collider = this.getComponent(Collider2D);
          collider == null ? void 0 : collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }

        initialize(owner) {
          this._spawner = owner;
        }

        update(deltaTime) {
          if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).instance.currentState !== (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).Playing) return;
          var p = this.node.position;
          this.node.setPosition(p.x, p.y - this.fallSpeed * deltaTime, p.z);

          if (this.isBelowScreen()) {
            this.onMissed();
            this.returnToPool();
          }
        }

        setSpeedBonus(bonus) {
          this.fallSpeed = this._baseSpeed + bonus;
        }

        returnToPool() {
          var _this$_spawner;

          (_this$_spawner = this._spawner) == null ? void 0 : _this$_spawner.returnToPool(this);
        }

        onMissed() {
          if (this.potionType !== PotionType.Poison) {
            (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).instance.registerMiss();
          }
        }

        onCollected() {
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).instance.onPotionCollected(this);
        }

        isBelowScreen() {
          var _this$node$parent;

          var h = view.getVisibleSize().height;
          var ui = (_this$node$parent = this.node.parent) == null ? void 0 : _this$node$parent.getComponent(UITransform);
          var world = this.node.worldPosition;
          var local = ui ? ui.convertToNodeSpaceAR(world) : this.node.position;
          return local.y < -h * 0.6;
        }

        onBeginContact(_self, other, _contact) {
          if (other.getComponent(_crd && PotMovement === void 0 ? (_reportPossibleCrUseOfPotMovement({
            error: Error()
          }), PotMovement) : PotMovement)) {
            this.onCollected();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "fallSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "score", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "potionType", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return PotionType.Potion1;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=44fc501e4b2cd79892d9a2eb4f38428f0d0c1310.js.map