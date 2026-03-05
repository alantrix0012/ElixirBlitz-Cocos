System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, TweenManager, GTween, _crd;

  function _reportPossibleCrUseOfGTweener(extras) {
    _reporterNs.report("GTweener", "./GTweener", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTweenManager(extras) {
    _reporterNs.report("TweenManager", "./TweenManager", _context.meta, extras);
  }

  _export("GTween", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      TweenManager = _unresolved_2.TweenManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "119bdYYGfFJr66n/hG20yZ8", "GTween", undefined);

      _export("GTween", GTween = class GTween {
        static to(start, end, duration) {
          return (_crd && TweenManager === void 0 ? (_reportPossibleCrUseOfTweenManager({
            error: Error()
          }), TweenManager) : TweenManager).createTween()._to(start, end, duration);
        }

        static to2(start, start2, end, end2, duration) {
          return (_crd && TweenManager === void 0 ? (_reportPossibleCrUseOfTweenManager({
            error: Error()
          }), TweenManager) : TweenManager).createTween()._to2(start, start2, end, end2, duration);
        }

        static to3(start, start2, start3, end, end2, end3, duration) {
          return (_crd && TweenManager === void 0 ? (_reportPossibleCrUseOfTweenManager({
            error: Error()
          }), TweenManager) : TweenManager).createTween()._to3(start, start2, start3, end, end2, end3, duration);
        }

        static to4(start, start2, start3, start4, end, end2, end3, end4, duration) {
          return (_crd && TweenManager === void 0 ? (_reportPossibleCrUseOfTweenManager({
            error: Error()
          }), TweenManager) : TweenManager).createTween()._to4(start, start2, start3, start4, end, end2, end3, end4, duration);
        }

        static toColor(start, end, duration) {
          return (_crd && TweenManager === void 0 ? (_reportPossibleCrUseOfTweenManager({
            error: Error()
          }), TweenManager) : TweenManager).createTween()._toColor(start, end, duration);
        }

        static delayedCall(delay) {
          return (_crd && TweenManager === void 0 ? (_reportPossibleCrUseOfTweenManager({
            error: Error()
          }), TweenManager) : TweenManager).createTween().setDelay(delay);
        }

        static shake(startX, startY, amplitude, duration) {
          return (_crd && TweenManager === void 0 ? (_reportPossibleCrUseOfTweenManager({
            error: Error()
          }), TweenManager) : TweenManager).createTween()._shake(startX, startY, amplitude, duration);
        }

        static isTweening(target, propType) {
          return (_crd && TweenManager === void 0 ? (_reportPossibleCrUseOfTweenManager({
            error: Error()
          }), TweenManager) : TweenManager).isTweening(target, propType);
        }

        static kill(target, complete, propType) {
          (_crd && TweenManager === void 0 ? (_reportPossibleCrUseOfTweenManager({
            error: Error()
          }), TweenManager) : TweenManager).killTweens(target, complete, propType);
        }

        static getTween(target, propType) {
          return (_crd && TweenManager === void 0 ? (_reportPossibleCrUseOfTweenManager({
            error: Error()
          }), TweenManager) : TweenManager).getTween(target, propType);
        }

      });

      GTween.catchCallbackExceptions = true;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8b09c75cb15da234d53b50bf3d25d639adc359ff.js.map