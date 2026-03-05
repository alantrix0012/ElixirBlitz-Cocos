System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BitmapFont, Color, Font, Label, Node, Vec2, FUIEvent, AutoSizeType, ObjectPropID, GObject, UIConfig, getFontByName, UIPackage, toGrayedColor, defaultParser, GTextField, _crd;

  function _reportPossibleCrUseOfFUIEvent(extras) {
    _reporterNs.report("FUIEvent", "./event/Event", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoSizeType(extras) {
    _reporterNs.report("AutoSizeType", "./FieldTypes", _context.meta, extras);
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

  function _reportPossibleCrUseOfUIConfig(extras) {
    _reporterNs.report("UIConfig", "./UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetFontByName(extras) {
    _reporterNs.report("getFontByName", "./UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPackage(extras) {
    _reporterNs.report("UIPackage", "./UIPackage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfByteBuffer(extras) {
    _reporterNs.report("ByteBuffer", "./utils/ByteBuffer", _context.meta, extras);
  }

  function _reportPossibleCrUseOftoGrayedColor(extras) {
    _reporterNs.report("toGrayedColor", "./utils/ToolSet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdefaultParser(extras) {
    _reporterNs.report("defaultParser", "./utils/UBBParser", _context.meta, extras);
  }

  _export("GTextField", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      BitmapFont = _cc.BitmapFont;
      Color = _cc.Color;
      Font = _cc.Font;
      Label = _cc.Label;
      Node = _cc.Node;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      FUIEvent = _unresolved_2.Event;
    }, function (_unresolved_3) {
      AutoSizeType = _unresolved_3.AutoSizeType;
      ObjectPropID = _unresolved_3.ObjectPropID;
    }, function (_unresolved_4) {
      GObject = _unresolved_4.GObject;
    }, function (_unresolved_5) {
      UIConfig = _unresolved_5.UIConfig;
      getFontByName = _unresolved_5.getFontByName;
    }, function (_unresolved_6) {
      UIPackage = _unresolved_6.UIPackage;
    }, function (_unresolved_7) {
      toGrayedColor = _unresolved_7.toGrayedColor;
    }, function (_unresolved_8) {
      defaultParser = _unresolved_8.defaultParser;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7a451E6iRxLrb187DxYPTdT", "GTextField", undefined);

      __checkObsolete__(['BitmapFont', 'Color', 'Font', 'HorizontalTextAlignment', 'Label', 'Node', 'Vec2', 'VerticalTextAlignment']);

      _export("GTextField", GTextField = class GTextField extends (_crd && GObject === void 0 ? (_reportPossibleCrUseOfGObject({
        error: Error()
      }), GObject) : GObject) {
        constructor() {
          super();
          this._label = void 0;
          this._font = void 0;
          this._realFont = void 0;
          this._fontSize = 0;
          this._color = void 0;
          this._strokeColor = void 0;
          this._shadowOffset = void 0;
          this._shadowColor = void 0;
          this._leading = 0;
          this._text = void 0;
          this._ubbEnabled = void 0;
          this._templateVars = void 0;
          this._autoSize = void 0;
          this._updatingSize = void 0;
          this._sizeDirty = void 0;
          this._node.name = "GTextField";
          this._touchDisabled = true;
          this._text = "";
          this._color = new Color(255, 255, 255, 255);
          this.createRenderer();
          this.fontSize = 12;
          this.leading = 3;
          this.singleLine = false;
          this._sizeDirty = false;

          this._node.on(Node.EventType.SIZE_CHANGED, this.onLabelSizeChanged, this);
        }

        createRenderer() {
          this._label = this._node.addComponent(Label);
          this._label.string = "";
          this.autoSize = (_crd && AutoSizeType === void 0 ? (_reportPossibleCrUseOfAutoSizeType({
            error: Error()
          }), AutoSizeType) : AutoSizeType).Both;
        }

        set text(value) {
          this._text = value;
          if (this._text == null) this._text = "";
          this.updateGear(6);
          this.markSizeChanged();
          this.updateText();
        }

        get text() {
          return this._text;
        }

        get font() {
          return this._font;
        }

        set font(value) {
          if (this._font != value || !value) {
            this._font = value;
            this.markSizeChanged();
            let newFont = value ? value : (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).defaultFont;

            if (newFont.startsWith("ui://")) {
              var pi = (_crd && UIPackage === void 0 ? (_reportPossibleCrUseOfUIPackage({
                error: Error()
              }), UIPackage) : UIPackage).getItemByURL(newFont);
              if (pi) newFont = pi.owner.getItemAsset(pi);else newFont = (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).defaultFont;
            }

            this._realFont = newFont;
            this.updateFont();
          }
        }

        get fontSize() {
          return this._fontSize;
        }

        set fontSize(value) {
          if (value < 0) return;

          if (this._fontSize != value) {
            this._fontSize = value;
            this.markSizeChanged();
            this.updateFontSize();
          }
        }

        get color() {
          return this._color;
        }

        set color(value) {
          this._color.set(value);

          this.updateGear(4);
          this.updateFontColor();
        }

        get align() {
          return this._label ? this._label.horizontalAlign : 0;
        }

        set align(value) {
          if (this._label) this._label.horizontalAlign = value;
        }

        get verticalAlign() {
          return this._label ? this._label.verticalAlign : 0;
        }

        set verticalAlign(value) {
          if (this._label) this._label.verticalAlign = value;
        }

        get leading() {
          return this._leading;
        }

        set leading(value) {
          if (this._leading != value) {
            this._leading = value;
            this.markSizeChanged();
            this.updateFontSize();
          }
        }

        get letterSpacing() {
          return this._label ? this._label.spacingX : 0;
        }

        set letterSpacing(value) {
          if (this._label && this._label.spacingX != value) {
            this.markSizeChanged();
            this._label.spacingX = value;
          }
        }

        get underline() {
          return this._label ? this._label.isUnderline : false;
        }

        set underline(value) {
          if (this._label) this._label.isUnderline = value;
        }

        get bold() {
          return this._label ? this._label.isBold : false;
        }

        set bold(value) {
          if (this._label) this._label.isBold = value;
        }

        get italic() {
          return this._label ? this._label.isItalic : false;
        }

        set italic(value) {
          if (this._label) this._label.isItalic = value;
        }

        get singleLine() {
          return this._label ? !this._label.enableWrapText : false;
        }

        set singleLine(value) {
          if (this._label) this._label.enableWrapText = !value;
        }

        get stroke() {
          return this._label ? this._label.outlineWidth : 0;
        }

        set stroke(value) {
          if (!this._label) return;
          this._label.outlineWidth = value;
          this._label.enableOutline = value > 0;
          if (value > 0) this.updateStrokeColor();
        }

        get strokeColor() {
          return this._strokeColor;
        }

        set strokeColor(value) {
          if (!this._strokeColor) this._strokeColor = new Color();

          this._strokeColor.set(value);

          this.updateGear(4);
          this.updateStrokeColor();
        }

        get shadowOffset() {
          return this._shadowOffset;
        }

        set shadowOffset(value) {
          if (!this._shadowOffset) this._shadowOffset = new Vec2();

          this._shadowOffset.set(value);

          if (!this._label) return;
          this._label.shadowOffset = new Vec2(this._shadowOffset.x, -this._shadowOffset.y);
          this._label.enableShadow = value.x != 0 || value.y != 0;
          if (this._label.enableShadow) this.updateShadowColor();
        }

        get shadowColor() {
          return this._shadowColor;
        }

        set shadowColor(value) {
          if (!this._shadowColor) this._shadowColor = new Color();

          this._shadowColor.set(value);

          this.updateShadowColor();
        }

        set ubbEnabled(value) {
          if (this._ubbEnabled != value) {
            this._ubbEnabled = value;
            this.markSizeChanged();
            this.updateText();
          }
        }

        get ubbEnabled() {
          return this._ubbEnabled;
        }

        set autoSize(value) {
          if (this._autoSize != value) {
            this._autoSize = value;
            this.markSizeChanged();
            this.updateOverflow();
          }
        }

        get autoSize() {
          return this._autoSize;
        }

        parseTemplate(template) {
          var pos1 = 0,
              pos2,
              pos3;
          var tag;
          var value;
          var result = "";

          while ((pos2 = template.indexOf("{", pos1)) != -1) {
            if (pos2 > 0 && template.charCodeAt(pos2 - 1) == 92) //\
              {
                result += template.substring(pos1, pos2 - 1);
                result += "{";
                pos1 = pos2 + 1;
                continue;
              }

            result += template.substring(pos1, pos2);
            pos1 = pos2;
            pos2 = template.indexOf("}", pos1);
            if (pos2 == -1) break;

            if (pos2 == pos1 + 1) {
              result += template.substring(pos1, pos1 + 2);
              pos1 = pos2 + 1;
              continue;
            }

            tag = template.substring(pos1 + 1, pos2);
            pos3 = tag.indexOf("=");

            if (pos3 != -1) {
              value = this._templateVars[tag.substring(0, pos3)];
              if (value == null) result += tag.substring(pos3 + 1);else result += value;
            } else {
              value = this._templateVars[tag];
              if (value != null) result += value;
            }

            pos1 = pos2 + 1;
          }

          if (pos1 < template.length) result += template.substring(pos1);
          return result;
        }

        get templateVars() {
          return this._templateVars;
        }

        set templateVars(value) {
          if (this._templateVars == null && value == null) return;
          this._templateVars = value;
          this.flushVars();
        }

        setVar(name, value) {
          if (!this._templateVars) this._templateVars = {};
          this._templateVars[name] = value;
          return this;
        }

        flushVars() {
          this.markSizeChanged();
          this.updateText();
        }

        get textWidth() {
          this.ensureSizeCorrect();
          return this._uiTrans.width;
        }

        ensureSizeCorrect() {
          if (this._sizeDirty) {
            this._label.updateRenderData(true);

            this._sizeDirty = false;
          }
        }

        updateText() {
          var text2 = this._text;
          if (this._templateVars) text2 = this.parseTemplate(text2);
          if (this._ubbEnabled) //不支持同一个文本不同样式
            text2 = (_crd && defaultParser === void 0 ? (_reportPossibleCrUseOfdefaultParser({
              error: Error()
            }), defaultParser) : defaultParser).parse(text2, true);
          this._label.string = text2;
        }

        assignFont(label, value) {
          if (value instanceof Font) label.font = value;else {
            let font = (_crd && getFontByName === void 0 ? (_reportPossibleCrUseOfgetFontByName({
              error: Error()
            }), getFontByName) : getFontByName)(value);

            if (!font) {
              label.fontFamily = value;
              label.useSystemFont = true;
            } else label.font = font;
          }
        }

        assignFontColor(label, value) {
          let font = label.font;
          if (font instanceof BitmapFont && !font.fntConfig.canTint) value = Color.WHITE;
          if (this._grayed) value = (_crd && toGrayedColor === void 0 ? (_reportPossibleCrUseOftoGrayedColor({
            error: Error()
          }), toGrayedColor) : toGrayedColor)(value);
          label.color = value;
        }

        updateFont() {
          this.assignFont(this._label, this._realFont);
        }

        updateFontColor() {
          this.assignFontColor(this._label, this._color);
        }

        updateStrokeColor() {
          if (!this._label || !this._label.enableOutline) return;
          if (!this._strokeColor) this._strokeColor = new Color();
          if (this._grayed) this._label.outlineColor = (_crd && toGrayedColor === void 0 ? (_reportPossibleCrUseOftoGrayedColor({
            error: Error()
          }), toGrayedColor) : toGrayedColor)(this._strokeColor);else this._label.outlineColor = this._strokeColor;
        }

        updateShadowColor() {
          if (!this._label || !this._label.enableShadow) return;
          if (!this._shadowColor) this._shadowColor = new Color();
          if (this._grayed) this._label.shadowColor = (_crd && toGrayedColor === void 0 ? (_reportPossibleCrUseOftoGrayedColor({
            error: Error()
          }), toGrayedColor) : toGrayedColor)(this._shadowColor);else this._label.shadowColor = this._shadowColor;
        }

        updateFontSize() {
          let font = this._label.font;

          if (font instanceof BitmapFont) {
            let fntConfig = font.fntConfig;
            if (fntConfig.resizable) this._label.fontSize = this._fontSize;else this._label.fontSize = fntConfig.fontSize;
            this._label.lineHeight = fntConfig.fontSize + (this._leading + 4) * fntConfig.fontSize / this._label.fontSize;
          } else {
            this._label.fontSize = this._fontSize;
            this._label.lineHeight = this._fontSize + this._leading;
          }
        }

        updateOverflow() {
          if (this._autoSize == (_crd && AutoSizeType === void 0 ? (_reportPossibleCrUseOfAutoSizeType({
            error: Error()
          }), AutoSizeType) : AutoSizeType).Both) this._label.overflow = Label.Overflow.NONE;else if (this._autoSize == (_crd && AutoSizeType === void 0 ? (_reportPossibleCrUseOfAutoSizeType({
            error: Error()
          }), AutoSizeType) : AutoSizeType).Height) {
            this._label.overflow = Label.Overflow.RESIZE_HEIGHT;
            this._uiTrans.width = this._width;
          } else if (this._autoSize == (_crd && AutoSizeType === void 0 ? (_reportPossibleCrUseOfAutoSizeType({
            error: Error()
          }), AutoSizeType) : AutoSizeType).Shrink) {
            this._label.overflow = Label.Overflow.SHRINK;

            this._uiTrans.setContentSize(this._width, this._height);
          } else {
            this._label.overflow = Label.Overflow.CLAMP;

            this._uiTrans.setContentSize(this._width, this._height);
          }
        }

        markSizeChanged() {
          if (this._underConstruct) return;

          if (this._autoSize == (_crd && AutoSizeType === void 0 ? (_reportPossibleCrUseOfAutoSizeType({
            error: Error()
          }), AutoSizeType) : AutoSizeType).Both || this._autoSize == (_crd && AutoSizeType === void 0 ? (_reportPossibleCrUseOfAutoSizeType({
            error: Error()
          }), AutoSizeType) : AutoSizeType).Height) {
            if (!this._sizeDirty) {
              this._node.emit((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
                error: Error()
              }), FUIEvent) : FUIEvent).SIZE_DELAY_CHANGE);

              this._sizeDirty = true;
            }
          }
        }

        onLabelSizeChanged() {
          this._sizeDirty = false;
          if (this._underConstruct) return;

          if (this._autoSize == (_crd && AutoSizeType === void 0 ? (_reportPossibleCrUseOfAutoSizeType({
            error: Error()
          }), AutoSizeType) : AutoSizeType).Both || this._autoSize == (_crd && AutoSizeType === void 0 ? (_reportPossibleCrUseOfAutoSizeType({
            error: Error()
          }), AutoSizeType) : AutoSizeType).Height) {
            this._updatingSize = true;
            this.setSize(this._uiTrans.width, this._uiTrans.height);
            this._updatingSize = false;
          }
        }

        handleSizeChanged() {
          if (this._updatingSize) return;

          if (this._autoSize == (_crd && AutoSizeType === void 0 ? (_reportPossibleCrUseOfAutoSizeType({
            error: Error()
          }), AutoSizeType) : AutoSizeType).None || this._autoSize == (_crd && AutoSizeType === void 0 ? (_reportPossibleCrUseOfAutoSizeType({
            error: Error()
          }), AutoSizeType) : AutoSizeType).Shrink) {
            this._uiTrans.setContentSize(this._width, this._height);
          } else if (this._autoSize == (_crd && AutoSizeType === void 0 ? (_reportPossibleCrUseOfAutoSizeType({
            error: Error()
          }), AutoSizeType) : AutoSizeType).Height) this._uiTrans.width = this._width;
        }

        handleGrayedChanged() {
          this.updateFontColor();
          this.updateStrokeColor();
        }

        getProp(index) {
          switch (index) {
            case (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).Color:
              return this.color;

            case (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).OutlineColor:
              return this.strokeColor;

            case (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).FontSize:
              return this.fontSize;

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
            }), ObjectPropID) : ObjectPropID).OutlineColor:
              this.strokeColor = value;
              break;

            case (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).FontSize:
              this.fontSize = value;
              break;

            default:
              super.setProp(index, value);
              break;
          }
        }

        setup_beforeAdd(buffer, beginPos) {
          super.setup_beforeAdd(buffer, beginPos);
          buffer.seek(beginPos, 5);
          this.font = buffer.readS();
          this.fontSize = buffer.readShort();
          this.color = buffer.readColor();
          this.align = buffer.readByte();
          this.verticalAlign = buffer.readByte();
          this.leading = buffer.readShort();
          this.letterSpacing = buffer.readShort();
          this._ubbEnabled = buffer.readBool();
          this.autoSize = buffer.readByte();
          this.underline = buffer.readBool();
          this.italic = buffer.readBool();
          this.bold = buffer.readBool();
          this.singleLine = buffer.readBool();

          if (buffer.readBool()) {
            this.strokeColor = buffer.readColor();
            this.stroke = buffer.readFloat();
          }

          if (buffer.readBool()) {
            this.shadowColor = buffer.readColor();
            let f1 = buffer.readFloat();
            let f2 = buffer.readFloat();
            this.shadowOffset = new Vec2(f1, f2);
          }

          if (buffer.readBool()) this._templateVars = {};
        }

        setup_afterAdd(buffer, beginPos) {
          super.setup_afterAdd(buffer, beginPos);
          buffer.seek(beginPos, 6);
          var str = buffer.readS();

          if (str != null) {
            this.text = str;
          } else {
            this.text = "";
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2864c017de94e0264ab925d1d64bb518eff21cd6.js.map