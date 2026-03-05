System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, view, GameManager, GameState, _dec, _class, _class2, _descriptor, _crd, ccclass, property, PotMovement;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

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
      Vec3 = _cc.Vec3;
      view = _cc.view;
    }, function (_unresolved_2) {
      GameManager = _unresolved_2.GameManager;
      GameState = _unresolved_2.GameState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "352cfy8ptpCWZh6A0jtNOP/", "PotMovement", undefined);

      __checkObsolete__(['_decorator', 'Component', 'input', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PotMovement", PotMovement = (_dec = ccclass("PotMovement"), _dec(_class = (_class2 = class PotMovement extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "moveSpeed", _descriptor, this);

          this.positions = [];
          this.currentIndex = 1;
        }

        start() {
          this.calculatePositions();
          this.node.setPosition(this.positions[this.currentIndex]);
        }

        update(dt) {
          if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).instance.currentState !== (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).Playing) return; // if (input.getMouseButtonDown(Input.MouseButton.LEFT)) {
          //     console.log("Mouse Clicked");
          // }

          var current = this.node.position;
          var target = this.positions[this.currentIndex];
          var t = Math.min(1, this.moveSpeed * dt);
          this.node.setPosition(current.x + (target.x - current.x) * t, current.y + (target.y - current.y) * t, current.z);
        }

        handleInput() {
          this.currentIndex = (this.currentIndex + 1) % this.positions.length;
        }

        resetPot() {
          this.currentIndex = 0;
          this.node.setPosition(this.positions[this.currentIndex]);
        }

        calculatePositions() {
          var width = view.getVisibleSize().width;
          var height = view.getVisibleSize().height;
          var y = -height * 0.35;
          this.positions = [new Vec3(-width * 0.3, y, 0), new Vec3(0, y, 0), new Vec3(width * 0.3, y, 0)];
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "moveSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=356027aa1b64cb8588fd51ec2f25a9a03c824779.js.map