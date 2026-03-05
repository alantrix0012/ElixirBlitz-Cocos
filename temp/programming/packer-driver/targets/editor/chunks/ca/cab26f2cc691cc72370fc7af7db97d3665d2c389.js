System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ControllerAction, _crd;

  function _reportPossibleCrUseOfController(extras) {
    _reporterNs.report("Controller", "../Controller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfByteBuffer(extras) {
    _reporterNs.report("ByteBuffer", "../utils/ByteBuffer", _context.meta, extras);
  }

  _export("ControllerAction", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "55f82qSGlBKLr17ijHTwWMz", "ControllerAction", undefined);

      _export("ControllerAction", ControllerAction = class ControllerAction {
        constructor() {
          this.fromPage = void 0;
          this.toPage = void 0;
        }

        run(controller, prevPage, curPage) {
          if ((!this.fromPage || this.fromPage.length == 0 || this.fromPage.indexOf(prevPage) != -1) && (!this.toPage || this.toPage.length == 0 || this.toPage.indexOf(curPage) != -1)) this.enter(controller);else this.leave(controller);
        }

        enter(controller) {}

        leave(controller) {}

        setup(buffer) {
          var cnt;
          var i;
          cnt = buffer.readShort();
          this.fromPage = [];

          for (i = 0; i < cnt; i++) this.fromPage[i] = buffer.readS();

          cnt = buffer.readShort();
          this.toPage = [];

          for (i = 0; i < cnt; i++) this.toPage[i] = buffer.readS();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cab26f2cc691cc72370fc7af7db97d3665d2c389.js.map