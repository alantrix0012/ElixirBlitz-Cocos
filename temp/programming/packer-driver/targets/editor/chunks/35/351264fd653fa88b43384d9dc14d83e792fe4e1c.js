System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, FUIEvent, UIPackage, Controller, PlayTransitionAction, ChangePageAction, EventTarget, _crd, _nextPageId;

  function createAction(type) {
    switch (type) {
      case 0:
        return new (_crd && PlayTransitionAction === void 0 ? (_reportPossibleCrUseOfPlayTransitionAction({
          error: Error()
        }), PlayTransitionAction) : PlayTransitionAction)();

      case 1:
        return new (_crd && ChangePageAction === void 0 ? (_reportPossibleCrUseOfChangePageAction({
          error: Error()
        }), ChangePageAction) : ChangePageAction)();
    }

    return null;
  }

  function _reportPossibleCrUseOfControllerAction(extras) {
    _reporterNs.report("ControllerAction", "./action/ControllerAction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFUIEvent(extras) {
    _reporterNs.report("FUIEvent", "./event/Event", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPackage(extras) {
    _reporterNs.report("UIPackage", "./UIPackage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfByteBuffer(extras) {
    _reporterNs.report("ByteBuffer", "./utils/ByteBuffer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayTransitionAction(extras) {
    _reporterNs.report("PlayTransitionAction", "./action/PlayTransitionAction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChangePageAction(extras) {
    _reporterNs.report("ChangePageAction", "./action/ChangePageAction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGComponent(extras) {
    _reporterNs.report("GComponent", "./GComponent", _context.meta, extras);
  }

  _export("Controller", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      EventTarget = _cc.EventTarget;
    }, function (_unresolved_2) {
      FUIEvent = _unresolved_2.Event;
    }, function (_unresolved_3) {
      UIPackage = _unresolved_3.UIPackage;
    }, function (_unresolved_4) {
      PlayTransitionAction = _unresolved_4.PlayTransitionAction;
    }, function (_unresolved_5) {
      ChangePageAction = _unresolved_5.ChangePageAction;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9e642jFIRJJiIrxDCv8nUzF", "Controller", undefined);

      _nextPageId = 0;

      _export("Controller", Controller = class Controller extends EventTarget {
        constructor() {
          super();
          this._selectedIndex = void 0;
          this._previousIndex = void 0;
          this._pageIds = void 0;
          this._pageNames = void 0;
          this._actions = void 0;
          this.name = void 0;
          this.parent = void 0;
          this.autoRadioGroupDepth = void 0;
          this.changing = void 0;
          this._pageIds = [];
          this._pageNames = [];
          this._selectedIndex = -1;
          this._previousIndex = -1;
        }

        dispose() {}

        get selectedIndex() {
          return this._selectedIndex;
        }

        set selectedIndex(value) {
          if (this._selectedIndex != value) {
            if (value > this._pageIds.length - 1) throw new Error("index out of bounds: " + value);
            this.changing = true;
            this._previousIndex = this._selectedIndex;
            this._selectedIndex = value;
            this.parent.applyController(this);
            this.emit((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
              error: Error()
            }), FUIEvent) : FUIEvent).STATUS_CHANGED, this);
            this.changing = false;
          }
        }

        onChanged(callback, thisArg) {
          this.on((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).STATUS_CHANGED, callback, thisArg);
        }

        offChanged(callback, thisArg) {
          this.off((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).STATUS_CHANGED, callback, thisArg);
        } //功能和设置selectedIndex一样，但不会触发事件


        setSelectedIndex(value) {
          if (this._selectedIndex != value) {
            if (value > this._pageIds.length - 1) throw new Error("index out of bounds: " + value);
            this.changing = true;
            this._previousIndex = this._selectedIndex;
            this._selectedIndex = value;
            this.parent.applyController(this);
            this.changing = false;
          }
        }

        get previsousIndex() {
          return this._previousIndex;
        }

        get selectedPage() {
          if (this._selectedIndex == -1) return null;else return this._pageNames[this._selectedIndex];
        }

        set selectedPage(val) {
          var i = this._pageNames.indexOf(val);

          if (i == -1) i = 0;
          this.selectedIndex = i;
        } //功能和设置selectedPage一样，但不会触发事件


        setSelectedPage(value) {
          var i = this._pageNames.indexOf(value);

          if (i == -1) i = 0;
          this.setSelectedIndex(i);
        }

        get previousPage() {
          if (this._previousIndex == -1) return null;else return this._pageNames[this._previousIndex];
        }

        get pageCount() {
          return this._pageIds.length;
        }

        getPageName(index) {
          return this._pageNames[index];
        }

        addPage(name) {
          name = name || "";
          this.addPageAt(name, this._pageIds.length);
        }

        addPageAt(name, index) {
          name = name || "";
          var nid = "" + _nextPageId++;

          if (index == null || index == this._pageIds.length) {
            this._pageIds.push(nid);

            this._pageNames.push(name);
          } else {
            this._pageIds.splice(index, 0, nid);

            this._pageNames.splice(index, 0, name);
          }
        }

        removePage(name) {
          var i = this._pageNames.indexOf(name);

          if (i != -1) {
            this._pageIds.splice(i, 1);

            this._pageNames.splice(i, 1);

            if (this._selectedIndex >= this._pageIds.length) this.selectedIndex = this._selectedIndex - 1;else this.parent.applyController(this);
          }
        }

        removePageAt(index) {
          this._pageIds.splice(index, 1);

          this._pageNames.splice(index, 1);

          if (this._selectedIndex >= this._pageIds.length) this.selectedIndex = this._selectedIndex - 1;else this.parent.applyController(this);
        }

        clearPages() {
          this._pageIds.length = 0;
          this._pageNames.length = 0;
          if (this._selectedIndex != -1) this.selectedIndex = -1;else this.parent.applyController(this);
        }

        hasPage(aName) {
          return this._pageNames.indexOf(aName) != -1;
        }

        getPageIndexById(aId) {
          return this._pageIds.indexOf(aId);
        }

        getPageIdByName(aName) {
          var i = this._pageNames.indexOf(aName);

          if (i != -1) return this._pageIds[i];else return null;
        }

        getPageNameById(aId) {
          var i = this._pageIds.indexOf(aId);

          if (i != -1) return this._pageNames[i];else return null;
        }

        getPageId(index) {
          return this._pageIds[index];
        }

        get selectedPageId() {
          if (this._selectedIndex == -1) return null;else return this._pageIds[this._selectedIndex];
        }

        set selectedPageId(val) {
          var i = this._pageIds.indexOf(val);

          this.selectedIndex = i;
        }

        set oppositePageId(val) {
          var i = this._pageIds.indexOf(val);

          if (i > 0) this.selectedIndex = 0;else if (this._pageIds.length > 1) this.selectedIndex = 1;
        }

        get previousPageId() {
          if (this._previousIndex == -1) return null;else return this._pageIds[this._previousIndex];
        }

        runActions() {
          if (this._actions) {
            var cnt = this._actions.length;

            for (var i = 0; i < cnt; i++) {
              this._actions[i].run(this, this.previousPageId, this.selectedPageId);
            }
          }
        }

        setup(buffer) {
          var beginPos = buffer.position;
          buffer.seek(beginPos, 0);
          this.name = buffer.readS();
          if (buffer.readBool()) this.autoRadioGroupDepth = true;
          buffer.seek(beginPos, 1);
          var i;
          var nextPos;
          var cnt = buffer.readShort();

          for (i = 0; i < cnt; i++) {
            this._pageIds.push(buffer.readS());

            this._pageNames.push(buffer.readS());
          }

          var homePageIndex = 0;

          if (buffer.version >= 2) {
            var homePageType = buffer.readByte();

            switch (homePageType) {
              case 1:
                homePageIndex = buffer.readShort();
                break;

              case 2:
                homePageIndex = this._pageNames.indexOf((_crd && UIPackage === void 0 ? (_reportPossibleCrUseOfUIPackage({
                  error: Error()
                }), UIPackage) : UIPackage).branch);
                if (homePageIndex == -1) homePageIndex = 0;
                break;

              case 3:
                homePageIndex = this._pageNames.indexOf((_crd && UIPackage === void 0 ? (_reportPossibleCrUseOfUIPackage({
                  error: Error()
                }), UIPackage) : UIPackage).getVar(buffer.readS()));
                if (homePageIndex == -1) homePageIndex = 0;
                break;
            }
          }

          buffer.seek(beginPos, 2);
          cnt = buffer.readShort();

          if (cnt > 0) {
            if (!this._actions) this._actions = new Array();

            for (i = 0; i < cnt; i++) {
              nextPos = buffer.readShort();
              nextPos += buffer.position;
              var action = createAction(buffer.readByte());
              action.setup(buffer);

              this._actions.push(action);

              buffer.position = nextPos;
            }
          }

          if (this.parent && this._pageIds.length > 0) this._selectedIndex = homePageIndex;else this._selectedIndex = -1;
        }

      });

      __checkObsolete__(['EventTarget']);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=351264fd653fa88b43384d9dc14d83e792fe4e1c.js.map