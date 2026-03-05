System.register(["cc", "__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, fgui, _dec, _class, _crd, ccclass, UIManager;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_) {
      fgui = _unresolved_;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f0551I4SaNMmYkryKp0WIqz", "UIManager", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass
      } = _decorator);

      _export("UIManager", UIManager = (_dec = ccclass("FGUITest"), _dec(_class = class UIManager extends Component {
        start() {
          fgui.UIPackage.loadPackage("FGUI", () => {
            const view = fgui.UIPackage.createObject("FGUI", "Main").asCom;
            fgui.GRoot.inst.addChild(view);
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d06e0aafd5c090a6c694e8564415f3303d77f348.js.map