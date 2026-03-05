System.register(["cc", "fairygui-cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, fgui, _dec, _class, _crd, ccclass, UIManager;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_fairyguiCc) {
      fgui = _fairyguiCc;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f0551I4SaNMmYkryKp0WIqz", "UIManager", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass
      } = _decorator);

      _export("UIManager", UIManager = (_dec = ccclass("UIManager"), _dec(_class = class UIManager extends Component {
        start() {
          // Load the exported FairyGUI package
          fgui.UIPackage.loadPackage("FGUI", () => {
            // Create the UI component from the package
            const view = fgui.UIPackage.createObject("FGUI", "Main").asCom; // Add it to the screen

            fgui.GRoot.inst.addChild(view);
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=131bde967d440e226b0bee731b5c49bfa83e740b.js.map