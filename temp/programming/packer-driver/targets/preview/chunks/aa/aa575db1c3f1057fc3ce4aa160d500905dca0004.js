System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, director, game, macro, Node, Pool, GTweener, TweenManager, _crd, _activeTweens, _tweenerPool, _totalActiveTweens, _inited, _root;

  function _reportPossibleCrUseOfPool(extras) {
    _reporterNs.report("Pool", "../utils/Pool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGTweener(extras) {
    _reporterNs.report("GTweener", "./GTweener", _context.meta, extras);
  }

  _export("TweenManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      director = _cc.director;
      game = _cc.game;
      macro = _cc.macro;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      Pool = _unresolved_2.Pool;
    }, function (_unresolved_3) {
      GTweener = _unresolved_3.GTweener;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "93c9dvpLhlG56N3R5LXpDf/", "TweenManager", undefined);

      __checkObsolete__(['director', 'game', 'macro', 'Node']);

      _export("TweenManager", TweenManager = class TweenManager {
        static createTween() {
          if (!_root) {
            _root = new Node("[TweenManager]");
            game.addPersistRootNode(_root);
            director.getScheduler().schedule(TweenManager.update, _root, 0, macro.REPEAT_FOREVER, 0, false);
          }

          var tweener = _tweenerPool.borrow();

          _activeTweens[_totalActiveTweens++] = tweener;
          return tweener;
        }

        static isTweening(target, propType) {
          if (target == null) return false;
          var anyType = !propType;

          for (var i = 0; i < _totalActiveTweens; i++) {
            var tweener = _activeTweens[i];
            if (tweener && tweener.target == target && !tweener._killed && (anyType || tweener._propType == propType)) return true;
          }

          return false;
        }

        static killTweens(target, completed, propType) {
          if (target == null) return false;
          var flag = false;
          var cnt = _totalActiveTweens;
          var anyType = !propType;

          for (var i = 0; i < cnt; i++) {
            var tweener = _activeTweens[i];

            if (tweener && tweener.target == target && !tweener._killed && (anyType || tweener._propType == propType)) {
              tweener.kill(completed);
              flag = true;
            }
          }

          return flag;
        }

        static getTween(target, propType) {
          if (target == null) return null;
          var cnt = _totalActiveTweens;
          var anyType = !propType;

          for (var i = 0; i < cnt; i++) {
            var tweener = _activeTweens[i];

            if (tweener && tweener.target == target && !tweener._killed && (anyType || tweener._propType == propType)) {
              return tweener;
            }
          }

          return null;
        }

        static update(dt) {
          var tweens = _activeTweens;
          var cnt = _totalActiveTweens;
          var freePosStart = -1;

          for (var i = 0; i < cnt; i++) {
            var tweener = tweens[i];

            if (tweener == null) {
              if (freePosStart == -1) freePosStart = i;
            } else if (tweener._killed) {
              tweener._reset();

              _tweenerPool.returns(tweener);

              tweens[i] = null;
              if (freePosStart == -1) freePosStart = i;
            } else {
              if (tweener._target && 'isDisposed' in tweener._target && tweener._target.isDisposed) tweener._killed = true;else if (!tweener._paused) tweener._update(dt);

              if (freePosStart != -1) {
                tweens[freePosStart] = tweener;
                tweens[i] = null;
                freePosStart++;
              }
            }
          }

          if (freePosStart >= 0) {
            if (_totalActiveTweens != cnt) //new tweens added
              {
                var j = cnt;
                cnt = _totalActiveTweens - cnt;

                for (i = 0; i < cnt; i++) tweens[freePosStart++] = tweens[j++];
              }

            _totalActiveTweens = freePosStart;
          }

          return false;
        }

      });

      _activeTweens = new Array();
      _tweenerPool = new (_crd && Pool === void 0 ? (_reportPossibleCrUseOfPool({
        error: Error()
      }), Pool) : Pool)(_crd && GTweener === void 0 ? (_reportPossibleCrUseOfGTweener({
        error: Error()
      }), GTweener) : GTweener, e => e._init(), e => e._reset());
      _totalActiveTweens = 0;
      _inited = false;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aa575db1c3f1057fc3ce4aa160d500905dca0004.js.map