System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Mask, Vec2, Node, UITransform, Controller, FUIEvent, PixelHitTest, ChildHitArea, ChildrenRenderOrder, OverflowType, ObjectType, GGraph, GImage, GObject, Margin, ScrollPane, Transition, TranslationHelper, UIConfig, UIContentScaler, Decls, UIPackage, GComponent, _crd, s_vec2;

  function _reportPossibleCrUseOfController(extras) {
    _reporterNs.report("Controller", "./Controller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFUIEvent(extras) {
    _reporterNs.report("FUIEvent", "./event/Event", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIHitTest(extras) {
    _reporterNs.report("IHitTest", "./event/HitTest", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPixelHitTest(extras) {
    _reporterNs.report("PixelHitTest", "./event/HitTest", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChildHitArea(extras) {
    _reporterNs.report("ChildHitArea", "./event/HitTest", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChildrenRenderOrder(extras) {
    _reporterNs.report("ChildrenRenderOrder", "./FieldTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOverflowType(extras) {
    _reporterNs.report("OverflowType", "./FieldTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectType(extras) {
    _reporterNs.report("ObjectType", "./FieldTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGGraph(extras) {
    _reporterNs.report("GGraph", "./GGraph", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGGroup(extras) {
    _reporterNs.report("GGroup", "./GGroup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGImage(extras) {
    _reporterNs.report("GImage", "./GImage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGObject(extras) {
    _reporterNs.report("GObject", "./GObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMargin(extras) {
    _reporterNs.report("Margin", "./Margin", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPackageItem(extras) {
    _reporterNs.report("PackageItem", "./PackageItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScrollPane(extras) {
    _reporterNs.report("ScrollPane", "./ScrollPane", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTransition(extras) {
    _reporterNs.report("Transition", "./Transition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTranslationHelper(extras) {
    _reporterNs.report("TranslationHelper", "./TranslationHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIConfig(extras) {
    _reporterNs.report("UIConfig", "./UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIContentScaler(extras) {
    _reporterNs.report("UIContentScaler", "./UIContentScaler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDecls(extras) {
    _reporterNs.report("Decls", "./UIPackage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPackage(extras) {
    _reporterNs.report("UIPackage", "./UIPackage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfByteBuffer(extras) {
    _reporterNs.report("ByteBuffer", "./utils/ByteBuffer", _context.meta, extras);
  }

  _export("GComponent", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Mask = _cc.Mask;
      Vec2 = _cc.Vec2;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      Controller = _unresolved_2.Controller;
    }, function (_unresolved_3) {
      FUIEvent = _unresolved_3.Event;
    }, function (_unresolved_4) {
      PixelHitTest = _unresolved_4.PixelHitTest;
      ChildHitArea = _unresolved_4.ChildHitArea;
    }, function (_unresolved_5) {
      ChildrenRenderOrder = _unresolved_5.ChildrenRenderOrder;
      OverflowType = _unresolved_5.OverflowType;
      ObjectType = _unresolved_5.ObjectType;
    }, function (_unresolved_6) {
      GGraph = _unresolved_6.GGraph;
    }, function (_unresolved_7) {
      GImage = _unresolved_7.GImage;
    }, function (_unresolved_8) {
      GObject = _unresolved_8.GObject;
    }, function (_unresolved_9) {
      Margin = _unresolved_9.Margin;
    }, function (_unresolved_10) {
      ScrollPane = _unresolved_10.ScrollPane;
    }, function (_unresolved_11) {
      Transition = _unresolved_11.Transition;
    }, function (_unresolved_12) {
      TranslationHelper = _unresolved_12.TranslationHelper;
    }, function (_unresolved_13) {
      UIConfig = _unresolved_13.UIConfig;
    }, function (_unresolved_14) {
      UIContentScaler = _unresolved_14.UIContentScaler;
    }, function (_unresolved_15) {
      Decls = _unresolved_15.Decls;
      UIPackage = _unresolved_15.UIPackage;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ab3eeejrwhHHa1xUy8J3b7A", "GComponent", undefined);

      __checkObsolete__(['Mask', 'Vec2', 'Size', 'Node', 'UITransform', 'Constructor']);

      _export("GComponent", GComponent = class GComponent extends (_crd && GObject === void 0 ? (_reportPossibleCrUseOfGObject({
        error: Error()
      }), GObject) : GObject) {
        constructor() {
          super();
          this.hitArea = void 0;
          this._sortingChildCount = 0;
          this._opaque = void 0;
          this._applyingController = void 0;
          this._rectMask = void 0;
          this._maskContent = void 0;
          this._invertedMask = false;
          this._containerUITrans = void 0;
          this._margin = void 0;
          this._trackBounds = void 0;
          this._boundsChanged = void 0;
          this._childrenRenderOrder = (_crd && ChildrenRenderOrder === void 0 ? (_reportPossibleCrUseOfChildrenRenderOrder({
            error: Error()
          }), ChildrenRenderOrder) : ChildrenRenderOrder).Ascent;
          this._apexIndex = 0;
          this._buildingDisplayList = void 0;
          this._children = void 0;
          this._controllers = void 0;
          this._transitions = void 0;
          this._container = void 0;
          this._scrollPane = void 0;
          this._alignOffset = void 0;
          this._customMask = void 0;
          this._node.name = "GComponent";
          this._children = new Array();
          this._controllers = new Array();
          this._transitions = new Array();
          this._margin = new (_crd && Margin === void 0 ? (_reportPossibleCrUseOfMargin({
            error: Error()
          }), Margin) : Margin)();
          this._alignOffset = new Vec2();
          this._container = new Node("Container");
          this._container.layer = (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
            error: Error()
          }), UIConfig) : UIConfig).defaultUILayer;
          this._containerUITrans = this._container.addComponent(UITransform);

          this._containerUITrans.setAnchorPoint(0, 1);

          this._node.addChild(this._container);
        }

        dispose() {
          var i;
          var cnt;
          cnt = this._transitions.length;

          for (i = 0; i < cnt; ++i) {
            var trans = this._transitions[i];
            trans.dispose();
          }

          cnt = this._controllers.length;

          for (i = 0; i < cnt; ++i) {
            var cc = this._controllers[i];
            cc.dispose();
          }

          if (this._scrollPane) this._scrollPane.destroy();
          cnt = this._children.length;

          for (i = cnt - 1; i >= 0; --i) {
            var obj = this._children[i];
            obj._parent = null; //avoid removeFromParent call

            obj.dispose();
          }

          this._boundsChanged = false;
          super.dispose();
        }

        get displayListContainer() {
          return this._container;
        }

        addChild(child) {
          this.addChildAt(child, this._children.length);
          return child;
        }

        addChildAt(child, index) {
          if (!child) throw new Error("child is null");
          var numChildren = this._children.length;

          if (index >= 0 && index <= numChildren) {
            if (child.parent == this) {
              this.setChildIndex(child, index);
            } else {
              child.removeFromParent();
              child._parent = this;
              var cnt = this._children.length;

              if (child.sortingOrder != 0) {
                this._sortingChildCount++;
                index = this.getInsertPosForSortingChild(child);
              } else if (this._sortingChildCount > 0) {
                if (index > cnt - this._sortingChildCount) index = cnt - this._sortingChildCount;
              }

              if (index == cnt) this._children.push(child);else this._children.splice(index, 0, child);
              this.onChildAdd(child, index);
              this.setBoundsChangedFlag();
            }

            return child;
          } else {
            throw new Error("Invalid child index");
          }
        }

        getInsertPosForSortingChild(target) {
          var cnt = this._children.length;
          var i = 0;

          for (i = 0; i < cnt; i++) {
            var child = this._children[i];
            if (child == target) continue;
            if (target.sortingOrder < child.sortingOrder) break;
          }

          return i;
        }

        removeChild(child, dispose) {
          var childIndex = this._children.indexOf(child);

          if (childIndex != -1) {
            this.removeChildAt(childIndex, dispose);
          }

          return child;
        }

        removeChildAt(index, dispose) {
          if (index >= 0 && index < this.numChildren) {
            var child = this._children[index];
            child._parent = null;
            if (child.sortingOrder != 0) this._sortingChildCount--;

            this._children.splice(index, 1);

            child.group = null;

            this._container.removeChild(child.node);

            if (this._childrenRenderOrder == (_crd && ChildrenRenderOrder === void 0 ? (_reportPossibleCrUseOfChildrenRenderOrder({
              error: Error()
            }), ChildrenRenderOrder) : ChildrenRenderOrder).Arch) this._partner.callLater(this.buildNativeDisplayList);
            if (dispose) child.dispose();else child.node.parent = null;
            this.setBoundsChangedFlag();
            return child;
          } else {
            throw new Error("Invalid child index");
          }
        }

        removeChildren(beginIndex, endIndex, dispose) {
          if (beginIndex == undefined) beginIndex = 0;
          if (endIndex == undefined) endIndex = -1;
          if (endIndex < 0 || endIndex >= this.numChildren) endIndex = this.numChildren - 1;

          for (var i = beginIndex; i <= endIndex; ++i) this.removeChildAt(beginIndex, dispose);
        }

        getChildAt(index, classType) {
          if (index >= 0 && index < this.numChildren) return this._children[index];else throw new Error("Invalid child index");
        }

        getChild(name, classType) {
          var cnt = this._children.length;

          for (var i = 0; i < cnt; ++i) {
            if (this._children[i].name == name) return this._children[i];
          }

          return null;
        }

        getChildByPath(path, classType) {
          var arr = path.split(".");
          var cnt = arr.length;
          var gcom = this;
          var obj;

          for (var i = 0; i < cnt; ++i) {
            obj = gcom.getChild(arr[i]);
            if (!obj) break;

            if (i != cnt - 1) {
              if (!(obj instanceof GComponent)) {
                obj = null;
                break;
              } else gcom = obj;
            }
          }

          return obj;
        }

        getVisibleChild(name) {
          var cnt = this._children.length;

          for (var i = 0; i < cnt; ++i) {
            var child = this._children[i];
            if (child._finalVisible && child.name == name) return child;
          }

          return null;
        }

        getChildInGroup(name, group) {
          var cnt = this._children.length;

          for (var i = 0; i < cnt; ++i) {
            var child = this._children[i];
            if (child.group == group && child.name == name) return child;
          }

          return null;
        }

        getChildById(id) {
          var cnt = this._children.length;

          for (var i = 0; i < cnt; ++i) {
            if (this._children[i]._id == id) return this._children[i];
          }

          return null;
        }

        getChildIndex(child) {
          return this._children.indexOf(child);
        }

        setChildIndex(child, index) {
          var oldIndex = this._children.indexOf(child);

          if (oldIndex == -1) throw new Error("Not a child of this container");
          if (child.sortingOrder != 0) //no effect
            return;
          var cnt = this._children.length;

          if (this._sortingChildCount > 0) {
            if (index > cnt - this._sortingChildCount - 1) index = cnt - this._sortingChildCount - 1;
          }

          this._setChildIndex(child, oldIndex, index);
        }

        setChildIndexBefore(child, index) {
          var oldIndex = this._children.indexOf(child);

          if (oldIndex == -1) throw new Error("Not a child of this container");
          if (child.sortingOrder != 0) //no effect
            return oldIndex;
          var cnt = this._children.length;

          if (this._sortingChildCount > 0) {
            if (index > cnt - this._sortingChildCount - 1) index = cnt - this._sortingChildCount - 1;
          }

          if (oldIndex < index) return this._setChildIndex(child, oldIndex, index - 1);else return this._setChildIndex(child, oldIndex, index);
        }

        _setChildIndex(child, oldIndex, index) {
          var cnt = this._children.length;
          if (index > cnt) index = cnt;
          if (oldIndex == index) return oldIndex;

          this._children.splice(oldIndex, 1);

          this._children.splice(index, 0, child);

          if (this._childrenRenderOrder == (_crd && ChildrenRenderOrder === void 0 ? (_reportPossibleCrUseOfChildrenRenderOrder({
            error: Error()
          }), ChildrenRenderOrder) : ChildrenRenderOrder).Ascent) child.node.setSiblingIndex(index);else if (this._childrenRenderOrder == (_crd && ChildrenRenderOrder === void 0 ? (_reportPossibleCrUseOfChildrenRenderOrder({
            error: Error()
          }), ChildrenRenderOrder) : ChildrenRenderOrder).Descent) child.node.setSiblingIndex(cnt - index);else this._partner.callLater(this.buildNativeDisplayList);
          this.setBoundsChangedFlag();
          return index;
        }

        swapChildren(child1, child2) {
          var index1 = this._children.indexOf(child1);

          var index2 = this._children.indexOf(child2);

          if (index1 == -1 || index2 == -1) throw new Error("Not a child of this container");
          this.swapChildrenAt(index1, index2);
        }

        swapChildrenAt(index1, index2) {
          var child1 = this._children[index1];
          var child2 = this._children[index2];
          this.setChildIndex(child1, index2);
          this.setChildIndex(child2, index1);
        }

        get numChildren() {
          return this._children.length;
        }

        isAncestorOf(child) {
          if (child == null) return false;
          var p = child.parent;

          while (p) {
            if (p == this) return true;
            p = p.parent;
          }

          return false;
        }

        addController(controller) {
          this._controllers.push(controller);

          controller.parent = this;
          this.applyController(controller);
        }

        getControllerAt(index) {
          return this._controllers[index];
        }

        getController(name) {
          var cnt = this._controllers.length;

          for (var i = 0; i < cnt; ++i) {
            var c = this._controllers[i];
            if (c.name == name) return c;
          }

          return null;
        }

        removeController(c) {
          var index = this._controllers.indexOf(c);

          if (index == -1) throw new Error("controller not exists");
          c.parent = null;

          this._controllers.splice(index, 1);

          var length = this._children.length;

          for (var i = 0; i < length; i++) {
            var child = this._children[i];
            child.handleControllerChanged(c);
          }
        }

        get controllers() {
          return this._controllers;
        }

        onChildAdd(child, index) {
          child.node.parent = this._container;
          child.node.active = child._finalVisible;
          if (this._buildingDisplayList) return;
          var cnt = this._children.length;
          if (this._childrenRenderOrder == (_crd && ChildrenRenderOrder === void 0 ? (_reportPossibleCrUseOfChildrenRenderOrder({
            error: Error()
          }), ChildrenRenderOrder) : ChildrenRenderOrder).Ascent) child.node.setSiblingIndex(index);else if (this._childrenRenderOrder == (_crd && ChildrenRenderOrder === void 0 ? (_reportPossibleCrUseOfChildrenRenderOrder({
            error: Error()
          }), ChildrenRenderOrder) : ChildrenRenderOrder).Descent) child.node.setSiblingIndex(cnt - index);else this._partner.callLater(this.buildNativeDisplayList);
        }

        buildNativeDisplayList(dt) {
          if (!isNaN(dt)) {
            var _t = (_crd && GObject === void 0 ? (_reportPossibleCrUseOfGObject({
              error: Error()
            }), GObject) : GObject).cast(this.node);

            _t.buildNativeDisplayList();

            return;
          }

          var cnt = this._children.length;
          if (cnt == 0) return;
          var child;

          switch (this._childrenRenderOrder) {
            case (_crd && ChildrenRenderOrder === void 0 ? (_reportPossibleCrUseOfChildrenRenderOrder({
              error: Error()
            }), ChildrenRenderOrder) : ChildrenRenderOrder).Ascent:
              {
                var j = 0;

                for (var i = 0; i < cnt; i++) {
                  child = this._children[i];
                  child.node.setSiblingIndex(j++);
                }
              }
              break;

            case (_crd && ChildrenRenderOrder === void 0 ? (_reportPossibleCrUseOfChildrenRenderOrder({
              error: Error()
            }), ChildrenRenderOrder) : ChildrenRenderOrder).Descent:
              {
                var _j = 0;

                for (var _i = cnt - 1; _i >= 0; _i--) {
                  child = this._children[_i];
                  child.node.setSiblingIndex(_j++);
                }
              }
              break;

            case (_crd && ChildrenRenderOrder === void 0 ? (_reportPossibleCrUseOfChildrenRenderOrder({
              error: Error()
            }), ChildrenRenderOrder) : ChildrenRenderOrder).Arch:
              {
                var _j2 = 0;

                for (var _i2 = 0; _i2 < this._apexIndex; _i2++) {
                  child = this._children[_i2];
                  child.node.setSiblingIndex(_j2++);
                }

                for (var _i3 = cnt - 1; _i3 >= this._apexIndex; _i3--) {
                  child = this._children[_i3];
                  child.node.setSiblingIndex(_j2++);
                }
              }
              break;
          }
        }

        applyController(c) {
          this._applyingController = c;
          var child;
          var length = this._children.length;

          for (var i = 0; i < length; i++) {
            child = this._children[i];
            child.handleControllerChanged(c);
          }

          this._applyingController = null;
          c.runActions();
        }

        applyAllControllers() {
          var cnt = this._controllers.length;

          for (var i = 0; i < cnt; ++i) {
            this.applyController(this._controllers[i]);
          }
        }

        adjustRadioGroupDepth(obj, c) {
          var cnt = this._children.length;
          var i;
          var child;
          var myIndex = -1,
              maxIndex = -1;

          for (i = 0; i < cnt; i++) {
            child = this._children[i];

            if (child == obj) {
              myIndex = i;
            } else if ("relatedController" in child
            /*is button*/
            && child.relatedController == c) {
              if (i > maxIndex) maxIndex = i;
            }
          }

          if (myIndex < maxIndex) {
            if (this._applyingController) this._children[maxIndex].handleControllerChanged(this._applyingController);
            this.swapChildrenAt(myIndex, maxIndex);
          }
        }

        getTransitionAt(index) {
          return this._transitions[index];
        }

        getTransition(transName) {
          var cnt = this._transitions.length;

          for (var i = 0; i < cnt; ++i) {
            var trans = this._transitions[i];
            if (trans.name == transName) return trans;
          }

          return null;
        }

        isChildInView(child) {
          if (this._rectMask) {
            return child.x + child.width >= 0 && child.x <= this.width && child.y + child.height >= 0 && child.y <= this.height;
          } else if (this._scrollPane) {
            return this._scrollPane.isChildInView(child);
          } else return true;
        }

        getFirstChildInView() {
          var cnt = this._children.length;

          for (var i = 0; i < cnt; ++i) {
            var child = this._children[i];
            if (this.isChildInView(child)) return i;
          }

          return -1;
        }

        get scrollPane() {
          return this._scrollPane;
        }

        get opaque() {
          return this._opaque;
        }

        set opaque(value) {
          this._opaque = value;
        }

        get margin() {
          return this._margin;
        }

        set margin(value) {
          this._margin.copy(value);

          this.handleSizeChanged();
        }

        get childrenRenderOrder() {
          return this._childrenRenderOrder;
        }

        set childrenRenderOrder(value) {
          if (this._childrenRenderOrder != value) {
            this._childrenRenderOrder = value;
            this.buildNativeDisplayList();
          }
        }

        get apexIndex() {
          return this._apexIndex;
        }

        set apexIndex(value) {
          if (this._apexIndex != value) {
            this._apexIndex = value;
            if (this._childrenRenderOrder == (_crd && ChildrenRenderOrder === void 0 ? (_reportPossibleCrUseOfChildrenRenderOrder({
              error: Error()
            }), ChildrenRenderOrder) : ChildrenRenderOrder).Arch) this.buildNativeDisplayList();
          }
        }

        get mask() {
          return this._maskContent;
        }

        set mask(value) {
          this.setMask(value, false);
        }

        setMask(value, inverted) {
          if (this._maskContent) {
            this._maskContent.node.off(Node.EventType.TRANSFORM_CHANGED, this.onMaskContentChanged, this);

            this._maskContent.node.off(Node.EventType.SIZE_CHANGED, this.onMaskContentChanged, this);

            this._maskContent.node.off(Node.EventType.ANCHOR_CHANGED, this.onMaskContentChanged, this);

            this._maskContent.visible = true;
          }

          this._maskContent = value;

          if (this._maskContent) {
            if (!(value instanceof (_crd && GImage === void 0 ? (_reportPossibleCrUseOfGImage({
              error: Error()
            }), GImage) : GImage)) && !(value instanceof (_crd && GGraph === void 0 ? (_reportPossibleCrUseOfGGraph({
              error: Error()
            }), GGraph) : GGraph))) return;

            if (!this._customMask) {
              var maskNode = new Node("Mask");
              maskNode.layer = (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).defaultUILayer;
              maskNode.addComponent(UITransform);
              maskNode.parent = this._node;
              if (this._scrollPane) this._container.parent.parent = maskNode;else this._container.parent = maskNode;
              this._customMask = maskNode.addComponent(Mask);
            }

            value.visible = false;
            value.node.on(Node.EventType.TRANSFORM_CHANGED, this.onMaskContentChanged, this);
            value.node.on(Node.EventType.SIZE_CHANGED, this.onMaskContentChanged, this);
            value.node.on(Node.EventType.ANCHOR_CHANGED, this.onMaskContentChanged, this);
            this._invertedMask = inverted;
            if (this._node.activeInHierarchy) this.onMaskReady();else this.on((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
              error: Error()
            }), FUIEvent) : FUIEvent).DISPLAY, this.onMaskReady, this);
            this.onMaskContentChanged();
            if (this._scrollPane) this._scrollPane.adjustMaskContainer();else this._container.setPosition(0, 0);
          } else if (this._customMask) {
            if (this._scrollPane) this._container.parent.parent = this._node;else this._container.parent = this._node;

            this._customMask.node.destroy();

            this._customMask = null;
            if (this._scrollPane) this._scrollPane.adjustMaskContainer();else this._container.setPosition(this._pivotCorrectX, this._pivotCorrectY);
          }
        }

        onMaskReady() {
          this.off((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).DISPLAY, this.onMaskReady, this);

          if (this._maskContent instanceof (_crd && GImage === void 0 ? (_reportPossibleCrUseOfGImage({
            error: Error()
          }), GImage) : GImage)) {
            this._customMask.type = Mask.Type.SPRITE_STENCIL;
            this._customMask.alphaThreshold = 0.0001;
            this._customMask.spriteFrame = this._maskContent._content.spriteFrame;
          } else if (this._maskContent instanceof (_crd && GGraph === void 0 ? (_reportPossibleCrUseOfGGraph({
            error: Error()
          }), GGraph) : GGraph)) {
            if (this._maskContent.type == 2) this._customMask.type = Mask.Type.GRAPHICS_ELLIPSE;else this._customMask.type = Mask.Type.GRAPHICS_RECT;
          }

          this._customMask.inverted = this._invertedMask;
        }

        onMaskContentChanged() {
          var maskNode = this._customMask.node;
          var maskUITrans = maskNode.getComponent(UITransform);
          var contentNode = this._maskContent.node;
          var contentUITrans = this._maskContent._uiTrans;
          var w = this._maskContent.width * this._maskContent.scaleX;
          var h = this._maskContent.height * this._maskContent.scaleY;
          maskUITrans.setContentSize(w, h);
          var left = contentNode.position.x - contentUITrans.anchorX * w;
          var top = contentNode.position.y - contentUITrans.anchorY * h;
          maskUITrans.setAnchorPoint(-left / maskUITrans.width, -top / maskUITrans.height);
          maskNode.setPosition(this._pivotCorrectX, this._pivotCorrectY);
        }

        get _pivotCorrectX() {
          return -this.pivotX * this._width + this._margin.left;
        }

        get _pivotCorrectY() {
          return this.pivotY * this._height - this._margin.top;
        }

        get baseUserData() {
          var buffer = this.packageItem.rawData;
          buffer.seek(0, 4);
          return buffer.readS();
        }

        setupScroll(buffer) {
          this._scrollPane = this._node.addComponent(_crd && ScrollPane === void 0 ? (_reportPossibleCrUseOfScrollPane({
            error: Error()
          }), ScrollPane) : ScrollPane);

          this._scrollPane.setup(buffer);
        }

        setupOverflow(overflow) {
          if (overflow == (_crd && OverflowType === void 0 ? (_reportPossibleCrUseOfOverflowType({
            error: Error()
          }), OverflowType) : OverflowType).Hidden) this._rectMask = this._container.addComponent(Mask);
          if (!this._margin.isNone) this.handleSizeChanged();
        }

        handleAnchorChanged() {
          super.handleAnchorChanged();
          if (this._customMask) this._customMask.node.setPosition(this._pivotCorrectX, this._pivotCorrectY);else if (this._scrollPane) this._scrollPane.adjustMaskContainer();else this._container.setPosition(this._pivotCorrectX + this._alignOffset.x, this._pivotCorrectY - this._alignOffset.y);
        }

        handleSizeChanged() {
          super.handleSizeChanged();
          if (this._customMask) this._customMask.node.setPosition(this._pivotCorrectX, this._pivotCorrectY);else if (!this._scrollPane) this._container.setPosition(this._pivotCorrectX, this._pivotCorrectY);
          if (this._scrollPane) this._scrollPane.onOwnerSizeChanged();else this._containerUITrans.setContentSize(this.viewWidth, this.viewHeight);
        }

        handleGrayedChanged() {
          var c = this.getController("grayed");

          if (c) {
            c.selectedIndex = this.grayed ? 1 : 0;
            return;
          }

          var v = this.grayed;
          var cnt = this._children.length;

          for (var i = 0; i < cnt; ++i) {
            this._children[i].grayed = v;
          }
        }

        handleControllerChanged(c) {
          super.handleControllerChanged(c);
          if (this._scrollPane) this._scrollPane.handleControllerChanged(c);
        }

        _hitTest(pt, globalPt) {
          if (this._customMask) {
            s_vec2.set(globalPt);
            s_vec2.y = (_crd && UIContentScaler === void 0 ? (_reportPossibleCrUseOfUIContentScaler({
              error: Error()
            }), UIContentScaler) : UIContentScaler).rootSize.height - globalPt.y;
            var b = this._customMask.isHit(s_vec2) || false;
            if (!b) return null;
          }

          if (this.hitArea) {
            if (!this.hitArea.hitTest(pt, globalPt)) return null;
          } else if (this._rectMask) {
            s_vec2.set(pt);
            s_vec2.x += this._container.position.x;
            s_vec2.y += this._container.position.y;
            var clippingSize = this._containerUITrans.contentSize;
            if (s_vec2.x < 0 || s_vec2.y < 0 || s_vec2.x >= clippingSize.width || s_vec2.y >= clippingSize.height) return null;
          }

          if (this._scrollPane) {
            var _target = this._scrollPane.hitTest(pt, globalPt);

            if (!_target) return null;
            if (_target != this) return _target;
          }

          var target = null;
          var cnt = this._children.length;

          for (var i = cnt - 1; i >= 0; i--) {
            var child = this._children[i];
            if (this._maskContent == child || child._touchDisabled) continue;
            target = child.hitTest(globalPt);
            if (target) break;
          }

          if (!target && this._opaque && (this.hitArea || pt.x >= 0 && pt.y >= 0 && pt.x < this._width && pt.y < this._height)) target = this;
          return target;
        }

        setBoundsChangedFlag() {
          if (!this._scrollPane && !this._trackBounds) return;

          if (!this._boundsChanged) {
            this._boundsChanged = true;

            this._partner.callLater(this.refresh);
          }
        }

        refresh(dt) {
          if (!isNaN(dt)) {
            var _t = (_crd && GObject === void 0 ? (_reportPossibleCrUseOfGObject({
              error: Error()
            }), GObject) : GObject).cast(this.node);

            _t.refresh();

            return;
          }

          if (this._boundsChanged) {
            var len = this._children.length;

            if (len > 0) {
              for (var i = 0; i < len; i++) {
                var child = this._children[i];
                child.ensureSizeCorrect();
              }
            }

            this.updateBounds();
          }
        }

        ensureBoundsCorrect() {
          var len = this._children.length;

          if (len > 0) {
            for (var i = 0; i < len; i++) {
              var child = this._children[i];
              child.ensureSizeCorrect();
            }
          }

          if (this._boundsChanged) this.updateBounds();
        }

        updateBounds() {
          var ax = 0,
              ay = 0,
              aw = 0,
              ah = 0;
          var len = this._children.length;

          if (len > 0) {
            ax = Number.POSITIVE_INFINITY, ay = Number.POSITIVE_INFINITY;
            var ar = Number.NEGATIVE_INFINITY,
                ab = Number.NEGATIVE_INFINITY;
            var tmp = 0;
            var i = 0;

            for (var i = 0; i < len; i++) {
              var child = this._children[i];
              tmp = child.x;
              if (tmp < ax) ax = tmp;
              tmp = child.y;
              if (tmp < ay) ay = tmp;
              tmp = child.x + child.actualWidth;
              if (tmp > ar) ar = tmp;
              tmp = child.y + child.actualHeight;
              if (tmp > ab) ab = tmp;
            }

            aw = ar - ax;
            ah = ab - ay;
          }

          this.setBounds(ax, ay, aw, ah);
        }

        setBounds(ax, ay, aw, ah) {
          if (ah === void 0) {
            ah = 0;
          }

          this._boundsChanged = false;
          if (this._scrollPane) this._scrollPane.setContentSize(Math.round(ax + aw), Math.round(ay + ah));
        }

        get viewWidth() {
          if (this._scrollPane) return this._scrollPane.viewWidth;else return this.width - this._margin.left - this._margin.right;
        }

        set viewWidth(value) {
          if (this._scrollPane) this._scrollPane.viewWidth = value;else this.width = value + this._margin.left + this._margin.right;
        }

        get viewHeight() {
          if (this._scrollPane) return this._scrollPane.viewHeight;else return this.height - this._margin.top - this._margin.bottom;
        }

        set viewHeight(value) {
          if (this._scrollPane) this._scrollPane.viewHeight = value;else this.height = value + this._margin.top + this._margin.bottom;
        }

        getSnappingPosition(xValue, yValue, resultPoint) {
          if (!resultPoint) resultPoint = new Vec2();
          var cnt = this._children.length;

          if (cnt == 0) {
            resultPoint.x = 0;
            resultPoint.y = 0;
            return resultPoint;
          }

          this.ensureBoundsCorrect();
          var obj = null;
          var prev = null;
          var i = 0;

          if (yValue != 0) {
            for (; i < cnt; i++) {
              obj = this._children[i];

              if (yValue < obj.y) {
                if (i == 0) {
                  yValue = 0;
                  break;
                } else {
                  prev = this._children[i - 1];
                  if (yValue < prev.y + prev.actualHeight / 2) //top half part
                    yValue = prev.y;else //bottom half part
                    yValue = obj.y;
                  break;
                }
              }
            }

            if (i == cnt) yValue = obj.y;
          }

          if (xValue != 0) {
            if (i > 0) i--;

            for (; i < cnt; i++) {
              obj = this._children[i];

              if (xValue < obj.x) {
                if (i == 0) {
                  xValue = 0;
                  break;
                } else {
                  prev = this._children[i - 1];
                  if (xValue < prev.x + prev.actualWidth / 2) //top half part
                    xValue = prev.x;else //bottom half part
                    xValue = obj.x;
                  break;
                }
              }
            }

            if (i == cnt) xValue = obj.x;
          }

          resultPoint.x = xValue;
          resultPoint.y = yValue;
          return resultPoint;
        }

        childSortingOrderChanged(child, oldValue, newValue) {
          if (newValue === void 0) {
            newValue = 0;
          }

          if (newValue == 0) {
            this._sortingChildCount--;
            this.setChildIndex(child, this._children.length);
          } else {
            if (oldValue == 0) this._sortingChildCount++;

            var oldIndex = this._children.indexOf(child);

            var index = this.getInsertPosForSortingChild(child);
            if (oldIndex < index) this._setChildIndex(child, oldIndex, index - 1);else this._setChildIndex(child, oldIndex, index);
          }
        }

        constructFromResource() {
          this.constructFromResource2(null, 0);
        }

        constructFromResource2(objectPool, poolIndex) {
          var contentItem = this.packageItem.getBranch();

          if (!contentItem.decoded) {
            contentItem.decoded = true;
            (_crd && TranslationHelper === void 0 ? (_reportPossibleCrUseOfTranslationHelper({
              error: Error()
            }), TranslationHelper) : TranslationHelper).translateComponent(contentItem);
          }

          var i;
          var dataLen;
          var curPos;
          var nextPos;
          var f1;
          var f2;
          var i1;
          var i2;
          var buffer = contentItem.rawData;
          buffer.seek(0, 0);
          this._underConstruct = true;
          this.sourceWidth = buffer.readInt();
          this.sourceHeight = buffer.readInt();
          this.initWidth = this.sourceWidth;
          this.initHeight = this.sourceHeight;
          this.setSize(this.sourceWidth, this.sourceHeight);

          if (buffer.readBool()) {
            this.minWidth = buffer.readInt();
            this.maxWidth = buffer.readInt();
            this.minHeight = buffer.readInt();
            this.maxHeight = buffer.readInt();
          }

          if (buffer.readBool()) {
            f1 = buffer.readFloat();
            f2 = buffer.readFloat();
            this.setPivot(f1, f2, buffer.readBool());
          }

          if (buffer.readBool()) {
            this._margin.top = buffer.readInt();
            this._margin.bottom = buffer.readInt();
            this._margin.left = buffer.readInt();
            this._margin.right = buffer.readInt();
          }

          var overflow = buffer.readByte();

          if (overflow == (_crd && OverflowType === void 0 ? (_reportPossibleCrUseOfOverflowType({
            error: Error()
          }), OverflowType) : OverflowType).Scroll) {
            var savedPos = buffer.position;
            buffer.seek(0, 7);
            this.setupScroll(buffer);
            buffer.position = savedPos;
          } else this.setupOverflow(overflow);

          if (buffer.readBool()) buffer.skip(8);
          this._buildingDisplayList = true;
          buffer.seek(0, 1);
          var controllerCount = buffer.readShort();

          for (i = 0; i < controllerCount; i++) {
            nextPos = buffer.readShort();
            nextPos += buffer.position;
            var controller = new (_crd && Controller === void 0 ? (_reportPossibleCrUseOfController({
              error: Error()
            }), Controller) : Controller)();

            this._controllers.push(controller);

            controller.parent = this;
            controller.setup(buffer);
            buffer.position = nextPos;
          }

          buffer.seek(0, 2);
          var child;
          var childCount = buffer.readShort();

          for (i = 0; i < childCount; i++) {
            dataLen = buffer.readShort();
            curPos = buffer.position;
            if (objectPool) child = objectPool[poolIndex + i];else {
              buffer.seek(curPos, 0);
              var type = buffer.readByte();
              var src = buffer.readS();
              var pkgId = buffer.readS();
              var pi = null;

              if (src != null) {
                var pkg;
                if (pkgId != null) pkg = (_crd && UIPackage === void 0 ? (_reportPossibleCrUseOfUIPackage({
                  error: Error()
                }), UIPackage) : UIPackage).getById(pkgId);else pkg = contentItem.owner;
                pi = pkg ? pkg.getItemById(src) : null;
              }

              if (pi) {
                child = (_crd && Decls === void 0 ? (_reportPossibleCrUseOfDecls({
                  error: Error()
                }), Decls) : Decls).UIObjectFactory.newObject(pi);
                child.constructFromResource();
              } else child = (_crd && Decls === void 0 ? (_reportPossibleCrUseOfDecls({
                error: Error()
              }), Decls) : Decls).UIObjectFactory.newObject(type);
            }
            child._underConstruct = true;
            child.setup_beforeAdd(buffer, curPos);
            child._parent = this;
            child.node.parent = this._container;

            this._children.push(child);

            buffer.position = curPos + dataLen;
          }

          buffer.seek(0, 3);
          this.relations.setup(buffer, true);
          buffer.seek(0, 2);
          buffer.skip(2);

          for (i = 0; i < childCount; i++) {
            nextPos = buffer.readShort();
            nextPos += buffer.position;
            buffer.seek(buffer.position, 3);

            this._children[i].relations.setup(buffer, false);

            buffer.position = nextPos;
          }

          buffer.seek(0, 2);
          buffer.skip(2);

          for (i = 0; i < childCount; i++) {
            nextPos = buffer.readShort();
            nextPos += buffer.position;
            child = this._children[i];
            child.setup_afterAdd(buffer, buffer.position);
            child._underConstruct = false;
            buffer.position = nextPos;
          }

          buffer.seek(0, 4);
          buffer.skip(2); //customData

          this.opaque = buffer.readBool();
          var maskId = buffer.readShort();

          if (maskId != -1) {
            this.setMask(this.getChildAt(maskId), buffer.readBool());
          }

          var hitTestId = buffer.readS();
          i1 = buffer.readInt();
          i2 = buffer.readInt();

          if (hitTestId != null) {
            pi = contentItem.owner.getItemById(hitTestId);
            if (pi && pi.hitTestData) this.hitArea = new (_crd && PixelHitTest === void 0 ? (_reportPossibleCrUseOfPixelHitTest({
              error: Error()
            }), PixelHitTest) : PixelHitTest)(pi.hitTestData, i1, i2);
          } else if (i1 != 0 && i2 != -1) {
            this.hitArea = new (_crd && ChildHitArea === void 0 ? (_reportPossibleCrUseOfChildHitArea({
              error: Error()
            }), ChildHitArea) : ChildHitArea)(this.getChildAt(i2));
          }

          buffer.seek(0, 5);
          var transitionCount = buffer.readShort();

          for (i = 0; i < transitionCount; i++) {
            nextPos = buffer.readShort();
            nextPos += buffer.position;
            var trans = new (_crd && Transition === void 0 ? (_reportPossibleCrUseOfTransition({
              error: Error()
            }), Transition) : Transition)(this);
            trans.setup(buffer);

            this._transitions.push(trans);

            buffer.position = nextPos;
          }

          this.applyAllControllers();
          this._buildingDisplayList = false;
          this._underConstruct = false;
          this.buildNativeDisplayList();
          this.setBoundsChangedFlag();
          if (contentItem.objectType != (_crd && ObjectType === void 0 ? (_reportPossibleCrUseOfObjectType({
            error: Error()
          }), ObjectType) : ObjectType).Component) this.constructExtension(buffer);
          this.onConstruct();
        }

        constructExtension(buffer) {}

        onConstruct() {}

        setup_afterAdd(buffer, beginPos) {
          super.setup_afterAdd(buffer, beginPos);
          buffer.seek(beginPos, 4);
          var pageController = buffer.readShort();
          if (pageController != -1 && this._scrollPane) this._scrollPane.pageController = this._parent.getControllerAt(pageController);
          var cnt = buffer.readShort();

          for (var i = 0; i < cnt; i++) {
            var cc = this.getController(buffer.readS());
            var pageId = buffer.readS();
            if (cc) cc.selectedPageId = pageId;
          }

          if (buffer.version >= 2) {
            cnt = buffer.readShort();

            for (i = 0; i < cnt; i++) {
              var target = buffer.readS();
              var propertyId = buffer.readShort();
              var value = buffer.readS();
              var obj = this.getChildByPath(target);
              if (obj) obj.setProp(propertyId, value);
            }
          }
        }

        onEnable() {
          var cnt = this._transitions.length;

          for (var i = 0; i < cnt; ++i) this._transitions[i].onEnable();
        }

        onDisable() {
          var cnt = this._transitions.length;

          for (var i = 0; i < cnt; ++i) this._transitions[i].onDisable();
        }

      });

      s_vec2 = new Vec2();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c259f5aa864d4b14ebe8714a561d999299b6faf0.js.map