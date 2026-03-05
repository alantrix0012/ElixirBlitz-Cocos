System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ControllerAction, PlayTransitionAction, _crd;

  function _reportPossibleCrUseOfControllerAction(extras) {
    _reporterNs.report("ControllerAction", "./ControllerAction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfController(extras) {
    _reporterNs.report("Controller", "../Controller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTransition(extras) {
    _reporterNs.report("Transition", "../Transition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfByteBuffer(extras) {
    _reporterNs.report("ByteBuffer", "../utils/ByteBuffer", _context.meta, extras);
  }

  _export("PlayTransitionAction", void 0);

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

      _cclegacy._RF.push({}, "1a247OvselBbptcxXRw9jFb", "PlayTransitionAction", undefined);

      _export("PlayTransitionAction", PlayTransitionAction = class PlayTransitionAction extends (_crd && ControllerAction === void 0 ? (_reportPossibleCrUseOfControllerAction({
        error: Error()
      }), ControllerAction) : ControllerAction) {
        constructor() {
          super();
          this.transitionName = void 0;
          this.playTimes = 1;
          this.delay = 0;
          this.stopOnExit = void 0;
          this._currentTransition = void 0;
        }

        enter(controller) {
          var trans = controller.parent.getTransition(this.transitionName);

          if (trans) {
            if (this._currentTransition && this._currentTransition.playing) trans.changePlayTimes(this.playTimes);else trans.play(null, this.playTimes, this.delay);
            this._currentTransition = trans;
          }
        }

        leave(controller) {
          if (this.stopOnExit && this._currentTransition) {
            this._currentTransition.stop();

            this._currentTransition = null;
          }
        }

        setup(buffer) {
          super.setup(buffer);
          this.transitionName = buffer.readS();
          this.playTimes = buffer.readInt();
          this.delay = buffer.readFloat();
          this.stopOnExit = buffer.readBool();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eddb2559860e6f8a857ad26e686489e7415ea9b9.js.map