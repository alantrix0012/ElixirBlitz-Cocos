System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GTween, GearBase, GearXY, _crd;

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

  _export("GearXY", void 0);

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

      _cclegacy._RF.push({}, "433cadbZ79B1pknKhbGOmgN", "GearXY", undefined);

      _export("GearXY", GearXY = class GearXY extends (_crd && GearBase === void 0 ? (_reportPossibleCrUseOfGearBase({
        error: Error()
      }), GearBase) : GearBase) {
        constructor(...args) {
          super(...args);
          this.positionsInPercent = void 0;
          this._storage = void 0;
          this._default = void 0;
        }

        init() {
          this._default = {
            x: this._owner.x,
            y: this._owner.y,
            px: this._owner.x / this._owner.parent.width,
            py: this._owner.y / this._owner.parent.height
          };
          this._storage = {};
        }

        addStatus(pageId, buffer) {
          var gv;
          if (!pageId) gv = this._default;else {
            gv = {};
            this._storage[pageId] = gv;
          }
          gv.x = buffer.readInt();
          gv.y = buffer.readInt();
        }

        addExtStatus(pageId, buffer) {
          var gv;
          if (!pageId) gv = this._default;else gv = this._storage[pageId];
          gv.px = buffer.readFloat();
          gv.py = buffer.readFloat();
        }

        apply() {
          var pt = this._storage[this._controller.selectedPageId] || this._default;
          var ex;
          var ey;

          if (this.positionsInPercent && this._owner.parent) {
            ex = pt.px * this._owner.parent.width;
            ey = pt.py * this._owner.parent.height;
          } else {
            ex = pt.x;
            ey = pt.y;
          }

          if (this.allowTween) {
            if (this._tweenConfig._tweener) {
              if (this._tweenConfig._tweener.endValue.x != ex || this._tweenConfig._tweener.endValue.y != ey) {
                this._tweenConfig._tweener.kill(true);

                this._tweenConfig._tweener = null;
              } else return;
            }

            var ox = this._owner.x;
            var oy = this._owner.y;

            if (ox != ex || oy != ey) {
              if (this._owner.checkGearController(0, this._controller)) this._tweenConfig._displayLockToken = this._owner.addDisplayLock();
              this._tweenConfig._tweener = (_crd && GTween === void 0 ? (_reportPossibleCrUseOfGTween({
                error: Error()
              }), GTween) : GTween).to2(ox, oy, ex, ey, this._tweenConfig.duration).setDelay(this._tweenConfig.delay).setEase(this._tweenConfig.easeType).setTarget(this).onUpdate(this.__tweenUpdate, this).onComplete(this.__tweenComplete, this);
            }
          } else {
            this._owner._gearLocked = true;

            this._owner.setPosition(ex, ey);

            this._owner._gearLocked = false;
          }
        }

        __tweenUpdate(tweener) {
          this._owner._gearLocked = true;

          this._owner.setPosition(tweener.value.x, tweener.value.y);

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
          var pt = this._storage[this._controller.selectedPageId];

          if (!pt) {
            pt = {};
            this._storage[this._controller.selectedPageId] = pt;
          }

          pt.x = this._owner.x;
          pt.y = this._owner.y;
          pt.px = this._owner.x / this._owner.parent.width;
          pt.py = this._owner.y / this._owner.parent.height;
        }

        updateFromRelations(dx, dy) {
          if (this._controller == null || this._storage == null || this.positionsInPercent) return;

          for (var key in this._storage) {
            var pt = this._storage[key];
            pt.x += dx;
            pt.y += dy;
          }

          this._default.x += dx;
          this._default.y += dy;
          this.updateState();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9d6a30d37c88fb353684d7f16d4463656b6c9de3.js.map