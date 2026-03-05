System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, UIContentScaler, PackageItem, _crd;

  function _reportPossibleCrUseOfFrame(extras) {
    _reporterNs.report("Frame", "./display/MovieClip", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPixelHitTestData(extras) {
    _reporterNs.report("PixelHitTestData", "./event/HitTest", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPackageItemType(extras) {
    _reporterNs.report("PackageItemType", "./FieldTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectType(extras) {
    _reporterNs.report("ObjectType", "./FieldTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIContentScaler(extras) {
    _reporterNs.report("UIContentScaler", "./UIContentScaler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPackage(extras) {
    _reporterNs.report("UIPackage", "./UIPackage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfByteBuffer(extras) {
    _reporterNs.report("ByteBuffer", "./utils/ByteBuffer", _context.meta, extras);
  }

  _export("PackageItem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      UIContentScaler = _unresolved_2.UIContentScaler;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "684058+pytAzavl9A7Tdc5O", "PackageItem", undefined);

      __checkObsolete__(['Asset', 'dragonBones', 'Rect', 'Vec2']);

      _export("PackageItem", PackageItem = class PackageItem {
        //image
        //movieclip
        //componenet
        //skeleton
        constructor() {
          this.owner = void 0;
          this.type = void 0;
          this.objectType = void 0;
          this.id = void 0;
          this.name = void 0;
          this.width = 0;
          this.height = 0;
          this.file = void 0;
          this.decoded = void 0;
          this.loading = void 0;
          this.rawData = void 0;
          this.asset = void 0;
          this.highResolution = void 0;
          this.branches = void 0;
          this.scale9Grid = void 0;
          this.scaleByTile = void 0;
          this.tileGridIndice = void 0;
          this.smoothing = void 0;
          this.hitTestData = void 0;
          this.interval = void 0;
          this.repeatDelay = void 0;
          this.swing = void 0;
          this.frames = void 0;
          this.extensionType = void 0;
          this.skeletonAnchor = void 0;
          this.atlasAsset = void 0;
        }

        load() {
          return this.owner.getItemAsset(this);
        }

        getBranch() {
          if (this.branches && this.owner._branchIndex != -1) {
            var itemId = this.branches[this.owner._branchIndex];
            if (itemId) return this.owner.getItemById(itemId);
          }

          return this;
        }

        getHighResolution() {
          if (this.highResolution && (_crd && UIContentScaler === void 0 ? (_reportPossibleCrUseOfUIContentScaler({
            error: Error()
          }), UIContentScaler) : UIContentScaler).scaleLevel > 0) {
            var itemId = this.highResolution[(_crd && UIContentScaler === void 0 ? (_reportPossibleCrUseOfUIContentScaler({
              error: Error()
            }), UIContentScaler) : UIContentScaler).scaleLevel - 1];
            if (itemId) return this.owner.getItemById(itemId);
          }

          return this;
        }

        toString() {
          return this.name;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4ab79a3c168f4aa6c5f5993c73fed7eb44c145b9.js.map