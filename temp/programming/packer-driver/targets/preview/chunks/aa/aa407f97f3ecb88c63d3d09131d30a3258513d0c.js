System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Sprite, UITransform, Vec2, FillMethod, FillOrigin, FlipType, Image, _crd;

  function _reportPossibleCrUseOfFillMethod(extras) {
    _reporterNs.report("FillMethod", "../FieldTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFillOrigin(extras) {
    _reporterNs.report("FillOrigin", "../FieldTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFlipType(extras) {
    _reporterNs.report("FlipType", "../FieldTypes", _context.meta, extras);
  }

  _export("Image", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      FillMethod = _unresolved_2.FillMethod;
      FillOrigin = _unresolved_2.FillOrigin;
      FlipType = _unresolved_2.FlipType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6b2bcC8aSpFeJbeRksTzpNI", "Image", undefined);

      __checkObsolete__(['Material', 'Sprite', 'UITransform', 'Vec2']);

      _export("Image", Image = class Image extends Sprite {
        constructor() {
          super();
          this._flip = (_crd && FlipType === void 0 ? (_reportPossibleCrUseOfFlipType({
            error: Error()
          }), FlipType) : FlipType).None;
          this._fillMethod = (_crd && FillMethod === void 0 ? (_reportPossibleCrUseOfFillMethod({
            error: Error()
          }), FillMethod) : FillMethod).None;
          this._fillOrigin = (_crd && FillOrigin === void 0 ? (_reportPossibleCrUseOfFillOrigin({
            error: Error()
          }), FillOrigin) : FillOrigin).Left;
          this._fillAmount = 0;
          this._fillClockwise = void 0;
        }

        get flip() {
          return this._flip;
        }

        set flip(value) {
          if (this._flip != value) {
            this._flip = value;
            var sx = 1,
                sy = 1;
            if (this._flip == (_crd && FlipType === void 0 ? (_reportPossibleCrUseOfFlipType({
              error: Error()
            }), FlipType) : FlipType).Horizontal || this._flip == (_crd && FlipType === void 0 ? (_reportPossibleCrUseOfFlipType({
              error: Error()
            }), FlipType) : FlipType).Both) sx = -1;
            if (this._flip == (_crd && FlipType === void 0 ? (_reportPossibleCrUseOfFlipType({
              error: Error()
            }), FlipType) : FlipType).Vertical || this._flip == (_crd && FlipType === void 0 ? (_reportPossibleCrUseOfFlipType({
              error: Error()
            }), FlipType) : FlipType).Both) sy = -1;

            if (sx != 1 || sy != 1) {
              var uiTrans = this.node.getComponent(UITransform);
              uiTrans.setAnchorPoint(0.5, 0.5);
            }

            this.node.setScale(sx, sy);
          }
        }

        get fillMethod() {
          return this._fillMethod;
        }

        set fillMethod(value) {
          if (this._fillMethod != value) {
            this._fillMethod = value;

            if (this._fillMethod != 0) {
              this.type = Sprite.Type.FILLED;
              if (this._fillMethod <= 3) this.fillType = this._fillMethod - 1;else this.fillType = Sprite.FillType.RADIAL;
              this.fillCenter = new Vec2(0.5, 0.5);
              this.setupFill();
            } else {
              this.type = Sprite.Type.SIMPLE;
            }
          }
        }

        get fillOrigin() {
          return this._fillOrigin;
        }

        set fillOrigin(value) {
          if (this._fillOrigin != value) {
            this._fillOrigin = value;
            if (this._fillMethod != 0) this.setupFill();
          }
        }

        get fillClockwise() {
          return this._fillClockwise;
        }

        set fillClockwise(value) {
          if (this._fillClockwise != value) {
            this._fillClockwise = value;
            if (this._fillMethod != 0) this.setupFill();
          }
        }

        get fillAmount() {
          return this._fillAmount;
        }

        set fillAmount(value) {
          if (this._fillAmount != value) {
            this._fillAmount = value;

            if (this._fillMethod != 0) {
              if (this._fillClockwise) this.fillRange = -this._fillAmount;else this.fillRange = this._fillAmount;
            }
          }
        }

        setupFill() {
          if (this._fillMethod == (_crd && FillMethod === void 0 ? (_reportPossibleCrUseOfFillMethod({
            error: Error()
          }), FillMethod) : FillMethod).Horizontal) {
            this._fillClockwise = this._fillOrigin == (_crd && FillOrigin === void 0 ? (_reportPossibleCrUseOfFillOrigin({
              error: Error()
            }), FillOrigin) : FillOrigin).Right || this._fillOrigin == (_crd && FillOrigin === void 0 ? (_reportPossibleCrUseOfFillOrigin({
              error: Error()
            }), FillOrigin) : FillOrigin).Bottom;
            this.fillStart = this._fillClockwise ? 1 : 0;
          } else if (this._fillMethod == (_crd && FillMethod === void 0 ? (_reportPossibleCrUseOfFillMethod({
            error: Error()
          }), FillMethod) : FillMethod).Vertical) {
            this._fillClockwise = this._fillOrigin == (_crd && FillOrigin === void 0 ? (_reportPossibleCrUseOfFillOrigin({
              error: Error()
            }), FillOrigin) : FillOrigin).Left || this._fillOrigin == (_crd && FillOrigin === void 0 ? (_reportPossibleCrUseOfFillOrigin({
              error: Error()
            }), FillOrigin) : FillOrigin).Top;
            this.fillStart = this._fillClockwise ? 1 : 0;
          } else {
            switch (this._fillOrigin) {
              case (_crd && FillOrigin === void 0 ? (_reportPossibleCrUseOfFillOrigin({
                error: Error()
              }), FillOrigin) : FillOrigin).Right:
                this.fillOrigin = 0;
                break;

              case (_crd && FillOrigin === void 0 ? (_reportPossibleCrUseOfFillOrigin({
                error: Error()
              }), FillOrigin) : FillOrigin).Top:
                this.fillStart = 0.25;
                break;

              case (_crd && FillOrigin === void 0 ? (_reportPossibleCrUseOfFillOrigin({
                error: Error()
              }), FillOrigin) : FillOrigin).Left:
                this.fillStart = 0.5;
                break;

              case (_crd && FillOrigin === void 0 ? (_reportPossibleCrUseOfFillOrigin({
                error: Error()
              }), FillOrigin) : FillOrigin).Bottom:
                this.fillStart = 0.75;
                break;
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aa407f97f3ecb88c63d3d09131d30a3258513d0c.js.map