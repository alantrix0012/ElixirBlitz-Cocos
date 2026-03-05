System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, ColorMatrix, _crd, IDENTITY_MATRIX, LENGTH, LUMA_R, LUMA_G, LUMA_B;

  _export("ColorMatrix", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "280dclHK3tHqaiovH0J6NbQ", "ColorMatrix", undefined);

      _export("ColorMatrix", ColorMatrix = class ColorMatrix {
        constructor(p_brightness, p_contrast, p_saturation, p_hue) {
          this.matrix = void 0;
          this.matrix = new Array(LENGTH);
          this.reset();
          if (p_brightness !== undefined || p_contrast !== undefined || p_saturation !== undefined || p_hue !== undefined) this.adjustColor(p_brightness, p_contrast, p_saturation, p_hue);
        }

        reset() {
          for (var i = 0; i < LENGTH; i++) {
            this.matrix[i] = IDENTITY_MATRIX[i];
          }
        }

        invert() {
          this.multiplyMatrix([-1, 0, 0, 0, 255, 0, -1, 0, 0, 255, 0, 0, -1, 0, 255, 0, 0, 0, 1, 0]);
        }

        adjustColor(p_brightness, p_contrast, p_saturation, p_hue) {
          this.adjustHue(p_hue || 0);
          this.adjustContrast(p_contrast || 0);
          this.adjustBrightness(p_brightness || 0);
          this.adjustSaturation(p_saturation || 0);
        }

        adjustBrightness(p_val) {
          p_val = this.cleanValue(p_val, 1) * 255;
          this.multiplyMatrix([1, 0, 0, 0, p_val, 0, 1, 0, 0, p_val, 0, 0, 1, 0, p_val, 0, 0, 0, 1, 0]);
        }

        adjustContrast(p_val) {
          p_val = this.cleanValue(p_val, 1);
          var s = p_val + 1;
          var o = 128 * (1 - s);
          this.multiplyMatrix([s, 0, 0, 0, o, 0, s, 0, 0, o, 0, 0, s, 0, o, 0, 0, 0, 1, 0]);
        }

        adjustSaturation(p_val) {
          p_val = this.cleanValue(p_val, 1);
          p_val += 1;
          var invSat = 1 - p_val;
          var invLumR = invSat * LUMA_R;
          var invLumG = invSat * LUMA_G;
          var invLumB = invSat * LUMA_B;
          this.multiplyMatrix([invLumR + p_val, invLumG, invLumB, 0, 0, invLumR, invLumG + p_val, invLumB, 0, 0, invLumR, invLumG, invLumB + p_val, 0, 0, 0, 0, 0, 1, 0]);
        }

        adjustHue(p_val) {
          p_val = this.cleanValue(p_val, 1);
          p_val *= Math.PI;
          var cos = Math.cos(p_val);
          var sin = Math.sin(p_val);
          this.multiplyMatrix([LUMA_R + cos * (1 - LUMA_R) + sin * -LUMA_R, LUMA_G + cos * -LUMA_G + sin * -LUMA_G, LUMA_B + cos * -LUMA_B + sin * (1 - LUMA_B), 0, 0, LUMA_R + cos * -LUMA_R + sin * 0.143, LUMA_G + cos * (1 - LUMA_G) + sin * 0.14, LUMA_B + cos * -LUMA_B + sin * -0.283, 0, 0, LUMA_R + cos * -LUMA_R + sin * -(1 - LUMA_R), LUMA_G + cos * -LUMA_G + sin * LUMA_G, LUMA_B + cos * (1 - LUMA_B) + sin * LUMA_B, 0, 0, 0, 0, 0, 1, 0]);
        }

        concat(p_matrix) {
          if (p_matrix.length != LENGTH) {
            return;
          }

          this.multiplyMatrix(p_matrix);
        }

        clone() {
          var result = new ColorMatrix();
          result.copyMatrix(this.matrix);
          return result;
        }

        copyMatrix(p_matrix) {
          var l = LENGTH;

          for (var i = 0; i < l; i++) {
            this.matrix[i] = p_matrix[i];
          }
        }

        multiplyMatrix(p_matrix) {
          var col = [];
          var i = 0;

          for (var y = 0; y < 4; ++y) {
            for (var x = 0; x < 5; ++x) {
              col[i + x] = p_matrix[i] * this.matrix[x] + p_matrix[i + 1] * this.matrix[x + 5] + p_matrix[i + 2] * this.matrix[x + 10] + p_matrix[i + 3] * this.matrix[x + 15] + (x == 4 ? p_matrix[i + 4] : 0);
            }

            i += 5;
          }

          this.copyMatrix(col);
        }

        cleanValue(p_val, p_limit) {
          return Math.min(p_limit, Math.max(-p_limit, p_val));
        }

      }); // identity matrix constant:


      IDENTITY_MATRIX = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
      LENGTH = IDENTITY_MATRIX.length;
      LUMA_R = 0.299;
      LUMA_G = 0.587;
      LUMA_B = 0.114;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=84c533fd95e46cac0d098b854ce853dce0812f1c.js.map