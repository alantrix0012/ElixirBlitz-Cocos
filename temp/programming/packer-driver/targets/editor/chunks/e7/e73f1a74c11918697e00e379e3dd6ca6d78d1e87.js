System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, PixelHitTest, PixelHitTestData, ChildHitArea, _crd;

  function _reportPossibleCrUseOfGObject(extras) {
    _reporterNs.report("GObject", "../GObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfByteBuffer(extras) {
    _reporterNs.report("ByteBuffer", "../utils/ByteBuffer", _context.meta, extras);
  }

  _export({
    PixelHitTest: void 0,
    PixelHitTestData: void 0,
    ChildHitArea: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "41d0fhYAd5EIIvxe7KQYqYT", "HitTest", undefined);

      __checkObsolete__(['Vec2']);

      _export("PixelHitTest", PixelHitTest = class PixelHitTest {
        constructor(data, offsetX, offsetY) {
          this._data = void 0;
          this.offsetX = void 0;
          this.offsetY = void 0;
          this.scaleX = void 0;
          this.scaleY = void 0;
          this._data = data;
          this.offsetX = offsetX == undefined ? 0 : offsetX;
          this.offsetY = offsetY == undefined ? 0 : offsetY;
          this.scaleX = 1;
          this.scaleY = 1;
        }

        hitTest(pt) {
          let x = Math.floor((pt.x / this.scaleX - this.offsetX) * this._data.scale);
          let y = Math.floor((pt.y / this.scaleY - this.offsetY) * this._data.scale);
          if (x < 0 || y < 0 || x >= this._data.pixelWidth) return false;
          var pos = y * this._data.pixelWidth + x;
          var pos2 = Math.floor(pos / 8);
          var pos3 = pos % 8;
          if (pos2 >= 0 && pos2 < this._data.pixels.length) return (this._data.pixels[pos2] >> pos3 & 0x1) == 1;else return false;
        }

      });

      _export("PixelHitTestData", PixelHitTestData = class PixelHitTestData {
        constructor(ba) {
          this.pixelWidth = void 0;
          this.scale = void 0;
          this.pixels = void 0;
          ba.readInt();
          this.pixelWidth = ba.readInt();
          this.scale = 1 / ba.readByte();
          this.pixels = ba.readBuffer().data;
        }

      });

      _export("ChildHitArea", ChildHitArea = class ChildHitArea {
        constructor(child) {
          this._child = void 0;
          this._child = child;
        }

        hitTest(pt, globalPt) {
          return this._child.hitTest(globalPt, false) != null;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e73f1a74c11918697e00e379e3dd6ca6d78d1e87.js.map