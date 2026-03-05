System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, TweenValue, _crd;

  _export("TweenValue", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "03a8eKsS15KKoSwTFmqhzJm", "TweenValue", undefined);

      _export("TweenValue", TweenValue = class TweenValue {
        constructor() {
          this.x = void 0;
          this.y = void 0;
          this.z = void 0;
          this.w = void 0;
          this.x = this.y = this.z = this.w = 0;
        }

        get color() {
          return (this.w << 24) + (this.x << 16) + (this.y << 8) + this.z;
        }

        set color(value) {
          this.x = (value & 0xFF0000) >> 16;
          this.y = (value & 0x00FF00) >> 8;
          this.z = value & 0x0000FF;
          this.w = (value & 0xFF000000) >> 24;
        }

        getField(index) {
          switch (index) {
            case 0:
              return this.x;

            case 1:
              return this.y;

            case 2:
              return this.z;

            case 3:
              return this.w;

            default:
              throw new Error("Index out of bounds: " + index);
          }
        }

        setField(index, value) {
          switch (index) {
            case 0:
              this.x = value;
              break;

            case 1:
              this.y = value;
              break;

            case 2:
              this.z = value;
              break;

            case 3:
              this.w = value;
              break;

            default:
              throw new Error("Index out of bounds: " + index);
          }
        }

        setZero() {
          this.x = this.y = this.z = this.w = 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b7d3d6feb87729778c5a649d37231596678c00d8.js.map