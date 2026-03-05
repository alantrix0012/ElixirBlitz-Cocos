System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, UIPackage, GObjectPool, _crd;

  function _reportPossibleCrUseOfGObject(extras) {
    _reporterNs.report("GObject", "./GObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPackage(extras) {
    _reporterNs.report("UIPackage", "./UIPackage", _context.meta, extras);
  }

  _export("GObjectPool", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      UIPackage = _unresolved_2.UIPackage;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "76b78P8289B47wXNvv2ublY", "GObjectPool", undefined);

      _export("GObjectPool", GObjectPool = class GObjectPool {
        constructor() {
          this._pool = void 0;
          this._count = 0;
          this._pool = {};
        }

        clear() {
          for (var i1 in this._pool) {
            var arr = this._pool[i1];
            var cnt = arr.length;

            for (var i = 0; i < cnt; i++) arr[i].dispose();
          }

          this._pool = {};
          this._count = 0;
        }

        get count() {
          return this._count;
        }

        getObject(url) {
          url = (_crd && UIPackage === void 0 ? (_reportPossibleCrUseOfUIPackage({
            error: Error()
          }), UIPackage) : UIPackage).normalizeURL(url);
          if (url == null) return null;
          var arr = this._pool[url];

          if (arr && arr.length) {
            this._count--;
            return arr.shift();
          }

          var child = (_crd && UIPackage === void 0 ? (_reportPossibleCrUseOfUIPackage({
            error: Error()
          }), UIPackage) : UIPackage).createObjectFromURL(url);
          return child;
        }

        returnObject(obj) {
          var url = obj.resourceURL;
          if (!url) return;
          var arr = this._pool[url];

          if (arr == null) {
            arr = new Array();
            this._pool[url] = arr;
          }

          this._count++;
          arr.push(obj);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d469583ad2500570ecb2c1f63d6094eb1a3d4101.js.map