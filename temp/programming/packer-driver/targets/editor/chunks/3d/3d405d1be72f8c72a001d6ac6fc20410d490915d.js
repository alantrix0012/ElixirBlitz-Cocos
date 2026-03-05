System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, EditBox, Overflow, UITransform, FUIEvent, AutoSizeType, GTextField, defaultParser, GTextInput, MyEditBox, _crd;

  function _reportPossibleCrUseOfFUIEvent(extras) {
    _reporterNs.report("FUIEvent", "./event/Event", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoSizeType(extras) {
    _reporterNs.report("AutoSizeType", "./FieldTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGTextField(extras) {
    _reporterNs.report("GTextField", "./GTextField", _context.meta, extras);
  }

  function _reportPossibleCrUseOfByteBuffer(extras) {
    _reporterNs.report("ByteBuffer", "./utils/ByteBuffer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdefaultParser(extras) {
    _reporterNs.report("defaultParser", "./utils/UBBParser", _context.meta, extras);
  }

  _export("GTextInput", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Color = _cc.Color;
      EditBox = _cc.EditBox;
      Overflow = _cc.Overflow;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      FUIEvent = _unresolved_2.Event;
    }, function (_unresolved_3) {
      AutoSizeType = _unresolved_3.AutoSizeType;
    }, function (_unresolved_4) {
      GTextField = _unresolved_4.GTextField;
    }, function (_unresolved_5) {
      defaultParser = _unresolved_5.defaultParser;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1128bE0XqBJAKGKbb+obC6S", "GTextInput", undefined);

      __checkObsolete__(['Color', 'EditBox', 'HorizontalTextAlignment', 'Overflow', 'UITransform', 'VerticalTextAlignment']);

      _export("GTextInput", GTextInput = class GTextInput extends (_crd && GTextField === void 0 ? (_reportPossibleCrUseOfGTextField({
        error: Error()
      }), GTextField) : GTextField) {
        constructor() {
          super();
          this._editBox = void 0;
          this._promptText = void 0;
          this._node.name = "GTextInput";
          this._touchDisabled = false;
        }

        createRenderer() {
          this._editBox = this._node.addComponent(MyEditBox);
          this._editBox.maxLength = -1;

          this._editBox["_updateTextLabel"]();

          this._node.on('text-changed', this.onTextChanged, this);

          this.on((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).TOUCH_END, this.onTouchEnd1, this);
          this.autoSize = (_crd && AutoSizeType === void 0 ? (_reportPossibleCrUseOfAutoSizeType({
            error: Error()
          }), AutoSizeType) : AutoSizeType).None;
        }

        set editable(val) {
          this._editBox.enabled = val;
        }

        get editable() {
          return this._editBox.enabled;
        }

        set maxLength(val) {
          if (val == 0) val = -1;
          this._editBox.maxLength = val;
        }

        get maxLength() {
          return this._editBox.maxLength;
        }

        set promptText(val) {
          this._promptText = val;
          let newCreate = !this._editBox.placeholderLabel;

          this._editBox["_updatePlaceholderLabel"]();

          if (newCreate) this.assignFont(this._editBox.placeholderLabel, this._realFont);
          this._editBox.placeholderLabel.string = (_crd && defaultParser === void 0 ? (_reportPossibleCrUseOfdefaultParser({
            error: Error()
          }), defaultParser) : defaultParser).parse(this._promptText, true);

          if ((_crd && defaultParser === void 0 ? (_reportPossibleCrUseOfdefaultParser({
            error: Error()
          }), defaultParser) : defaultParser).lastColor) {
            let c = this._editBox.placeholderLabel.color;
            if (!c) c = new Color();
            c.fromHEX((_crd && defaultParser === void 0 ? (_reportPossibleCrUseOfdefaultParser({
              error: Error()
            }), defaultParser) : defaultParser).lastColor);
            this.assignFontColor(this._editBox.placeholderLabel, c);
          } else this.assignFontColor(this._editBox.placeholderLabel, this._color);

          if ((_crd && defaultParser === void 0 ? (_reportPossibleCrUseOfdefaultParser({
            error: Error()
          }), defaultParser) : defaultParser).lastSize) this._editBox.placeholderLabel.fontSize = parseInt((_crd && defaultParser === void 0 ? (_reportPossibleCrUseOfdefaultParser({
            error: Error()
          }), defaultParser) : defaultParser).lastSize);else this._editBox.placeholderLabel.fontSize = this._fontSize;
        }

        get promptText() {
          return this._promptText;
        }

        set restrict(value) {//not supported
        }

        get restrict() {
          return "";
        }

        get password() {
          return this._editBox.inputFlag == EditBox.InputFlag.PASSWORD;
          ;
        }

        set password(val) {
          this._editBox.inputFlag = val ? EditBox.InputFlag.PASSWORD : EditBox.InputFlag.DEFAULT;
        }

        get align() {
          return this._editBox.textLabel.horizontalAlign;
        }

        set align(value) {
          this._editBox.textLabel.horizontalAlign = value;

          if (this._editBox.placeholderLabel) {
            this._editBox.placeholderLabel.horizontalAlign = value;
          }
        }

        get verticalAlign() {
          return this._editBox.textLabel.verticalAlign;
        }

        set verticalAlign(value) {
          this._editBox.textLabel.verticalAlign = value;

          if (this._editBox.placeholderLabel) {
            this._editBox.placeholderLabel.verticalAlign = value;
          }
        }

        get singleLine() {
          return this._editBox.inputMode != EditBox.InputMode.ANY;
        }

        set singleLine(value) {
          this._editBox.inputMode = value ? EditBox.InputMode.SINGLE_LINE : EditBox.InputMode.ANY;
        }

        requestFocus() {
          this._editBox.focus();
        }

        markSizeChanged() {//不支持自动大小，所以这里空
        }

        updateText() {
          var text2 = this._text;
          if (this._templateVars) text2 = this.parseTemplate(text2);
          if (this._ubbEnabled) //不支持同一个文本不同样式
            text2 = (_crd && defaultParser === void 0 ? (_reportPossibleCrUseOfdefaultParser({
              error: Error()
            }), defaultParser) : defaultParser).parse(text2, true);
          this._editBox.string = text2;
        }

        updateFont() {
          this.assignFont(this._editBox.textLabel, this._realFont);
          if (this._editBox.placeholderLabel) this.assignFont(this._editBox.placeholderLabel, this._realFont);
        }

        updateFontColor() {
          this.assignFontColor(this._editBox.textLabel, this._color);
        }

        updateFontSize() {
          this._editBox.textLabel.fontSize = this._fontSize;
          this._editBox.textLabel.lineHeight = this._fontSize + this._leading;
          if (this._editBox.placeholderLabel) this._editBox.placeholderLabel.fontSize = this._editBox.textLabel.fontSize;
        }

        updateOverflow() {//not supported
        }

        onTextChanged() {
          this._text = this._editBox.string;
        }

        onTouchEnd1(evt) {
          this._editBox.openKeyboard();

          evt.propagationStopped = true;
        }

        setup_beforeAdd(buffer, beginPos) {
          super.setup_beforeAdd(buffer, beginPos);
          buffer.seek(beginPos, 4);
          var str = buffer.readS();
          if (str != null) this.promptText = str;else if (this._editBox.placeholderLabel) this._editBox.placeholderLabel.string = "";
          str = buffer.readS();
          if (str != null) this.restrict = str;
          var iv = buffer.readInt();
          if (iv != 0) this.maxLength = iv;
          iv = buffer.readInt();

          if (iv != 0) {//keyboardType
          }

          if (buffer.readBool()) this.password = true; //同步一下对齐方式

          if (this._editBox.placeholderLabel) {
            let hAlign = this._editBox.textLabel.horizontalAlign;
            this._editBox.placeholderLabel.horizontalAlign = hAlign;
            let vAlign = this._editBox.textLabel.verticalAlign;
            this._editBox.placeholderLabel.verticalAlign = vAlign;
          }
        }

      });

      MyEditBox = class MyEditBox extends EditBox {
        _init() {
          super._init();

          this.placeholderLabel.getComponent(UITransform).setAnchorPoint(0, 1);
          this.textLabel.getComponent(UITransform).setAnchorPoint(0, 1);
          this.placeholderLabel.overflow = Overflow.CLAMP;
          this.textLabel.overflow = Overflow.CLAMP;
        }

        _registerEvent() {//取消掉原来的事件处理
        }

        openKeyboard() {
          let impl = this["_impl"];

          if (impl) {
            impl.beginEditing();
          }
        }

      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3d405d1be72f8c72a001d6ac6fc20410d490915d.js.map