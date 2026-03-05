System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, _crd;

  function toGrayedColor(c) {
    var v = c.r * 0.299 + c.g * 0.587 + c.b * 0.114;
    return new Color(v, v, v, c.a);
  }

  _export("toGrayedColor", toGrayedColor);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Color = _cc.Color;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dfa54djh4pF5LhD+cLHs5Ox", "ToolSet", undefined);

      __checkObsolete__(['Color']);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f9a1019cc8e5242cb4c9b55a1f571d414d7f4b9a.js.map