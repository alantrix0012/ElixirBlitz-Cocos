System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ControllerAction, ChangePageAction, _crd;

  function _reportPossibleCrUseOfGComponent(extras) {
    _reporterNs.report("GComponent", "../GComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfController(extras) {
    _reporterNs.report("Controller", "../Controller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfByteBuffer(extras) {
    _reporterNs.report("ByteBuffer", "../utils/ByteBuffer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfControllerAction(extras) {
    _reporterNs.report("ControllerAction", "./ControllerAction", _context.meta, extras);
  }

  _export("ChangePageAction", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ControllerAction = _unresolved_2.ControllerAction;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "19f84dY3u1E873aHQy19eiY", "ChangePageAction", undefined);

      _export("ChangePageAction", ChangePageAction = class ChangePageAction extends (_crd && ControllerAction === void 0 ? (_reportPossibleCrUseOfControllerAction({
        error: Error()
      }), ControllerAction) : ControllerAction) {
        constructor() {
          super();
          this.objectId = void 0;
          this.controllerName = void 0;
          this.targetPage = void 0;
        }

        enter(controller) {
          if (!this.controllerName) return;
          var gcom;
          if (this.objectId) gcom = controller.parent.getChildById(this.objectId);else gcom = controller.parent;

          if (gcom) {
            var cc = gcom.getController(this.controllerName);

            if (cc && cc != controller && !cc.changing) {
              if (this.targetPage == "~1") {
                if (controller.selectedIndex < cc.pageCount) cc.selectedIndex = controller.selectedIndex;
              } else if (this.targetPage == "~2") cc.selectedPage = controller.selectedPage;else cc.selectedPageId = this.targetPage;
            }
          }
        }

        setup(buffer) {
          super.setup(buffer);
          this.objectId = buffer.readS();
          this.controllerName = buffer.readS();
          this.targetPage = buffer.readS();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a10d5016a0ec33ceeba57c3aedd2e17467768f34.js.map