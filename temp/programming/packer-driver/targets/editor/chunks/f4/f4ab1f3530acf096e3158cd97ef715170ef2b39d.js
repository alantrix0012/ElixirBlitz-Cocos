System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ObjectPropID, GearBase, GearColor, _crd;

  function _reportPossibleCrUseOfObjectPropID(extras) {
    _reporterNs.report("ObjectPropID", "../FieldTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfByteBuffer(extras) {
    _reporterNs.report("ByteBuffer", "../utils/ByteBuffer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGearBase(extras) {
    _reporterNs.report("GearBase", "./GearBase", _context.meta, extras);
  }

  _export("GearColor", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      ObjectPropID = _unresolved_2.ObjectPropID;
    }, function (_unresolved_3) {
      GearBase = _unresolved_3.GearBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d36f6iG+ctA4rWRtXJU8xjA", "GearColor", undefined);

      __checkObsolete__(['Color']);

      _export("GearColor", GearColor = class GearColor extends (_crd && GearBase === void 0 ? (_reportPossibleCrUseOfGearBase({
        error: Error()
      }), GearBase) : GearBase) {
        constructor(...args) {
          super(...args);
          this._storage = void 0;
          this._default = void 0;
        }

        init() {
          this._default = {
            color: this._owner.getProp((_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).Color),
            strokeColor: this._owner.getProp((_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).OutlineColor)
          };
          this._storage = {};
        }

        addStatus(pageId, buffer) {
          var gv;
          if (!pageId) gv = this._default;else {
            gv = {};
            this._storage[pageId] = gv;
          }
          gv.color = buffer.readColor();
          gv.strokeColor = buffer.readColor();
        }

        apply() {
          this._owner._gearLocked = true;
          var gv = this._storage[this._controller.selectedPageId] || this._default;

          this._owner.setProp((_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
            error: Error()
          }), ObjectPropID) : ObjectPropID).Color, gv.color);

          this._owner.setProp((_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
            error: Error()
          }), ObjectPropID) : ObjectPropID).OutlineColor, gv.strokeColor);

          this._owner._gearLocked = false;
        }

        updateState() {
          var gv = this._storage[this._controller.selectedPageId];

          if (!gv) {
            gv = {};
            this._storage[this._controller.selectedPageId] = gv;
          }

          gv.color = this._owner.getProp((_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
            error: Error()
          }), ObjectPropID) : ObjectPropID).Color);
          gv.strokeColor = this._owner.getProp((_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
            error: Error()
          }), ObjectPropID) : ObjectPropID).OutlineColor);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f4ab1f3530acf096e3158cd97ef715170ef2b39d.js.map