System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec2, Rect, Component, director, Node, UITransform, UIOpacity, Vec3, BlendMode, BlendModeUtils, FUIEvent, RelationType, ObjectPropID, GearAnimation, GearColor, GearDisplay, GearDisplay2, GearFontSize, GearIcon, GearLook, GearSize, GearText, GearXY, GGroup, Relations, UIConfig, GObject, GObjectPartner, _crd, GearClasses, s_vec2, s_vec3, s_rect, sGlobalDragStart, sGlobalRect, s_dragging, s_dragQuery, Decls, constructingDepth;

  function createGear(owner, index) {
    var ret = new GearClasses[index]();
    ret._owner = owner;
    return ret;
  }

  function _reportPossibleCrUseOfController(extras) {
    _reporterNs.report("Controller", "./Controller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBlendMode(extras) {
    _reporterNs.report("BlendMode", "./display/BlendMode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBlendModeUtils(extras) {
    _reporterNs.report("BlendModeUtils", "./display/BlendMode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFUIEvent(extras) {
    _reporterNs.report("FUIEvent", "./event/Event", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRelationType(extras) {
    _reporterNs.report("RelationType", "./FieldTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectPropID(extras) {
    _reporterNs.report("ObjectPropID", "./FieldTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGComponent(extras) {
    _reporterNs.report("GComponent", "./GComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGearAnimation(extras) {
    _reporterNs.report("GearAnimation", "./gears/GearAnimation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGearBase(extras) {
    _reporterNs.report("GearBase", "./gears/GearBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGearColor(extras) {
    _reporterNs.report("GearColor", "./gears/GearColor", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGearDisplay(extras) {
    _reporterNs.report("GearDisplay", "./gears/GearDisplay", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGearDisplay2(extras) {
    _reporterNs.report("GearDisplay2", "./gears/GearDisplay2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGearFontSize(extras) {
    _reporterNs.report("GearFontSize", "./gears/GearFontSize", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGearIcon(extras) {
    _reporterNs.report("GearIcon", "./gears/GearIcon", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGearLook(extras) {
    _reporterNs.report("GearLook", "./gears/GearLook", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGearSize(extras) {
    _reporterNs.report("GearSize", "./gears/GearSize", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGearText(extras) {
    _reporterNs.report("GearText", "./gears/GearText", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGearXY(extras) {
    _reporterNs.report("GearXY", "./gears/GearXY", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGGroup(extras) {
    _reporterNs.report("GGroup", "./GGroup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGTreeNode(extras) {
    _reporterNs.report("GTreeNode", "./GTreeNode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPackageItem(extras) {
    _reporterNs.report("PackageItem", "./PackageItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRelations(extras) {
    _reporterNs.report("Relations", "./Relations", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIConfig(extras) {
    _reporterNs.report("UIConfig", "./UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfByteBuffer(extras) {
    _reporterNs.report("ByteBuffer", "./utils/ByteBuffer", _context.meta, extras);
  }

  _export({
    GObject: void 0,
    GObjectPartner: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec2 = _cc.Vec2;
      Rect = _cc.Rect;
      Component = _cc.Component;
      director = _cc.director;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BlendMode = _unresolved_2.BlendMode;
      BlendModeUtils = _unresolved_2.BlendModeUtils;
    }, function (_unresolved_3) {
      FUIEvent = _unresolved_3.Event;
    }, function (_unresolved_4) {
      RelationType = _unresolved_4.RelationType;
      ObjectPropID = _unresolved_4.ObjectPropID;
    }, function (_unresolved_5) {
      GearAnimation = _unresolved_5.GearAnimation;
    }, function (_unresolved_6) {
      GearColor = _unresolved_6.GearColor;
    }, function (_unresolved_7) {
      GearDisplay = _unresolved_7.GearDisplay;
    }, function (_unresolved_8) {
      GearDisplay2 = _unresolved_8.GearDisplay2;
    }, function (_unresolved_9) {
      GearFontSize = _unresolved_9.GearFontSize;
    }, function (_unresolved_10) {
      GearIcon = _unresolved_10.GearIcon;
    }, function (_unresolved_11) {
      GearLook = _unresolved_11.GearLook;
    }, function (_unresolved_12) {
      GearSize = _unresolved_12.GearSize;
    }, function (_unresolved_13) {
      GearText = _unresolved_13.GearText;
    }, function (_unresolved_14) {
      GearXY = _unresolved_14.GearXY;
    }, function (_unresolved_15) {
      GGroup = _unresolved_15.GGroup;
    }, function (_unresolved_16) {
      Relations = _unresolved_16.Relations;
    }, function (_unresolved_17) {
      UIConfig = _unresolved_17.UIConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "19ff872g3JCMKkiOJ5BLKcq", "GObject", undefined);

      __checkObsolete__(['Vec2', 'Rect', 'Component', 'director', 'Node', 'UITransform', 'UIOpacity', 'Vec3']);

      _export("GObject", GObject = class GObject {
        constructor() {
          this.data = void 0;
          this.packageItem = void 0;
          this._x = 0;
          this._y = 0;
          this._alpha = 1;
          this._visible = true;
          this._touchable = true;
          this._grayed = void 0;
          this._draggable = void 0;
          this._skewX = 0;
          this._skewY = 0;
          this._pivotAsAnchor = void 0;
          this._sortingOrder = 0;
          this._internalVisible = true;
          this._handlingController = void 0;
          this._tooltips = void 0;
          this._blendMode = void 0;
          this._pixelSnapping = void 0;
          this._dragTesting = void 0;
          this._dragStartPos = void 0;
          this._relations = void 0;
          this._group = void 0;
          this._gears = void 0;
          this._node = void 0;
          this._dragBounds = void 0;
          this.sourceWidth = 0;
          this.sourceHeight = 0;
          this.initWidth = 0;
          this.initHeight = 0;
          this.minWidth = 0;
          this.minHeight = 0;
          this.maxWidth = 0;
          this.maxHeight = 0;
          this._parent = void 0;
          this._width = 0;
          this._height = 0;
          this._rawWidth = 0;
          this._rawHeight = 0;
          this._id = void 0;
          this._name = void 0;
          this._underConstruct = false;
          this._gearLocked = void 0;
          this._sizePercentInGroup = 0;
          this._touchDisabled = void 0;
          this._partner = void 0;
          this._treeNode = void 0;
          this._uiTrans = void 0;
          this._uiOpacity = void 0;
          this._hitTestPt = void 0;
          this._node = new Node();
          this._uiTrans = this._node.addComponent(UITransform);
          this._uiOpacity = this.node.addComponent(UIOpacity);
          this._node["$gobj"] = this;
          this._node.layer = (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
            error: Error()
          }), UIConfig) : UIConfig).defaultUILayer;

          this._uiTrans.setAnchorPoint(0, 1);

          this._node.on(Node.EventType.ANCHOR_CHANGED, this.handleAnchorChanged, this);

          this._id = this._node.uuid;
          this._name = "";
          this._relations = new (_crd && Relations === void 0 ? (_reportPossibleCrUseOfRelations({
            error: Error()
          }), Relations) : Relations)(this);
          this._gears = new Array(10);
          this._blendMode = (_crd && BlendMode === void 0 ? (_reportPossibleCrUseOfBlendMode({
            error: Error()
          }), BlendMode) : BlendMode).Normal;
          this._partner = this._node.addComponent(GObjectPartner);
        }

        get id() {
          return this._id;
        }

        get name() {
          return this._name;
        }

        set name(value) {
          this._name = value;
          this._node.name = value || "";
        }

        get x() {
          return this._x;
        }

        set x(value) {
          this.setPosition(value, this._y);
        }

        get y() {
          return this._y;
        }

        set y(value) {
          this.setPosition(this._x, value);
        }

        setPosition(xv, yv) {
          if (this._x != xv || this._y != yv) {
            var dx = xv - this._x;
            var dy = yv - this._y;
            this._x = xv;
            this._y = yv;
            this.handlePositionChanged();
            if (this instanceof (_crd && GGroup === void 0 ? (_reportPossibleCrUseOfGGroup({
              error: Error()
            }), GGroup) : GGroup)) this.moveChildren(dx, dy);
            this.updateGear(1);

            if (this._parent && !("setVirtual" in this._parent)
            /*not list*/
            ) {
              this._parent.setBoundsChangedFlag();

              if (this._group) this._group.setBoundsChangedFlag(true);

              this._node.emit((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
                error: Error()
              }), FUIEvent) : FUIEvent).XY_CHANGED, this);
            }

            if (GObject.draggingObject == this && !s_dragging) this.localToGlobalRect(0, 0, this._width, this._height, sGlobalRect);
          }
        }

        get xMin() {
          return this._pivotAsAnchor ? this._x - this._width * this._uiTrans.anchorX : this._x;
        }

        set xMin(value) {
          if (this._pivotAsAnchor) this.setPosition(value + this._width * this._uiTrans.anchorX, this._y);else this.setPosition(value, this._y);
        }

        get yMin() {
          return this._pivotAsAnchor ? this._y - this._height * (1 - this._uiTrans.anchorY) : this._y;
        }

        set yMin(value) {
          if (this._pivotAsAnchor) this.setPosition(this._x, value + this._height * (1 - this._uiTrans.anchorY));else this.setPosition(this._x, value);
        }

        get pixelSnapping() {
          return this._pixelSnapping;
        }

        set pixelSnapping(value) {
          if (this._pixelSnapping != value) {
            this._pixelSnapping = value;
            this.handlePositionChanged();
          }
        }

        center(restraint) {
          var r;
          if (this._parent) r = this.parent;else r = Decls.GRoot.inst;
          this.setPosition((r.width - this._width) / 2, (r.height - this._height) / 2);

          if (restraint) {
            this.addRelation(r, (_crd && RelationType === void 0 ? (_reportPossibleCrUseOfRelationType({
              error: Error()
            }), RelationType) : RelationType).Center_Center);
            this.addRelation(r, (_crd && RelationType === void 0 ? (_reportPossibleCrUseOfRelationType({
              error: Error()
            }), RelationType) : RelationType).Middle_Middle);
          }
        }

        get width() {
          this.ensureSizeCorrect();
          if (this._relations.sizeDirty) this._relations.ensureRelationsSizeCorrect();
          return this._width;
        }

        set width(value) {
          this.setSize(value, this._rawHeight);
        }

        get height() {
          this.ensureSizeCorrect();
          if (this._relations.sizeDirty) this._relations.ensureRelationsSizeCorrect();
          return this._height;
        }

        set height(value) {
          this.setSize(this._rawWidth, value);
        }

        setSize(wv, hv, ignorePivot) {
          if (this._rawWidth != wv || this._rawHeight != hv) {
            this._rawWidth = wv;
            this._rawHeight = hv;
            if (wv < this.minWidth) wv = this.minWidth;
            if (hv < this.minHeight) hv = this.minHeight;
            if (this.maxWidth > 0 && wv > this.maxWidth) wv = this.maxWidth;
            if (this.maxHeight > 0 && hv > this.maxHeight) hv = this.maxHeight;
            var dWidth = wv - this._width;
            var dHeight = hv - this._height;
            this._width = wv;
            this._height = hv;
            this.handleSizeChanged();
            if ((this._uiTrans.anchorX != 0 || this._uiTrans.anchorY != 1) && !this._pivotAsAnchor && !ignorePivot) this.setPosition(this.x - this._uiTrans.anchorX * dWidth, this.y - (1 - this._uiTrans.anchorY) * dHeight);else this.handlePositionChanged();
            if (this instanceof (_crd && GGroup === void 0 ? (_reportPossibleCrUseOfGGroup({
              error: Error()
            }), GGroup) : GGroup)) this.resizeChildren(dWidth, dHeight);
            this.updateGear(2);

            if (this._parent) {
              this._relations.onOwnerSizeChanged(dWidth, dHeight, this._pivotAsAnchor || !ignorePivot);

              this._parent.setBoundsChangedFlag();

              if (this._group) this._group.setBoundsChangedFlag();
            }

            this._node.emit((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
              error: Error()
            }), FUIEvent) : FUIEvent).SIZE_CHANGED, this);
          }
        }

        makeFullScreen() {
          this.setSize(Decls.GRoot.inst.width, Decls.GRoot.inst.height);
        }

        ensureSizeCorrect() {}

        get actualWidth() {
          return this.width * Math.abs(this._node.scale.x);
        }

        get actualHeight() {
          return this.height * Math.abs(this._node.scale.y);
        }

        get scaleX() {
          return this._node.scale.x;
        }

        set scaleX(value) {
          this.setScale(value, this._node.scale.y);
        }

        get scaleY() {
          return this._node.scale.y;
        }

        set scaleY(value) {
          this.setScale(this._node.scale.x, value);
        }

        setScale(sx, sy) {
          if (this._node.scale.x != sx || this._node.scale.y != sy) {
            this._node.setScale(sx, sy);

            this.updateGear(2);
          }
        }

        get skewX() {
          return this._skewX;
        }

        get pivotX() {
          return this._uiTrans.anchorX;
        }

        set pivotX(value) {
          this._uiTrans.anchorX = value;
        }

        get pivotY() {
          return 1 - this._uiTrans.anchorY;
        }

        set pivotY(value) {
          this._uiTrans.anchorY = 1 - value;
        }

        setPivot(xv, yv, asAnchor) {
          if (this._uiTrans.anchorX != xv || this._uiTrans.anchorY != 1 - yv) {
            this._pivotAsAnchor = asAnchor;

            this._uiTrans.setAnchorPoint(xv, 1 - yv);
          } else if (this._pivotAsAnchor != asAnchor) {
            this._pivotAsAnchor = asAnchor;
            this.handlePositionChanged();
          }
        }

        get pivotAsAnchor() {
          return this._pivotAsAnchor;
        }

        get touchable() {
          return this._touchable;
        }

        set touchable(value) {
          if (this._touchable != value) {
            this._touchable = value;
            this.updateGear(3);
          }
        }

        get grayed() {
          return this._grayed;
        }

        set grayed(value) {
          if (this._grayed != value) {
            this._grayed = value;
            this.handleGrayedChanged();
            this.updateGear(3);
          }
        }

        get enabled() {
          return !this._grayed && this._touchable;
        }

        set enabled(value) {
          this.grayed = !value;
          this.touchable = value;
        }

        get rotation() {
          return -this._node.angle;
        }

        set rotation(value) {
          value = -value;

          if (this._node.angle != value) {
            this._node.angle = value;
            this.updateGear(3);
          }
        }

        get alpha() {
          return this._alpha;
        }

        set alpha(value) {
          if (this._alpha != value) {
            this._alpha = value;
            this._uiOpacity.opacity = this._alpha * 255;
            if (this instanceof (_crd && GGroup === void 0 ? (_reportPossibleCrUseOfGGroup({
              error: Error()
            }), GGroup) : GGroup)) this.handleAlphaChanged();
            this.updateGear(3);
          }
        }

        get visible() {
          return this._visible;
        }

        set visible(value) {
          if (this._visible != value) {
            this._visible = value;
            this.handleVisibleChanged();
            if (this._group && this._group.excludeInvisibles) this._group.setBoundsChangedFlag();
          }
        }

        get _finalVisible() {
          return this._visible && this._internalVisible && (!this._group || this._group._finalVisible);
        }

        get internalVisible3() {
          return this._visible && this._internalVisible;
        }

        get sortingOrder() {
          return this._sortingOrder;
        }

        set sortingOrder(value) {
          if (value < 0) value = 0;

          if (this._sortingOrder != value) {
            var old = this._sortingOrder;
            this._sortingOrder = value;
            if (this._parent) this._parent.childSortingOrderChanged(this, old, this._sortingOrder);
          }
        }

        requestFocus() {}

        get tooltips() {
          return this._tooltips;
        }

        set tooltips(value) {
          if (this._tooltips) {
            this._node.off((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
              error: Error()
            }), FUIEvent) : FUIEvent).ROLL_OVER, this.onRollOver, this);

            this._node.off((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
              error: Error()
            }), FUIEvent) : FUIEvent).ROLL_OUT, this.onRollOut, this);
          }

          this._tooltips = value;

          if (this._tooltips) {
            this._node.on((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
              error: Error()
            }), FUIEvent) : FUIEvent).ROLL_OVER, this.onRollOver, this);

            this._node.on((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
              error: Error()
            }), FUIEvent) : FUIEvent).ROLL_OUT, this.onRollOut, this);
          }
        }

        get blendMode() {
          return this._blendMode;
        }

        set blendMode(value) {
          if (this._blendMode != value) {
            this._blendMode = value;
            (_crd && BlendModeUtils === void 0 ? (_reportPossibleCrUseOfBlendModeUtils({
              error: Error()
            }), BlendModeUtils) : BlendModeUtils).apply(this._node, value);
          }
        }

        get onStage() {
          return this._node && this._node.activeInHierarchy;
        }

        get resourceURL() {
          if (this.packageItem) return "ui://" + this.packageItem.owner.id + this.packageItem.id;else return null;
        }

        set group(value) {
          if (this._group != value) {
            if (this._group) this._group.setBoundsChangedFlag();
            this._group = value;
            if (this._group) this._group.setBoundsChangedFlag();
          }
        }

        get group() {
          return this._group;
        }

        getGear(index) {
          var gear = this._gears[index];
          if (!gear) this._gears[index] = gear = createGear(this, index);
          return gear;
        }

        updateGear(index) {
          if (this._underConstruct || this._gearLocked) return;
          var gear = this._gears[index];
          if (gear && gear.controller) gear.updateState();
        }

        checkGearController(index, c) {
          return this._gears[index] && this._gears[index].controller == c;
        }

        updateGearFromRelations(index, dx, dy) {
          if (this._gears[index]) this._gears[index].updateFromRelations(dx, dy);
        }

        addDisplayLock() {
          var gearDisplay = this._gears[0];

          if (gearDisplay && gearDisplay.controller) {
            var ret = gearDisplay.addLock();
            this.checkGearDisplay();
            return ret;
          } else return 0;
        }

        releaseDisplayLock(token) {
          var gearDisplay = this._gears[0];

          if (gearDisplay && gearDisplay.controller) {
            gearDisplay.releaseLock(token);
            this.checkGearDisplay();
          }
        }

        checkGearDisplay() {
          if (this._handlingController) return;
          var connected = this._gears[0] == null || this._gears[0].connected;
          if (this._gears[8]) connected = this._gears[8].evaluate(connected);

          if (connected != this._internalVisible) {
            this._internalVisible = connected;
            this.handleVisibleChanged();
            if (this._group && this._group.excludeInvisibles) this._group.setBoundsChangedFlag();
          }
        }

        get gearXY() {
          return this.getGear(1);
        }

        get gearSize() {
          return this.getGear(2);
        }

        get gearLook() {
          return this.getGear(3);
        }

        get relations() {
          return this._relations;
        }

        addRelation(target, relationType, usePercent) {
          this._relations.add(target, relationType, usePercent);
        }

        removeRelation(target, relationType) {
          this._relations.remove(target, relationType);
        }

        get node() {
          return this._node;
        }

        get parent() {
          return this._parent;
        }

        removeFromParent() {
          if (this._parent) this._parent.removeChild(this);
        }

        findParent() {
          if (this._parent) return this._parent; //可能有些不直接在children里，但node挂着的

          var pn = this._node.parent;

          while (pn) {
            var gobj = pn["$gobj"];
            if (gobj) return gobj;
            pn = pn.parent;
          }

          return null;
        }

        get asCom() {
          return this;
        }

        static cast(obj) {
          return obj["$gobj"];
        }

        get text() {
          return null;
        }

        set text(value) {}

        get icon() {
          return null;
        }

        set icon(value) {}

        get treeNode() {
          return this._treeNode;
        }

        get isDisposed() {
          return this._node == null;
        }

        dispose() {
          var n = this._node;
          if (!n) return;
          this.removeFromParent();

          this._relations.dispose();

          this._node = null;
          n.destroy();

          for (var i = 0; i < 10; i++) {
            var gear = this._gears[i];
            if (gear) gear.dispose();
          }
        }

        onEnable() {}

        onDisable() {}

        onUpdate() {}

        onDestroy() {}

        onClick(listener, target) {
          this._node.on((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).CLICK, listener, target);
        }

        onceClick(listener, target) {
          this._node.once((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).CLICK, listener, target);
        }

        offClick(listener, target) {
          this._node.off((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).CLICK, listener, target);
        }

        clearClick() {
          this._node.off((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).CLICK);
        }

        hasClickListener() {
          return this._node.hasEventListener((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).CLICK);
        }

        on(type, listener, target) {
          if (type == (_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).DISPLAY || type == (_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).UNDISPLAY) this._partner._emitDisplayEvents = true;

          this._node.on(type, listener, target);
        }

        once(type, listener, target) {
          if (type == (_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).DISPLAY || type == (_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).UNDISPLAY) this._partner._emitDisplayEvents = true;

          this._node.once(type, listener, target);
        }

        off(type, listener, target) {
          this._node.off(type, listener, target);
        }

        get draggable() {
          return this._draggable;
        }

        set draggable(value) {
          if (this._draggable != value) {
            this._draggable = value;
            this.initDrag();
          }
        }

        get dragBounds() {
          return this._dragBounds;
        }

        set dragBounds(value) {
          this._dragBounds = value;
        }

        startDrag(touchId) {
          if (!this._node.activeInHierarchy) return;
          this.dragBegin(touchId);
        }

        stopDrag() {
          this.dragEnd();
        }

        get dragging() {
          return GObject.draggingObject == this;
        }

        localToGlobal(ax, ay, result) {
          ax = ax || 0;
          ay = ay || 0;
          s_vec3.x = ax;
          s_vec3.y = -ay;

          if (!this._pivotAsAnchor) {
            s_vec3.x -= this._uiTrans.anchorX * this._width;
            s_vec3.y += (1 - this._uiTrans.anchorY) * this._height;
          }

          this._uiTrans.convertToWorldSpaceAR(s_vec3, s_vec3);

          s_vec3.y = Decls.GRoot.inst.height - s_vec3.y;
          result = result || new Vec2();
          result.x = s_vec3.x;
          result.y = s_vec3.y;
          return result;
        }

        globalToLocal(ax, ay, result) {
          ax = ax || 0;
          ay = ay || 0;
          s_vec3.x = ax;
          s_vec3.y = Decls.GRoot.inst.height - ay;

          this._uiTrans.convertToNodeSpaceAR(s_vec3, s_vec3);

          if (!this._pivotAsAnchor) {
            s_vec3.x += this._uiTrans.anchorX * this._width;
            s_vec3.y -= (1 - this._uiTrans.anchorY) * this._height;
          }

          result = result || new Vec2();
          result.x = s_vec3.x;
          result.y = -s_vec3.y;
          return result;
        }

        localToGlobalRect(ax, ay, aw, ah, result) {
          ax = ax || 0;
          ay = ay || 0;
          aw = aw || 0;
          ah = ah || 0;
          result = result || new Rect();
          var pt = this.localToGlobal(ax, ay);
          result.x = pt.x;
          result.y = pt.y;
          pt = this.localToGlobal(ax + aw, ay + ah, pt);
          result.xMax = pt.x;
          result.yMax = pt.y;
          return result;
        }

        globalToLocalRect(ax, ay, aw, ah, result) {
          ax = ax || 0;
          ay = ay || 0;
          aw = aw || 0;
          ah = ah || 0;
          result = result || new Rect();
          var pt = this.globalToLocal(ax, ay);
          result.x = pt.x;
          result.y = pt.y;
          pt = this.globalToLocal(ax + aw, ay + ah, pt);
          result.xMax = pt.x;
          result.yMax = pt.y;
          return result;
        }

        handleControllerChanged(c) {
          this._handlingController = true;

          for (var i = 0; i < 10; i++) {
            var gear = this._gears[i];
            if (gear && gear.controller == c) gear.apply();
          }

          this._handlingController = false;
          this.checkGearDisplay();
        }

        handleAnchorChanged() {
          this.handlePositionChanged();
        }

        handlePositionChanged() {
          var xv = this._x;
          var yv = -this._y;

          if (!this._pivotAsAnchor) {
            xv += this._uiTrans.anchorX * this._width;
            yv -= (1 - this._uiTrans.anchorY) * this._height;
          }

          if (this._pixelSnapping) {
            xv = Math.round(xv);
            yv = Math.round(yv);
          }

          this._node.setPosition(xv, yv);
        }

        handleSizeChanged() {
          this._uiTrans.setContentSize(this._width, this._height);
        }

        handleGrayedChanged() {//nothing is base
        }

        handleVisibleChanged() {
          this._node.active = this._finalVisible;
          if (this instanceof (_crd && GGroup === void 0 ? (_reportPossibleCrUseOfGGroup({
            error: Error()
          }), GGroup) : GGroup)) this.handleVisibleChanged();
          if (this._parent) this._parent.setBoundsChangedFlag();
        }

        hitTest(globalPt, forTouch) {
          if (forTouch == null) forTouch = true;
          if (forTouch && (this._touchDisabled || !this._touchable || !this._node.activeInHierarchy)) return null;
          if (!this._hitTestPt) this._hitTestPt = new Vec2();
          this.globalToLocal(globalPt.x, globalPt.y, this._hitTestPt);

          if (this._pivotAsAnchor) {
            this._hitTestPt.x += this._uiTrans.anchorX * this._width;
            this._hitTestPt.y += (1 - this._uiTrans.anchorY) * this._height;
          }

          return this._hitTest(this._hitTestPt, globalPt);
        }

        _hitTest(pt, globalPt) {
          if (pt.x >= 0 && pt.y >= 0 && pt.x < this._width && pt.y < this._height) return this;else return null;
        }

        getProp(index) {
          switch (index) {
            case (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).Text:
              return this.text;

            case (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).Icon:
              return this.icon;

            case (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).Color:
              return null;

            case (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).OutlineColor:
              return null;

            case (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).Playing:
              return false;

            case (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).Frame:
              return 0;

            case (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).DeltaTime:
              return 0;

            case (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).TimeScale:
              return 1;

            case (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).FontSize:
              return 0;

            case (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).Selected:
              return false;

            default:
              return undefined;
          }
        }

        setProp(index, value) {
          switch (index) {
            case (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).Text:
              this.text = value;
              break;

            case (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).Icon:
              this.icon = value;
              break;
          }
        }

        constructFromResource() {}

        setup_beforeAdd(buffer, beginPos) {
          buffer.seek(beginPos, 0);
          buffer.skip(5);
          var f1;
          var f2;
          this._id = buffer.readS();
          this.name = buffer.readS();
          f1 = buffer.readInt();
          f2 = buffer.readInt();
          this.setPosition(f1, f2);

          if (buffer.readBool()) {
            this.initWidth = buffer.readInt();
            this.initHeight = buffer.readInt();
            this.setSize(this.initWidth, this.initHeight, true);
          }

          if (buffer.readBool()) {
            this.minWidth = buffer.readInt();
            this.maxWidth = buffer.readInt();
            this.minHeight = buffer.readInt();
            this.maxHeight = buffer.readInt();
          }

          if (buffer.readBool()) {
            f1 = buffer.readFloat();
            f2 = buffer.readFloat();
            this.setScale(f1, f2);
          }

          if (buffer.readBool()) {
            f1 = buffer.readFloat();
            f2 = buffer.readFloat(); //this.setSkew(f1, f2);
          }

          if (buffer.readBool()) {
            f1 = buffer.readFloat();
            f2 = buffer.readFloat();
            this.setPivot(f1, f2, buffer.readBool());
          }

          f1 = buffer.readFloat();
          if (f1 != 1) this.alpha = f1;
          f1 = buffer.readFloat();
          if (f1 != 0) this.rotation = f1;
          if (!buffer.readBool()) this.visible = false;
          if (!buffer.readBool()) this.touchable = false;
          if (buffer.readBool()) this.grayed = true;
          this.blendMode = buffer.readByte();
          var filter = buffer.readByte();

          if (filter == 1) {//TODO: filter support
          }

          var str = buffer.readS();
          if (str != null) this.data = str;
        }

        setup_afterAdd(buffer, beginPos) {
          buffer.seek(beginPos, 1);
          var str = buffer.readS();
          if (str != null) this.tooltips = str;
          var groupId = buffer.readShort();
          if (groupId >= 0) this.group = this.parent.getChildAt(groupId);
          buffer.seek(beginPos, 2);
          var cnt = buffer.readShort();

          for (var i = 0; i < cnt; i++) {
            var nextPos = buffer.readShort();
            nextPos += buffer.position;
            var gear = this.getGear(buffer.readByte());
            gear.setup(buffer);
            buffer.position = nextPos;
          }
        } //toolTips support


        onRollOver() {
          Decls.GRoot.inst.showTooltips(this.tooltips);
        }

        onRollOut() {
          Decls.GRoot.inst.hideTooltips();
        }

        //drag support
        //-------------------------------------------------------------------
        initDrag() {
          if (this._draggable) {
            this.on((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
              error: Error()
            }), FUIEvent) : FUIEvent).TOUCH_BEGIN, this.onTouchBegin_0, this);
            this.on((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
              error: Error()
            }), FUIEvent) : FUIEvent).TOUCH_MOVE, this.onTouchMove_0, this);
            this.on((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
              error: Error()
            }), FUIEvent) : FUIEvent).TOUCH_END, this.onTouchEnd_0, this);
          } else {
            this.off((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
              error: Error()
            }), FUIEvent) : FUIEvent).TOUCH_BEGIN, this.onTouchBegin_0, this);
            this.off((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
              error: Error()
            }), FUIEvent) : FUIEvent).TOUCH_MOVE, this.onTouchMove_0, this);
            this.off((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
              error: Error()
            }), FUIEvent) : FUIEvent).TOUCH_END, this.onTouchEnd_0, this);
          }
        }

        dragBegin(touchId) {
          if (GObject.draggingObject) {
            var tmp = GObject.draggingObject;
            tmp.stopDrag();
            GObject.draggingObject = null;

            tmp._node.emit((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
              error: Error()
            }), FUIEvent) : FUIEvent).DRAG_END);
          }

          if (touchId == undefined) touchId = Decls.GRoot.inst.inputProcessor.getAllTouches()[0];
          sGlobalDragStart.set(Decls.GRoot.inst.getTouchPosition(touchId));
          this.localToGlobalRect(0, 0, this._width, this._height, sGlobalRect);
          GObject.draggingObject = this;
          this._dragTesting = false;
          Decls.GRoot.inst.inputProcessor.addTouchMonitor(touchId, this);
          this.on((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).TOUCH_MOVE, this.onTouchMove_0, this);
          this.on((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).TOUCH_END, this.onTouchEnd_0, this);
        }

        dragEnd() {
          if (GObject.draggingObject == this) {
            this._dragTesting = false;
            GObject.draggingObject = null;
          }

          s_dragQuery = false;
        }

        onTouchBegin_0(evt) {
          if (this._dragStartPos == null) this._dragStartPos = new Vec2();

          this._dragStartPos.set(evt.pos);

          this._dragTesting = true;
          evt.captureTouch();
        }

        onTouchMove_0(evt) {
          if (GObject.draggingObject != this && this._draggable && this._dragTesting) {
            var sensitivity = (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).touchDragSensitivity;
            if (this._dragStartPos && Math.abs(this._dragStartPos.x - evt.pos.x) < sensitivity && Math.abs(this._dragStartPos.y - evt.pos.y) < sensitivity) return;
            this._dragTesting = false;
            s_dragQuery = true;

            this._node.emit((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
              error: Error()
            }), FUIEvent) : FUIEvent).DRAG_START, evt);

            if (s_dragQuery) this.dragBegin(evt.touchId);
          }

          if (GObject.draggingObject == this) {
            var xx = evt.pos.x - sGlobalDragStart.x + sGlobalRect.x;
            var yy = evt.pos.y - sGlobalDragStart.y + sGlobalRect.y;

            if (this._dragBounds) {
              var rect = Decls.GRoot.inst.localToGlobalRect(this._dragBounds.x, this._dragBounds.y, this._dragBounds.width, this._dragBounds.height, s_rect);
              if (xx < rect.x) xx = rect.x;else if (xx + sGlobalRect.width > rect.xMax) {
                xx = rect.xMax - sGlobalRect.width;
                if (xx < rect.x) xx = rect.x;
              }
              if (yy < rect.y) yy = rect.y;else if (yy + sGlobalRect.height > rect.yMax) {
                yy = rect.yMax - sGlobalRect.height;
                if (yy < rect.y) yy = rect.y;
              }
            }

            s_dragging = true;
            var pt = this.parent.globalToLocal(xx, yy, s_vec2);
            this.setPosition(Math.round(pt.x), Math.round(pt.y));
            s_dragging = false;

            this._node.emit((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
              error: Error()
            }), FUIEvent) : FUIEvent).DRAG_MOVE, evt);
          }
        }

        onTouchEnd_0(evt) {
          if (GObject.draggingObject == this) {
            GObject.draggingObject = null;

            this._node.emit((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
              error: Error()
            }), FUIEvent) : FUIEvent).DRAG_END, evt);
          }
        }

      }); //-------------------------------------------------------------------


      GObject.draggingObject = void 0;

      _export("GObjectPartner", GObjectPartner = class GObjectPartner extends Component {
        constructor() {
          super(...arguments);
          this._emitDisplayEvents = void 0;
        }

        callLater(callback, delay) {
          if (!director.getScheduler().isScheduled(callback, this)) this.scheduleOnce(callback, delay);
        }

        onClickLink(evt, text) {
          this.node.emit((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).LINK, text, evt);
        }

        onEnable() {
          this.node["$gobj"].onEnable();
          if (this._emitDisplayEvents) this.node.emit((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).DISPLAY);
        }

        onDisable() {
          this.node["$gobj"].onDisable();
          if (this._emitDisplayEvents) this.node.emit((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).UNDISPLAY);
        }

        update(dt) {
          this.node["$gobj"].onUpdate(dt);
        }

        onDestroy() {
          this.node["$gobj"].onDestroy();
        }

      }); //-------------------------------------------------------------------


      GearClasses = [_crd && GearDisplay === void 0 ? (_reportPossibleCrUseOfGearDisplay({
        error: Error()
      }), GearDisplay) : GearDisplay, _crd && GearXY === void 0 ? (_reportPossibleCrUseOfGearXY({
        error: Error()
      }), GearXY) : GearXY, _crd && GearSize === void 0 ? (_reportPossibleCrUseOfGearSize({
        error: Error()
      }), GearSize) : GearSize, _crd && GearLook === void 0 ? (_reportPossibleCrUseOfGearLook({
        error: Error()
      }), GearLook) : GearLook, _crd && GearColor === void 0 ? (_reportPossibleCrUseOfGearColor({
        error: Error()
      }), GearColor) : GearColor, _crd && GearAnimation === void 0 ? (_reportPossibleCrUseOfGearAnimation({
        error: Error()
      }), GearAnimation) : GearAnimation, _crd && GearText === void 0 ? (_reportPossibleCrUseOfGearText({
        error: Error()
      }), GearText) : GearText, _crd && GearIcon === void 0 ? (_reportPossibleCrUseOfGearIcon({
        error: Error()
      }), GearIcon) : GearIcon, _crd && GearDisplay2 === void 0 ? (_reportPossibleCrUseOfGearDisplay2({
        error: Error()
      }), GearDisplay2) : GearDisplay2, _crd && GearFontSize === void 0 ? (_reportPossibleCrUseOfGearFontSize({
        error: Error()
      }), GearFontSize) : GearFontSize];
      s_vec2 = new Vec2();
      s_vec3 = new Vec3();
      s_rect = new Rect();
      sGlobalDragStart = new Vec2();
      sGlobalRect = new Rect();

      _export("Decls", Decls = {});

      _export("constructingDepth", constructingDepth = {
        n: 0
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7de5b9a992bec46d2cdeb68057f1c2c0fd96847f.js.map