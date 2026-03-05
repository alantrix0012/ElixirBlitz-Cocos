System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GearBase, GearText, _crd;

  function _reportPossibleCrUseOfByteBuffer(extras) {
    _reporterNs.report("ByteBuffer", "../utils/ByteBuffer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGearBase(extras) {
    _reporterNs.report("GearBase", "./GearBase", _context.meta, extras);
  }

  _export("GearText", void 0);

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

      _cclegacy._RF.push({}, "e85c9EDOTBJJ7eMRLqTd+pn", "GearText", undefined);

      _export("GearText", GearText = class GearText extends (_crd && GearBase === void 0 ? (_reportPossibleCrUseOfGearBase({
        error: Error()
      }), GearBase) : GearBase) {
        constructor() {
          super(...arguments);
          this._storage = void 0;
          this._default = void 0;
        }

        init() {
          this._default = this._owner.text;
          this._storage = {};
        }

        addStatus(pageId, buffer) {
          if (pageId == null) this._default = buffer.readS();else this._storage[pageId] = buffer.readS();
        }

        apply() {
          this._owner._gearLocked = true;
          var data = this._storage[this._controller.selectedPageId];
          if (data !== undefined) this._owner.text = data;else this._owner.text = this._default;
          this._owner._gearLocked = false;
        }

        updateState() {
          this._storage[this._controller.selectedPageId] = this._owner.text;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b14a9d679ca059ee6ce0b677a2226f28fe250277.js.map