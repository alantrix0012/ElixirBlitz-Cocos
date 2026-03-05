System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, EventMouse, FUIEvent, ButtonMode, ObjectPropID, GComponent, GRoot, GTextField, UIConfig, UIPackage, Window, GButton, _crd;

  function _reportPossibleCrUseOfController(extras) {
    _reporterNs.report("Controller", "./Controller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFUIEvent(extras) {
    _reporterNs.report("FUIEvent", "./event/Event", _context.meta, extras);
  }

  function _reportPossibleCrUseOfButtonMode(extras) {
    _reporterNs.report("ButtonMode", "./FieldTypes", _context.meta, extras);
  }

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

  function _reportPossibleCrUseOfPackageItem(extras) {
    _reporterNs.report("PackageItem", "./PackageItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIConfig(extras) {
    _reporterNs.report("UIConfig", "./UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPackage(extras) {
    _reporterNs.report("UIPackage", "./UIPackage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfByteBuffer(extras) {
    _reporterNs.report("ByteBuffer", "./utils/ByteBuffer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWindow(extras) {
    _reporterNs.report("Window", "./Window", _context.meta, extras);
  }

  _export("GButton", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Color = _cc.Color;
      EventMouse = _cc.EventMouse;
    }, function (_unresolved_2) {
      FUIEvent = _unresolved_2.Event;
    }, function (_unresolved_3) {
      ButtonMode = _unresolved_3.ButtonMode;
      ObjectPropID = _unresolved_3.ObjectPropID;
    }, function (_unresolved_4) {
      GComponent = _unresolved_4.GComponent;
    }, function (_unresolved_5) {
      GRoot = _unresolved_5.GRoot;
    }, function (_unresolved_6) {
      GTextField = _unresolved_6.GTextField;
    }, function (_unresolved_7) {
      UIConfig = _unresolved_7.UIConfig;
    }, function (_unresolved_8) {
      UIPackage = _unresolved_8.UIPackage;
    }, function (_unresolved_9) {
      Window = _unresolved_9.Window;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f1d376qE/dN3ZEwXwkp2HcP", "GButton", undefined);

      __checkObsolete__(['AudioClip', 'Color', 'EventMouse']);

      _export("GButton", GButton = class GButton extends (_crd && GComponent === void 0 ? (_reportPossibleCrUseOfGComponent({
        error: Error()
      }), GComponent) : GComponent) {
        constructor() {
          super();
          this._titleObject = void 0;
          this._iconObject = void 0;
          this._mode = void 0;
          this._selected = void 0;
          this._title = void 0;
          this._selectedTitle = void 0;
          this._icon = void 0;
          this._selectedIcon = void 0;
          this._sound = void 0;
          this._soundVolumeScale = void 0;
          this._buttonController = void 0;
          this._relatedController = void 0;
          this._relatedPageId = void 0;
          this._changeStateOnClick = void 0;
          this._linkedPopup = void 0;
          this._downEffect = void 0;
          this._downEffectValue = void 0;
          this._downColor = void 0;
          this._downScaled = void 0;
          this._down = void 0;
          this._over = void 0;
          this._node.name = "GButton";
          this._mode = (_crd && ButtonMode === void 0 ? (_reportPossibleCrUseOfButtonMode({
            error: Error()
          }), ButtonMode) : ButtonMode).Common;
          this._title = "";
          this._icon = "";
          this._sound = (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
            error: Error()
          }), UIConfig) : UIConfig).buttonSound;
          this._soundVolumeScale = (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
            error: Error()
          }), UIConfig) : UIConfig).buttonSoundVolumeScale;
          this._changeStateOnClick = true;
          this._downEffect = 0;
          this._downEffectValue = 0.8;
        }

        get icon() {
          return this._icon;
        }

        set icon(value) {
          this._icon = value;
          value = this._selected && this._selectedIcon ? this._selectedIcon : this._icon;
          if (this._iconObject) this._iconObject.icon = value;
          this.updateGear(7);
        }

        get selectedIcon() {
          return this._selectedIcon;
        }

        set selectedIcon(value) {
          this._selectedIcon = value;
          value = this._selected && this._selectedIcon ? this._selectedIcon : this._icon;
          if (this._iconObject) this._iconObject.icon = value;
        }

        get title() {
          return this._title;
        }

        set title(value) {
          this._title = value;
          if (this._titleObject) this._titleObject.text = this._selected && this._selectedTitle ? this._selectedTitle : this._title;
          this.updateGear(6);
        }

        get text() {
          return this.title;
        }

        set text(value) {
          this.title = value;
        }

        get selectedTitle() {
          return this._selectedTitle;
        }

        set selectedTitle(value) {
          this._selectedTitle = value;
          if (this._titleObject) this._titleObject.text = this._selected && this._selectedTitle ? this._selectedTitle : this._title;
        }

        get titleColor() {
          var tf = this.getTextField();
          if (tf) return tf.color;else return Color.BLACK;
        }

        set titleColor(value) {
          var tf = this.getTextField();
          if (tf) tf.color = value;
        }

        get titleFontSize() {
          var tf = this.getTextField();
          if (tf) return tf.fontSize;else return 0;
        }

        set titleFontSize(value) {
          var tf = this.getTextField();
          if (tf) tf.fontSize = value;
        }

        get sound() {
          return this._sound;
        }

        set sound(val) {
          this._sound = val;
        }

        get soundVolumeScale() {
          return this._soundVolumeScale;
        }

        set soundVolumeScale(value) {
          this._soundVolumeScale = value;
        }

        set selected(val) {
          if (this._mode == (_crd && ButtonMode === void 0 ? (_reportPossibleCrUseOfButtonMode({
            error: Error()
          }), ButtonMode) : ButtonMode).Common) return;

          if (this._selected != val) {
            this._selected = val;
            this.setCurrentState();
            if (this._selectedTitle && this._titleObject) this._titleObject.text = this._selected ? this._selectedTitle : this._title;

            if (this._selectedIcon) {
              var str = this._selected ? this._selectedIcon : this._icon;
              if (this._iconObject) this._iconObject.icon = str;
            }

            if (this._relatedController && this._parent && !this._parent._buildingDisplayList) {
              if (this._selected) {
                this._relatedController.selectedPageId = this._relatedPageId;
                if (this._relatedController.autoRadioGroupDepth) this._parent.adjustRadioGroupDepth(this, this._relatedController);
              } else if (this._mode == (_crd && ButtonMode === void 0 ? (_reportPossibleCrUseOfButtonMode({
                error: Error()
              }), ButtonMode) : ButtonMode).Check && this._relatedController.selectedPageId == this._relatedPageId) this._relatedController.oppositePageId = this._relatedPageId;
            }
          }
        }

        get selected() {
          return this._selected;
        }

        get mode() {
          return this._mode;
        }

        set mode(value) {
          if (this._mode != value) {
            if (value == (_crd && ButtonMode === void 0 ? (_reportPossibleCrUseOfButtonMode({
              error: Error()
            }), ButtonMode) : ButtonMode).Common) this.selected = false;
            this._mode = value;
          }
        }

        get relatedController() {
          return this._relatedController;
        }

        set relatedController(val) {
          this._relatedController = val;
        }

        get relatedPageId() {
          return this._relatedPageId;
        }

        set relatedPageId(val) {
          this._relatedPageId = val;
        }

        get changeStateOnClick() {
          return this._changeStateOnClick;
        }

        set changeStateOnClick(value) {
          this._changeStateOnClick = value;
        }

        get linkedPopup() {
          return this._linkedPopup;
        }

        set linkedPopup(value) {
          this._linkedPopup = value;
        }

        getTextField() {
          if (this._titleObject instanceof (_crd && GTextField === void 0 ? (_reportPossibleCrUseOfGTextField({
            error: Error()
          }), GTextField) : GTextField)) return this._titleObject;else if ('getTextField' in this._titleObject) return this._titleObject.getTextField();else return null;
        }

        fireClick() {
          (_crd && GRoot === void 0 ? (_reportPossibleCrUseOfGRoot({
            error: Error()
          }), GRoot) : GRoot).inst.inputProcessor.simulateClick(this);
        }

        setState(val) {
          if (this._buttonController) this._buttonController.selectedPage = val;

          if (this._downEffect == 1) {
            var cnt = this.numChildren;

            if (val == GButton.DOWN || val == GButton.SELECTED_OVER || val == GButton.SELECTED_DISABLED) {
              if (!this._downColor) this._downColor = new Color();
              var r = this._downEffectValue * 255;
              this._downColor.r = this._downColor.g = this._downColor.b = r;

              for (var i = 0; i < cnt; i++) {
                var obj = this.getChildAt(i);
                if (!(obj instanceof (_crd && GTextField === void 0 ? (_reportPossibleCrUseOfGTextField({
                  error: Error()
                }), GTextField) : GTextField))) obj.setProp((_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
                  error: Error()
                }), ObjectPropID) : ObjectPropID).Color, this._downColor);
              }
            } else {
              for (var i = 0; i < cnt; i++) {
                var obj = this.getChildAt(i);
                if (!(obj instanceof (_crd && GTextField === void 0 ? (_reportPossibleCrUseOfGTextField({
                  error: Error()
                }), GTextField) : GTextField))) obj.setProp((_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
                  error: Error()
                }), ObjectPropID) : ObjectPropID).Color, Color.WHITE);
              }
            }
          } else if (this._downEffect == 2) {
            if (val == GButton.DOWN || val == GButton.SELECTED_OVER || val == GButton.SELECTED_DISABLED) {
              if (!this._downScaled) {
                this._downScaled = true;
                this.setScale(this.scaleX * this._downEffectValue, this.scaleY * this._downEffectValue);
              }
            } else {
              if (this._downScaled) {
                this._downScaled = false;
                this.setScale(this.scaleX / this._downEffectValue, this.scaleY / this._downEffectValue);
              }
            }
          }
        }

        setCurrentState() {
          if (this.grayed && this._buttonController && this._buttonController.hasPage(GButton.DISABLED)) {
            if (this._selected) this.setState(GButton.SELECTED_DISABLED);else this.setState(GButton.DISABLED);
          } else {
            if (this._selected) this.setState(this._over ? GButton.SELECTED_OVER : GButton.DOWN);else this.setState(this._over ? GButton.OVER : GButton.UP);
          }
        }

        handleControllerChanged(c) {
          super.handleControllerChanged(c);
          if (this._relatedController == c) this.selected = this._relatedPageId == c.selectedPageId;
        }

        handleGrayedChanged() {
          if (this._buttonController && this._buttonController.hasPage(GButton.DISABLED)) {
            if (this.grayed) {
              if (this._selected && this._buttonController.hasPage(GButton.SELECTED_DISABLED)) this.setState(GButton.SELECTED_DISABLED);else this.setState(GButton.DISABLED);
            } else if (this._selected) this.setState(GButton.DOWN);else this.setState(GButton.UP);
          } else super.handleGrayedChanged();
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

            case (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).Selected:
              return this.selected;

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

            case (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).Selected:
              this.selected = value;
              break;

            default:
              super.setProp(index, value);
              break;
          }
        }

        constructExtension(buffer) {
          buffer.seek(0, 6);
          this._mode = buffer.readByte();
          var str = buffer.readS();
          if (str) this._sound = str;
          this._soundVolumeScale = buffer.readFloat();
          this._downEffect = buffer.readByte();
          this._downEffectValue = buffer.readFloat();
          if (this._downEffect == 2) this.setPivot(0.5, 0.5, this.pivotAsAnchor);
          this._buttonController = this.getController("button");
          this._titleObject = this.getChild("title");
          this._iconObject = this.getChild("icon");
          if (this._titleObject) this._title = this._titleObject.text;
          if (this._iconObject) this._icon = this._iconObject.icon;
          if (this._mode == (_crd && ButtonMode === void 0 ? (_reportPossibleCrUseOfButtonMode({
            error: Error()
          }), ButtonMode) : ButtonMode).Common) this.setState(GButton.UP);

          this._node.on((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).TOUCH_BEGIN, this.onTouchBegin_1, this);

          this._node.on((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).TOUCH_END, this.onTouchEnd_1, this);

          this._node.on((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).ROLL_OVER, this.onRollOver_1, this);

          this._node.on((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).ROLL_OUT, this.onRollOut_1, this);

          this._node.on((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).CLICK, this.onClick_1, this);
        }

        setup_afterAdd(buffer, beginPos) {
          super.setup_afterAdd(buffer, beginPos);
          if (!buffer.seek(beginPos, 6)) return;
          if (buffer.readByte() != this.packageItem.objectType) return;
          var str;
          var iv;
          str = buffer.readS();
          if (str != null) this.title = str;
          str = buffer.readS();
          if (str != null) this.selectedTitle = str;
          str = buffer.readS();
          if (str != null) this.icon = str;
          str = buffer.readS();
          if (str != null) this.selectedIcon = str;
          if (buffer.readBool()) this.titleColor = buffer.readColor();
          iv = buffer.readInt();
          if (iv != 0) this.titleFontSize = iv;
          iv = buffer.readShort();
          if (iv >= 0) this._relatedController = this.parent.getControllerAt(iv);
          this._relatedPageId = buffer.readS();
          str = buffer.readS();
          if (str != null) this._sound = str;
          if (buffer.readBool()) this._soundVolumeScale = buffer.readFloat();
          this.selected = buffer.readBool();
        }

        onRollOver_1() {
          if (!this._buttonController || !this._buttonController.hasPage(GButton.OVER)) return;
          this._over = true;
          if (this._down) return;
          if (this.grayed && this._buttonController.hasPage(GButton.DISABLED)) return;
          this.setState(this._selected ? GButton.SELECTED_OVER : GButton.OVER);
        }

        onRollOut_1() {
          if (!this._buttonController || !this._buttonController.hasPage(GButton.OVER)) return;
          this._over = false;
          if (this._down) return;
          if (this.grayed && this._buttonController.hasPage(GButton.DISABLED)) return;
          this.setState(this._selected ? GButton.DOWN : GButton.UP);
        }

        onTouchBegin_1(evt) {
          if (evt.button != EventMouse.BUTTON_LEFT) return;
          this._down = true;
          evt.captureTouch();

          if (this._mode == (_crd && ButtonMode === void 0 ? (_reportPossibleCrUseOfButtonMode({
            error: Error()
          }), ButtonMode) : ButtonMode).Common) {
            if (this.grayed && this._buttonController && this._buttonController.hasPage(GButton.DISABLED)) this.setState(GButton.SELECTED_DISABLED);else this.setState(GButton.DOWN);
          }

          if (this._linkedPopup) {
            if (this._linkedPopup instanceof (_crd && Window === void 0 ? (_reportPossibleCrUseOfWindow({
              error: Error()
            }), Window) : Window)) this._linkedPopup.toggleStatus();else (_crd && GRoot === void 0 ? (_reportPossibleCrUseOfGRoot({
              error: Error()
            }), GRoot) : GRoot).inst.togglePopup(this._linkedPopup, this);
          }
        }

        onTouchEnd_1(evt) {
          if (evt.button != EventMouse.BUTTON_LEFT) return;

          if (this._down) {
            this._down = false;
            if (this._node == null) return;

            if (this._mode == (_crd && ButtonMode === void 0 ? (_reportPossibleCrUseOfButtonMode({
              error: Error()
            }), ButtonMode) : ButtonMode).Common) {
              if (this.grayed && this._buttonController && this._buttonController.hasPage(GButton.DISABLED)) this.setState(GButton.DISABLED);else if (this._over) this.setState(GButton.OVER);else this.setState(GButton.UP);
            } else {
              if (!this._over && this._buttonController != null && (this._buttonController.selectedPage == GButton.OVER || this._buttonController.selectedPage == GButton.SELECTED_OVER)) {
                this.setCurrentState();
              }
            }
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

          if (this._mode == (_crd && ButtonMode === void 0 ? (_reportPossibleCrUseOfButtonMode({
            error: Error()
          }), ButtonMode) : ButtonMode).Check) {
            if (this._changeStateOnClick) {
              this.selected = !this._selected;

              this._node.emit((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
                error: Error()
              }), FUIEvent) : FUIEvent).STATUS_CHANGED, this);
            }
          } else if (this._mode == (_crd && ButtonMode === void 0 ? (_reportPossibleCrUseOfButtonMode({
            error: Error()
          }), ButtonMode) : ButtonMode).Radio) {
            if (this._changeStateOnClick && !this._selected) {
              this.selected = true;

              this._node.emit((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
                error: Error()
              }), FUIEvent) : FUIEvent).STATUS_CHANGED, this);
            }
          } else {
            if (this._relatedController) this._relatedController.selectedPageId = this._relatedPageId;
          }
        }

      });

      GButton.UP = "up";
      GButton.DOWN = "down";
      GButton.OVER = "over";
      GButton.SELECTED_OVER = "selectedOver";
      GButton.DISABLED = "disabled";
      GButton.SELECTED_DISABLED = "selectedDisabled";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c1b8e0f8c0deba63351f742ae474e0b920b6c548.js.map