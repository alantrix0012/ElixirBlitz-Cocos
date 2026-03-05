System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, math, Vec2, FUIEvent, ProgressTitleType, GComponent, GSlider, _crd, s_vec2;

  function _reportPossibleCrUseOfFUIEvent(extras) {
    _reporterNs.report("FUIEvent", "./event/Event", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProgressTitleType(extras) {
    _reporterNs.report("ProgressTitleType", "./FieldTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGComponent(extras) {
    _reporterNs.report("GComponent", "./GComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGObject(extras) {
    _reporterNs.report("GObject", "./GObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfByteBuffer(extras) {
    _reporterNs.report("ByteBuffer", "./utils/ByteBuffer", _context.meta, extras);
  }

  _export("GSlider", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      math = _cc.math;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      FUIEvent = _unresolved_2.Event;
    }, function (_unresolved_3) {
      ProgressTitleType = _unresolved_3.ProgressTitleType;
    }, function (_unresolved_4) {
      GComponent = _unresolved_4.GComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cbfd0Cq7/BIJKG6CEz2B/cK", "GSlider", undefined);

      __checkObsolete__(['math', 'Vec2']);

      _export("GSlider", GSlider = class GSlider extends (_crd && GComponent === void 0 ? (_reportPossibleCrUseOfGComponent({
        error: Error()
      }), GComponent) : GComponent) {
        constructor() {
          super();
          this._min = 0;
          this._max = 0;
          this._value = 0;
          this._titleType = void 0;
          this._reverse = void 0;
          this._wholeNumbers = void 0;
          this._titleObject = void 0;
          this._barObjectH = void 0;
          this._barObjectV = void 0;
          this._barMaxWidth = 0;
          this._barMaxHeight = 0;
          this._barMaxWidthDelta = 0;
          this._barMaxHeightDelta = 0;
          this._gripObject = void 0;
          this._clickPos = void 0;
          this._clickPercent = 0;
          this._barStartX = 0;
          this._barStartY = 0;
          this.changeOnClick = true;
          this.canDrag = true;
          this._node.name = "GSlider";
          this._titleType = (_crd && ProgressTitleType === void 0 ? (_reportPossibleCrUseOfProgressTitleType({
            error: Error()
          }), ProgressTitleType) : ProgressTitleType).Percent;
          this._value = 50;
          this._max = 100;
          this._clickPos = new Vec2();
        }

        get titleType() {
          return this._titleType;
        }

        set titleType(value) {
          this._titleType = value;
        }

        get wholeNumbers() {
          return this._wholeNumbers;
        }

        set wholeNumbers(value) {
          if (this._wholeNumbers != value) {
            this._wholeNumbers = value;
            this.update();
          }
        }

        get min() {
          return this._min;
        }

        set min(value) {
          if (this._min != value) {
            this._min = value;
            this.update();
          }
        }

        get max() {
          return this._max;
        }

        set max(value) {
          if (this._max != value) {
            this._max = value;
            this.update();
          }
        }

        get value() {
          return this._value;
        }

        set value(value) {
          if (this._value != value) {
            this._value = value;
            this.update();
          }
        }

        update() {
          this.updateWithPercent((this._value - this._min) / (this._max - this._min));
        }

        updateWithPercent(percent, manual) {
          percent = math.clamp01(percent);

          if (manual) {
            var newValue = math.clamp(this._min + (this._max - this._min) * percent, this._min, this._max);

            if (this._wholeNumbers) {
              newValue = Math.round(newValue);
              percent = math.clamp01((newValue - this._min) / (this._max - this._min));
            }

            if (newValue != this._value) {
              this._value = newValue;

              this._node.emit((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
                error: Error()
              }), FUIEvent) : FUIEvent).STATUS_CHANGED, this);
            }
          }

          if (this._titleObject) {
            switch (this._titleType) {
              case (_crd && ProgressTitleType === void 0 ? (_reportPossibleCrUseOfProgressTitleType({
                error: Error()
              }), ProgressTitleType) : ProgressTitleType).Percent:
                this._titleObject.text = Math.floor(percent * 100) + "%";
                break;

              case (_crd && ProgressTitleType === void 0 ? (_reportPossibleCrUseOfProgressTitleType({
                error: Error()
              }), ProgressTitleType) : ProgressTitleType).ValueAndMax:
                this._titleObject.text = this._value + "/" + this._max;
                break;

              case (_crd && ProgressTitleType === void 0 ? (_reportPossibleCrUseOfProgressTitleType({
                error: Error()
              }), ProgressTitleType) : ProgressTitleType).Value:
                this._titleObject.text = "" + this._value;
                break;

              case (_crd && ProgressTitleType === void 0 ? (_reportPossibleCrUseOfProgressTitleType({
                error: Error()
              }), ProgressTitleType) : ProgressTitleType).Max:
                this._titleObject.text = "" + this._max;
                break;
            }
          }

          var fullWidth = this.width - this._barMaxWidthDelta;
          var fullHeight = this.height - this._barMaxHeightDelta;

          if (!this._reverse) {
            if (this._barObjectH) this._barObjectH.width = Math.round(fullWidth * percent);
            if (this._barObjectV) this._barObjectV.height = Math.round(fullHeight * percent);
          } else {
            if (this._barObjectH) {
              this._barObjectH.width = Math.round(fullWidth * percent);
              this._barObjectH.x = this._barStartX + (fullWidth - this._barObjectH.width);
            }

            if (this._barObjectV) {
              this._barObjectV.height = Math.round(fullHeight * percent);
              this._barObjectV.y = this._barStartY + (fullHeight - this._barObjectV.height);
            }
          }
        }

        constructExtension(buffer) {
          buffer.seek(0, 6);
          this._titleType = buffer.readByte();
          this._reverse = buffer.readBool();

          if (buffer.version >= 2) {
            this._wholeNumbers = buffer.readBool();
            this.changeOnClick = buffer.readBool();
          }

          this._titleObject = this.getChild("title");
          this._barObjectH = this.getChild("bar");
          this._barObjectV = this.getChild("bar_v");
          this._gripObject = this.getChild("grip");

          if (this._barObjectH) {
            this._barMaxWidth = this._barObjectH.width;
            this._barMaxWidthDelta = this.width - this._barMaxWidth;
            this._barStartX = this._barObjectH.x;
          }

          if (this._barObjectV) {
            this._barMaxHeight = this._barObjectV.height;
            this._barMaxHeightDelta = this.height - this._barMaxHeight;
            this._barStartY = this._barObjectV.y;
          }

          if (this._gripObject) {
            this._gripObject.on((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
              error: Error()
            }), FUIEvent) : FUIEvent).TOUCH_BEGIN, this.onGripTouchBegin, this);

            this._gripObject.on((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
              error: Error()
            }), FUIEvent) : FUIEvent).TOUCH_MOVE, this.onGripTouchMove, this);
          }

          this._node.on((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).TOUCH_BEGIN, this.onBarTouchBegin, this);
        }

        handleSizeChanged() {
          super.handleSizeChanged();
          if (this._barObjectH) this._barMaxWidth = this.width - this._barMaxWidthDelta;
          if (this._barObjectV) this._barMaxHeight = this.height - this._barMaxHeightDelta;
          if (!this._underConstruct) this.update();
        }

        setup_afterAdd(buffer, beginPos) {
          super.setup_afterAdd(buffer, beginPos);

          if (!buffer.seek(beginPos, 6)) {
            this.update();
            return;
          }

          if (buffer.readByte() != this.packageItem.objectType) {
            this.update();
            return;
          }

          this._value = buffer.readInt();
          this._max = buffer.readInt();
          if (buffer.version >= 2) this._min = buffer.readInt();
          this.update();
        }

        onGripTouchBegin(evt) {
          this.canDrag = true;
          evt.propagationStopped = true;
          evt.captureTouch();
          this._clickPos = this.globalToLocal(evt.pos.x, evt.pos.y);
          this._clickPercent = math.clamp01((this._value - this._min) / (this._max - this._min));
        }

        onGripTouchMove(evt) {
          if (!this.canDrag) {
            return;
          }

          var pt = this.globalToLocal(evt.pos.x, evt.pos.y, s_vec2);
          var deltaX = pt.x - this._clickPos.x;
          var deltaY = pt.y - this._clickPos.y;

          if (this._reverse) {
            deltaX = -deltaX;
            deltaY = -deltaY;
          }

          var percent;
          if (this._barObjectH) percent = this._clickPercent + deltaX / this._barMaxWidth;else percent = this._clickPercent + deltaY / this._barMaxHeight;
          this.updateWithPercent(percent, true);
        }

        onBarTouchBegin(evt) {
          if (!this.changeOnClick) return;

          var pt = this._gripObject.globalToLocal(evt.pos.x, evt.pos.y, s_vec2);

          var percent = math.clamp01((this._value - this._min) / (this._max - this._min));
          var delta = 0;
          if (this._barObjectH != null) delta = (pt.x - this._gripObject.width / 2) / this._barMaxWidth;
          if (this._barObjectV != null) delta = (pt.y - this._gripObject.height / 2) / this._barMaxHeight;
          if (this._reverse) percent -= delta;else percent += delta;
          this.updateWithPercent(percent, true);
        }

      });

      s_vec2 = new Vec2();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b986826324f3e760269ff601b1d5a5c959ed5983.js.map