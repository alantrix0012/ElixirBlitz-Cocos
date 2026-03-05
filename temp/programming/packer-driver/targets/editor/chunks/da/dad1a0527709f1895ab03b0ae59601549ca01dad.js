System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Margin, _crd;

  _export("Margin", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e75e13OaWJKTYp4ZXCTZBkT", "Margin", undefined);

      _export("Margin", Margin = class Margin {
        constructor() {
          this.left = 0;
          this.right = 0;
          this.top = 0;
          this.bottom = 0;
        }

        copy(source) {
          this.top = source.top;
          this.bottom = source.bottom;
          this.left = source.left;
          this.right = source.right;
        }

        isNone() {
          return this.left == 0 && this.right == 0 && this.top == 0 && this.bottom == 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dad1a0527709f1895ab03b0ae59601549ca01dad.js.map