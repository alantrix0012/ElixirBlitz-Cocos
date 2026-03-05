System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, math, ProgressTitleType, ObjectPropID, FillMethod, GComponent, GImage, GLoader, EaseType, GTween, GProgressBar, _crd;

  function _reportPossibleCrUseOfProgressTitleType(extras) {
    _reporterNs.report("ProgressTitleType", "./FieldTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectPropID(extras) {
    _reporterNs.report("ObjectPropID", "./FieldTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFillMethod(extras) {
    _reporterNs.report("FillMethod", "./FieldTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGComponent(extras) {
    _reporterNs.report("GComponent", "./GComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGImage(extras) {
    _reporterNs.report("GImage", "./GImage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGLoader(extras) {
    _reporterNs.report("GLoader", "./GLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGObject(extras) {
    _reporterNs.report("GObject", "./GObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEaseType(extras) {
    _reporterNs.report("EaseType", "./tween/EaseType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGTween(extras) {
    _reporterNs.report("GTween", "./tween/GTween", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGTweener(extras) {
    _reporterNs.report("GTweener", "./tween/GTweener", _context.meta, extras);
  }

  function _reportPossibleCrUseOfByteBuffer(extras) {
    _reporterNs.report("ByteBuffer", "./utils/ByteBuffer", _context.meta, extras);
  }

  _export("GProgressBar", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      math = _cc.math;
    }, function (_unresolved_2) {
      ProgressTitleType = _unresolved_2.ProgressTitleType;
      ObjectPropID = _unresolved_2.ObjectPropID;
      FillMethod = _unresolved_2.FillMethod;
    }, function (_unresolved_3) {
      GComponent = _unresolved_3.GComponent;
    }, function (_unresolved_4) {
      GImage = _unresolved_4.GImage;
    }, function (_unresolved_5) {
      GLoader = _unresolved_5.GLoader;
    }, function (_unresolved_6) {
      EaseType = _unresolved_6.EaseType;
    }, function (_unresolved_7) {
      GTween = _unresolved_7.GTween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1ed1aQ3MVlJ95M31MEgvRDm", "GProgressBar", undefined);

      __checkObsolete__(['math']);

      _export("GProgressBar", GProgressBar = class GProgressBar extends (_crd && GComponent === void 0 ? (_reportPossibleCrUseOfGComponent({
        error: Error()
      }), GComponent) : GComponent) {
        constructor() {
          super();
          this._min = 0;
          this._max = 0;
          this._value = 0;
          this._titleType = void 0;
          this._reverse = void 0;
          this._titleObject = void 0;
          this._aniObject = void 0;
          this._barObjectH = void 0;
          this._barObjectV = void 0;
          this._barMaxWidth = 0;
          this._barMaxHeight = 0;
          this._barMaxWidthDelta = 0;
          this._barMaxHeightDelta = 0;
          this._barStartX = 0;
          this._barStartY = 0;
          this._node.name = "GProgressBar";
          this._titleType = (_crd && ProgressTitleType === void 0 ? (_reportPossibleCrUseOfProgressTitleType({
            error: Error()
          }), ProgressTitleType) : ProgressTitleType).Percent;
          this._value = 50;
          this._max = 100;
        }

        get titleType() {
          return this._titleType;
        }

        set titleType(value) {
          if (this._titleType != value) {
            this._titleType = value;
            this.update(this._value);
          }
        }

        get min() {
          return this._min;
        }

        set min(value) {
          if (this._min != value) {
            this._min = value;
            this.update(this._value);
          }
        }

        get max() {
          return this._max;
        }

        set max(value) {
          if (this._max != value) {
            this._max = value;
            this.update(this._value);
          }
        }

        get value() {
          return this._value;
        }

        set value(value) {
          if (this._value != value) {
            (_crd && GTween === void 0 ? (_reportPossibleCrUseOfGTween({
              error: Error()
            }), GTween) : GTween).kill(this, false, this.update);
            this._value = value;
            this.update(value);
          }
        }

        tweenValue(value, duration) {
          var oldValule;
          var tweener = (_crd && GTween === void 0 ? (_reportPossibleCrUseOfGTween({
            error: Error()
          }), GTween) : GTween).getTween(this, this.update);

          if (tweener) {
            oldValule = tweener.value.x;
            tweener.kill();
          } else oldValule = this._value;

          this._value = value;
          return (_crd && GTween === void 0 ? (_reportPossibleCrUseOfGTween({
            error: Error()
          }), GTween) : GTween).to(oldValule, this._value, duration).setTarget(this, this.update).setEase((_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
            error: Error()
          }), EaseType) : EaseType).Linear);
        }

        update(newValue) {
          var percent = math.clamp01((newValue - this._min) / (this._max - this._min));

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
                this._titleObject.text = Math.floor(newValue) + "/" + Math.floor(this._max);
                break;

              case (_crd && ProgressTitleType === void 0 ? (_reportPossibleCrUseOfProgressTitleType({
                error: Error()
              }), ProgressTitleType) : ProgressTitleType).Value:
                this._titleObject.text = "" + Math.floor(newValue);
                break;

              case (_crd && ProgressTitleType === void 0 ? (_reportPossibleCrUseOfProgressTitleType({
                error: Error()
              }), ProgressTitleType) : ProgressTitleType).Max:
                this._titleObject.text = "" + Math.floor(this._max);
                break;
            }
          }

          var fullWidth = this.width - this._barMaxWidthDelta;
          var fullHeight = this.height - this._barMaxHeightDelta;

          if (!this._reverse) {
            if (this._barObjectH) {
              if (!this.setFillAmount(this._barObjectH, percent)) this._barObjectH.width = Math.round(fullWidth * percent);
            }

            if (this._barObjectV) {
              if (!this.setFillAmount(this._barObjectV, percent)) this._barObjectV.height = Math.round(fullHeight * percent);
            }
          } else {
            if (this._barObjectH) {
              if (!this.setFillAmount(this._barObjectH, 1 - percent)) {
                this._barObjectH.width = Math.round(fullWidth * percent);
                this._barObjectH.x = this._barStartX + (fullWidth - this._barObjectH.width);
              }
            }

            if (this._barObjectV) {
              if (!this.setFillAmount(this._barObjectV, 1 - percent)) {
                this._barObjectV.height = Math.round(fullHeight * percent);
                this._barObjectV.y = this._barStartY + (fullHeight - this._barObjectV.height);
              }
            }
          }

          if (this._aniObject) this._aniObject.setProp((_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
            error: Error()
          }), ObjectPropID) : ObjectPropID).Frame, Math.floor(percent * 100));
        }

        setFillAmount(bar, percent) {
          if ((bar instanceof (_crd && GImage === void 0 ? (_reportPossibleCrUseOfGImage({
            error: Error()
          }), GImage) : GImage) || bar instanceof (_crd && GLoader === void 0 ? (_reportPossibleCrUseOfGLoader({
            error: Error()
          }), GLoader) : GLoader)) && bar.fillMethod != (_crd && FillMethod === void 0 ? (_reportPossibleCrUseOfFillMethod({
            error: Error()
          }), FillMethod) : FillMethod).None) {
            bar.fillAmount = percent;
            return true;
          } else return false;
        }

        constructExtension(buffer) {
          buffer.seek(0, 6);
          this._titleType = buffer.readByte();
          this._reverse = buffer.readBool();
          this._titleObject = this.getChild("title");
          this._barObjectH = this.getChild("bar");
          this._barObjectV = this.getChild("bar_v");
          this._aniObject = this.getChild("ani");

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
        }

        handleSizeChanged() {
          super.handleSizeChanged();
          if (this._barObjectH) this._barMaxWidth = this.width - this._barMaxWidthDelta;
          if (this._barObjectV) this._barMaxHeight = this.height - this._barMaxHeightDelta;
          if (!this._underConstruct) this.update(this._value);
        }

        setup_afterAdd(buffer, beginPos) {
          super.setup_afterAdd(buffer, beginPos);

          if (!buffer.seek(beginPos, 6)) {
            this.update(this._value);
            return;
          }

          if (buffer.readByte() != this.packageItem.objectType) {
            this.update(this._value);
            return;
          }

          this._value = buffer.readInt();
          this._max = buffer.readInt();
          if (buffer.version >= 2) this._min = buffer.readInt();
          this.update(this._value);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=39347f26df3a5d0f3d43175f83d6089183bab0f4.js.map