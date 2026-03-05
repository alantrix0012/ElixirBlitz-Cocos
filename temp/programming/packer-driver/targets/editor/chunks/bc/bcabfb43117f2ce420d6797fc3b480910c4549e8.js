System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, gfx, UIRenderer, BlendModeUtils, _crd, BlendMode, factors;

  _export("BlendModeUtils", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      gfx = _cc.gfx;
      UIRenderer = _cc.UIRenderer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6bc388JPlhEioRfinEpFEaI", "BlendMode", undefined);

      __checkObsolete__(['gfx', 'Node', 'UIRenderer']);

      _export("BlendMode", BlendMode = /*#__PURE__*/function (BlendMode) {
        BlendMode[BlendMode["Normal"] = 0] = "Normal";
        BlendMode[BlendMode["None"] = 1] = "None";
        BlendMode[BlendMode["Add"] = 2] = "Add";
        BlendMode[BlendMode["Multiply"] = 3] = "Multiply";
        BlendMode[BlendMode["Screen"] = 4] = "Screen";
        BlendMode[BlendMode["Erase"] = 5] = "Erase";
        BlendMode[BlendMode["Mask"] = 6] = "Mask";
        BlendMode[BlendMode["Below"] = 7] = "Below";
        BlendMode[BlendMode["Off"] = 8] = "Off";
        BlendMode[BlendMode["Custom1"] = 9] = "Custom1";
        BlendMode[BlendMode["Custom2"] = 10] = "Custom2";
        BlendMode[BlendMode["Custom3"] = 11] = "Custom3";
        return BlendMode;
      }({}));

      _export("BlendModeUtils", BlendModeUtils = class BlendModeUtils {
        static apply(node, blendMode) {
          let f = factors[blendMode];
          let renderers = node.getComponentsInChildren(UIRenderer);
          renderers.forEach(element => {
            element.srcBlendFactor = f[0];
            element.dstBlendFactor = f[1];
          });
        }

        static override(blendMode, srcFactor, dstFactor) {
          factors[blendMode][0] = srcFactor;
          factors[blendMode][1] = dstFactor;
        }

      });

      factors = [[gfx.BlendFactor.SRC_ALPHA, gfx.BlendFactor.ONE_MINUS_SRC_ALPHA], //normal
      [gfx.BlendFactor.ONE, gfx.BlendFactor.ONE], //none
      [gfx.BlendFactor.SRC_ALPHA, gfx.BlendFactor.ONE], //add
      [gfx.BlendFactor.DST_COLOR, gfx.BlendFactor.ONE_MINUS_SRC_ALPHA], //mul
      [gfx.BlendFactor.ONE, gfx.BlendFactor.ONE_MINUS_SRC_COLOR], //screen
      [gfx.BlendFactor.ZERO, gfx.BlendFactor.ONE_MINUS_SRC_ALPHA], //erase
      [gfx.BlendFactor.ZERO, gfx.BlendFactor.SRC_ALPHA], //mask
      [gfx.BlendFactor.ONE_MINUS_DST_ALPHA, gfx.BlendFactor.DST_ALPHA], //below
      [gfx.BlendFactor.ONE, gfx.BlendFactor.ZERO], //off
      [gfx.BlendFactor.SRC_ALPHA, gfx.BlendFactor.ONE_MINUS_SRC_ALPHA], //custom1
      [gfx.BlendFactor.SRC_ALPHA, gfx.BlendFactor.ONE_MINUS_SRC_ALPHA], //custom2
      [gfx.BlendFactor.SRC_ALPHA, gfx.BlendFactor.ONE_MINUS_SRC_ALPHA] //custom2
      ];

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bcabfb43117f2ce420d6797fc3b480910c4549e8.js.map