System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, game, Node, PackageItemType, ObjectType, constructingDepth, UIConfig, UIObjectFactory, UIPackage, AsyncOperation, AsyncOperationRunner, _crd;

  function _reportPossibleCrUseOfPackageItemType(extras) {
    _reporterNs.report("PackageItemType", "./FieldTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectType(extras) {
    _reporterNs.report("ObjectType", "./FieldTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGComponent(extras) {
    _reporterNs.report("GComponent", "./GComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGList(extras) {
    _reporterNs.report("GList", "./GList", _context.meta, extras);
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

  function _reportPossibleCrUseOfUIConfig(extras) {
    _reporterNs.report("UIConfig", "./UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIObjectFactory(extras) {
    _reporterNs.report("UIObjectFactory", "./UIObjectFactory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPackage(extras) {
    _reporterNs.report("UIPackage", "./UIPackage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfByteBuffer(extras) {
    _reporterNs.report("ByteBuffer", "./utils/ByteBuffer", _context.meta, extras);
  }

  _export("AsyncOperation", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      game = _cc.game;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      PackageItemType = _unresolved_2.PackageItemType;
      ObjectType = _unresolved_2.ObjectType;
    }, function (_unresolved_3) {
      constructingDepth = _unresolved_3.constructingDepth;
    }, function (_unresolved_4) {
      UIConfig = _unresolved_4.UIConfig;
    }, function (_unresolved_5) {
      UIObjectFactory = _unresolved_5.UIObjectFactory;
    }, function (_unresolved_6) {
      UIPackage = _unresolved_6.UIPackage;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "74ea5JFHJFNPY4S8UWZxiTV", "AsyncOperation", undefined);

      __checkObsolete__(['Component', 'director', 'game', 'Node']);

      _export("AsyncOperation", AsyncOperation = class AsyncOperation {
        constructor() {
          this.callback = void 0;
          this._node = void 0;
        }

        createObject(pkgName, resName) {
          if (this._node) throw 'Already running';
          var pkg = (_crd && UIPackage === void 0 ? (_reportPossibleCrUseOfUIPackage({
            error: Error()
          }), UIPackage) : UIPackage).getByName(pkgName);

          if (pkg) {
            var pi = pkg.getItemByName(resName);
            if (!pi) throw new Error("resource not found: " + resName);
            this.internalCreateObject(pi);
          } else throw new Error("package not found: " + pkgName);
        }

        createObjectFromURL(url) {
          if (this._node) throw 'Already running';
          var pi = (_crd && UIPackage === void 0 ? (_reportPossibleCrUseOfUIPackage({
            error: Error()
          }), UIPackage) : UIPackage).getItemByURL(url);
          if (pi) this.internalCreateObject(pi);else throw new Error("resource not found: " + url);
        }

        cancel() {
          if (this._node) {
            this._node.destroy();

            this._node = null;
          }
        }

        internalCreateObject(item) {
          this._node = new Node("[AsyncCreating:" + item.name + "]");
          game.addPersistRootNode(this._node);

          this._node.on("#", this.completed, this);

          this._node.addComponent(AsyncOperationRunner).init(item);
        }

        completed(result) {
          this.cancel();
          if (this.callback) this.callback(result);
        }

      });

      AsyncOperationRunner = class AsyncOperationRunner extends Component {
        constructor() {
          super();
          this._itemList = void 0;
          this._objectPool = void 0;
          this._index = void 0;
          this._itemList = new Array();
          this._objectPool = new Array();
        }

        init(item) {
          this._itemList.length = 0;
          this._objectPool.length = 0;
          var di = {
            pi: item,
            type: item.objectType
          };
          di.childCount = this.collectComponentChildren(item);

          this._itemList.push(di);

          this._index = 0;
        }

        onDestroy() {
          this._itemList.length = 0;
          var cnt = this._objectPool.length;

          if (cnt > 0) {
            for (var i = 0; i < cnt; i++) this._objectPool[i].dispose();

            this._objectPool.length = 0;
          }
        }

        collectComponentChildren(item) {
          var buffer = item.rawData;
          buffer.seek(0, 2);
          var di;
          var pi;
          var i;
          var dataLen;
          var curPos;
          var pkg;
          var dcnt = buffer.readShort();

          for (i = 0; i < dcnt; i++) {
            dataLen = buffer.readShort();
            curPos = buffer.position;
            buffer.seek(curPos, 0);
            var type = buffer.readByte();
            var src = buffer.readS();
            var pkgId = buffer.readS();
            buffer.position = curPos;

            if (src != null) {
              if (pkgId != null) pkg = (_crd && UIPackage === void 0 ? (_reportPossibleCrUseOfUIPackage({
                error: Error()
              }), UIPackage) : UIPackage).getById(pkgId);else pkg = item.owner;
              pi = pkg != null ? pkg.getItemById(src) : null;
              di = {
                pi: pi,
                type: type
              };
              if (pi && pi.type == (_crd && PackageItemType === void 0 ? (_reportPossibleCrUseOfPackageItemType({
                error: Error()
              }), PackageItemType) : PackageItemType).Component) di.childCount = this.collectComponentChildren(pi);
            } else {
              di = {
                type: type
              };
              if (type == (_crd && ObjectType === void 0 ? (_reportPossibleCrUseOfObjectType({
                error: Error()
              }), ObjectType) : ObjectType).List) //list
                di.listItemCount = this.collectListChildren(buffer);
            }

            this._itemList.push(di);

            buffer.position = curPos + dataLen;
          }

          return dcnt;
        }

        collectListChildren(buffer) {
          buffer.seek(buffer.position, 8);
          var listItemCount = 0;
          var i;
          var nextPos;
          var url;
          var pi;
          var di;
          var defaultItem = buffer.readS();
          var itemCount = buffer.readShort();

          for (i = 0; i < itemCount; i++) {
            nextPos = buffer.readShort();
            nextPos += buffer.position;
            url = buffer.readS();
            if (url == null) url = defaultItem;

            if (url) {
              pi = (_crd && UIPackage === void 0 ? (_reportPossibleCrUseOfUIPackage({
                error: Error()
              }), UIPackage) : UIPackage).getItemByURL(url);

              if (pi) {
                di = {
                  pi: pi,
                  type: pi.objectType
                };
                if (pi.type == (_crd && PackageItemType === void 0 ? (_reportPossibleCrUseOfPackageItemType({
                  error: Error()
                }), PackageItemType) : PackageItemType).Component) di.childCount = this.collectComponentChildren(pi);

                this._itemList.push(di);

                listItemCount++;
              }
            }

            buffer.position = nextPos;
          }

          return listItemCount;
        }

        update() {
          var obj;
          var di;
          var poolStart;
          var k;
          var t = game.totalTime / 1000;
          var frameTime = (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
            error: Error()
          }), UIConfig) : UIConfig).frameTimeForAsyncUIConstruction;
          var totalItems = this._itemList.length;

          while (this._index < totalItems) {
            di = this._itemList[this._index];

            if (di.pi) {
              obj = (_crd && UIObjectFactory === void 0 ? (_reportPossibleCrUseOfUIObjectFactory({
                error: Error()
              }), UIObjectFactory) : UIObjectFactory).newObject(di.pi);

              this._objectPool.push(obj);

              (_crd && constructingDepth === void 0 ? (_reportPossibleCrUseOfconstructingDepth({
                error: Error()
              }), constructingDepth) : constructingDepth).n++;

              if (di.pi.type == (_crd && PackageItemType === void 0 ? (_reportPossibleCrUseOfPackageItemType({
                error: Error()
              }), PackageItemType) : PackageItemType).Component) {
                poolStart = this._objectPool.length - di.childCount - 1;
                obj.constructFromResource2(this._objectPool, poolStart);

                this._objectPool.splice(poolStart, di.childCount);
              } else {
                obj.constructFromResource();
              }

              (_crd && constructingDepth === void 0 ? (_reportPossibleCrUseOfconstructingDepth({
                error: Error()
              }), constructingDepth) : constructingDepth).n--;
            } else {
              obj = (_crd && UIObjectFactory === void 0 ? (_reportPossibleCrUseOfUIObjectFactory({
                error: Error()
              }), UIObjectFactory) : UIObjectFactory).newObject(di.type);

              this._objectPool.push(obj);

              if (di.type == (_crd && ObjectType === void 0 ? (_reportPossibleCrUseOfObjectType({
                error: Error()
              }), ObjectType) : ObjectType).List && di.listItemCount > 0) {
                poolStart = this._objectPool.length - di.listItemCount - 1;

                for (k = 0; k < di.listItemCount; k++) //把他们都放到pool里，这样GList在创建时就不需要创建对象了
                obj.itemPool.returnObject(this._objectPool[k + poolStart]);

                this._objectPool.splice(poolStart, di.listItemCount);
              }
            }

            this._index++;
            if (this._index % 5 == 0 && game.totalTime / 1000 - t >= frameTime) return;
          }

          var result = this._objectPool[0];
          this._itemList.length = 0;
          this._objectPool.length = 0;
          this.node.emit("#", result);
        }

      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7860ab08d4da94f3b6bdddea1e2aa9c59ef5b16e.js.map