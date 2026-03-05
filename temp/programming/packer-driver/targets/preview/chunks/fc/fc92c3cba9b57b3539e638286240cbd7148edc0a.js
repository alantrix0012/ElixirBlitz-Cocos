System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, EventMouse, FUIEvent, PopupDirection, ObjectPropID, RelationType, GButton, GComponent, GList, GRoot, GTextField, GTextInput, UIConfig, UIPackage, GComboBox, _crd;

  function _reportPossibleCrUseOfController(extras) {
    _reporterNs.report("Controller", "./Controller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFUIEvent(extras) {
    _reporterNs.report("FUIEvent", "./event/Event", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPopupDirection(extras) {
    _reporterNs.report("PopupDirection", "./FieldTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectPropID(extras) {
    _reporterNs.report("ObjectPropID", "./FieldTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRelationType(extras) {
    _reporterNs.report("RelationType", "./FieldTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGButton(extras) {
    _reporterNs.report("GButton", "./GButton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGComponent(extras) {
    _reporterNs.report("GComponent", "./GComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGList(extras) {
    _reporterNs.report("GList", "./GList", _context.meta, extras);
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

  function _reportPossibleCrUseOfUIConfig(extras) {
    _reporterNs.report("UIConfig", "./UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPackage(extras) {
    _reporterNs.report("UIPackage", "./UIPackage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfByteBuffer(extras) {
    _reporterNs.report("ByteBuffer", "./utils/ByteBuffer", _context.meta, extras);
  }

  _export("GComboBox", void 0);

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
      PopupDirection = _unresolved_3.PopupDirection;
      ObjectPropID = _unresolved_3.ObjectPropID;
      RelationType = _unresolved_3.RelationType;
    }, function (_unresolved_4) {
      GButton = _unresolved_4.GButton;
    }, function (_unresolved_5) {
      GComponent = _unresolved_5.GComponent;
    }, function (_unresolved_6) {
      GList = _unresolved_6.GList;
    }, function (_unresolved_7) {
      GRoot = _unresolved_7.GRoot;
    }, function (_unresolved_8) {
      GTextField = _unresolved_8.GTextField;
    }, function (_unresolved_9) {
      GTextInput = _unresolved_9.GTextInput;
    }, function (_unresolved_10) {
      UIConfig = _unresolved_10.UIConfig;
    }, function (_unresolved_11) {
      UIPackage = _unresolved_11.UIPackage;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f4396BJSq1AsIjYQ9aPwTDB", "GComboBox", undefined);

      __checkObsolete__(['Color', 'EventMouse']);

      _export("GComboBox", GComboBox = class GComboBox extends (_crd && GComponent === void 0 ? (_reportPossibleCrUseOfGComponent({
        error: Error()
      }), GComponent) : GComponent) {
        constructor() {
          super();
          this.dropdown = void 0;
          this._titleObject = void 0;
          this._iconObject = void 0;
          this._list = void 0;
          this._items = void 0;
          this._values = void 0;
          this._icons = void 0;
          this._visibleItemCount = 0;
          this._itemsUpdated = void 0;
          this._selectedIndex = 0;
          this._buttonController = void 0;
          this._popupDirection = (_crd && PopupDirection === void 0 ? (_reportPossibleCrUseOfPopupDirection({
            error: Error()
          }), PopupDirection) : PopupDirection).Auto;
          this._selectionController = void 0;
          this._over = void 0;
          this._down = void 0;
          this._node.name = "GComboBox";
          this._visibleItemCount = (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
            error: Error()
          }), UIConfig) : UIConfig).defaultComboBoxVisibleItemCount;
          this._itemsUpdated = true;
          this._selectedIndex = -1;
          this._items = [];
          this._values = [];
        }

        get text() {
          if (this._titleObject) return this._titleObject.text;else return null;
        }

        set text(value) {
          if (this._titleObject) this._titleObject.text = value;
          this.updateGear(6);
        }

        get icon() {
          if (this._iconObject) return this._iconObject.icon;else return null;
        }

        set icon(value) {
          if (this._iconObject) this._iconObject.icon = value;
          this.updateGear(7);
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

        get visibleItemCount() {
          return this._visibleItemCount;
        }

        set visibleItemCount(value) {
          this._visibleItemCount = value;
        }

        get popupDirection() {
          return this._popupDirection;
        }

        set popupDirection(value) {
          this._popupDirection = value;
        }

        get items() {
          return this._items;
        }

        set items(value) {
          if (!value) this._items.length = 0;else this._items = value.concat();

          if (this._items.length > 0) {
            if (this._selectedIndex >= this._items.length) this._selectedIndex = this._items.length - 1;else if (this._selectedIndex == -1) this._selectedIndex = 0;
            this.text = this._items[this._selectedIndex];
            if (this._icons && this._selectedIndex < this._icons.length) this.icon = this._icons[this._selectedIndex];
          } else {
            this.text = "";
            if (this._icons) this.icon = null;
            this._selectedIndex = -1;
          }

          this._itemsUpdated = true;
        }

        get icons() {
          return this._icons;
        }

        set icons(value) {
          this._icons = value;
          if (this._icons && this._selectedIndex != -1 && this._selectedIndex < this._icons.length) this.icon = this._icons[this._selectedIndex];
        }

        get values() {
          return this._values;
        }

        set values(value) {
          if (!value) this._values.length = 0;else this._values = value.concat();
        }

        get selectedIndex() {
          return this._selectedIndex;
        }

        set selectedIndex(val) {
          if (this._selectedIndex == val) return;
          this._selectedIndex = val;

          if (this._selectedIndex >= 0 && this._selectedIndex < this._items.length) {
            this.text = this._items[this._selectedIndex];
            if (this._icons && this._selectedIndex < this._icons.length) this.icon = this._icons[this._selectedIndex];
          } else {
            this.text = "";
            if (this._icons) this.icon = null;
          }

          this.updateSelectionController();
        }

        get value() {
          return this._values[this._selectedIndex];
        }

        set value(val) {
          var index = this._values.indexOf(val);

          if (index == -1 && val == null) index = this._values.indexOf("");
          this.selectedIndex = index;
        }

        get selectionController() {
          return this._selectionController;
        }

        set selectionController(value) {
          this._selectionController = value;
        }

        getTextField() {
          if (this._titleObject instanceof (_crd && GTextField === void 0 ? (_reportPossibleCrUseOfGTextField({
            error: Error()
          }), GTextField) : GTextField)) return this._titleObject;else if ('getTextField' in this._titleObject) return this._titleObject.getTextField();else return null;
        }

        setState(val) {
          if (this._buttonController) this._buttonController.selectedPage = val;
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
              {
                tf = this.getTextField();
                if (tf) return tf.fontSize;else return 0;
              }

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
              {
                tf = this.getTextField();
                if (tf) tf.fontSize = value;
              }
              break;

            default:
              super.setProp(index, value);
              break;
          }
        }

        constructExtension(buffer) {
          var str;
          this._buttonController = this.getController("button");
          this._titleObject = this.getChild("title");
          this._iconObject = this.getChild("icon");
          str = buffer.readS();

          if (str) {
            var obj = (_crd && UIPackage === void 0 ? (_reportPossibleCrUseOfUIPackage({
              error: Error()
            }), UIPackage) : UIPackage).createObjectFromURL(str);

            if (!(obj instanceof (_crd && GComponent === void 0 ? (_reportPossibleCrUseOfGComponent({
              error: Error()
            }), GComponent) : GComponent))) {
              console.error("下拉框必须为元件");
              return;
            }

            this.dropdown = obj;
            this.dropdown.name = "this.dropdown";
            this._list = this.dropdown.getChild("list", _crd && GList === void 0 ? (_reportPossibleCrUseOfGList({
              error: Error()
            }), GList) : GList);

            if (this._list == null) {
              console.error(this.resourceURL + ": 下拉框的弹出元件里必须包含名为list的列表");
              return;
            }

            this._list.on((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
              error: Error()
            }), FUIEvent) : FUIEvent).CLICK_ITEM, this.onClickItem, this);

            this._list.addRelation(this.dropdown, (_crd && RelationType === void 0 ? (_reportPossibleCrUseOfRelationType({
              error: Error()
            }), RelationType) : RelationType).Width);

            this._list.removeRelation(this.dropdown, (_crd && RelationType === void 0 ? (_reportPossibleCrUseOfRelationType({
              error: Error()
            }), RelationType) : RelationType).Height);

            this.dropdown.addRelation(this._list, (_crd && RelationType === void 0 ? (_reportPossibleCrUseOfRelationType({
              error: Error()
            }), RelationType) : RelationType).Height);
            this.dropdown.removeRelation(this._list, (_crd && RelationType === void 0 ? (_reportPossibleCrUseOfRelationType({
              error: Error()
            }), RelationType) : RelationType).Width);
            this.dropdown.on((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
              error: Error()
            }), FUIEvent) : FUIEvent).UNDISPLAY, this.onPopupClosed, this);
          }

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
        }

        handleControllerChanged(c) {
          super.handleControllerChanged(c);
          if (this._selectionController == c) this.selectedIndex = c.selectedIndex;
        }

        updateSelectionController() {
          if (this._selectionController && !this._selectionController.changing && this._selectedIndex < this._selectionController.pageCount) {
            var c = this._selectionController;
            this._selectionController = null;
            c.selectedIndex = this._selectedIndex;
            this._selectionController = c;
          }
        }

        dispose() {
          if (this.dropdown) {
            this.dropdown.dispose();
            this.dropdown = null;
          }

          super.dispose();
        }

        setup_afterAdd(buffer, beginPos) {
          super.setup_afterAdd(buffer, beginPos);
          if (!buffer.seek(beginPos, 6)) return;
          if (buffer.readByte() != this.packageItem.objectType) return;
          var i;
          var iv;
          var nextPos;
          var str;
          var itemCount = buffer.readShort();

          for (i = 0; i < itemCount; i++) {
            nextPos = buffer.readShort();
            nextPos += buffer.position;
            this._items[i] = buffer.readS();
            this._values[i] = buffer.readS();
            str = buffer.readS();

            if (str != null) {
              if (this._icons == null) this._icons = new Array();
              this._icons[i] = str;
            }

            buffer.position = nextPos;
          }

          str = buffer.readS();

          if (str != null) {
            this.text = str;
            this._selectedIndex = this._items.indexOf(str);
          } else if (this._items.length > 0) {
            this._selectedIndex = 0;
            this.text = this._items[0];
          } else this._selectedIndex = -1;

          str = buffer.readS();
          if (str != null) this.icon = str;
          if (buffer.readBool()) this.titleColor = buffer.readColor();
          iv = buffer.readInt();
          if (iv > 0) this._visibleItemCount = iv;
          this._popupDirection = buffer.readByte();
          iv = buffer.readShort();
          if (iv >= 0) this._selectionController = this.parent.getControllerAt(iv);
        }

        showDropdown() {
          if (this._itemsUpdated) {
            this._itemsUpdated = false;

            this._list.removeChildrenToPool();

            var cnt = this._items.length;

            for (var i = 0; i < cnt; i++) {
              var item = this._list.addItemFromPool();

              item.name = i < this._values.length ? this._values[i] : "";
              item.text = this._items[i];
              item.icon = this._icons && i < this._icons.length ? this._icons[i] : null;
            }

            this._list.resizeToFit(this._visibleItemCount);
          }

          this._list.selectedIndex = -1;
          this.dropdown.width = this.width;

          this._list.ensureBoundsCorrect();

          (_crd && GRoot === void 0 ? (_reportPossibleCrUseOfGRoot({
            error: Error()
          }), GRoot) : GRoot).inst.togglePopup(this.dropdown, this, this._popupDirection);
          if (this.dropdown.parent) this.setState((_crd && GButton === void 0 ? (_reportPossibleCrUseOfGButton({
            error: Error()
          }), GButton) : GButton).DOWN);
        }

        onPopupClosed() {
          if (this._over) this.setState((_crd && GButton === void 0 ? (_reportPossibleCrUseOfGButton({
            error: Error()
          }), GButton) : GButton).OVER);else this.setState((_crd && GButton === void 0 ? (_reportPossibleCrUseOfGButton({
            error: Error()
          }), GButton) : GButton).UP);
        }

        onClickItem(itemObject) {
          var _t = this;

          var index = this._list.getChildIndex(itemObject);

          this._partner.callLater(dt => {
            _t.onClickItem2(index);
          }, 0.1);
        }

        onClickItem2(index) {
          if (this.dropdown.parent instanceof (_crd && GRoot === void 0 ? (_reportPossibleCrUseOfGRoot({
            error: Error()
          }), GRoot) : GRoot)) this.dropdown.parent.hidePopup();
          this._selectedIndex = -1;
          this.selectedIndex = index;

          this._node.emit((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).STATUS_CHANGED, this);
        }

        onRollOver_1() {
          this._over = true;
          if (this._down || this.dropdown && this.dropdown.parent) return;
          this.setState((_crd && GButton === void 0 ? (_reportPossibleCrUseOfGButton({
            error: Error()
          }), GButton) : GButton).OVER);
        }

        onRollOut_1() {
          this._over = false;
          if (this._down || this.dropdown && this.dropdown.parent) return;
          this.setState((_crd && GButton === void 0 ? (_reportPossibleCrUseOfGButton({
            error: Error()
          }), GButton) : GButton).UP);
        }

        onTouchBegin_1(evt) {
          if (evt.button != EventMouse.BUTTON_LEFT) return;
          if (evt.initiator instanceof (_crd && GTextInput === void 0 ? (_reportPossibleCrUseOfGTextInput({
            error: Error()
          }), GTextInput) : GTextInput) && evt.initiator.editable) return;
          this._down = true;
          evt.captureTouch();
          if (this.dropdown) this.showDropdown();
        }

        onTouchEnd_1(evt) {
          if (evt.button != EventMouse.BUTTON_LEFT) return;

          if (this._down) {
            this._down = false;

            if (this.dropdown && !this.dropdown.parent) {
              if (this._over) this.setState((_crd && GButton === void 0 ? (_reportPossibleCrUseOfGButton({
                error: Error()
              }), GButton) : GButton).OVER);else this.setState((_crd && GButton === void 0 ? (_reportPossibleCrUseOfGButton({
                error: Error()
              }), GButton) : GButton).UP);
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fc92c3cba9b57b3539e638286240cbd7148edc0a.js.map