System.register(["cc", "fairygui-cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, fgui, ScreenBase, _crd;

  _export("ScreenBase", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_fairyguiCc) {
      fgui = _fairyguiCc;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8b1edLiBrJMBrIHy4V4JGa3", "ScreenBase", undefined);

      _export("ScreenBase", ScreenBase = class ScreenBase {
        constructor(view) {
          this.view = void 0;
          this.popup = null;
          this.view = view;
          this.view.makeFullScreen();
          this.view.visible = false;
          fgui.GRoot.inst.addChild(this.view);
        }

        show() {
          this.view.visible = true;
          this.onShow();
        }

        hide() {
          this.onHide();
          this.view.visible = false;
        }

        onShow() {}

        onHide() {}

        playTransition(name, onComplete) {
          var transition = this.view.getTransition(name);

          if (!transition) {
            onComplete == null ? void 0 : onComplete();
            return;
          }

          if (onComplete) {
            transition.play(onComplete);
            return;
          }

          transition.play();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9f2fb5e2e727b8fc2dcb9f5a8d095afeb13a7678.js.map