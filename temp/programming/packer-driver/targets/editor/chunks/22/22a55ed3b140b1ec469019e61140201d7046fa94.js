System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BitmapFont, RichText, SpriteAtlas, PackageItemType, AutoSizeType, GTextField, UIConfig, UIPackage, toGrayedColor, defaultParser, RichTextImageAtlas, GRichTextField, _crd, imageAtlas;

  function _reportPossibleCrUseOfPackageItemType(extras) {
    _reporterNs.report("PackageItemType", "./FieldTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoSizeType(extras) {
    _reporterNs.report("AutoSizeType", "./FieldTypes", _context.meta, extras);
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

  function _reportPossibleCrUseOftoGrayedColor(extras) {
    _reporterNs.report("toGrayedColor", "./utils/ToolSet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdefaultParser(extras) {
    _reporterNs.report("defaultParser", "./utils/UBBParser", _context.meta, extras);
  }

  _export({
    RichTextImageAtlas: void 0,
    GRichTextField: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      BitmapFont = _cc.BitmapFont;
      RichText = _cc.RichText;
      SpriteAtlas = _cc.SpriteAtlas;
    }, function (_unresolved_2) {
      PackageItemType = _unresolved_2.PackageItemType;
      AutoSizeType = _unresolved_2.AutoSizeType;
    }, function (_unresolved_3) {
      GTextField = _unresolved_3.GTextField;
    }, function (_unresolved_4) {
      UIConfig = _unresolved_4.UIConfig;
    }, function (_unresolved_5) {
      UIPackage = _unresolved_5.UIPackage;
    }, function (_unresolved_6) {
      toGrayedColor = _unresolved_6.toGrayedColor;
    }, function (_unresolved_7) {
      defaultParser = _unresolved_7.defaultParser;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1870aWpMeNAHb2z7wJsf8ql", "GRichTextField", undefined);

      __checkObsolete__(['BitmapFont', 'HorizontalTextAlignment', 'RichText', 'SpriteAtlas', 'SpriteFrame']);

      _export("RichTextImageAtlas", RichTextImageAtlas = class RichTextImageAtlas extends SpriteAtlas {
        getSpriteFrame(key) {
          let pi = (_crd && UIPackage === void 0 ? (_reportPossibleCrUseOfUIPackage({
            error: Error()
          }), UIPackage) : UIPackage).getItemByURL(key);

          if (pi) {
            pi.load();
            if (pi.type == (_crd && PackageItemType === void 0 ? (_reportPossibleCrUseOfPackageItemType({
              error: Error()
            }), PackageItemType) : PackageItemType).Image) return pi.asset;else if (pi.type == (_crd && PackageItemType === void 0 ? (_reportPossibleCrUseOfPackageItemType({
              error: Error()
            }), PackageItemType) : PackageItemType).MovieClip) return pi.frames[0].texture;
          }

          return super.getSpriteFrame(key);
        }

      });

      imageAtlas = new RichTextImageAtlas();

      _export("GRichTextField", GRichTextField = class GRichTextField extends (_crd && GTextField === void 0 ? (_reportPossibleCrUseOfGTextField({
        error: Error()
      }), GTextField) : GTextField) {
        constructor() {
          super();
          this._richText = void 0;
          this._bold = void 0;
          this._italics = void 0;
          this._underline = void 0;
          this.linkUnderline = void 0;
          this.linkColor = void 0;
          this._node.name = "GRichTextField";
          this._touchDisabled = false;
          this.linkUnderline = (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
            error: Error()
          }), UIConfig) : UIConfig).linkUnderline;
        }

        createRenderer() {
          this._richText = this._node.addComponent(RichText);
          this._richText.handleTouchEvent = false;
          this.autoSize = (_crd && AutoSizeType === void 0 ? (_reportPossibleCrUseOfAutoSizeType({
            error: Error()
          }), AutoSizeType) : AutoSizeType).None;
          this._richText.imageAtlas = imageAtlas;
        }

        get align() {
          return this._richText.horizontalAlign;
        }

        set align(value) {
          this._richText.horizontalAlign = value;
        }

        get underline() {
          return this._underline;
        }

        set underline(value) {
          if (this._underline != value) {
            this._underline = value;
            this.updateText();
          }
        }

        get bold() {
          return this._bold;
        }

        set bold(value) {
          if (this._bold != value) {
            this._bold = value;
            this.updateText();
          }
        }

        get italic() {
          return this._italics;
        }

        set italic(value) {
          if (this._italics != value) {
            this._italics = value;
            this.updateText();
          }
        }

        markSizeChanged() {//RichText貌似没有延迟重建文本，所以这里不需要
        }

        updateText() {
          var text2 = this._text;
          if (this._templateVars) text2 = this.parseTemplate(text2);

          if (this._ubbEnabled) {
            (_crd && defaultParser === void 0 ? (_reportPossibleCrUseOfdefaultParser({
              error: Error()
            }), defaultParser) : defaultParser).linkUnderline = this.linkUnderline;
            (_crd && defaultParser === void 0 ? (_reportPossibleCrUseOfdefaultParser({
              error: Error()
            }), defaultParser) : defaultParser).linkColor = this.linkColor;
            text2 = (_crd && defaultParser === void 0 ? (_reportPossibleCrUseOfdefaultParser({
              error: Error()
            }), defaultParser) : defaultParser).parse(text2);
          }

          if (this._bold) text2 = "<b>" + text2 + "</b>";
          if (this._italics) text2 = "<i>" + text2 + "</i>";
          if (this._underline) text2 = "<u>" + text2 + "</u>";
          let c = this._color;
          if (this._grayed) c = (_crd && toGrayedColor === void 0 ? (_reportPossibleCrUseOftoGrayedColor({
            error: Error()
          }), toGrayedColor) : toGrayedColor)(c);
          text2 = "<color=" + c.toHEX("#rrggbb") + ">" + text2 + "</color>";

          if (this._autoSize == (_crd && AutoSizeType === void 0 ? (_reportPossibleCrUseOfAutoSizeType({
            error: Error()
          }), AutoSizeType) : AutoSizeType).Both) {
            if (this._richText.maxWidth != 0) this._richText["_maxWidth"] = 0;
            this._richText.string = text2;
            if (this.maxWidth != 0 && this._uiTrans.contentSize.width > this.maxWidth) this._richText.maxWidth = this.maxWidth;
          } else this._richText.string = text2;
        }

        updateFont() {
          this.assignFont(this._richText, this._realFont);
        }

        updateFontColor() {
          this.assignFontColor(this._richText, this._color);
        }

        updateFontSize() {
          let fontSize = this._fontSize;
          let font = this._richText.font;

          if (font instanceof BitmapFont) {
            if (!font.fntConfig.resizable) fontSize = font.fntConfig.fontSize;
          }

          this._richText.fontSize = fontSize;
          this._richText.lineHeight = fontSize + this._leading * 2;
        }

        updateOverflow() {
          if (this._autoSize == (_crd && AutoSizeType === void 0 ? (_reportPossibleCrUseOfAutoSizeType({
            error: Error()
          }), AutoSizeType) : AutoSizeType).Both) this._richText.maxWidth = 0;else this._richText.maxWidth = this._width;
        }

        handleSizeChanged() {
          if (this._updatingSize) return;
          if (this._autoSize != (_crd && AutoSizeType === void 0 ? (_reportPossibleCrUseOfAutoSizeType({
            error: Error()
          }), AutoSizeType) : AutoSizeType).Both) this._richText.maxWidth = this._width;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=22a55ed3b140b1ec469019e61140201d7046fa94.js.map