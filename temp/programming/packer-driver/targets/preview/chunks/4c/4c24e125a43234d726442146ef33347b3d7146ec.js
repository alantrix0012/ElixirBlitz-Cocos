System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, director, Color, Vec2, View, AudioSourceComponent, UITransform, EDITOR, InputProcessor, RelationType, PopupDirection, GComponent, GGraph, Decls, UIConfig, UIContentScaler, updateScaler, UIPackage, Window, GRoot, _crd;

  function _reportPossibleCrUseOfInputProcessor(extras) {
    _reporterNs.report("InputProcessor", "./event/InputProcessor", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRelationType(extras) {
    _reporterNs.report("RelationType", "./FieldTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPopupDirection(extras) {
    _reporterNs.report("PopupDirection", "./FieldTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGComponent(extras) {
    _reporterNs.report("GComponent", "./GComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGGraph(extras) {
    _reporterNs.report("GGraph", "./GGraph", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDecls(extras) {
    _reporterNs.report("Decls", "./GObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGObject(extras) {
    _reporterNs.report("GObject", "./GObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIConfig(extras) {
    _reporterNs.report("UIConfig", "./UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIContentScaler(extras) {
    _reporterNs.report("UIContentScaler", "./UIContentScaler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateScaler(extras) {
    _reporterNs.report("updateScaler", "./UIContentScaler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPackage(extras) {
    _reporterNs.report("UIPackage", "./UIPackage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWindow(extras) {
    _reporterNs.report("Window", "./Window", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFUIEvent(extras) {
    _reporterNs.report("FUIEvent", "./event/Event", _context.meta, extras);
  }

  _export("GRoot", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      director = _cc.director;
      Color = _cc.Color;
      Vec2 = _cc.Vec2;
      View = _cc.View;
      AudioSourceComponent = _cc.AudioSourceComponent;
      UITransform = _cc.UITransform;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }, function (_unresolved_2) {
      InputProcessor = _unresolved_2.InputProcessor;
    }, function (_unresolved_3) {
      RelationType = _unresolved_3.RelationType;
      PopupDirection = _unresolved_3.PopupDirection;
    }, function (_unresolved_4) {
      GComponent = _unresolved_4.GComponent;
    }, function (_unresolved_5) {
      GGraph = _unresolved_5.GGraph;
    }, function (_unresolved_6) {
      Decls = _unresolved_6.Decls;
    }, function (_unresolved_7) {
      UIConfig = _unresolved_7.UIConfig;
    }, function (_unresolved_8) {
      UIContentScaler = _unresolved_8.UIContentScaler;
      updateScaler = _unresolved_8.updateScaler;
    }, function (_unresolved_9) {
      UIPackage = _unresolved_9.UIPackage;
    }, function (_unresolved_10) {
      Window = _unresolved_10.Window;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1907ecTvgBIzKaA/cn1bzG1", "GRoot", undefined);

      __checkObsolete__(['director', 'Color', 'Vec2', 'AudioClip', 'View', 'AudioSourceComponent', 'UITransform']);

      _export("GRoot", GRoot = class GRoot extends (_crd && GComponent === void 0 ? (_reportPossibleCrUseOfGComponent({
        error: Error()
      }), GComponent) : GComponent) {
        static get inst() {
          if (!GRoot._inst) throw 'Call GRoot.create first!';
          return GRoot._inst;
        }

        static create() {
          GRoot._inst = new GRoot();
          director.getScene().getChildByName('Canvas').addChild(GRoot._inst.node);

          GRoot._inst.onWinResize();

          return GRoot._inst;
        }

        constructor() {
          super();
          this._modalLayer = void 0;
          this._popupStack = void 0;
          this._justClosedPopups = void 0;
          this._modalWaitPane = void 0;
          this._tooltipWin = void 0;
          this._defaultTooltipWin = void 0;
          this._volumeScale = void 0;
          this._inputProcessor = void 0;
          this._thisOnResized = void 0;
          this.audioEngine = void 0;
          this._node.name = "GRoot";
          this.opaque = false;
          this._volumeScale = 1;
          this._popupStack = new Array();
          this._justClosedPopups = new Array();
          this._modalLayer = new (_crd && GGraph === void 0 ? (_reportPossibleCrUseOfGGraph({
            error: Error()
          }), GGraph) : GGraph)();

          this._modalLayer.setSize(this.width, this.height);

          this._modalLayer.drawRect(0, Color.TRANSPARENT, (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
            error: Error()
          }), UIConfig) : UIConfig).modalLayerColor);

          this._modalLayer.addRelation(this, (_crd && RelationType === void 0 ? (_reportPossibleCrUseOfRelationType({
            error: Error()
          }), RelationType) : RelationType).Size);

          this._thisOnResized = this.onWinResize.bind(this);
          this._inputProcessor = this.node.addComponent(_crd && InputProcessor === void 0 ? (_reportPossibleCrUseOfInputProcessor({
            error: Error()
          }), InputProcessor) : InputProcessor);
          this._inputProcessor._captureCallback = this.onTouchBegin_1;
          View.instance.on('design-resolution-changed', this.onWinResize, this);

          if (!EDITOR) {
            View.instance.on('canvas-resize', this._thisOnResized);
            window.addEventListener('orientationchange', this._thisOnResized);
          }
        }

        onDestroy() {
          View.instance.off('design-resolution-changed', this.onWinResize, this);

          if (!EDITOR) {
            View.instance.off('canvas-resize', this._thisOnResized);
            window.removeEventListener('orientationchange', this._thisOnResized);
          }

          if (this == GRoot._inst) GRoot._inst = null;
        }

        getTouchPosition(touchId) {
          return this._inputProcessor.getTouchPosition(touchId);
        }

        get touchTarget() {
          return this._inputProcessor.getTouchTarget();
        }

        get inputProcessor() {
          return this._inputProcessor;
        }

        showWindow(win) {
          this.addChild(win);
          win.requestFocus();
          if (win.x > this.width) win.x = this.width - win.width;else if (win.x + win.width < 0) win.x = 0;
          if (win.y > this.height) win.y = this.height - win.height;else if (win.y + win.height < 0) win.y = 0;
          this.adjustModalLayer();
        }

        hideWindow(win) {
          win.hide();
        }

        hideWindowImmediately(win) {
          if (win.parent == this) this.removeChild(win);
          this.adjustModalLayer();
        }

        bringToFront(win) {
          var cnt = this.numChildren;
          var i;
          if (this._modalLayer.parent && !win.modal) i = this.getChildIndex(this._modalLayer) - 1;else i = cnt - 1;

          for (; i >= 0; i--) {
            var g = this.getChildAt(i);
            if (g == win) return;
            if (g instanceof (_crd && Window === void 0 ? (_reportPossibleCrUseOfWindow({
              error: Error()
            }), Window) : Window)) break;
          }

          if (i >= 0) this.setChildIndex(win, i);
        }

        showModalWait(msg) {
          if ((_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
            error: Error()
          }), UIConfig) : UIConfig).globalModalWaiting != null) {
            if (this._modalWaitPane == null) this._modalWaitPane = (_crd && UIPackage === void 0 ? (_reportPossibleCrUseOfUIPackage({
              error: Error()
            }), UIPackage) : UIPackage).createObjectFromURL((_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).globalModalWaiting);

            this._modalWaitPane.setSize(this.width, this.height);

            this._modalWaitPane.addRelation(this, (_crd && RelationType === void 0 ? (_reportPossibleCrUseOfRelationType({
              error: Error()
            }), RelationType) : RelationType).Size);

            this.addChild(this._modalWaitPane);
            this._modalWaitPane.text = msg;
          }
        }

        closeModalWait() {
          if (this._modalWaitPane && this._modalWaitPane.parent) this.removeChild(this._modalWaitPane);
        }

        closeAllExceptModals() {
          var arr = this._children.slice();

          var cnt = arr.length;

          for (var i = 0; i < cnt; i++) {
            var g = arr[i];
            if (g instanceof (_crd && Window === void 0 ? (_reportPossibleCrUseOfWindow({
              error: Error()
            }), Window) : Window) && !g.modal) g.hide();
          }
        }

        closeAllWindows() {
          var arr = this._children.slice();

          var cnt = arr.length;

          for (var i = 0; i < cnt; i++) {
            var g = arr[i];
            if (g instanceof (_crd && Window === void 0 ? (_reportPossibleCrUseOfWindow({
              error: Error()
            }), Window) : Window)) g.hide();
          }
        }

        getTopWindow() {
          var cnt = this.numChildren;

          for (var i = cnt - 1; i >= 0; i--) {
            var g = this.getChildAt(i);

            if (g instanceof (_crd && Window === void 0 ? (_reportPossibleCrUseOfWindow({
              error: Error()
            }), Window) : Window)) {
              return g;
            }
          }

          return null;
        }

        get modalLayer() {
          return this._modalLayer;
        }

        get hasModalWindow() {
          return this._modalLayer.parent != null;
        }

        get modalWaiting() {
          return this._modalWaitPane && this._modalWaitPane.node.activeInHierarchy;
        }

        getPopupPosition(popup, target, dir, result) {
          var pos = result || new Vec2();
          var sizeW = 0,
              sizeH = 0;

          if (target) {
            pos = target.localToGlobal();
            this.globalToLocal(pos.x, pos.y, pos);
            var pos2 = target.localToGlobal(target.width, target.height);
            this.globalToLocal(pos2.x, pos2.y, pos2);
            sizeW = pos2.x - pos.x;
            sizeH = pos2.y - pos.y;
          } else {
            pos = this.getTouchPosition();
            pos = this.globalToLocal(pos.x, pos.y);
          }

          if (pos.x + popup.width > this.width) pos.x = pos.x + sizeW - popup.width;
          pos.y += sizeH;

          if ((dir === undefined || dir === (_crd && PopupDirection === void 0 ? (_reportPossibleCrUseOfPopupDirection({
            error: Error()
          }), PopupDirection) : PopupDirection).Auto) && pos.y + popup.height > this.height || dir === false || dir === (_crd && PopupDirection === void 0 ? (_reportPossibleCrUseOfPopupDirection({
            error: Error()
          }), PopupDirection) : PopupDirection).Up) {
            pos.y = pos.y - sizeH - popup.height - 1;

            if (pos.y < 0) {
              pos.y = 0;
              pos.x += sizeW / 2;
            }
          }

          return pos;
        }

        showPopup(popup, target, dir) {
          if (this._popupStack.length > 0) {
            var k = this._popupStack.indexOf(popup);

            if (k != -1) {
              for (var i = this._popupStack.length - 1; i >= k; i--) this.removeChild(this._popupStack.pop());
            }
          }

          this._popupStack.push(popup);

          if (target) {
            var p = target;

            while (p) {
              if (p.parent == this) {
                if (popup.sortingOrder < p.sortingOrder) {
                  popup.sortingOrder = p.sortingOrder;
                }

                break;
              }

              p = p.parent;
            }
          }

          this.addChild(popup);
          this.adjustModalLayer();
          var pt = this.getPopupPosition(popup, target, dir);
          popup.setPosition(pt.x, pt.y);
        }

        togglePopup(popup, target, dir) {
          if (this._justClosedPopups.indexOf(popup) != -1) return;
          this.showPopup(popup, target, dir);
        }

        hidePopup(popup) {
          if (popup) {
            var k = this._popupStack.indexOf(popup);

            if (k != -1) {
              for (var i = this._popupStack.length - 1; i >= k; i--) this.closePopup(this._popupStack.pop());
            }
          } else {
            var cnt = this._popupStack.length;

            for (i = cnt - 1; i >= 0; i--) this.closePopup(this._popupStack[i]);

            this._popupStack.length = 0;
          }
        }

        get hasAnyPopup() {
          return this._popupStack.length != 0;
        }

        closePopup(target) {
          if (target.parent) {
            if (target instanceof (_crd && Window === void 0 ? (_reportPossibleCrUseOfWindow({
              error: Error()
            }), Window) : Window)) target.hide();else this.removeChild(target);
          }
        }

        showTooltips(msg) {
          if (this._defaultTooltipWin == null) {
            var resourceURL = (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).tooltipsWin;

            if (!resourceURL) {
              console.error("UIConfig.tooltipsWin not defined");
              return;
            }

            this._defaultTooltipWin = (_crd && UIPackage === void 0 ? (_reportPossibleCrUseOfUIPackage({
              error: Error()
            }), UIPackage) : UIPackage).createObjectFromURL(resourceURL);
          }

          this._defaultTooltipWin.text = msg;
          this.showTooltipsWin(this._defaultTooltipWin);
        }

        showTooltipsWin(tooltipWin) {
          this.hideTooltips();
          this._tooltipWin = tooltipWin;
          var pt = this.getTouchPosition();
          pt.x += 10;
          pt.y += 20;
          this.globalToLocal(pt.x, pt.y, pt);

          if (pt.x + this._tooltipWin.width > this.width) {
            pt.x = pt.x - this._tooltipWin.width - 1;
            if (pt.x < 0) pt.x = 10;
          }

          if (pt.y + this._tooltipWin.height > this.height) {
            pt.y = pt.y - this._tooltipWin.height - 1;
            if (pt.y < 0) pt.y = 10;
          }

          this._tooltipWin.setPosition(pt.x, pt.y);

          this.addChild(this._tooltipWin);
        }

        hideTooltips() {
          if (this._tooltipWin) {
            if (this._tooltipWin.parent) this.removeChild(this._tooltipWin);
            this._tooltipWin = null;
          }
        }

        get volumeScale() {
          return this._volumeScale;
        }

        set volumeScale(value) {
          this._volumeScale = value;
        }

        playOneShotSound(clip, volumeScale) {
          if (!this.audioEngine) {
            this.audioEngine = this.node.addComponent(AudioSourceComponent);
          }

          if (volumeScale === undefined) volumeScale = 1;

          if (this.audioEngine.isValid) {
            this.audioEngine.clip = clip;
            this.audioEngine.volume = this._volumeScale * volumeScale;
            this.audioEngine.loop = false;
            this.audioEngine.play();
          }
        }

        adjustModalLayer() {
          var cnt = this.numChildren;
          if (this._modalWaitPane && this._modalWaitPane.parent) this.setChildIndex(this._modalWaitPane, cnt - 1);

          for (var i = cnt - 1; i >= 0; i--) {
            var g = this.getChildAt(i);

            if (g instanceof (_crd && Window === void 0 ? (_reportPossibleCrUseOfWindow({
              error: Error()
            }), Window) : Window) && g.modal) {
              if (this._modalLayer.parent == null) this.addChildAt(this._modalLayer, i);else this.setChildIndexBefore(this._modalLayer, i);
              return;
            }
          }

          if (this._modalLayer.parent) this.removeChild(this._modalLayer);
        }

        onTouchBegin_1(evt) {
          if (this._tooltipWin) this.hideTooltips();
          this._justClosedPopups.length = 0;

          if (this._popupStack.length > 0) {
            var mc = evt.initiator;

            while (mc && mc != this) {
              var pindex = this._popupStack.indexOf(mc);

              if (pindex != -1) {
                for (var i = this._popupStack.length - 1; i > pindex; i--) {
                  var popup = this._popupStack.pop();

                  this.closePopup(popup);

                  this._justClosedPopups.push(popup);
                }

                return;
              }

              mc = mc.findParent();
            }

            var cnt = this._popupStack.length;

            for (var _i = cnt - 1; _i >= 0; _i--) {
              popup = this._popupStack[_i];
              this.closePopup(popup);

              this._justClosedPopups.push(popup);
            }

            this._popupStack.length = 0;
          }
        }

        onWinResize() {
          (_crd && updateScaler === void 0 ? (_reportPossibleCrUseOfupdateScaler({
            error: Error()
          }), updateScaler) : updateScaler)();
          this.setSize((_crd && UIContentScaler === void 0 ? (_reportPossibleCrUseOfUIContentScaler({
            error: Error()
          }), UIContentScaler) : UIContentScaler).rootSize.width, (_crd && UIContentScaler === void 0 ? (_reportPossibleCrUseOfUIContentScaler({
            error: Error()
          }), UIContentScaler) : UIContentScaler).rootSize.height);
          var anchorPoint = this.node.getParent().getComponent(UITransform).anchorPoint;
          this.node.setPosition(-this._width * anchorPoint.x, this._height * (1 - anchorPoint.y));
        }

        handlePositionChanged() {//nothing here
        }

      });

      GRoot._inst = void 0;
      (_crd && Decls === void 0 ? (_reportPossibleCrUseOfDecls({
        error: Error()
      }), Decls) : Decls).GRoot = GRoot;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4c24e125a43234d726442146ef33347b3d7146ec.js.map