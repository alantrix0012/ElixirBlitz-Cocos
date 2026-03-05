System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, FUIEvent, RelationType, GComponent, GObject, GRoot, UIConfig, UIPackage, Window, _crd;

  function _reportPossibleCrUseOfFUIEvent(extras) {
    _reporterNs.report("FUIEvent", "./event/Event", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRelationType(extras) {
    _reporterNs.report("RelationType", "./FieldTypes", _context.meta, extras);
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

  function _reportPossibleCrUseOfUIConfig(extras) {
    _reporterNs.report("UIConfig", "./UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPackage(extras) {
    _reporterNs.report("UIPackage", "./UIPackage", _context.meta, extras);
  }

  _export("Window", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      FUIEvent = _unresolved_2.Event;
    }, function (_unresolved_3) {
      RelationType = _unresolved_3.RelationType;
    }, function (_unresolved_4) {
      GComponent = _unresolved_4.GComponent;
    }, function (_unresolved_5) {
      GObject = _unresolved_5.GObject;
    }, function (_unresolved_6) {
      GRoot = _unresolved_6.GRoot;
    }, function (_unresolved_7) {
      UIConfig = _unresolved_7.UIConfig;
    }, function (_unresolved_8) {
      UIPackage = _unresolved_8.UIPackage;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "05e76np6MtM/qAviPcGFjhV", "Window", undefined);

      __checkObsolete__(['Node', 'Vec2']);

      _export("Window", Window = class Window extends (_crd && GComponent === void 0 ? (_reportPossibleCrUseOfGComponent({
        error: Error()
      }), GComponent) : GComponent) {
        constructor() {
          super();
          this._contentPane = void 0;
          this._modalWaitPane = void 0;
          this._closeButton = void 0;
          this._dragArea = void 0;
          this._contentArea = void 0;
          this._frame = void 0;
          this._modal = void 0;
          this._uiSources = void 0;
          this._inited = void 0;
          this._loading = void 0;
          this._requestingCmd = 0;
          this.bringToFontOnClick = void 0;
          this._uiSources = new Array();
          this.bringToFontOnClick = (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
            error: Error()
          }), UIConfig) : UIConfig).bringWindowToFrontOnClick;

          this._node.on((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).TOUCH_BEGIN, this.onTouchBegin_1, this, true);
        }

        addUISource(source) {
          this._uiSources.push(source);
        }

        set contentPane(val) {
          if (this._contentPane != val) {
            if (this._contentPane) this.removeChild(this._contentPane);
            this._contentPane = val;

            if (this._contentPane) {
              this.addChild(this._contentPane);
              this.setSize(this._contentPane.width, this._contentPane.height);

              this._contentPane.addRelation(this, (_crd && RelationType === void 0 ? (_reportPossibleCrUseOfRelationType({
                error: Error()
              }), RelationType) : RelationType).Size);

              this._frame = this._contentPane.getChild("frame");

              if (this._frame) {
                this.closeButton = this._frame.getChild("closeButton");
                this.dragArea = this._frame.getChild("dragArea");
                this.contentArea = this._frame.getChild("contentArea");
              }
            }
          }
        }

        get contentPane() {
          return this._contentPane;
        }

        get frame() {
          return this._frame;
        }

        get closeButton() {
          return this._closeButton;
        }

        set closeButton(value) {
          if (this._closeButton) this._closeButton.offClick(this.closeEventHandler, this);
          this._closeButton = value;
          if (this._closeButton) this._closeButton.onClick(this.closeEventHandler, this);
        }

        get dragArea() {
          return this._dragArea;
        }

        set dragArea(value) {
          if (this._dragArea != value) {
            if (this._dragArea) {
              this._dragArea.draggable = false;

              this._dragArea.off((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
                error: Error()
              }), FUIEvent) : FUIEvent).DRAG_START, this.onDragStart_1, this);
            }

            this._dragArea = value;

            if (this._dragArea) {
              this._dragArea.draggable = true;

              this._dragArea.on((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
                error: Error()
              }), FUIEvent) : FUIEvent).DRAG_START, this.onDragStart_1, this);
            }
          }
        }

        get contentArea() {
          return this._contentArea;
        }

        set contentArea(value) {
          this._contentArea = value;
        }

        show() {
          (_crd && GRoot === void 0 ? (_reportPossibleCrUseOfGRoot({
            error: Error()
          }), GRoot) : GRoot).inst.showWindow(this);
        }

        showOn(root) {
          root.showWindow(this);
        }

        hide() {
          if (this.isShowing) this.doHideAnimation();
        }

        hideImmediately() {
          var r = this.parent instanceof (_crd && GRoot === void 0 ? (_reportPossibleCrUseOfGRoot({
            error: Error()
          }), GRoot) : GRoot) ? this.parent : null;
          if (!r) r = (_crd && GRoot === void 0 ? (_reportPossibleCrUseOfGRoot({
            error: Error()
          }), GRoot) : GRoot).inst;
          r.hideWindowImmediately(this);
        }

        centerOn(r, restraint) {
          this.setPosition(Math.round((r.width - this.width) / 2), Math.round((r.height - this.height) / 2));

          if (restraint) {
            this.addRelation(r, (_crd && RelationType === void 0 ? (_reportPossibleCrUseOfRelationType({
              error: Error()
            }), RelationType) : RelationType).Center_Center);
            this.addRelation(r, (_crd && RelationType === void 0 ? (_reportPossibleCrUseOfRelationType({
              error: Error()
            }), RelationType) : RelationType).Middle_Middle);
          }
        }

        toggleStatus() {
          if (this.isTop) this.hide();else this.show();
        }

        get isShowing() {
          return this.parent != null;
        }

        get isTop() {
          return this.parent && this.parent.getChildIndex(this) == this.parent.numChildren - 1;
        }

        get modal() {
          return this._modal;
        }

        set modal(val) {
          this._modal = val;
        }

        bringToFront() {
          (_crd && GRoot === void 0 ? (_reportPossibleCrUseOfGRoot({
            error: Error()
          }), GRoot) : GRoot).inst.bringToFront(this);
        }

        showModalWait(requestingCmd) {
          if (requestingCmd != null) this._requestingCmd = requestingCmd;

          if ((_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
            error: Error()
          }), UIConfig) : UIConfig).windowModalWaiting) {
            if (!this._modalWaitPane) this._modalWaitPane = (_crd && UIPackage === void 0 ? (_reportPossibleCrUseOfUIPackage({
              error: Error()
            }), UIPackage) : UIPackage).createObjectFromURL((_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).windowModalWaiting);
            this.layoutModalWaitPane();
            this.addChild(this._modalWaitPane);
          }
        }

        layoutModalWaitPane() {
          if (this._contentArea) {
            var pt = this._frame.localToGlobal();

            pt = this.globalToLocal(pt.x, pt.y, pt);

            this._modalWaitPane.setPosition(pt.x + this._contentArea.x, pt.y + this._contentArea.y);

            this._modalWaitPane.setSize(this._contentArea.width, this._contentArea.height);
          } else this._modalWaitPane.setSize(this.width, this.height);
        }

        closeModalWait(requestingCmd) {
          if (requestingCmd != null) {
            if (this._requestingCmd != requestingCmd) return false;
          }

          this._requestingCmd = 0;
          if (this._modalWaitPane && this._modalWaitPane.parent) this.removeChild(this._modalWaitPane);
          return true;
        }

        get modalWaiting() {
          return this._modalWaitPane && this._modalWaitPane.parent != null;
        }

        init() {
          if (this._inited || this._loading) return;

          if (this._uiSources.length > 0) {
            this._loading = false;
            var cnt = this._uiSources.length;

            for (var i = 0; i < cnt; i++) {
              var lib = this._uiSources[i];

              if (!lib.loaded) {
                lib.load(this.__uiLoadComplete, this);
                this._loading = true;
              }
            }

            if (!this._loading) this._init();
          } else this._init();
        }

        onInit() {}

        onShown() {}

        onHide() {}

        doShowAnimation() {
          this.onShown();
        }

        doHideAnimation() {
          this.hideImmediately();
        }

        __uiLoadComplete() {
          var cnt = this._uiSources.length;

          for (var i = 0; i < cnt; i++) {
            var lib = this._uiSources[i];
            if (!lib.loaded) return;
          }

          this._loading = false;

          this._init();
        }

        _init() {
          this._inited = true;
          this.onInit();
          if (this.isShowing) this.doShowAnimation();
        }

        dispose() {
          if (this.parent) this.hideImmediately();
          super.dispose();
        }

        closeEventHandler(evt) {
          this.hide();
        }

        onEnable() {
          super.onEnable();
          if (!this._inited) this.init();else this.doShowAnimation();
        }

        onDisable() {
          super.onDisable();
          this.closeModalWait();
          this.onHide();
        }

        onTouchBegin_1(evt) {
          if (this.isShowing && this.bringToFontOnClick) this.bringToFront();
        }

        onDragStart_1(evt) {
          var original = (_crd && GObject === void 0 ? (_reportPossibleCrUseOfGObject({
            error: Error()
          }), GObject) : GObject).cast(evt.currentTarget);
          original.stopDrag();
          this.startDrag(evt.touchId);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ac524d6320a26c30497cc7e04f733e06d7123ab3.js.map