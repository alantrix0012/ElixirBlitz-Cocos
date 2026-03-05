System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Vec2, RichText, sys, Node, EventMouse, director, Vec3, game, GObject, GRichTextField, UIContentScaler, borrowEvent, FUIEvent, returnEvent, InputProcessor, TouchInfo, _crd, s_vec3, s_vec3_2;

  function _reportPossibleCrUseOfGObject(extras) {
    _reporterNs.report("GObject", "../GObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGRichTextField(extras) {
    _reporterNs.report("GRichTextField", "../GRichTextField", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIContentScaler(extras) {
    _reporterNs.report("UIContentScaler", "../UIContentScaler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfborrowEvent(extras) {
    _reporterNs.report("borrowEvent", "./Event", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFUIEvent(extras) {
    _reporterNs.report("FUIEvent", "./Event", _context.meta, extras);
  }

  function _reportPossibleCrUseOfreturnEvent(extras) {
    _reporterNs.report("returnEvent", "./Event", _context.meta, extras);
  }

  _export("InputProcessor", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Vec2 = _cc.Vec2;
      RichText = _cc.RichText;
      sys = _cc.sys;
      Node = _cc.Node;
      EventMouse = _cc.EventMouse;
      director = _cc.director;
      Vec3 = _cc.Vec3;
      game = _cc.game;
    }, function (_unresolved_2) {
      GObject = _unresolved_2.GObject;
    }, function (_unresolved_3) {
      GRichTextField = _unresolved_3.GRichTextField;
    }, function (_unresolved_4) {
      UIContentScaler = _unresolved_4.UIContentScaler;
    }, function (_unresolved_5) {
      borrowEvent = _unresolved_5.borrowEvent;
      FUIEvent = _unresolved_5.Event;
      returnEvent = _unresolved_5.returnEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "df8295kLM9J9YitNI8Y2SDo", "InputProcessor", undefined);

      __checkObsolete__(['Component', 'Vec2', 'RichText', 'sys', 'Node', 'EventMouse', 'EventTouch', 'director', 'Vec3', 'game']);

      _export("InputProcessor", InputProcessor = class InputProcessor extends Component {
        constructor() {
          super();
          this._owner = void 0;
          this._touchListener = void 0;
          this._touchPos = void 0;
          this._touches = void 0;
          this._rollOutChain = void 0;
          this._rollOverChain = void 0;
          this._captureCallback = void 0;
          this._touches = new Array();
          this._rollOutChain = new Array();
          this._rollOverChain = new Array();
          this._touchPos = new Vec2();
        }

        onLoad() {
          this._owner = (_crd && GObject === void 0 ? (_reportPossibleCrUseOfGObject({
            error: Error()
          }), GObject) : GObject).cast(this.node);
        }

        onEnable() {
          var node = this.node;
          node.on(Node.EventType.TOUCH_START, this.touchBeginHandler, this);
          node.on(Node.EventType.TOUCH_MOVE, this.touchMoveHandler, this);
          node.on(Node.EventType.TOUCH_END, this.touchEndHandler, this);
          node.on(Node.EventType.TOUCH_CANCEL, this.touchCancelHandler, this);
          node.on(Node.EventType.MOUSE_DOWN, this.mouseDownHandler, this);
          node.on(Node.EventType.MOUSE_MOVE, this.mouseMoveHandler, this);
          node.on(Node.EventType.MOUSE_UP, this.mouseUpHandler, this);
          node.on(Node.EventType.MOUSE_WHEEL, this.mouseWheelHandler, this);
          this._touchListener = this.node.eventProcessor.touchListener;
        }

        onDisable() {
          var node = this.node;
          node.off(Node.EventType.TOUCH_START, this.touchBeginHandler, this);
          node.off(Node.EventType.TOUCH_MOVE, this.touchMoveHandler, this);
          node.off(Node.EventType.TOUCH_END, this.touchEndHandler, this);
          node.off(Node.EventType.TOUCH_CANCEL, this.touchCancelHandler, this);
          node.off(Node.EventType.MOUSE_DOWN, this.mouseDownHandler, this);
          node.off(Node.EventType.MOUSE_MOVE, this.mouseMoveHandler, this);
          node.off(Node.EventType.MOUSE_UP, this.mouseUpHandler, this);
          node.off(Node.EventType.MOUSE_WHEEL, this.mouseWheelHandler, this);
          this._touchListener = null;
        }

        getAllTouches(touchIds) {
          touchIds = touchIds || new Array();
          var cnt = this._touches.length;

          for (var i = 0; i < cnt; i++) {
            var ti = this._touches[i];
            if (ti.touchId != -1) touchIds.push(ti.touchId);
          }

          return touchIds;
        }

        getTouchPosition(touchId) {
          if (touchId === undefined) touchId = -1;
          var cnt = this._touches.length;

          for (var i = 0; i < cnt; i++) {
            var ti = this._touches[i];
            if (ti.touchId != -1 && (touchId == -1 || ti.touchId == touchId)) return ti.pos;
          }

          return Vec2.ZERO;
        }

        getTouchTarget() {
          var cnt = this._touches.length;

          for (var i = 0; i < cnt; i++) {
            var ti = this._touches[i];
            if (ti.touchId != -1) return ti.target;
          }

          return null;
        }

        addTouchMonitor(touchId, target) {
          var ti = this.getInfo(touchId, false);
          if (!ti) return;
          var index = ti.touchMonitors.indexOf(target);
          if (index == -1) ti.touchMonitors.push(target);
        }

        removeTouchMonitor(target) {
          var cnt = this._touches.length;

          for (var i = 0; i < cnt; i++) {
            var ti = this._touches[i];
            var index = ti.touchMonitors.indexOf(target);
            if (index != -1) ti.touchMonitors.splice(index, 1);
          }
        }

        cancelClick(touchId) {
          var ti = this.getInfo(touchId, false);
          if (ti) ti.clickCancelled = true;
        }

        simulateClick(target) {
          var evt;
          evt = (_crd && borrowEvent === void 0 ? (_reportPossibleCrUseOfborrowEvent({
            error: Error()
          }), borrowEvent) : borrowEvent)((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).TOUCH_BEGIN, true);
          evt.initiator = target;
          evt.pos.set(target.localToGlobal());
          evt.touchId = 0;
          evt.clickCount = 1;
          evt.button = 0;
          evt._processor = this;
          if (this._captureCallback) this._captureCallback.call(this._owner, evt);
          target.node.dispatchEvent(evt);
          evt.unuse();
          evt.type = (_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).TOUCH_END;
          evt.bubbles = true;
          target.node.dispatchEvent(evt);
          evt.unuse();
          evt.type = (_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).CLICK;
          evt.bubbles = true;
          target.node.dispatchEvent(evt);
          (_crd && returnEvent === void 0 ? (_reportPossibleCrUseOfreturnEvent({
            error: Error()
          }), returnEvent) : returnEvent)(evt);
        }

        touchBeginHandler(evt) {
          var ti = this.updateInfo(evt.getID(), evt.getLocation());
          this.setBegin(ti);

          if (this._touchListener) {
            this._touchListener.setSwallowTouches(ti.target != this._owner);
          } else {
            // since cc3.4.0, setSwallowTouches removed
            var e = evt;
            e.preventSwallow = ti.target == this._owner;
          }

          var evt2 = this.getEvent(ti, ti.target, (_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).TOUCH_BEGIN, true);
          if (this._captureCallback) this._captureCallback.call(this._owner, evt2);
          ti.target.node.dispatchEvent(evt2);
          this.handleRollOver(ti, ti.target);
          return true;
        }

        touchMoveHandler(evt) {
          var ti = this.updateInfo(evt.getID(), evt.getLocation());

          if (!this._touchListener) {
            var e = evt;
            e.preventSwallow = ti.target == this._owner;
          }

          this.handleRollOver(ti, ti.target);

          if (ti.began) {
            var evt2 = this.getEvent(ti, ti.target, (_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
              error: Error()
            }), FUIEvent) : FUIEvent).TOUCH_MOVE, false);
            var done = false;
            var cnt = ti.touchMonitors.length;

            for (var i = 0; i < cnt; i++) {
              var mm = ti.touchMonitors[i];
              if (mm.node == null || !mm.node.activeInHierarchy) continue;
              evt2.unuse();
              evt2.type = (_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
                error: Error()
              }), FUIEvent) : FUIEvent).TOUCH_MOVE;
              mm.node.dispatchEvent(evt2);
              if (mm == this._owner) done = true;
            }

            if (!done && this.node) {
              evt2.unuse();
              evt2.type = (_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
                error: Error()
              }), FUIEvent) : FUIEvent).TOUCH_MOVE;
              this.node.dispatchEvent(evt2);
            }

            (_crd && returnEvent === void 0 ? (_reportPossibleCrUseOfreturnEvent({
              error: Error()
            }), returnEvent) : returnEvent)(evt2);
          }
        }

        touchEndHandler(evt) {
          var ti = this.updateInfo(evt.getID(), evt.getLocation());

          if (!this._touchListener) {
            var e = evt;
            e.preventSwallow = ti.target == this._owner;
          }

          this.setEnd(ti);
          var evt2 = this.getEvent(ti, ti.target, (_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).TOUCH_END, false);
          var cnt = ti.touchMonitors.length;

          for (var i = 0; i < cnt; i++) {
            var mm = ti.touchMonitors[i];
            if (mm == ti.target || mm.node == null || !mm.node.activeInHierarchy || 'isAncestorOf' in mm && mm.isAncestorOf(ti.target)) continue;
            evt2.unuse();
            evt2.type = (_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
              error: Error()
            }), FUIEvent) : FUIEvent).TOUCH_END;
            mm.node.dispatchEvent(evt2);
          }

          ti.touchMonitors.length = 0;

          if (ti.target && ti.target.node) {
            if (ti.target instanceof (_crd && GRichTextField === void 0 ? (_reportPossibleCrUseOfGRichTextField({
              error: Error()
            }), GRichTextField) : GRichTextField)) ti.target.node.getComponent(RichText)["_onTouchEnded"](evt);
            evt2.unuse();
            evt2.type = (_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
              error: Error()
            }), FUIEvent) : FUIEvent).TOUCH_END;
            evt2.bubbles = true;
            ti.target.node.dispatchEvent(evt2);
          }

          (_crd && returnEvent === void 0 ? (_reportPossibleCrUseOfreturnEvent({
            error: Error()
          }), returnEvent) : returnEvent)(evt2);
          ti.target = this.clickTest(ti);

          if (ti.target) {
            evt2 = this.getEvent(ti, ti.target, (_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
              error: Error()
            }), FUIEvent) : FUIEvent).CLICK, true);
            ti.target.node.dispatchEvent(evt2);
            (_crd && returnEvent === void 0 ? (_reportPossibleCrUseOfreturnEvent({
              error: Error()
            }), returnEvent) : returnEvent)(evt2);
          }

          if (sys.isMobile) //on mobile platform, trigger RollOut on up event, but not on PC
            this.handleRollOver(ti, null);else this.handleRollOver(ti, ti.target);
          ti.target = null;
          ti.touchId = -1;
          ti.button = -1;
        }

        touchCancelHandler(evt) {
          var ti = this.updateInfo(evt.getID(), evt.getLocation());

          if (!this._touchListener) {
            var e = evt;
            e.preventSwallow = ti.target == this._owner;
          }

          var evt2 = this.getEvent(ti, ti.target, (_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).TOUCH_END, false);
          var cnt = ti.touchMonitors.length;

          for (var i = 0; i < cnt; i++) {
            var mm = ti.touchMonitors[i];
            if (mm == ti.target || mm.node == null || !mm.node.activeInHierarchy || 'isAncestorOf' in mm && mm.isAncestorOf(ti.target)) continue;
            evt2.initiator = mm;
            mm.node.dispatchEvent(evt2);
          }

          ti.touchMonitors.length = 0;

          if (ti.target && ti.target.node) {
            evt2.bubbles = true;
            ti.target.node.dispatchEvent(evt2);
          }

          (_crd && returnEvent === void 0 ? (_reportPossibleCrUseOfreturnEvent({
            error: Error()
          }), returnEvent) : returnEvent)(evt2);
          this.handleRollOver(ti, null);
          ti.target = null;
          ti.touchId = -1;
          ti.button = -1;
        }

        mouseDownHandler(evt) {
          var ti = this.getInfo(0, true);
          ti.button = evt.getButton();
        }

        mouseUpHandler(evt) {
          var ti = this.getInfo(0, true);
          ti.button = evt.getButton();
        }

        mouseMoveHandler(evt) {
          var ti = this.getInfo(0, false);
          if (ti && Math.abs(ti.pos.x - evt.getLocationX()) < 1 && Math.abs(ti.pos.y - ((_crd && UIContentScaler === void 0 ? (_reportPossibleCrUseOfUIContentScaler({
            error: Error()
          }), UIContentScaler) : UIContentScaler).rootSize.height - evt.getLocationY())) < 1) return;
          ti = this.updateInfo(0, evt.getLocation());
          this.handleRollOver(ti, ti.target);

          if (ti.began) {
            var evt2 = this.getEvent(ti, ti.target, (_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
              error: Error()
            }), FUIEvent) : FUIEvent).TOUCH_MOVE, false);
            var done = false;
            var cnt = ti.touchMonitors.length;

            for (var i = 0; i < cnt; i++) {
              var mm = ti.touchMonitors[i];
              if (mm.node == null || !mm.node.activeInHierarchy) continue;
              evt2.initiator = mm;
              mm.node.dispatchEvent(evt2);
              if (mm == this._owner) done = true;
            }

            if (!done && this.node) {
              evt2.initiator = this._owner;
              this.node.dispatchEvent(evt2);
              (_crd && returnEvent === void 0 ? (_reportPossibleCrUseOfreturnEvent({
                error: Error()
              }), returnEvent) : returnEvent)(evt2);
            }

            (_crd && returnEvent === void 0 ? (_reportPossibleCrUseOfreturnEvent({
              error: Error()
            }), returnEvent) : returnEvent)(evt2);
          }
        }

        mouseWheelHandler(evt) {
          var ti = this.updateInfo(0, evt.getLocation());
          ti.mouseWheelDelta = Math.max(evt.getScrollX(), evt.getScrollY());
          var evt2 = this.getEvent(ti, ti.target, (_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).MOUSE_WHEEL, true);
          ti.target.node.dispatchEvent(evt2);
          (_crd && returnEvent === void 0 ? (_reportPossibleCrUseOfreturnEvent({
            error: Error()
          }), returnEvent) : returnEvent)(evt2);
        }

        updateInfo(touchId, pos) {
          var camera = director.root.batcher2D.getFirstRenderCamera(this.node);

          if (camera) {
            s_vec3.set(pos.x, pos.y);
            camera.screenToWorld(s_vec3_2, s_vec3);

            this._touchPos.set(s_vec3_2.x, s_vec3_2.y);
          } else this._touchPos.set(pos);

          this._touchPos.y = (_crd && UIContentScaler === void 0 ? (_reportPossibleCrUseOfUIContentScaler({
            error: Error()
          }), UIContentScaler) : UIContentScaler).rootSize.height - this._touchPos.y;

          var target = this._owner.hitTest(this._touchPos);

          if (!target) target = this._owner;
          var ti = this.getInfo(touchId);
          ti.target = target;
          ti.pos.set(this._touchPos);
          ti.button = EventMouse.BUTTON_LEFT;
          ti.touchId = touchId;
          return ti;
        }

        getInfo(touchId, createIfNotExisits) {
          if (createIfNotExisits === undefined) createIfNotExisits = true;
          var ret = null;
          var cnt = this._touches.length;

          for (var i = 0; i < cnt; i++) {
            var ti = this._touches[i];
            if (ti.touchId == touchId) return ti;else if (ti.touchId == -1) ret = ti;
          }

          if (!ret) {
            if (!createIfNotExisits) return null;
            ret = new TouchInfo();

            this._touches.push(ret);
          }

          ret.touchId = touchId;
          return ret;
        }

        setBegin(ti) {
          ti.began = true;
          ti.clickCancelled = false;
          ti.downPos.set(ti.pos);
          ti.downTargets.length = 0;
          var obj = ti.target;

          while (obj) {
            ti.downTargets.push(obj);
            obj = obj.findParent();
          }
        }

        setEnd(ti) {
          ti.began = false;
          var now = game.totalTime / 1000;
          var elapsed = now - ti.lastClickTime;

          if (elapsed < 0.45) {
            if (ti.clickCount == 2) ti.clickCount = 1;else ti.clickCount++;
          } else ti.clickCount = 1;

          ti.lastClickTime = now;
        }

        clickTest(ti) {
          if (ti.downTargets.length == 0 || ti.clickCancelled || Math.abs(ti.pos.x - ti.downPos.x) > 50 || Math.abs(ti.pos.y - ti.downPos.y) > 50) return null;
          var obj = ti.downTargets[0];
          if (obj && obj.node && obj.node.activeInHierarchy) return obj;
          obj = ti.target;

          while (obj) {
            var index = ti.downTargets.indexOf(obj);
            if (index != -1 && obj.node && obj.node.activeInHierarchy) break;
            obj = obj.findParent();
          }

          return obj;
        }

        handleRollOver(ti, target) {
          if (ti.lastRollOver == target) return;
          var element = ti.lastRollOver;

          while (element && element.node) {
            this._rollOutChain.push(element);

            element = element.findParent();
          }

          element = target;

          while (element && element.node) {
            var i = this._rollOutChain.indexOf(element);

            if (i != -1) {
              this._rollOutChain.length = i;
              break;
            }

            this._rollOverChain.push(element);

            element = element.findParent();
          }

          ti.lastRollOver = target;
          var cnt = this._rollOutChain.length;

          for (var _i = 0; _i < cnt; _i++) {
            element = this._rollOutChain[_i];

            if (element.node && element.node.activeInHierarchy) {
              var _evt = this.getEvent(ti, element, (_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
                error: Error()
              }), FUIEvent) : FUIEvent).ROLL_OUT, false);

              element.node.dispatchEvent(_evt);
              (_crd && returnEvent === void 0 ? (_reportPossibleCrUseOfreturnEvent({
                error: Error()
              }), returnEvent) : returnEvent)(_evt);
            }
          }

          cnt = this._rollOverChain.length;

          for (var _i2 = 0; _i2 < cnt; _i2++) {
            element = this._rollOverChain[_i2];

            if (element.node && element.node.activeInHierarchy) {
              var _evt2 = this.getEvent(ti, element, (_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
                error: Error()
              }), FUIEvent) : FUIEvent).ROLL_OVER, false);

              element.node.dispatchEvent(_evt2);
              (_crd && returnEvent === void 0 ? (_reportPossibleCrUseOfreturnEvent({
                error: Error()
              }), returnEvent) : returnEvent)(_evt2);
            }
          }

          this._rollOutChain.length = 0;
          this._rollOverChain.length = 0;
        }

        getEvent(ti, target, type, bubbles) {
          var evt = (_crd && borrowEvent === void 0 ? (_reportPossibleCrUseOfborrowEvent({
            error: Error()
          }), borrowEvent) : borrowEvent)(type, bubbles);
          evt.initiator = target;
          evt.pos.set(ti.pos);
          evt.touchId = ti.touchId;
          evt.clickCount = ti.clickCount;
          evt.button = ti.button;
          evt.mouseWheelDelta = ti.mouseWheelDelta;
          evt._processor = this;
          return evt;
        }

      });

      TouchInfo = class TouchInfo {
        constructor() {
          this.target = void 0;
          this.pos = new Vec2();
          this.touchId = 0;
          this.clickCount = 0;
          this.mouseWheelDelta = 0;
          this.button = -1;
          this.downPos = new Vec2();
          this.began = false;
          this.clickCancelled = false;
          this.lastClickTime = 0;
          this.lastRollOver = void 0;
          this.downTargets = new Array();
          this.touchMonitors = new Array();
        }

      };
      ;
      s_vec3 = new Vec3();
      s_vec3_2 = new Vec3();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d251e0d8e340112ed6e8ef84f14962b7d62b7b06.js.map