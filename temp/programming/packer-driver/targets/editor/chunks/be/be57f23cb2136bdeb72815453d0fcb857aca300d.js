System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GearBase, GearDisplay, _crd;

  function _reportPossibleCrUseOfGearBase(extras) {
    _reporterNs.report("GearBase", "./GearBase", _context.meta, extras);
  }

  _export("GearDisplay", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GearBase = _unresolved_2.GearBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fe0d5o8JwJFLpYgBY2DmA/p", "GearDisplay", undefined);

      _export("GearDisplay", GearDisplay = class GearDisplay extends (_crd && GearBase === void 0 ? (_reportPossibleCrUseOfGearBase({
        error: Error()
      }), GearBase) : GearBase) {
        constructor(...args) {
          super(...args);
          this.pages = null;
          this._visible = 0;
          this._displayLockToken = 1;
        }

        init() {
          this.pages = null;
        }

        addLock() {
          this._visible++;
          return this._displayLockToken;
        }

        releaseLock(token) {
          if (token == this._displayLockToken) this._visible--;
        }

        get connected() {
          return this._controller == null || this._visible > 0;
        }

        apply() {
          this._displayLockToken++;
          if (this._displayLockToken <= 0) this._displayLockToken = 1;
          if (this.pages == null || this.pages.length == 0 || this.pages.indexOf(this._controller.selectedPageId) != -1) this._visible = 1;else this._visible = 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=be57f23cb2136bdeb72815453d0fcb857aca300d.js.map