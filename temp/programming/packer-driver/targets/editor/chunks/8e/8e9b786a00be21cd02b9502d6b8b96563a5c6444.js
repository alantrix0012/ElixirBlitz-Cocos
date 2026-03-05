System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CCEvent, Vec2, GObject, Event, _crd, eventPool;

  function borrowEvent(type, bubbles) {
    let evt;

    if (eventPool.length) {
      evt = eventPool.pop();
      evt.type = type;
      evt.bubbles = bubbles;
    } else {
      evt = new Event(type, bubbles);
    }

    return evt;
  }

  function returnEvent(evt) {
    evt.initiator = null;
    evt.unuse();
    eventPool.push(evt);
  }

  function _reportPossibleCrUseOfGObject(extras) {
    _reporterNs.report("GObject", "../GObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInputProcessor(extras) {
    _reporterNs.report("InputProcessor", "./InputProcessor", _context.meta, extras);
  }

  _export({
    Event: void 0,
    borrowEvent: borrowEvent,
    returnEvent: returnEvent
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      CCEvent = _cc.Event;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      GObject = _unresolved_2.GObject;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "122f4/JNVNGRJZ36TtozbRR", "Event", undefined);

      __checkObsolete__(['Event', 'Node', 'Touch', 'Vec2']);

      _export("Event", Event = class Event extends CCEvent {
        constructor(type, bubbles) {
          super(type, bubbles);
          this.initiator = void 0;
          this.pos = new Vec2();
          this.touchId = 0;
          this.clickCount = 0;
          this.button = 0;
          this.keyModifiers = 0;
          this.mouseWheelDelta = 0;
          this._processor = void 0;
        }

        get sender() {
          return (_crd && GObject === void 0 ? (_reportPossibleCrUseOfGObject({
            error: Error()
          }), GObject) : GObject).cast(this.currentTarget);
        }

        get isShiftDown() {
          return false;
        }

        get isCtrlDown() {
          return false;
        }

        captureTouch() {
          let obj = (_crd && GObject === void 0 ? (_reportPossibleCrUseOfGObject({
            error: Error()
          }), GObject) : GObject).cast(this.currentTarget);
          if (obj) this._processor.addTouchMonitor(this.touchId, obj);
        }

      });

      Event.TOUCH_BEGIN = "fui_touch_begin";
      Event.TOUCH_MOVE = "fui_touch_move";
      Event.TOUCH_END = "fui_touch_end";
      Event.CLICK = "fui_click";
      Event.ROLL_OVER = "fui_roll_over";
      Event.ROLL_OUT = "fui_roll_out";
      Event.MOUSE_WHEEL = "fui_mouse_wheel";
      Event.DISPLAY = "fui_display";
      Event.UNDISPLAY = "fui_undisplay";
      Event.GEAR_STOP = "fui_gear_stop";
      Event.LINK = "fui_text_link";
      Event.Submit = "editing-return";
      Event.TEXT_CHANGE = "text-changed";
      Event.STATUS_CHANGED = "fui_status_changed";
      Event.XY_CHANGED = "fui_xy_changed";
      Event.SIZE_CHANGED = "fui_size_changed";
      Event.SIZE_DELAY_CHANGE = "fui_size_delay_change";
      Event.DRAG_START = "fui_drag_start";
      Event.DRAG_MOVE = "fui_drag_move";
      Event.DRAG_END = "fui_drag_end";
      Event.DROP = "fui_drop";
      Event.SCROLL = "fui_scroll";
      Event.SCROLL_END = "fui_scroll_end";
      Event.PULL_DOWN_RELEASE = "fui_pull_down_release";
      Event.PULL_UP_RELEASE = "fui_pull_up_release";
      Event.CLICK_ITEM = "fui_click_item";
      eventPool = new Array();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8e9b786a00be21cd02b9502d6b8b96563a5c6444.js.map