System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, ObjectPropID, GComponent, GRoot, GTextField, GTextInput, UIPackage, FUIEvent, GLabel, _crd;

  function _reportPossibleCrUseOfObjectPropID(extras) {
    _reporterNs.report("ObjectPropID", "./FieldTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGComponent(extras) {
    _reporterNs.report("GComponent", "./GComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGObject(extras) {
    _reporterNs.report("GObject", "./GObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGRoot(extras) {
    _reporterNs.report("GRoot", "./GRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGTextField(extras) {
    _reporterNs.report("GTextField", "./GTextField", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGTextInput(extras) {
    _reporterNs.report("GTextInput", "./GTextInput", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPackageItem(extras) {
    _reporterNs.report("PackageItem", "./PackageItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPackage(extras) {
    _reporterNs.report("UIPackage", "./UIPackage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfByteBuffer(extras) {
    _reporterNs.report("ByteBuffer", "./utils/ByteBuffer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFUIEvent(extras) {
    _reporterNs.report("FUIEvent", "./event/Event", _context.meta, extras);
  }

  _export("GLabel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Color = _cc.Color;
    }, function (_unresolved_2) {
      ObjectPropID = _unresolved_2.ObjectPropID;
    }, function (_unresolved_3) {
      GComponent = _unresolved_3.GComponent;
    }, function (_unresolved_4) {
      GRoot = _unresolved_4.GRoot;
    }, function (_unresolved_5) {
      GTextField = _unresolved_5.GTextField;
    }, function (_unresolved_6) {
      GTextInput = _unresolved_6.GTextInput;
    }, function (_unresolved_7) {
      UIPackage = _unresolved_7.UIPackage;
    }, function (_unresolved_8) {
      FUIEvent = _unresolved_8.Event;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "06853MnyFZNk4CKd/S9VCIf", "GLabel", undefined);

      __checkObsolete__(['AudioClip', 'Color']);

      _export("GLabel", GLabel = class GLabel extends (_crd && GComponent === void 0 ? (_reportPossibleCrUseOfGComponent({
        error: Error()
      }), GComponent) : GComponent) {
        constructor() {
          super();
          this._titleObject = void 0;
          this._iconObject = void 0;
          this._sound = void 0;
          this._soundVolumeScale = void 0;
          this._node.name = "GLabel";
        }

        get icon() {
          if (this._iconObject) return this._iconObject.icon;
        }

        set icon(value) {
          if (this._iconObject) this._iconObject.icon = value;
          this.updateGear(7);
        }

        get title() {
          if (this._titleObject) return this._titleObject.text;else return null;
        }

        set title(value) {
          if (this._titleObject) this._titleObject.text = value;
          this.updateGear(6);
        }

        get text() {
          return this.title;
        }

        set text(value) {
          this.title = value;
        }

        get titleColor() {
          var tf = this.getTextField();
          if (tf) return tf.color;else return Color.WHITE;
        }

        set titleColor(value) {
          var tf = this.getTextField();
          if (tf) tf.color = value;
          this.updateGear(4);
        }

        get titleFontSize() {
          var tf = this.getTextField();
          if (tf) return tf.fontSize;else return 0;
        }

        set titleFontSize(value) {
          var tf = this.getTextField();
          if (tf) tf.fontSize = value;
        }

        set editable(val) {
          if (this._titleObject && this._titleObject instanceof (_crd && GTextInput === void 0 ? (_reportPossibleCrUseOfGTextInput({
            error: Error()
          }), GTextInput) : GTextInput)) this._titleObject.editable = val;
        }

        get editable() {
          if (this._titleObject && this._titleObject instanceof (_crd && GTextInput === void 0 ? (_reportPossibleCrUseOfGTextInput({
            error: Error()
          }), GTextInput) : GTextInput)) return this._titleObject.editable;else return false;
        }

        getTextField() {
          if (this._titleObject instanceof (_crd && GTextField === void 0 ? (_reportPossibleCrUseOfGTextField({
            error: Error()
          }), GTextField) : GTextField)) return this._titleObject;else if ('getTextField' in this._titleObject) return this._titleObject.getTextField();else return null;
        }

        getProp(index) {
          switch (index) {
            case (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).Color:
              return this.titleColor;

            case (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).OutlineColor:
              {
                var tf = this.getTextField();
                if (tf) return tf.strokeColor;else return 0;
              }

            case (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).FontSize:
              return this.titleFontSize;

            default:
              return super.getProp(index);
          }
        }

        setProp(index, value) {
          switch (index) {
            case (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).Color:
              this.titleColor = value;
              break;

            case (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).OutlineColor:
              {
                var tf = this.getTextField();
                if (tf) tf.strokeColor = value;
              }
              break;

            case (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).FontSize:
              this.titleFontSize = value;
              break;

            default:
              super.setProp(index, value);
              break;
          }
        }

        constructExtension(buffer) {
          this._titleObject = this.getChild("title");
          this._iconObject = this.getChild("icon");
        }

        setup_afterAdd(buffer, beginPos) {
          super.setup_afterAdd(buffer, beginPos);
          if (!buffer.seek(beginPos, 6)) return;
          if (buffer.readByte() != this.packageItem.objectType) return;
          var str;
          str = buffer.readS();
          if (str != null) this.title = str;
          str = buffer.readS();
          if (str != null) this.icon = str;
          if (buffer.readBool()) this.titleColor = buffer.readColor();
          var iv = buffer.readInt();
          if (iv != 0) this.titleFontSize = iv;

          if (buffer.readBool()) {
            var input = this.getTextField();

            if (input instanceof (_crd && GTextInput === void 0 ? (_reportPossibleCrUseOfGTextInput({
              error: Error()
            }), GTextInput) : GTextInput)) {
              str = buffer.readS();
              if (str != null) input.promptText = str;
              str = buffer.readS();
              if (str != null) input.restrict = str;
              iv = buffer.readInt();
              if (iv != 0) input.maxLength = iv;
              iv = buffer.readInt();

              if (iv != 0) {//keyboardType
              }

              if (buffer.readBool()) input.password = true;
            } else buffer.skip(13);
          }

          str = buffer.readS();

          if (str != null) {
            this._sound = str;

            if (buffer.readBool()) {
              this._soundVolumeScale = buffer.readFloat();
            }

            this._node.on((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
              error: Error()
            }), FUIEvent) : FUIEvent).CLICK, this.onClick_1, this);
          }
        }

        onClick_1() {
          if (this._sound) {
            var pi = (_crd && UIPackage === void 0 ? (_reportPossibleCrUseOfUIPackage({
              error: Error()
            }), UIPackage) : UIPackage).getItemByURL(this._sound);

            if (pi) {
              var sound = pi.owner.getItemAsset(pi);
              if (sound) (_crd && GRoot === void 0 ? (_reportPossibleCrUseOfGRoot({
                error: Error()
              }), GRoot) : GRoot).inst.playOneShotSound(sound, this._soundVolumeScale);
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e21f630f5599f9b5f6c07b528d7f844459a412e4.js.map