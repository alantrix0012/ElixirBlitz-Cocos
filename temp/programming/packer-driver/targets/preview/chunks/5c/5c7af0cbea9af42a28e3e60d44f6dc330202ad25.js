System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, FUIEvent, RelationType, GButton, GRoot, UIConfig, UIPackage, PopupMenu, _crd;

  function _reportPossibleCrUseOfController(extras) {
    _reporterNs.report("Controller", "./Controller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFUIEvent(extras) {
    _reporterNs.report("FUIEvent", "./event/Event", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRelationType(extras) {
    _reporterNs.report("RelationType", "./FieldTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPopupDirection(extras) {
    _reporterNs.report("PopupDirection", "./FieldTypes", _context.meta, extras);
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

  function _reportPossibleCrUseOfUIConfig(extras) {
    _reporterNs.report("UIConfig", "./UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPackage(extras) {
    _reporterNs.report("UIPackage", "./UIPackage", _context.meta, extras);
  }

  _export("PopupMenu", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      FUIEvent = _unresolved_2.Event;
    }, function (_unresolved_3) {
      RelationType = _unresolved_3.RelationType;
    }, function (_unresolved_4) {
      GButton = _unresolved_4.GButton;
    }, function (_unresolved_5) {
      GRoot = _unresolved_5.GRoot;
    }, function (_unresolved_6) {
      UIConfig = _unresolved_6.UIConfig;
    }, function (_unresolved_7) {
      UIPackage = _unresolved_7.UIPackage;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2bf40b+TEZMTof62MZRBXCB", "PopupMenu", undefined);

      _export("PopupMenu", PopupMenu = class PopupMenu {
        constructor(url) {
          this._contentPane = void 0;
          this._list = void 0;

          if (!url) {
            url = (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).popupMenu;
            if (!url) throw new Error("UIConfig.popupMenu not defined");
          }

          this._contentPane = (_crd && UIPackage === void 0 ? (_reportPossibleCrUseOfUIPackage({
            error: Error()
          }), UIPackage) : UIPackage).createObjectFromURL(url);

          this._contentPane.on((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).DISPLAY, this.onDisplay, this);

          this._list = this._contentPane.getChild("list");

          this._list.removeChildrenToPool();

          this._list.addRelation(this._contentPane, (_crd && RelationType === void 0 ? (_reportPossibleCrUseOfRelationType({
            error: Error()
          }), RelationType) : RelationType).Width);

          this._list.removeRelation(this._contentPane, (_crd && RelationType === void 0 ? (_reportPossibleCrUseOfRelationType({
            error: Error()
          }), RelationType) : RelationType).Height);

          this._contentPane.addRelation(this._list, (_crd && RelationType === void 0 ? (_reportPossibleCrUseOfRelationType({
            error: Error()
          }), RelationType) : RelationType).Height);

          this._list.on((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).CLICK_ITEM, this.onClickItem, this);
        }

        dispose() {
          this._contentPane.dispose();
        }

        addItem(caption, callback) {
          var item = this._list.addItemFromPool();

          item.title = caption;
          item.data = callback;
          item.grayed = false;
          var c = item.getController("checked");
          if (c) c.selectedIndex = 0;
          return item;
        }

        addItemAt(caption, index, callback) {
          var item = this._list.getFromPool();

          this._list.addChildAt(item, index);

          item.title = caption;
          item.data = callback;
          item.grayed = false;
          var c = item.getController("checked");
          if (c) c.selectedIndex = 0;
          return item;
        }

        addSeperator() {
          if ((_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
            error: Error()
          }), UIConfig) : UIConfig).popupMenu_seperator == null) throw new Error("UIConfig.popupMenu_seperator not defined");
          this.list.addItemFromPool((_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
            error: Error()
          }), UIConfig) : UIConfig).popupMenu_seperator);
        }

        getItemName(index) {
          var item = this._list.getChildAt(index);

          return item.name;
        }

        setItemText(name, caption) {
          var item = this._list.getChild(name);

          item.title = caption;
        }

        setItemVisible(name, visible) {
          var item = this._list.getChild(name);

          if (item.visible != visible) {
            item.visible = visible;

            this._list.setBoundsChangedFlag();
          }
        }

        setItemGrayed(name, grayed) {
          var item = this._list.getChild(name);

          item.grayed = grayed;
        }

        setItemCheckable(name, checkable) {
          var item = this._list.getChild(name);

          var c = item.getController("checked");

          if (c) {
            if (checkable) {
              if (c.selectedIndex == 0) c.selectedIndex = 1;
            } else c.selectedIndex = 0;
          }
        }

        setItemChecked(name, checked) {
          var item = this._list.getChild(name);

          var c = item.getController("checked");
          if (c) c.selectedIndex = checked ? 2 : 1;
        }

        isItemChecked(name) {
          var item = this._list.getChild(name);

          var c = item.getController("checked");
          if (c) return c.selectedIndex == 2;else return false;
        }

        removeItem(name) {
          var item = this._list.getChild(name);

          if (item) {
            var index = this._list.getChildIndex(item);

            this._list.removeChildToPoolAt(index);

            return true;
          } else return false;
        }

        clearItems() {
          this._list.removeChildrenToPool();
        }

        get itemCount() {
          return this._list.numChildren;
        }

        get contentPane() {
          return this._contentPane;
        }

        get list() {
          return this._list;
        }

        show(target, dir) {
          (_crd && GRoot === void 0 ? (_reportPossibleCrUseOfGRoot({
            error: Error()
          }), GRoot) : GRoot).inst.showPopup(this.contentPane, target instanceof (_crd && GRoot === void 0 ? (_reportPossibleCrUseOfGRoot({
            error: Error()
          }), GRoot) : GRoot) ? null : target, dir);
        }

        onClickItem(item, evt) {
          this._list._partner.callLater(dt => {
            this.onClickItem2(item, evt);
          }, 0.1);
        }

        onClickItem2(item, evt) {
          if (!(item instanceof (_crd && GButton === void 0 ? (_reportPossibleCrUseOfGButton({
            error: Error()
          }), GButton) : GButton))) return;

          if (item.grayed) {
            this._list.selectedIndex = -1;
            return;
          }

          var c = item.getController("checked");

          if (c && c.selectedIndex != 0) {
            if (c.selectedIndex == 1) c.selectedIndex = 2;else c.selectedIndex = 1;
          }

          var r = this._contentPane.parent;
          r.hidePopup(this.contentPane);
          if (item.data instanceof Function) item.data(item, evt);
        }

        onDisplay() {
          this._list.selectedIndex = -1;

          this._list.resizeToFit(100000, 10);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5c7af0cbea9af42a28e3e60d44f6dc330202ad25.js.map