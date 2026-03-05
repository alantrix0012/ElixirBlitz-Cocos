System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Sprite, Image, ObjectPropID, GObject, GImage, _crd;

  function _reportPossibleCrUseOfImage(extras) {
    _reporterNs.report("Image", "./display/Image", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFlipType(extras) {
    _reporterNs.report("FlipType", "./FieldTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFillMethod(extras) {
    _reporterNs.report("FillMethod", "./FieldTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFillOrigin(extras) {
    _reporterNs.report("FillOrigin", "./FieldTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectPropID(extras) {
    _reporterNs.report("ObjectPropID", "./FieldTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGObject(extras) {
    _reporterNs.report("GObject", "./GObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPackageItem(extras) {
    _reporterNs.report("PackageItem", "./PackageItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfByteBuffer(extras) {
    _reporterNs.report("ByteBuffer", "./utils/ByteBuffer", _context.meta, extras);
  }

  _export("GImage", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      Image = _unresolved_2.Image;
    }, function (_unresolved_3) {
      ObjectPropID = _unresolved_3.ObjectPropID;
    }, function (_unresolved_4) {
      GObject = _unresolved_4.GObject;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f7d82wMXMJNu6EQ8+bVguq+", "GImage", undefined);

      __checkObsolete__(['Sprite', 'Color', 'SpriteFrame']);

      _export("GImage", GImage = class GImage extends (_crd && GObject === void 0 ? (_reportPossibleCrUseOfGObject({
        error: Error()
      }), GObject) : GObject) {
        constructor() {
          super();
          this._content = void 0;
          this._node.name = "GImage";
          this._touchDisabled = true;
          this._content = this._node.addComponent(_crd && Image === void 0 ? (_reportPossibleCrUseOfImage({
            error: Error()
          }), Image) : Image);
          this._content.sizeMode = Sprite.SizeMode.CUSTOM;
          this._content.trim = false;
        }

        get color() {
          return this._content.color;
        }

        set color(value) {
          this._content.color = value;
          this.updateGear(4);
        }

        get flip() {
          return this._content.flip;
        }

        set flip(value) {
          this._content.flip = value;
        }

        get fillMethod() {
          return this._content.fillMethod;
        }

        set fillMethod(value) {
          this._content.fillMethod = value;
        }

        get fillOrigin() {
          return this._content.fillOrigin;
        }

        set fillOrigin(value) {
          this._content.fillOrigin = value;
        }

        get fillClockwise() {
          return this._content.fillClockwise;
        }

        set fillClockwise(value) {
          this._content.fillClockwise = value;
        }

        get fillAmount() {
          return this._content.fillAmount;
        }

        set fillAmount(value) {
          this._content.fillAmount = value;
        }

        constructFromResource() {
          var contentItem = this.packageItem.getBranch();
          this.sourceWidth = contentItem.width;
          this.sourceHeight = contentItem.height;
          this.initWidth = this.sourceWidth;
          this.initHeight = this.sourceHeight;
          this.setSize(this.sourceWidth, this.sourceHeight);
          contentItem = contentItem.getHighResolution();
          contentItem.load();
          if (contentItem.scale9Grid) this._content.type = Sprite.Type.SLICED;else if (contentItem.scaleByTile) this._content.type = Sprite.Type.TILED;
          this._content.spriteFrame = contentItem.asset;
        }

        handleGrayedChanged() {
          this._content.grayscale = this._grayed;
        }

        getProp(index) {
          if (index == (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
            error: Error()
          }), ObjectPropID) : ObjectPropID).Color) return this.color;else return super.getProp(index);
        }

        setProp(index, value) {
          if (index == (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
            error: Error()
          }), ObjectPropID) : ObjectPropID).Color) this.color = value;else super.setProp(index, value);
        }

        setup_beforeAdd(buffer, beginPos) {
          super.setup_beforeAdd(buffer, beginPos);
          buffer.seek(beginPos, 5);
          if (buffer.readBool()) this.color = buffer.readColor();
          this._content.flip = buffer.readByte();
          this._content.fillMethod = buffer.readByte();

          if (this._content.fillMethod != 0) {
            this._content.fillOrigin = buffer.readByte();
            this._content.fillClockwise = buffer.readBool();
            this._content.fillAmount = buffer.readFloat();
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5c3fb7dc60545b974e14b061a4fc2aba0ae53132.js.map