System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Size, screen, view, UIContentScaler, _crd;

  function updateScaler() {
    var size = screen.windowSize;
    size.width /= view.getScaleX();
    size.height /= view.getScaleY();
    UIContentScaler.rootSize.set(size);
    var ss = Math.max(view.getScaleX(), view.getScaleY());
    UIContentScaler.scaleFactor = ss;
    if (ss >= 3.5) UIContentScaler.scaleLevel = 3; //x4
    else if (ss >= 2.5) UIContentScaler.scaleLevel = 2; //x3
    else if (ss >= 1.5) UIContentScaler.scaleLevel = 1; //x2
    else UIContentScaler.scaleLevel = 0;
  }

  _export({
    UIContentScaler: void 0,
    updateScaler: updateScaler
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Size = _cc.Size;
      screen = _cc.screen;
      view = _cc.view;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b7845cpS9xL2oF3Z+mEnUj1", "UIContentScaler", undefined);

      __checkObsolete__(['Size', 'screen', 'view']);

      _export("UIContentScaler", UIContentScaler = class UIContentScaler {});

      UIContentScaler.scaleFactor = 1;
      UIContentScaler.scaleLevel = 0;
      UIContentScaler.rootSize = new Size();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3560c0f19b92adad867bfb1244a322f71c4bd34e.js.map