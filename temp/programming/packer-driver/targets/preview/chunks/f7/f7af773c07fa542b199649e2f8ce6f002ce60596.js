System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GearBase, GearDisplay2, _crd;

  function _reportPossibleCrUseOfGearBase(extras) {
    _reporterNs.report("GearBase", "./GearBase", _context.meta, extras);
  }

  _export("GearDisplay2", void 0);

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

      _cclegacy._RF.push({}, "d10e6wcJyFMmLJAL2SVeJUF", "GearDisplay2", undefined);

      _export("GearDisplay2", GearDisplay2 = class GearDisplay2 extends (_crd && GearBase === void 0 ? (_reportPossibleCrUseOfGearBase({
        error: Error()
      }), GearBase) : GearBase) {
        constructor() {
          super(...arguments);
          this.pages = null;
          this.condition = 0;
          this._visible = 0;
        }

        init() {
          this.pages = null;
        }

        apply() {
          if (this.pages == null || this.pages.length == 0 || this.pages.indexOf(this._controller.selectedPageId) != -1) this._visible = 1;else this._visible = 0;
        }

        evaluate(connected) {
          var v = this._controller == null || this._visible > 0;
          if (this.condition == 0) v = v && connected;else v = v || connected;
          return v;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f7af773c07fa542b199649e2f8ce6f002ce60596.js.map