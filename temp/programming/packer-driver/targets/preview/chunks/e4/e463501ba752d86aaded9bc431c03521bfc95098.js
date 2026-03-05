System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GTween, GearBase, GearLook, _crd;

  function _reportPossibleCrUseOfGTween(extras) {
    _reporterNs.report("GTween", "../tween/GTween", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGTweener(extras) {
    _reporterNs.report("GTweener", "../tween/GTweener", _context.meta, extras);
  }

  function _reportPossibleCrUseOfByteBuffer(extras) {
    _reporterNs.report("ByteBuffer", "../utils/ByteBuffer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGearBase(extras) {
    _reporterNs.report("GearBase", "./GearBase", _context.meta, extras);
  }

  _export("GearLook", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GTween = _unresolved_2.GTween;
    }, function (_unresolved_3) {
      GearBase = _unresolved_3.GearBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "387dbNc4BZKw4gVIRMhD98z", "GearLook", undefined);

      _export("GearLook", GearLook = class GearLook extends (_crd && GearBase === void 0 ? (_reportPossibleCrUseOfGearBase({
        error: Error()
      }), GearBase) : GearBase) {
        constructor() {
          super(...arguments);
          this._storage = void 0;
          this._default = void 0;
        }

        init() {
          this._default = {
            alpha: this._owner.alpha,
            rotation: this._owner.rotation,
            grayed: this._owner.grayed,
            touchable: this._owner.touchable
          };
          this._storage = {};
        }

        addStatus(pageId, buffer) {
          var gv;
          if (!pageId) gv = this._default;else {
            gv = {};
            this._storage[pageId] = gv;
          }
          gv.alpha = buffer.readFloat();
          gv.rotation = buffer.readFloat();
          gv.grayed = buffer.readBool();
          gv.touchable = buffer.readBool();
        }

        apply() {
          var gv = this._storage[this._controller.selectedPageId] || this._default;

          if (this.allowTween) {
            this._owner._gearLocked = true;
            this._owner.grayed = gv.grayed;
            this._owner.touchable = gv.touchable;
            this._owner._gearLocked = false;

            if (this._tweenConfig._tweener) {
              if (this._tweenConfig._tweener.endValue.x != gv.alpha || this._tweenConfig._tweener.endValue.y != gv.rotation) {
                this._tweenConfig._tweener.kill(true);

                this._tweenConfig._tweener = null;
              } else return;
            }

            var a = gv.alpha != this._owner.alpha;
            var b = gv.rotation != this._owner.rotation;

            if (a || b) {
              if (this._owner.checkGearController(0, this._controller)) this._tweenConfig._displayLockToken = this._owner.addDisplayLock();
              this._tweenConfig._tweener = (_crd && GTween === void 0 ? (_reportPossibleCrUseOfGTween({
                error: Error()
              }), GTween) : GTween).to2(this._owner.alpha, this._owner.rotation, gv.alpha, gv.rotation, this._tweenConfig.duration).setDelay(this._tweenConfig.delay).setEase(this._tweenConfig.easeType).setUserData((a ? 1 : 0) + (b ? 2 : 0)).setTarget(this).onUpdate(this.__tweenUpdate, this).onComplete(this.__tweenComplete, this);
            }
          } else {
            this._owner._gearLocked = true;
            this._owner.grayed = gv.grayed;
            this._owner.alpha = gv.alpha;
            this._owner.rotation = gv.rotation;
            this._owner.touchable = gv.touchable;
            this._owner._gearLocked = false;
          }
        }

        __tweenUpdate(tweener) {
          var flag = tweener.userData;
          this._owner._gearLocked = true;
          if ((flag & 1) != 0) this._owner.alpha = tweener.value.x;
          if ((flag & 2) != 0) this._owner.rotation = tweener.value.y;
          this._owner._gearLocked = false;
        }

        __tweenComplete() {
          if (this._tweenConfig._displayLockToken != 0) {
            this._owner.releaseDisplayLock(this._tweenConfig._displayLockToken);

            this._tweenConfig._displayLockToken = 0;
          }

          this._tweenConfig._tweener = null;
        }

        updateState() {
          var gv = this._storage[this._controller.selectedPageId];

          if (!gv) {
            gv = {};
            this._storage[this._controller.selectedPageId] = gv;
          }

          gv.alpha = this._owner.alpha;
          gv.rotation = this._owner.rotation;
          gv.grayed = this._owner.grayed;
          gv.touchable = this._owner.touchable;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e463501ba752d86aaded9bc431c03521bfc95098.js.map