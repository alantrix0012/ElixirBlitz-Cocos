System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sp, dragonBones, assetManager, Color, isValid, resources, Node, UITransform, math, AlignType, LoaderFillType, ObjectPropID, PackageItemType, VertAlignType, GObject, UIConfig, UIPackage, GLoader3D, _crd;

  function _reportPossibleCrUseOfAlignType(extras) {
    _reporterNs.report("AlignType", "./FieldTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoaderFillType(extras) {
    _reporterNs.report("LoaderFillType", "./FieldTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectPropID(extras) {
    _reporterNs.report("ObjectPropID", "./FieldTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPackageItemType(extras) {
    _reporterNs.report("PackageItemType", "./FieldTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVertAlignType(extras) {
    _reporterNs.report("VertAlignType", "./FieldTypes", _context.meta, extras);
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

  function _reportPossibleCrUseOfUIPackage(extras) {
    _reporterNs.report("UIPackage", "./UIPackage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfByteBuffer(extras) {
    _reporterNs.report("ByteBuffer", "./utils/ByteBuffer", _context.meta, extras);
  }

  _export("GLoader3D", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sp = _cc.sp;
      dragonBones = _cc.dragonBones;
      assetManager = _cc.assetManager;
      Color = _cc.Color;
      isValid = _cc.isValid;
      resources = _cc.resources;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      math = _cc.math;
    }, function (_unresolved_2) {
      AlignType = _unresolved_2.AlignType;
      LoaderFillType = _unresolved_2.LoaderFillType;
      ObjectPropID = _unresolved_2.ObjectPropID;
      PackageItemType = _unresolved_2.PackageItemType;
      VertAlignType = _unresolved_2.VertAlignType;
    }, function (_unresolved_3) {
      GObject = _unresolved_3.GObject;
    }, function (_unresolved_4) {
      UIConfig = _unresolved_4.UIConfig;
    }, function (_unresolved_5) {
      UIPackage = _unresolved_5.UIPackage;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aa2b6xvgThK4qcbS8U0y33i", "GLoader3D", undefined);

      __checkObsolete__(['sp', 'dragonBones', 'assetManager', 'Color', 'isValid', 'resources', 'Vec2', 'Node', 'UITransform', 'Asset', 'math']);

      _export("GLoader3D", GLoader3D = class GLoader3D extends (_crd && GObject === void 0 ? (_reportPossibleCrUseOfGObject({
        error: Error()
      }), GObject) : GObject) {
        constructor() {
          super();
          this._url = void 0;
          this._align = void 0;
          this._verticalAlign = void 0;
          this._autoSize = void 0;
          this._fill = void 0;
          this._shrinkOnly = void 0;
          this._playing = void 0;
          this._frame = 0;
          this._loop = void 0;
          this._animationName = void 0;
          this._skinName = void 0;
          this._color = void 0;
          this._contentItem = void 0;
          this._container = void 0;
          this._content = void 0;
          this._updatingLayout = void 0;
          this._node.name = "GLoader3D";
          this._playing = true;
          this._url = "";
          this._fill = (_crd && LoaderFillType === void 0 ? (_reportPossibleCrUseOfLoaderFillType({
            error: Error()
          }), LoaderFillType) : LoaderFillType).None;
          this._align = (_crd && AlignType === void 0 ? (_reportPossibleCrUseOfAlignType({
            error: Error()
          }), AlignType) : AlignType).Left;
          this._verticalAlign = (_crd && VertAlignType === void 0 ? (_reportPossibleCrUseOfVertAlignType({
            error: Error()
          }), VertAlignType) : VertAlignType).Top;
          this._color = new Color(255, 255, 255, 255);
          this._container = new Node("Wrapper");
          this._container.layer = (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
            error: Error()
          }), UIConfig) : UIConfig).defaultUILayer;

          this._container.addComponent(UITransform).setAnchorPoint(0, 1);

          this._node.addChild(this._container);
        }

        dispose() {
          super.dispose();
        }

        get url() {
          return this._url;
        }

        set url(value) {
          if (this._url == value) return;
          this._url = value;
          this.loadContent();
          this.updateGear(7);
        }

        get icon() {
          return this._url;
        }

        set icon(value) {
          this.url = value;
        }

        get align() {
          return this._align;
        }

        set align(value) {
          if (this._align != value) {
            this._align = value;
            this.updateLayout();
          }
        }

        get verticalAlign() {
          return this._verticalAlign;
        }

        set verticalAlign(value) {
          if (this._verticalAlign != value) {
            this._verticalAlign = value;
            this.updateLayout();
          }
        }

        get fill() {
          return this._fill;
        }

        set fill(value) {
          if (this._fill != value) {
            this._fill = value;
            this.updateLayout();
          }
        }

        get shrinkOnly() {
          return this._shrinkOnly;
        }

        set shrinkOnly(value) {
          if (this._shrinkOnly != value) {
            this._shrinkOnly = value;
            this.updateLayout();
          }
        }

        get autoSize() {
          return this._autoSize;
        }

        set autoSize(value) {
          if (this._autoSize != value) {
            this._autoSize = value;
            this.updateLayout();
          }
        }

        get playing() {
          return this._playing;
        }

        set playing(value) {
          if (this._playing != value) {
            this._playing = value;
            this.updateGear(5);
            this.onChange();
          }
        }

        get frame() {
          return this._frame;
        }

        set frame(value) {
          if (this._frame != value) {
            this._frame = value;
            this.updateGear(5);
            this.onChange();
          }
        }

        get animationName() {
          return this._animationName;
        }

        set animationName(value) {
          if (this._animationName != value) {
            this._animationName = value;
            this.onChange();
          }
        }

        get skinName() {
          return this._skinName;
        }

        set skinName(value) {
          if (this._skinName != value) {
            this._skinName = value;
            this.onChange();
          }
        }

        get loop() {
          return this._loop;
        }

        set loop(value) {
          if (this._loop != value) {
            this._loop = value;
            this.onChange();
          }
        }

        get color() {
          return this._color;
        }

        set color(value) {
          this._color.set(value);

          this.updateGear(4);
          if (this._content) this._content.color = value;
        }

        get content() {
          return this._content;
        }

        loadContent() {
          this.clearContent();
          if (!this._url) return;
          if (this._url.startsWith("ui://")) this.loadFromPackage(this._url);else this.loadExternal();
        }

        loadFromPackage(itemURL) {
          this._contentItem = (_crd && UIPackage === void 0 ? (_reportPossibleCrUseOfUIPackage({
            error: Error()
          }), UIPackage) : UIPackage).getItemByURL(itemURL);

          if (this._contentItem) {
            this._contentItem = this._contentItem.getBranch();
            this.sourceWidth = this._contentItem.width;
            this.sourceHeight = this._contentItem.height;
            this._contentItem = this._contentItem.getHighResolution();
            if (this._autoSize) this.setSize(this.sourceWidth, this.sourceHeight);
            if (this._contentItem.type == (_crd && PackageItemType === void 0 ? (_reportPossibleCrUseOfPackageItemType({
              error: Error()
            }), PackageItemType) : PackageItemType).Spine || this._contentItem.type == (_crd && PackageItemType === void 0 ? (_reportPossibleCrUseOfPackageItemType({
              error: Error()
            }), PackageItemType) : PackageItemType).DragonBones) this._contentItem.owner.getItemAssetAsync(this._contentItem, this.onLoaded.bind(this));
          }
        }

        onLoaded(err, item) {
          if (this._contentItem != item) return;
          if (err) console.warn(err);
          if (!this._contentItem.asset) return;
          if (this._contentItem.type == (_crd && PackageItemType === void 0 ? (_reportPossibleCrUseOfPackageItemType({
            error: Error()
          }), PackageItemType) : PackageItemType).Spine) this.setSpine(this._contentItem.asset, this._contentItem.skeletonAnchor);else if (this._contentItem.type == (_crd && PackageItemType === void 0 ? (_reportPossibleCrUseOfPackageItemType({
            error: Error()
          }), PackageItemType) : PackageItemType).DragonBones) this.setDragonBones(this._contentItem.asset, this._contentItem.atlasAsset, this._contentItem.skeletonAnchor);
        }

        setSpine(asset, anchor, pma) {
          this.freeSpine();
          let node = new Node();

          this._container.addChild(node);

          node.layer = (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
            error: Error()
          }), UIConfig) : UIConfig).defaultUILayer;
          node.setPosition(anchor.x, -anchor.y);
          this._content = node.addComponent(sp.Skeleton);
          this._content.premultipliedAlpha = pma;
          this._content.skeletonData = asset;
          this._content.color = this._color;
          this.onChangeSpine();
          this.updateLayout();
        }

        freeSpine() {
          if (this._content) {
            this._content.destroy();
          }
        }

        setDragonBones(asset, atlasAsset, anchor, pma) {
          this.freeDragonBones();
          let node = new Node();
          node.layer = (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
            error: Error()
          }), UIConfig) : UIConfig).defaultUILayer;

          this._container.addChild(node);

          node.setPosition(anchor.x, -anchor.y);
          this._content = node.addComponent(dragonBones.ArmatureDisplay);
          this._content.premultipliedAlpha = pma;
          this._content.dragonAsset = asset;
          this._content.dragonAtlasAsset = atlasAsset;
          this._content.color = this._color;
          let armatureKey = asset["init"](dragonBones.CCFactory.getInstance(), atlasAsset["_uuid"]);

          let dragonBonesData = this._content["_factory"].getDragonBonesData(armatureKey);

          this._content.armatureName = dragonBonesData.armatureNames[0];
          this.onChangeDragonBones();
          this.updateLayout();
        }

        freeDragonBones() {
          if (this._content) {
            this._content.destroy();
          }
        }

        onChange() {
          if (this._contentItem == null) return;

          if (this._contentItem.type == (_crd && PackageItemType === void 0 ? (_reportPossibleCrUseOfPackageItemType({
            error: Error()
          }), PackageItemType) : PackageItemType).Spine) {
            this.onChangeSpine();
          }

          if (this._contentItem.type == (_crd && PackageItemType === void 0 ? (_reportPossibleCrUseOfPackageItemType({
            error: Error()
          }), PackageItemType) : PackageItemType).DragonBones) {
            this.onChangeDragonBones();
          }
        }

        onChangeSpine() {
          var _this$_content$_skele;

          if (!(this._content instanceof sp.Skeleton)) return;

          if (this._animationName) {
            let trackEntry = this._content.getCurrent(0);

            if (!trackEntry || trackEntry.animation.name != this._animationName || trackEntry.isComplete() && !trackEntry.loop) {
              this._content.animation = this._animationName;
              trackEntry = this._content.setAnimation(0, this._animationName, this._loop);
            }

            if (this._playing) this._content.paused = false;else {
              this._content.paused = true;
              trackEntry.trackTime = math.lerp(0, trackEntry.animationEnd - trackEntry.animationStart, this._frame / 100);
            }
          } else this._content.clearTrack(0);

          let skin = this._skinName || this._content.skeletonData.getRuntimeData().skins[0].name;

          if (((_this$_content$_skele = this._content["_skeleton"].skin) == null ? void 0 : _this$_content$_skele.name) != skin) this._content.setSkin(skin);
        }

        onChangeDragonBones() {
          if (!(this._content instanceof dragonBones.ArmatureDisplay)) return;

          if (this._animationName) {
            if (this._playing) this._content.playAnimation(this._animationName, this._loop ? 0 : 1);else this._content.armature().animation.gotoAndStopByFrame(this._animationName, this._frame);
          } else this._content.armature().animation.reset();
        }

        loadExternal() {
          if (this._url.startsWith("http://") || this._url.startsWith("https://") || this._url.startsWith('/')) assetManager.loadRemote(this._url, sp.SkeletonData, this.onLoaded2.bind(this));else resources.load(this._url, sp.SkeletonData, this.onLoaded2.bind(this));
        }

        onLoaded2(err, asset) {
          //因为是异步返回的，而这时可能url已经被改变，所以不能直接用返回的结果
          if (!this._url || !isValid(this._node)) return;
          if (err) console.warn(err);
        }

        updateLayout() {
          let cw = this.sourceWidth;
          let ch = this.sourceHeight;
          let pivotCorrectX = -this.pivotX * this._width;
          let pivotCorrectY = this.pivotY * this._height;

          if (this._autoSize) {
            this._updatingLayout = true;
            if (cw == 0) cw = 50;
            if (ch == 0) ch = 30;
            this.setSize(cw, ch);
            this._updatingLayout = false;

            if (cw == this._width && ch == this._height) {
              this._container.setScale(1, 1);

              this._container.setPosition(pivotCorrectX, pivotCorrectY);

              return;
            }
          }

          var sx = 1,
              sy = 1;

          if (this._fill != (_crd && LoaderFillType === void 0 ? (_reportPossibleCrUseOfLoaderFillType({
            error: Error()
          }), LoaderFillType) : LoaderFillType).None) {
            sx = this.width / this.sourceWidth;
            sy = this.height / this.sourceHeight;

            if (sx != 1 || sy != 1) {
              if (this._fill == (_crd && LoaderFillType === void 0 ? (_reportPossibleCrUseOfLoaderFillType({
                error: Error()
              }), LoaderFillType) : LoaderFillType).ScaleMatchHeight) sx = sy;else if (this._fill == (_crd && LoaderFillType === void 0 ? (_reportPossibleCrUseOfLoaderFillType({
                error: Error()
              }), LoaderFillType) : LoaderFillType).ScaleMatchWidth) sy = sx;else if (this._fill == (_crd && LoaderFillType === void 0 ? (_reportPossibleCrUseOfLoaderFillType({
                error: Error()
              }), LoaderFillType) : LoaderFillType).Scale) {
                if (sx > sy) sx = sy;else sy = sx;
              } else if (this._fill == (_crd && LoaderFillType === void 0 ? (_reportPossibleCrUseOfLoaderFillType({
                error: Error()
              }), LoaderFillType) : LoaderFillType).ScaleNoBorder) {
                if (sx > sy) sy = sx;else sx = sy;
              }

              if (this._shrinkOnly) {
                if (sx > 1) sx = 1;
                if (sy > 1) sy = 1;
              }

              cw = this.sourceWidth * sx;
              ch = this.sourceHeight * sy;
            }
          }

          this._container.setScale(sx, sy);

          var nx, ny;
          if (this._align == (_crd && AlignType === void 0 ? (_reportPossibleCrUseOfAlignType({
            error: Error()
          }), AlignType) : AlignType).Left) nx = 0;else if (this._align == (_crd && AlignType === void 0 ? (_reportPossibleCrUseOfAlignType({
            error: Error()
          }), AlignType) : AlignType).Center) nx = Math.floor((this._width - cw) / 2);else nx = this._width - cw;
          if (this._verticalAlign == (_crd && VertAlignType === void 0 ? (_reportPossibleCrUseOfVertAlignType({
            error: Error()
          }), VertAlignType) : VertAlignType).Top) ny = 0;else if (this._verticalAlign == (_crd && VertAlignType === void 0 ? (_reportPossibleCrUseOfVertAlignType({
            error: Error()
          }), VertAlignType) : VertAlignType).Middle) ny = Math.floor((this._height - ch) / 2);else ny = this._height - ch;
          ny = -ny;

          this._container.setPosition(pivotCorrectX + nx, pivotCorrectY + ny);
        }

        clearContent() {
          this._contentItem = null;

          if (this._content) {
            this._content.node.destroy();

            this._content = null;
          }
        }

        handleSizeChanged() {
          super.handleSizeChanged();
          if (!this._updatingLayout) this.updateLayout();
        }

        handleAnchorChanged() {
          super.handleAnchorChanged();
          if (!this._updatingLayout) this.updateLayout();
        }

        handleGrayedChanged() {}

        getProp(index) {
          switch (index) {
            case (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).Color:
              return this.color;

            case (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).Playing:
              return this.playing;

            case (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).Frame:
              return this.frame;

            case (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).TimeScale:
              return 1;

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
            }), ObjectPropID) : ObjectPropID).Playing:
              this.playing = value;
              break;

            case (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).Frame:
              this.frame = value;
              break;

            case (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).TimeScale:
              break;

            case (_crd && ObjectPropID === void 0 ? (_reportPossibleCrUseOfObjectPropID({
              error: Error()
            }), ObjectPropID) : ObjectPropID).DeltaTime:
              break;

            default:
              super.setProp(index, value);
              break;
          }
        }

        setup_beforeAdd(buffer, beginPos) {
          super.setup_beforeAdd(buffer, beginPos);
          buffer.seek(beginPos, 5);
          this._url = buffer.readS();
          this._align = buffer.readByte();
          this._verticalAlign = buffer.readByte();
          this._fill = buffer.readByte();
          this._shrinkOnly = buffer.readBool();
          this._autoSize = buffer.readBool();
          this._animationName = buffer.readS();
          this._skinName = buffer.readS();
          this._playing = buffer.readBool();
          this._frame = buffer.readInt();
          this._loop = buffer.readBool();
          if (buffer.readBool()) this.color = buffer.readColor();
          if (this._url) this.loadContent();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=343e21dc33eeb2ba6914ff8d8273d0d262e9b28e.js.map