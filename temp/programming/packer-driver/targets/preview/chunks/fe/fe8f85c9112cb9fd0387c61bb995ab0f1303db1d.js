System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GearBase, ObjectPropID, GearAnimation, _crd;

  function _reportPossibleCrUseOfGearBase(extras) {
    _reporterNs.report("GearBase", "./GearBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfByteBuffer(extras) {
    _reporterNs.report("ByteBuffer", "../utils/ByteBuffer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectPropID(extras) {
    _reporterNs.report("ObjectPropID", "../FieldTypes", _context.meta, extras);
  }

  _export("GearAnimation", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GearBase = _unresolved_2.GearBase;
    }, function (_unresolved_3) {
      ObjectPropID = _unresolved_3.ObjectPropID;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e89b07hk4ZGpqQdqEyWY9i8", "GearAnimation", undefined);

      _export("GearAnimation", GearAnimation = class GearAnimation extends (_crd && GearBase === void 0 ? (_reportPossibleCrUseOfGearBase({
        error: Error()
      }), GearBase) : GearBase) {
        constructor() {
          super(...arguments);
          this._storage = void 0;
          this._default = void 0;
        }

        init() {
          this._default = {
            playing: this._owner.getProp((_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).Playing),
            frame: this._owner.getProp((_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).Frame)
          };
          this._storage = {};
        }

        addStatus(pageId, buffer) {
          var gv;
          if (!pageId) gv = this._default;else {
            gv = {};
            this._storage[pageId] = gv;
          }
          gv.playing = buffer.readBool();
          gv.frame = buffer.readInt();
        }

        apply() {
          this._owner._gearLocked = true;
          var gv = this._storage[this._controller.selectedPageId] || this._default;

          this._owner.setProp((_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
            error: Error()
          }), ObjectPropID) : ObjectPropID).Playing, gv.playing);

          this._owner.setProp((_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
            error: Error()
          }), ObjectPropID) : ObjectPropID).Frame, gv.frame);

          this._owner._gearLocked = false;
        }

        updateState() {
          var gv = this._storage[this._controller.selectedPageId];

          if (!gv) {
            gv = {};
            this._storage[this._controller.selectedPageId] = gv;
          }

          gv.playing = this._owner.getProp((_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
            error: Error()
          }), ObjectPropID) : ObjectPropID).Playing);
          gv.frame = this._owner.getProp((_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
            error: Error()
          }), ObjectPropID) : ObjectPropID).Frame);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fe8f85c9112cb9fd0387c61bb995ab0f1303db1d.js.map