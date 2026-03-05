System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EaseType, _crd, _PiOver2, _TwoPi;

  function evaluateEase(easeType, time, duration, overshootOrAmplitude, period) {
    switch (easeType) {
      case (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
        error: Error()
      }), EaseType) : EaseType).Linear:
        return time / duration;

      case (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
        error: Error()
      }), EaseType) : EaseType).SineIn:
        return -Math.cos(time / duration * _PiOver2) + 1;

      case (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
        error: Error()
      }), EaseType) : EaseType).SineOut:
        return Math.sin(time / duration * _PiOver2);

      case (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
        error: Error()
      }), EaseType) : EaseType).SineInOut:
        return -0.5 * (Math.cos(Math.PI * time / duration) - 1);

      case (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
        error: Error()
      }), EaseType) : EaseType).QuadIn:
        return (time /= duration) * time;

      case (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
        error: Error()
      }), EaseType) : EaseType).QuadOut:
        return -(time /= duration) * (time - 2);

      case (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
        error: Error()
      }), EaseType) : EaseType).QuadInOut:
        if ((time /= duration * 0.5) < 1) return 0.5 * time * time;
        return -0.5 * (--time * (time - 2) - 1);

      case (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
        error: Error()
      }), EaseType) : EaseType).CubicIn:
        return (time /= duration) * time * time;

      case (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
        error: Error()
      }), EaseType) : EaseType).CubicOut:
        return (time = time / duration - 1) * time * time + 1;

      case (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
        error: Error()
      }), EaseType) : EaseType).CubicInOut:
        if ((time /= duration * 0.5) < 1) return 0.5 * time * time * time;
        return 0.5 * ((time -= 2) * time * time + 2);

      case (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
        error: Error()
      }), EaseType) : EaseType).QuartIn:
        return (time /= duration) * time * time * time;

      case (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
        error: Error()
      }), EaseType) : EaseType).QuartOut:
        return -((time = time / duration - 1) * time * time * time - 1);

      case (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
        error: Error()
      }), EaseType) : EaseType).QuartInOut:
        if ((time /= duration * 0.5) < 1) return 0.5 * time * time * time * time;
        return -0.5 * ((time -= 2) * time * time * time - 2);

      case (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
        error: Error()
      }), EaseType) : EaseType).QuintIn:
        return (time /= duration) * time * time * time * time;

      case (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
        error: Error()
      }), EaseType) : EaseType).QuintOut:
        return (time = time / duration - 1) * time * time * time * time + 1;

      case (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
        error: Error()
      }), EaseType) : EaseType).QuintInOut:
        if ((time /= duration * 0.5) < 1) return 0.5 * time * time * time * time * time;
        return 0.5 * ((time -= 2) * time * time * time * time + 2);

      case (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
        error: Error()
      }), EaseType) : EaseType).ExpoIn:
        return time == 0 ? 0 : Math.pow(2, 10 * (time / duration - 1));

      case (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
        error: Error()
      }), EaseType) : EaseType).ExpoOut:
        if (time == duration) return 1;
        return -Math.pow(2, -10 * time / duration) + 1;

      case (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
        error: Error()
      }), EaseType) : EaseType).ExpoInOut:
        if (time == 0) return 0;
        if (time == duration) return 1;
        if ((time /= duration * 0.5) < 1) return 0.5 * Math.pow(2, 10 * (time - 1));
        return 0.5 * (-Math.pow(2, -10 * --time) + 2);

      case (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
        error: Error()
      }), EaseType) : EaseType).CircIn:
        return -(Math.sqrt(1 - (time /= duration) * time) - 1);

      case (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
        error: Error()
      }), EaseType) : EaseType).CircOut:
        return Math.sqrt(1 - (time = time / duration - 1) * time);

      case (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
        error: Error()
      }), EaseType) : EaseType).CircInOut:
        if ((time /= duration * 0.5) < 1) return -0.5 * (Math.sqrt(1 - time * time) - 1);
        return 0.5 * (Math.sqrt(1 - (time -= 2) * time) + 1);

      case (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
        error: Error()
      }), EaseType) : EaseType).ElasticIn:
        var s0;
        if (time == 0) return 0;
        if ((time /= duration) == 1) return 1;
        if (period == 0) period = duration * 0.3;

        if (overshootOrAmplitude < 1) {
          overshootOrAmplitude = 1;
          s0 = period / 4;
        } else s0 = period / _TwoPi * Math.asin(1 / overshootOrAmplitude);

        return -(overshootOrAmplitude * Math.pow(2, 10 * (time -= 1)) * Math.sin((time * duration - s0) * _TwoPi / period));

      case (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
        error: Error()
      }), EaseType) : EaseType).ElasticOut:
        var s1;
        if (time == 0) return 0;
        if ((time /= duration) == 1) return 1;
        if (period == 0) period = duration * 0.3;

        if (overshootOrAmplitude < 1) {
          overshootOrAmplitude = 1;
          s1 = period / 4;
        } else s1 = period / _TwoPi * Math.asin(1 / overshootOrAmplitude);

        return overshootOrAmplitude * Math.pow(2, -10 * time) * Math.sin((time * duration - s1) * _TwoPi / period) + 1;

      case (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
        error: Error()
      }), EaseType) : EaseType).ElasticInOut:
        var s;
        if (time == 0) return 0;
        if ((time /= duration * 0.5) == 2) return 1;
        if (period == 0) period = duration * (0.3 * 1.5);

        if (overshootOrAmplitude < 1) {
          overshootOrAmplitude = 1;
          s = period / 4;
        } else s = period / _TwoPi * Math.asin(1 / overshootOrAmplitude);

        if (time < 1) return -0.5 * (overshootOrAmplitude * Math.pow(2, 10 * (time -= 1)) * Math.sin((time * duration - s) * _TwoPi / period));
        return overshootOrAmplitude * Math.pow(2, -10 * (time -= 1)) * Math.sin((time * duration - s) * _TwoPi / period) * 0.5 + 1;

      case (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
        error: Error()
      }), EaseType) : EaseType).BackIn:
        return (time /= duration) * time * ((overshootOrAmplitude + 1) * time - overshootOrAmplitude);

      case (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
        error: Error()
      }), EaseType) : EaseType).BackOut:
        return (time = time / duration - 1) * time * ((overshootOrAmplitude + 1) * time + overshootOrAmplitude) + 1;

      case (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
        error: Error()
      }), EaseType) : EaseType).BackInOut:
        if ((time /= duration * 0.5) < 1) return 0.5 * (time * time * (((overshootOrAmplitude *= 1.525) + 1) * time - overshootOrAmplitude));
        return 0.5 * ((time -= 2) * time * (((overshootOrAmplitude *= 1.525) + 1) * time + overshootOrAmplitude) + 2);

      case (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
        error: Error()
      }), EaseType) : EaseType).BounceIn:
        return bounce_easeIn(time, duration);

      case (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
        error: Error()
      }), EaseType) : EaseType).BounceOut:
        return bounce_easeOut(time, duration);

      case (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
        error: Error()
      }), EaseType) : EaseType).BounceInOut:
        return bounce_easeInOut(time, duration);

      default:
        return -(time /= duration) * (time - 2);
    }
  }

  function bounce_easeIn(time, duration) {
    return 1 - bounce_easeOut(duration - time, duration);
  }

  function bounce_easeOut(time, duration) {
    if ((time /= duration) < 1 / 2.75) {
      return 7.5625 * time * time;
    }

    if (time < 2 / 2.75) {
      return 7.5625 * (time -= 1.5 / 2.75) * time + 0.75;
    }

    if (time < 2.5 / 2.75) {
      return 7.5625 * (time -= 2.25 / 2.75) * time + 0.9375;
    }

    return 7.5625 * (time -= 2.625 / 2.75) * time + 0.984375;
  }

  function bounce_easeInOut(time, duration) {
    if (time < duration * 0.5) {
      return bounce_easeIn(time * 2, duration) * 0.5;
    }

    return bounce_easeOut(time * 2 - duration, duration) * 0.5 + 0.5;
  }

  function _reportPossibleCrUseOfEaseType(extras) {
    _reporterNs.report("EaseType", "./EaseType", _context.meta, extras);
  }

  _export("evaluateEase", evaluateEase);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      EaseType = _unresolved_2.EaseType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9af56J3885KHo2EkzwLQDwY", "EaseManager", undefined);

      _PiOver2 = Math.PI * 0.5;
      _TwoPi = Math.PI * 2;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4a66c95aadab18e2acc5a1a5412d65fafc9067e3.js.map