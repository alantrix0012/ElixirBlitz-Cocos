System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, constructingDepth, EaseType, GearBase, GearTweenConfig, _crd;

  function _reportPossibleCrUseOfController(extras) {
    _reporterNs.report("Controller", "../Controller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstructingDepth(extras) {
    _reporterNs.report("constructingDepth", "../GObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGObject(extras) {
    _reporterNs.report("GObject", "../GObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEaseType(extras) {
    _reporterNs.report("EaseType", "../tween/EaseType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGTweener(extras) {
    _reporterNs.report("GTweener", "../tween/GTweener", _context.meta, extras);
  }

  function _reportPossibleCrUseOfByteBuffer(extras) {
    _reporterNs.report("ByteBuffer", "../utils/ByteBuffer", _context.meta, extras);
  }

  _export({
    GearBase: void 0,
    GearTweenConfig: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      constructingDepth = _unresolved_2.constructingDepth;
    }, function (_unresolved_3) {
      EaseType = _unresolved_3.EaseType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1342a80wElA8rouR5fV7FvN", "GearBase", undefined);

      _export("GearBase", GearBase = class GearBase {
        constructor() {
          this._owner = void 0;
          this._controller = void 0;
          this._tweenConfig = void 0;
        }

        dispose() {
          if (this._tweenConfig && this._tweenConfig._tweener) {
            this._tweenConfig._tweener.kill();

            this._tweenConfig._tweener = null;
          }
        }

        get controller() {
          return this._controller;
        }

        set controller(val) {
          if (val != this._controller) {
            this._controller = val;
            if (this._controller) this.init();
          }
        }

        get tweenConfig() {
          if (!this._tweenConfig) this._tweenConfig = new GearTweenConfig();
          return this._tweenConfig;
        }

        get allowTween() {
          return this._tweenConfig && this._tweenConfig.tween && (_crd && constructingDepth === void 0 ? (_reportPossibleCrUseOfconstructingDepth({
            error: Error()
          }), constructingDepth) : constructingDepth).n == 0 && !GearBase.disableAllTweenEffect;
        }

        setup(buffer) {
          this._controller = this._owner.parent.getControllerAt(buffer.readShort());
          this.init();
          var i;
          var page;
          var cnt = buffer.readShort();

          if ("pages" in this) {
            this.pages = buffer.readSArray(cnt);
          } else {
            for (i = 0; i < cnt; i++) {
              page = buffer.readS();
              if (page == null) continue;
              this.addStatus(page, buffer);
            }

            if (buffer.readBool()) this.addStatus(null, buffer);
          }

          if (buffer.readBool()) {
            this._tweenConfig = new GearTweenConfig();
            this._tweenConfig.easeType = buffer.readByte();
            this._tweenConfig.duration = buffer.readFloat();
            this._tweenConfig.delay = buffer.readFloat();
          }

          if (buffer.version >= 2) {
            if ("positionsInPercent" in this) {
              if (buffer.readBool()) {
                this.positionsInPercent = true;

                for (i = 0; i < cnt; i++) {
                  page = buffer.readS();
                  if (page == null) continue;
                  this.addExtStatus(page, buffer);
                }

                if (buffer.readBool()) this.addExtStatus(null, buffer);
              }
            } else if ("condition" in this) this.condition = buffer.readByte();
          }
        }

        updateFromRelations(dx, dy) {}

        addStatus(pageId, buffer) {}

        init() {}

        apply() {}

        updateState() {}

      });

      GearBase.disableAllTweenEffect = void 0;

      _export("GearTweenConfig", GearTweenConfig = class GearTweenConfig {
        constructor() {
          this.tween = void 0;
          this.easeType = void 0;
          this.duration = void 0;
          this.delay = void 0;
          this._displayLockToken = void 0;
          this._tweener = void 0;
          this.tween = true;
          this.easeType = (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
            error: Error()
          }), EaseType) : EaseType).QuadOut;
          this.duration = 0.3;
          this.delay = 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a2a56d57c9ad1e3db8b462b308abf8cc6694eb72.js.map