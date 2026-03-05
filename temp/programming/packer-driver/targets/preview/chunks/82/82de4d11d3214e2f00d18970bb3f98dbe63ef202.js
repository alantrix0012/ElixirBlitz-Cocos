System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec2, FUIEvent, GComponent, GScrollBar, _crd, s_vec2;

  function _reportPossibleCrUseOfFUIEvent(extras) {
    _reporterNs.report("FUIEvent", "./event/Event", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGComponent(extras) {
    _reporterNs.report("GComponent", "./GComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGObject(extras) {
    _reporterNs.report("GObject", "./GObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScrollPane(extras) {
    _reporterNs.report("ScrollPane", "./ScrollPane", _context.meta, extras);
  }

  function _reportPossibleCrUseOfByteBuffer(extras) {
    _reporterNs.report("ByteBuffer", "./utils/ByteBuffer", _context.meta, extras);
  }

  _export("GScrollBar", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      FUIEvent = _unresolved_2.Event;
    }, function (_unresolved_3) {
      GComponent = _unresolved_3.GComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b27a8hbBAhJ3L/iRB0N3hfj", "GScrollBar", undefined);

      __checkObsolete__(['Vec2']);

      _export("GScrollBar", GScrollBar = class GScrollBar extends (_crd && GComponent === void 0 ? (_reportPossibleCrUseOfGComponent({
        error: Error()
      }), GComponent) : GComponent) {
        constructor() {
          super();
          this._grip = void 0;
          this._arrowButton1 = void 0;
          this._arrowButton2 = void 0;
          this._bar = void 0;
          this._target = void 0;
          this._vertical = void 0;
          this._scrollPerc = void 0;
          this._fixedGripSize = void 0;
          this._dragOffset = void 0;
          this._gripDragging = void 0;
          this._node.name = "GScrollBar";
          this._dragOffset = new Vec2();
          this._scrollPerc = 0;
        }

        setScrollPane(target, vertical) {
          this._target = target;
          this._vertical = vertical;
        }

        setDisplayPerc(value) {
          if (this._vertical) {
            if (!this._fixedGripSize) this._grip.height = Math.floor(value * this._bar.height);
            this._grip.y = this._bar.y + (this._bar.height - this._grip.height) * this._scrollPerc;
          } else {
            if (!this._fixedGripSize) this._grip.width = Math.floor(value * this._bar.width);
            this._grip.x = this._bar.x + (this._bar.width - this._grip.width) * this._scrollPerc;
          }

          this._grip.visible = value != 0 && value != 1;
        }

        setScrollPerc(val) {
          this._scrollPerc = val;
          if (this._vertical) this._grip.y = this._bar.y + (this._bar.height - this._grip.height) * this._scrollPerc;else this._grip.x = this._bar.x + (this._bar.width - this._grip.width) * this._scrollPerc;
        }

        get minSize() {
          if (this._vertical) return (this._arrowButton1 ? this._arrowButton1.height : 0) + (this._arrowButton2 ? this._arrowButton2.height : 0);else return (this._arrowButton1 ? this._arrowButton1.width : 0) + (this._arrowButton2 ? this._arrowButton2.width : 0);
        }

        get gripDragging() {
          return this._gripDragging;
        }

        constructExtension(buffer) {
          buffer.seek(0, 6);
          this._fixedGripSize = buffer.readBool();
          this._grip = this.getChild("grip");

          if (!this._grip) {
            console.error("需要定义grip");
            return;
          }

          this._bar = this.getChild("bar");

          if (!this._bar) {
            console.error("需要定义bar");
            return;
          }

          this._arrowButton1 = this.getChild("arrow1");
          this._arrowButton2 = this.getChild("arrow2");

          this._grip.on((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).TOUCH_BEGIN, this.onGripTouchDown, this);

          this._grip.on((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).TOUCH_MOVE, this.onGripTouchMove, this);

          this._grip.on((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).TOUCH_END, this.onGripTouchEnd, this);

          if (this._arrowButton1) this._arrowButton1.on((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).TOUCH_BEGIN, this.onClickArrow1, this);
          if (this._arrowButton2) this._arrowButton2.on((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).TOUCH_BEGIN, this.onClickArrow2, this);
          this.on((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).TOUCH_BEGIN, this.onBarTouchBegin, this);
        }

        onGripTouchDown(evt) {
          evt.propagationStopped = true;
          evt.captureTouch();
          this._gripDragging = true;

          this._target.updateScrollBarVisible();

          this.globalToLocal(evt.pos.x, evt.pos.y, this._dragOffset);
          this._dragOffset.x -= this._grip.x;
          this._dragOffset.y -= this._grip.y;
        }

        onGripTouchMove(evt) {
          if (!this.onStage) return;
          var pt = this.globalToLocal(evt.pos.x, evt.pos.y, s_vec2);

          if (this._vertical) {
            var curY = pt.y - this._dragOffset.y;

            this._target.setPercY((curY - this._bar.y) / (this._bar.height - this._grip.height), false);
          } else {
            var curX = pt.x - this._dragOffset.x;

            this._target.setPercX((curX - this._bar.x) / (this._bar.width - this._grip.width), false);
          }
        }

        onGripTouchEnd(evt) {
          if (!this.onStage) return;
          this._gripDragging = false;

          this._target.updateScrollBarVisible();
        }

        onClickArrow1(evt) {
          evt.propagationStopped = true;
          if (this._vertical) this._target.scrollUp();else this._target.scrollLeft();
        }

        onClickArrow2(evt) {
          evt.propagationStopped = true;
          if (this._vertical) this._target.scrollDown();else this._target.scrollRight();
        }

        onBarTouchBegin(evt) {
          evt.propagationStopped = true;

          var pt = this._grip.globalToLocal(evt.pos.x, evt.pos.y, s_vec2);

          if (this._vertical) {
            if (pt.y < 0) this._target.scrollUp(4);else this._target.scrollDown(4);
          } else {
            if (pt.x < 0) this._target.scrollLeft(4);else this._target.scrollRight(4);
          }
        }

      });

      s_vec2 = new Vec2();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=82de4d11d3214e2f00d18970bb3f98dbe63ef202.js.map