System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Sprite, MovieClip, ObjectPropID, GObject, GMovieClip, _crd;

  function _reportPossibleCrUseOfMovieClip(extras) {
    _reporterNs.report("MovieClip", "./display/MovieClip", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectPropID(extras) {
    _reporterNs.report("ObjectPropID", "./FieldTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGObject(extras) {
    _reporterNs.report("GObject", "./GObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPackageItem(extras) {
    _reporterNs.report("PackageItem", "./PackageItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfByteBuffer(extras) {
    _reporterNs.report("ByteBuffer", "./utils/ByteBuffer", _context.meta, extras);
  }

  _export("GMovieClip", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      MovieClip = _unresolved_2.MovieClip;
    }, function (_unresolved_3) {
      ObjectPropID = _unresolved_3.ObjectPropID;
    }, function (_unresolved_4) {
      GObject = _unresolved_4.GObject;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "32521BM6UFMfLWjmWiPT2+P", "GMovieClip", undefined);

      __checkObsolete__(['Sprite', 'Color']);

      _export("GMovieClip", GMovieClip = class GMovieClip extends (_crd && GObject === void 0 ? (_reportPossibleCrUseOfGObject({
        error: Error()
      }), GObject) : GObject) {
        constructor() {
          super();
          this._content = void 0;
          this._node.name = "GMovieClip";
          this._touchDisabled = true;
          this._content = this._node.addComponent(_crd && MovieClip === void 0 ? (_reportPossibleCrUseOfMovieClip({
            error: Error()
          }), MovieClip) : MovieClip);
          this._content.sizeMode = Sprite.SizeMode.CUSTOM;
          this._content.trim = false;

          this._content.setPlaySettings();
        }

        get color() {
          return this._content.color;
        }

        set color(value) {
          this._content.color = value;
          this.updateGear(4);
        }

        get playing() {
          return this._content.playing;
        }

        set playing(value) {
          if (this._content.playing != value) {
            this._content.playing = value;
            this.updateGear(5);
          }
        }

        get frame() {
          return this._content.frame;
        }

        set frame(value) {
          if (this._content.frame != value) {
            this._content.frame = value;
            this.updateGear(5);
          }
        }

        get timeScale() {
          return this._content.timeScale;
        }

        set timeScale(value) {
          this._content.timeScale = value;
        }

        rewind() {
          this._content.rewind();
        }

        syncStatus(anotherMc) {
          this._content.syncStatus(anotherMc._content);
        }

        advance(timeInSeconds) {
          this._content.advance(timeInSeconds);
        } //从start帧开始，播放到end帧（-1表示结尾），重复times次（0表示无限循环），循环结束后，停止在endAt帧（-1表示参数end）


        setPlaySettings(start, end, times, endAt, endCallback) {
          this._content.setPlaySettings(start, end, times, endAt, endCallback);
        }

        handleGrayedChanged() {
          this._content.grayscale = this._grayed;
        }

        handleSizeChanged() {
          super.handleSizeChanged(); //不知道原因，尺寸改变必须调用一次这个，否则大小不对

          this._content.sizeMode = Sprite.SizeMode.CUSTOM;
        }

        getProp(index) {
          switch (index) {
            case (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).Color:
              return this.color;

            case (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).Playing:
              return this.playing;

            case (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).Frame:
              return this.frame;

            case (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).TimeScale:
              return this.timeScale;

            default:
              return super.getProp(index);
          }
        }

        setProp(index, value) {
          switch (index) {
            case (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).Color:
              this.color = value;
              break;

            case (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).Playing:
              this.playing = value;
              break;

            case (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).Frame:
              this.frame = value;
              break;

            case (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).TimeScale:
              this.timeScale = value;
              break;

            case (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).DeltaTime:
              this.advance(value);
              break;

            default:
              super.setProp(index, value);
              break;
          }
        }

        constructFromResource() {
          var contentItem = this.packageItem.getBranch();
          this.sourceWidth = contentItem.width;
          this.sourceHeight = contentItem.height;
          this.initWidth = this.sourceWidth;
          this.initHeight = this.sourceHeight;
          this.setSize(this.sourceWidth, this.sourceHeight);
          contentItem = contentItem.getHighResolution();
          contentItem.load();
          this._content.interval = contentItem.interval;
          this._content.swing = contentItem.swing;
          this._content.repeatDelay = contentItem.repeatDelay;
          this._content.frames = contentItem.frames;
          this._content.smoothing = contentItem.smoothing;
        }

        setup_beforeAdd(buffer, beginPos) {
          super.setup_beforeAdd(buffer, beginPos);
          buffer.seek(beginPos, 5);
          if (buffer.readBool()) this.color = buffer.readColor();
          buffer.readByte(); //flip

          this._content.frame = buffer.readInt();
          this._content.playing = buffer.readBool();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=824c6b4aa7bf92183d6516ba8922973e88855895.js.map