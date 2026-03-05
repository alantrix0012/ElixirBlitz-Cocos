System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Asset, assetManager, AssetManager, AudioClip, BitmapFont, BufferAsset, dragonBones, ImageAsset, path, Rect, resources, Size, sp, SpriteFrame, Texture2D, Vec2, ObjectType, PackageItemType, constructingDepth, PackageItem, TranslationHelper, ByteBuffer, PixelHitTestData, UIPackage, _crd, PathUtils, ItemTypeToAssetType, _instById, _instByName, _branch, _vars, Decls;

  function _reportPossibleCrUseOfObjectType(extras) {
    _reporterNs.report("ObjectType", "./FieldTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPackageItemType(extras) {
    _reporterNs.report("PackageItemType", "./FieldTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstructingDepth(extras) {
    _reporterNs.report("constructingDepth", "./GObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGObject(extras) {
    _reporterNs.report("GObject", "./GObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPackageItem(extras) {
    _reporterNs.report("PackageItem", "./PackageItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTranslationHelper(extras) {
    _reporterNs.report("TranslationHelper", "./TranslationHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfByteBuffer(extras) {
    _reporterNs.report("ByteBuffer", "./utils/ByteBuffer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPixelHitTestData(extras) {
    _reporterNs.report("PixelHitTestData", "./event/HitTest", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFrame(extras) {
    _reporterNs.report("Frame", "./display/MovieClip", _context.meta, extras);
  }

  _export("UIPackage", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Asset = _cc.Asset;
      assetManager = _cc.assetManager;
      AssetManager = _cc.AssetManager;
      AudioClip = _cc.AudioClip;
      BitmapFont = _cc.BitmapFont;
      BufferAsset = _cc.BufferAsset;
      dragonBones = _cc.dragonBones;
      ImageAsset = _cc.ImageAsset;
      path = _cc.path;
      Rect = _cc.Rect;
      resources = _cc.resources;
      Size = _cc.Size;
      sp = _cc.sp;
      SpriteFrame = _cc.SpriteFrame;
      Texture2D = _cc.Texture2D;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      ObjectType = _unresolved_2.ObjectType;
      PackageItemType = _unresolved_2.PackageItemType;
    }, function (_unresolved_3) {
      constructingDepth = _unresolved_3.constructingDepth;
    }, function (_unresolved_4) {
      PackageItem = _unresolved_4.PackageItem;
    }, function (_unresolved_5) {
      TranslationHelper = _unresolved_5.TranslationHelper;
    }, function (_unresolved_6) {
      ByteBuffer = _unresolved_6.ByteBuffer;
    }, function (_unresolved_7) {
      PixelHitTestData = _unresolved_7.PixelHitTestData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f8c396ZOuZKYpwHPeaCUkgA", "UIPackage", undefined);

      __checkObsolete__(['Asset', 'assetManager', 'AssetManager', 'AudioClip', 'BitmapFont', 'BufferAsset', 'CCClass', 'ccenum', 'CCObject', 'dragonBones', 'ImageAsset', 'LabelAtlas', 'path', 'Rect', 'resources', 'Size', 'sp', 'SpriteFrame', 'Texture2D', 'Vec2']);

      PathUtils = path;

      _export("UIPackage", UIPackage = class UIPackage {
        constructor() {
          this._id = void 0;
          this._name = void 0;
          this._path = void 0;
          this._items = void 0;
          this._itemsById = void 0;
          this._itemsByName = void 0;
          this._sprites = void 0;
          this._dependencies = void 0;
          this._branches = void 0;
          this._branchIndex = void 0;
          this._bundle = void 0;
          this._items = [];
          this._itemsById = {};
          this._itemsByName = {};
          this._sprites = {};
          this._dependencies = [];
          this._branches = [];
          this._branchIndex = -1;
        }

        static get branch() {
          return _branch;
        }

        static set branch(value) {
          _branch = value;

          for (var pkgId in _instById) {
            var pkg = _instById[pkgId];

            if (pkg._branches) {
              pkg._branchIndex = pkg._branches.indexOf(value);
            }
          }
        }

        static getVar(key) {
          return _vars[key];
        }

        static setVar(key, value) {
          _vars[key] = value;
        }

        static getById(id) {
          return _instById[id];
        }

        static getByName(name) {
          return _instByName[name];
        }
        /**
         * 注册一个包。包的所有资源必须放在resources下，且已经预加载。
         * @param path 相对 resources 的路径。
         */


        static addPackage(path) {
          let pkg = _instById[path];
          if (pkg) return pkg;
          let asset = resources.get(path, BufferAsset);
          if (!asset) throw new Error("Resource '" + path + "' not ready");
          const buffer = asset.buffer();
          if (!buffer) throw new Error("Missing asset data.");
          pkg = new UIPackage();
          pkg._bundle = resources;
          pkg.loadPackage(new (_crd && ByteBuffer === void 0 ? (_reportPossibleCrUseOfByteBuffer({
            error: Error()
          }), ByteBuffer) : ByteBuffer)(buffer), path);
          _instById[pkg.id] = pkg;
          _instByName[pkg.name] = pkg;
          _instById[pkg._path] = pkg;
          return pkg;
        }
        /**
         * 载入一个包。包的资源从Asset Bundle加载.
         * @param bundle Asset Bundle 对象.
         * @param path 资源相对 Asset Bundle 目录的路径.
         * @param onComplete 载入成功后的回调.
         */


        static loadPackage(...args) {
          let path;
          let onProgress;
          let onComplete;
          let bundle;

          if (args[0] instanceof AssetManager.Bundle) {
            bundle = args[0];
            path = args[1];

            if (args.length > 3) {
              onProgress = args[2];
              onComplete = args[3];
            } else onComplete = args[2];
          } else {
            path = args[0];

            if (args.length > 2) {
              onProgress = args[1];
              onComplete = args[2];
            } else onComplete = args[1];
          }

          bundle = bundle || resources;
          bundle.load(path, Asset, onProgress, (err, asset) => {
            if (err) {
              if (onComplete != null) onComplete(err, null);
              return;
            }

            let pkg = new UIPackage();
            pkg._bundle = bundle;
            let buffer = asset.buffer ? asset.buffer() : asset._nativeAsset;
            pkg.loadPackage(new (_crd && ByteBuffer === void 0 ? (_reportPossibleCrUseOfByteBuffer({
              error: Error()
            }), ByteBuffer) : ByteBuffer)(buffer), path);
            let cnt = pkg._items.length;
            let urls = [];
            let types = [];

            for (var i = 0; i < cnt; i++) {
              var pi = pkg._items[i];

              if (pi.type == (_crd && PackageItemType === void 0 ? (_reportPossibleCrUseOfPackageItemType({
                error: Error()
              }), PackageItemType) : PackageItemType).Atlas || pi.type == (_crd && PackageItemType === void 0 ? (_reportPossibleCrUseOfPackageItemType({
                error: Error()
              }), PackageItemType) : PackageItemType).Sound) {
                let assetType = ItemTypeToAssetType[pi.type];
                urls.push(pi.file);
                types.push(assetType);
              }
            }

            let total = urls.length;
            let lastErr;

            let taskComplete = (err, asset) => {
              total--;
              if (err) lastErr = err;

              if (total <= 0) {
                _instById[pkg.id] = pkg;
                _instByName[pkg.name] = pkg;
                if (pkg._path) _instById[pkg._path] = pkg;
                if (onComplete != null) onComplete(lastErr, pkg);
              }
            };

            if (total > 0) {
              urls.forEach((url, index) => {
                bundle.load(url, Asset, onProgress, taskComplete);
              });
            } else taskComplete(null, null);
          });
        }

        static removePackage(packageIdOrName) {
          var pkg = _instById[packageIdOrName];
          if (!pkg) pkg = _instByName[packageIdOrName];
          if (!pkg) throw new Error("No package found: " + packageIdOrName);
          pkg.dispose();
          delete _instById[pkg.id];
          delete _instByName[pkg.name];
          if (pkg._path) delete _instById[pkg._path];
        }

        static createObject(pkgName, resName, userClass) {
          var pkg = UIPackage.getByName(pkgName);
          if (pkg) return pkg.createObject(resName, userClass);else return null;
        }

        static createObjectFromURL(url, userClass) {
          var pi = UIPackage.getItemByURL(url);
          if (pi) return pi.owner.internalCreateObject(pi, userClass);else return null;
        }

        static getItemURL(pkgName, resName) {
          var pkg = UIPackage.getByName(pkgName);
          if (!pkg) return null;
          var pi = pkg._itemsByName[resName];
          if (!pi) return null;
          return "ui://" + pkg.id + pi.id;
        }

        static getItemByURL(url) {
          var pos1 = url.indexOf("//");
          if (pos1 == -1) return null;
          var pos2 = url.indexOf("/", pos1 + 2);

          if (pos2 == -1) {
            if (url.length > 13) {
              var pkgId = url.substring(5, 13);
              var pkg = UIPackage.getById(pkgId);

              if (pkg != null) {
                var srcId = url.substring(13);
                return pkg.getItemById(srcId);
              }
            }
          } else {
            var pkgName = url.substring(pos1 + 2, pos2);
            pkg = UIPackage.getByName(pkgName);

            if (pkg != null) {
              var srcName = url.substring(pos2 + 1);
              return pkg.getItemByName(srcName);
            }
          }

          return null;
        }

        static normalizeURL(url) {
          if (url == null) return null;
          var pos1 = url.indexOf("//");
          if (pos1 == -1) return null;
          var pos2 = url.indexOf("/", pos1 + 2);
          if (pos2 == -1) return url;
          var pkgName = url.substring(pos1 + 2, pos2);
          var srcName = url.substring(pos2 + 1);
          return UIPackage.getItemURL(pkgName, srcName);
        }

        static setStringsSource(source) {
          (_crd && TranslationHelper === void 0 ? (_reportPossibleCrUseOfTranslationHelper({
            error: Error()
          }), TranslationHelper) : TranslationHelper).loadFromXML(source);
        }

        loadPackage(buffer, path) {
          if (buffer.readUint() != 0x46475549) throw new Error("FairyGUI: old package format found in '" + path + "'");
          this._path = path;
          buffer.version = buffer.readInt();
          var ver2 = buffer.version >= 2;
          var compressed = buffer.readBool();
          this._id = buffer.readString();
          this._name = buffer.readString();
          buffer.skip(20);
          var indexTablePos = buffer.position;
          var cnt;
          var i;
          var nextPos;
          var str;
          var branchIncluded;
          buffer.seek(indexTablePos, 4);
          cnt = buffer.readInt();
          var stringTable = new Array(cnt);
          buffer.stringTable = stringTable;

          for (i = 0; i < cnt; i++) stringTable[i] = buffer.readString();

          if (buffer.seek(indexTablePos, 5)) {
            cnt = buffer.readInt();

            for (i = 0; i < cnt; i++) {
              let index = buffer.readUshort();
              let len = buffer.readInt();
              stringTable[index] = buffer.readString(len);
            }
          }

          buffer.seek(indexTablePos, 0);
          cnt = buffer.readShort();

          for (i = 0; i < cnt; i++) this._dependencies.push({
            id: buffer.readS(),
            name: buffer.readS()
          });

          if (ver2) {
            cnt = buffer.readShort();

            if (cnt > 0) {
              this._branches = buffer.readSArray(cnt);
              if (_branch) this._branchIndex = this._branches.indexOf(_branch);
            }

            branchIncluded = cnt > 0;
          }

          buffer.seek(indexTablePos, 1);
          var pi;
          let pos = path.lastIndexOf('/');
          let shortPath = pos == -1 ? "" : path.substring(0, pos + 1);
          path = path + "_";
          cnt = buffer.readShort();

          for (i = 0; i < cnt; i++) {
            nextPos = buffer.readInt();
            nextPos += buffer.position;
            pi = new (_crd && PackageItem === void 0 ? (_reportPossibleCrUseOfPackageItem({
              error: Error()
            }), PackageItem) : PackageItem)();
            pi.owner = this;
            pi.type = buffer.readByte();
            pi.id = buffer.readS();
            pi.name = buffer.readS();
            buffer.readS(); //path

            pi.file = buffer.readS();
            buffer.readBool(); //exported

            pi.width = buffer.readInt();
            pi.height = buffer.readInt();

            switch (pi.type) {
              case (_crd && PackageItemType === void 0 ? (_reportPossibleCrUseOfPackageItemType({
                error: Error()
              }), PackageItemType) : PackageItemType).Image:
                {
                  pi.objectType = (_crd && ObjectType === void 0 ? (_reportPossibleCrUseOfObjectType({
                    error: Error()
                  }), ObjectType) : ObjectType).Image;
                  var scaleOption = buffer.readByte();

                  if (scaleOption == 1) {
                    pi.scale9Grid = new Rect();
                    pi.scale9Grid.x = buffer.readInt();
                    pi.scale9Grid.y = buffer.readInt();
                    pi.scale9Grid.width = buffer.readInt();
                    pi.scale9Grid.height = buffer.readInt();
                    pi.tileGridIndice = buffer.readInt();
                  } else if (scaleOption == 2) pi.scaleByTile = true;

                  pi.smoothing = buffer.readBool();
                  break;
                }

              case (_crd && PackageItemType === void 0 ? (_reportPossibleCrUseOfPackageItemType({
                error: Error()
              }), PackageItemType) : PackageItemType).MovieClip:
                {
                  pi.smoothing = buffer.readBool();
                  pi.objectType = (_crd && ObjectType === void 0 ? (_reportPossibleCrUseOfObjectType({
                    error: Error()
                  }), ObjectType) : ObjectType).MovieClip;
                  pi.rawData = buffer.readBuffer();
                  break;
                }

              case (_crd && PackageItemType === void 0 ? (_reportPossibleCrUseOfPackageItemType({
                error: Error()
              }), PackageItemType) : PackageItemType).Font:
                {
                  pi.rawData = buffer.readBuffer();
                  break;
                }

              case (_crd && PackageItemType === void 0 ? (_reportPossibleCrUseOfPackageItemType({
                error: Error()
              }), PackageItemType) : PackageItemType).Component:
                {
                  var extension = buffer.readByte();
                  if (extension > 0) pi.objectType = extension;else pi.objectType = (_crd && ObjectType === void 0 ? (_reportPossibleCrUseOfObjectType({
                    error: Error()
                  }), ObjectType) : ObjectType).Component;
                  pi.rawData = buffer.readBuffer();
                  Decls.UIObjectFactory.resolveExtension(pi);
                  break;
                }

              case (_crd && PackageItemType === void 0 ? (_reportPossibleCrUseOfPackageItemType({
                error: Error()
              }), PackageItemType) : PackageItemType).Atlas:
              case (_crd && PackageItemType === void 0 ? (_reportPossibleCrUseOfPackageItemType({
                error: Error()
              }), PackageItemType) : PackageItemType).Sound:
              case (_crd && PackageItemType === void 0 ? (_reportPossibleCrUseOfPackageItemType({
                error: Error()
              }), PackageItemType) : PackageItemType).Misc:
                {
                  pi.file = path + PathUtils.mainFileName(pi.file);
                  break;
                }

              case (_crd && PackageItemType === void 0 ? (_reportPossibleCrUseOfPackageItemType({
                error: Error()
              }), PackageItemType) : PackageItemType).Spine:
              case (_crd && PackageItemType === void 0 ? (_reportPossibleCrUseOfPackageItemType({
                error: Error()
              }), PackageItemType) : PackageItemType).DragonBones:
                {
                  pi.file = shortPath + PathUtils.mainFileName(pi.file);
                  pi.skeletonAnchor = new Vec2();
                  pi.skeletonAnchor.x = buffer.readFloat();
                  pi.skeletonAnchor.y = buffer.readFloat();
                  break;
                }
            }

            if (ver2) {
              str = buffer.readS(); //branch

              if (str) pi.name = str + "/" + pi.name;
              var branchCnt = buffer.readByte();

              if (branchCnt > 0) {
                if (branchIncluded) pi.branches = buffer.readSArray(branchCnt);else this._itemsById[buffer.readS()] = pi;
              }

              var highResCnt = buffer.readByte();
              if (highResCnt > 0) pi.highResolution = buffer.readSArray(highResCnt);
            }

            this._items.push(pi);

            this._itemsById[pi.id] = pi;
            if (pi.name != null) this._itemsByName[pi.name] = pi;
            buffer.position = nextPos;
          }

          buffer.seek(indexTablePos, 2);
          cnt = buffer.readShort();

          for (i = 0; i < cnt; i++) {
            nextPos = buffer.readShort();
            nextPos += buffer.position;
            var itemId = buffer.readS();
            pi = this._itemsById[buffer.readS()];
            let rect = new Rect();
            rect.x = buffer.readInt();
            rect.y = buffer.readInt();
            rect.width = buffer.readInt();
            rect.height = buffer.readInt();
            var sprite = {
              atlas: pi,
              rect: rect,
              offset: new Vec2(),
              originalSize: new Size(0, 0)
            };
            sprite.rotated = buffer.readBool();

            if (ver2 && buffer.readBool()) {
              sprite.offset.x = buffer.readInt();
              sprite.offset.y = buffer.readInt();
              sprite.originalSize.width = buffer.readInt();
              sprite.originalSize.height = buffer.readInt();
            } else {
              sprite.originalSize.width = sprite.rect.width;
              sprite.originalSize.height = sprite.rect.height;
            }

            this._sprites[itemId] = sprite;
            buffer.position = nextPos;
          }

          if (buffer.seek(indexTablePos, 3)) {
            cnt = buffer.readShort();

            for (i = 0; i < cnt; i++) {
              nextPos = buffer.readInt();
              nextPos += buffer.position;
              pi = this._itemsById[buffer.readS()];
              if (pi && pi.type == (_crd && PackageItemType === void 0 ? (_reportPossibleCrUseOfPackageItemType({
                error: Error()
              }), PackageItemType) : PackageItemType).Image) pi.hitTestData = new (_crd && PixelHitTestData === void 0 ? (_reportPossibleCrUseOfPixelHitTestData({
                error: Error()
              }), PixelHitTestData) : PixelHitTestData)(buffer);
              buffer.position = nextPos;
            }
          }
        }

        dispose() {
          var cnt = this._items.length;

          for (var i = 0; i < cnt; i++) {
            var pi = this._items[i];
            if (pi.asset) assetManager.releaseAsset(pi.asset);
          }
        }

        get id() {
          return this._id;
        }

        get name() {
          return this._name;
        }

        get path() {
          return this._path;
        }

        get dependencies() {
          return this._dependencies;
        }

        createObject(resName, userClass) {
          var pi = this._itemsByName[resName];
          if (pi) return this.internalCreateObject(pi, userClass);else return null;
        }

        internalCreateObject(item, userClass) {
          var g = Decls.UIObjectFactory.newObject(item, userClass);
          if (g == null) return null;
          (_crd && constructingDepth === void 0 ? (_reportPossibleCrUseOfconstructingDepth({
            error: Error()
          }), constructingDepth) : constructingDepth).n++;
          g.constructFromResource();
          (_crd && constructingDepth === void 0 ? (_reportPossibleCrUseOfconstructingDepth({
            error: Error()
          }), constructingDepth) : constructingDepth).n--;
          return g;
        }

        getItemById(itemId) {
          return this._itemsById[itemId];
        }

        getItemByName(resName) {
          return this._itemsByName[resName];
        }

        getItemAssetByName(resName) {
          var pi = this._itemsByName[resName];

          if (pi == null) {
            throw new Error("Resource not found -" + resName);
          }

          return this.getItemAsset(pi);
        }

        getItemAsset(item) {
          switch (item.type) {
            case (_crd && PackageItemType === void 0 ? (_reportPossibleCrUseOfPackageItemType({
              error: Error()
            }), PackageItemType) : PackageItemType).Image:
              if (!item.decoded) {
                item.decoded = true;
                var sprite = this._sprites[item.id];

                if (sprite) {
                  let atlasTexture = this.getItemAsset(sprite.atlas);

                  if (atlasTexture) {
                    let sf = new SpriteFrame();
                    sf.texture = atlasTexture;
                    sf.rect = sprite.rect;
                    sf.rotated = sprite.rotated;
                    sf.offset = new Vec2(sprite.offset.x - (sprite.originalSize.width - sprite.rect.width) / 2, -(sprite.offset.y - (sprite.originalSize.height - sprite.rect.height) / 2));
                    sf.originalSize = sprite.originalSize;

                    if (item.scale9Grid) {
                      sf.insetLeft = item.scale9Grid.x;
                      sf.insetTop = item.scale9Grid.y;
                      sf.insetRight = item.width - item.scale9Grid.xMax;
                      sf.insetBottom = item.height - item.scale9Grid.yMax;
                    }

                    item.asset = sf;
                  }
                }
              }

              break;

            case (_crd && PackageItemType === void 0 ? (_reportPossibleCrUseOfPackageItemType({
              error: Error()
            }), PackageItemType) : PackageItemType).Atlas:
            case (_crd && PackageItemType === void 0 ? (_reportPossibleCrUseOfPackageItemType({
              error: Error()
            }), PackageItemType) : PackageItemType).Sound:
              if (!item.decoded) {
                item.decoded = true;
                item.asset = this._bundle.get(item.file, ItemTypeToAssetType[item.type]);
                if (!item.asset) console.log("Resource '" + item.file + "' not found");else if (item.type == (_crd && PackageItemType === void 0 ? (_reportPossibleCrUseOfPackageItemType({
                  error: Error()
                }), PackageItemType) : PackageItemType).Atlas) {
                  const asset = item.asset;
                  let tex = asset['_texture'];

                  if (!tex) {
                    tex = new Texture2D();
                    tex.name = asset.nativeUrl;
                    tex.image = asset;
                  }

                  item.asset = tex;
                } else {
                  item.asset = item.asset;
                }
              }

              break;

            case (_crd && PackageItemType === void 0 ? (_reportPossibleCrUseOfPackageItemType({
              error: Error()
            }), PackageItemType) : PackageItemType).Font:
              if (!item.decoded) {
                item.decoded = true;
                this.loadFont(item);
              }

              break;

            case (_crd && PackageItemType === void 0 ? (_reportPossibleCrUseOfPackageItemType({
              error: Error()
            }), PackageItemType) : PackageItemType).MovieClip:
              if (!item.decoded) {
                item.decoded = true;
                this.loadMovieClip(item);
              }

              break;

            default:
              break;
          }

          return item.asset;
        }

        getItemAssetAsync(item, onComplete) {
          if (item.decoded) {
            onComplete(null, item);
            return;
          }

          if (item.loading) {
            item.loading.push(onComplete);
            return;
          }

          switch (item.type) {
            case (_crd && PackageItemType === void 0 ? (_reportPossibleCrUseOfPackageItemType({
              error: Error()
            }), PackageItemType) : PackageItemType).Spine:
              item.loading = [onComplete];
              this.loadSpine(item);
              break;

            case (_crd && PackageItemType === void 0 ? (_reportPossibleCrUseOfPackageItemType({
              error: Error()
            }), PackageItemType) : PackageItemType).DragonBones:
              item.loading = [onComplete];
              this.loadDragonBones(item);
              break;

            default:
              this.getItemAsset(item);
              onComplete(null, item);
              break;
          }
        }

        loadAllAssets() {
          var cnt = this._items.length;

          for (var i = 0; i < cnt; i++) {
            var pi = this._items[i];
            this.getItemAsset(pi);
          }
        }

        loadMovieClip(item) {
          var buffer = item.rawData;
          buffer.seek(0, 0);
          item.interval = buffer.readInt() / 1000;
          item.swing = buffer.readBool();
          item.repeatDelay = buffer.readInt() / 1000;
          buffer.seek(0, 1);
          var frameCount = buffer.readShort();
          item.frames = Array(frameCount);
          var spriteId;
          var sprite;

          for (var i = 0; i < frameCount; i++) {
            var nextPos = buffer.readShort();
            nextPos += buffer.position;
            let rect = new Rect();
            rect.x = buffer.readInt();
            rect.y = buffer.readInt();
            rect.width = buffer.readInt();
            rect.height = buffer.readInt();
            let addDelay = buffer.readInt() / 1000;
            let frame = {
              rect: rect,
              addDelay: addDelay,
              texture: null
            };
            spriteId = buffer.readS();

            if (spriteId != null && (sprite = this._sprites[spriteId]) != null) {
              let atlasTexture = this.getItemAsset(sprite.atlas);

              if (atlasTexture) {
                let sx = item.width / frame.rect.width;
                let sf = new SpriteFrame();
                sf.texture = atlasTexture;
                sf.rect = sprite.rect;
                sf.rotated = sprite.rotated;
                sf.offset = new Vec2(frame.rect.x - (item.width - frame.rect.width) / 2, -(frame.rect.y - (item.height - frame.rect.height) / 2));
                sf.originalSize = new Size(item.width, item.height);
                frame.texture = sf;
              }
            }

            item.frames[i] = frame;
            buffer.position = nextPos;
          }
        }

        loadFont(item) {
          var font = new BitmapFont();
          item.asset = font;
          font.fntConfig = {
            commonHeight: 0,
            fontSize: 0,
            kerningDict: {},
            fontDefDictionary: {}
          };
          let dict = font.fntConfig.fontDefDictionary;
          var buffer = item.rawData;
          buffer.seek(0, 0);
          let ttf = buffer.readBool();
          let canTint = buffer.readBool();
          let resizable = buffer.readBool();
          buffer.readBool(); //has channel

          let fontSize = buffer.readInt();
          var xadvance = buffer.readInt();
          var lineHeight = buffer.readInt();
          let mainTexture;
          var mainSprite = this._sprites[item.id];
          if (mainSprite) mainTexture = this.getItemAsset(mainSprite.atlas);
          buffer.seek(0, 1);
          var bg;
          var cnt = buffer.readInt();

          for (var i = 0; i < cnt; i++) {
            var nextPos = buffer.readShort();
            nextPos += buffer.position;
            bg = {};
            var ch = buffer.readUshort();
            dict[ch] = bg;
            let rect = new Rect();
            bg.rect = rect;
            var img = buffer.readS();
            rect.x = buffer.readInt();
            rect.y = buffer.readInt();
            bg.xOffset = buffer.readInt();
            bg.yOffset = buffer.readInt();
            rect.width = buffer.readInt();
            rect.height = buffer.readInt();
            bg.xAdvance = buffer.readInt();
            bg.channel = buffer.readByte();
            if (bg.channel == 1) bg.channel = 3;else if (bg.channel == 2) bg.channel = 2;else if (bg.channel == 3) bg.channel = 1;

            if (ttf) {
              rect.x += mainSprite.rect.x;
              rect.y += mainSprite.rect.y;
            } else {
              let sprite = this._sprites[img];

              if (sprite) {
                rect.set(sprite.rect);
                bg.xOffset += sprite.offset.x;
                bg.yOffset += sprite.offset.y;
                if (fontSize == 0) fontSize = sprite.originalSize.height;

                if (!mainTexture) {
                  sprite.atlas.load();
                  mainTexture = sprite.atlas.asset;
                }
              }

              if (bg.xAdvance == 0) {
                if (xadvance == 0) bg.xAdvance = bg.xOffset + bg.rect.width;else bg.xAdvance = xadvance;
              }
            }

            buffer.position = nextPos;
          }

          font.fontSize = fontSize;
          font.fntConfig.fontSize = fontSize;
          font.fntConfig.commonHeight = lineHeight == 0 ? fontSize : lineHeight;
          font.fntConfig.resizable = resizable;
          font.fntConfig.canTint = canTint;
          let spriteFrame = new SpriteFrame();
          spriteFrame.texture = mainTexture;
          font.spriteFrame = spriteFrame;
          font.onLoaded();
        }

        loadSpine(item) {
          this._bundle.load(item.file, sp.SkeletonData, (err, asset) => {
            item.decoded = true;
            item.asset = asset;
            let arr = item.loading;
            delete item.loading;
            arr.forEach(e => e(err, item));
          });
        }

        loadDragonBones(item) {
          this._bundle.load(item.file, dragonBones.DragonBonesAsset, (err, asset) => {
            if (err) {
              item.decoded = true;
              let arr = item.loading;
              delete item.loading;
              arr.forEach(e => e(err, item));
              return;
            }

            item.asset = asset;
            let atlasFile = item.file.replace("_ske", "_tex");
            let pos = atlasFile.lastIndexOf('.');
            if (pos != -1) atlasFile = atlasFile.substring(0, pos + 1) + "json";

            this._bundle.load(atlasFile, dragonBones.DragonBonesAtlasAsset, (err, asset) => {
              item.decoded = true;
              item.atlasAsset = asset;
              let arr = item.loading;
              delete item.loading;
              arr.forEach(e => e(err, item));
            });
          });
        }

      });

      ItemTypeToAssetType = {
        [(_crd && PackageItemType === void 0 ? (_reportPossibleCrUseOfPackageItemType({
          error: Error()
        }), PackageItemType) : PackageItemType).Atlas]: ImageAsset,
        [(_crd && PackageItemType === void 0 ? (_reportPossibleCrUseOfPackageItemType({
          error: Error()
        }), PackageItemType) : PackageItemType).Sound]: AudioClip
      };
      _instById = {};
      _instByName = {};
      _branch = "";
      _vars = {};

      _export("Decls", Decls = {});

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c5d9298057628548e01acb5979d8ccb61eecffcc.js.map