System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Pool, _crd;

  _export("Pool", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "672206UK25HZZ3sIJ8ifIYi", "Pool", undefined);

      _export("Pool", Pool = class Pool {
        constructor(type, init, reset) {
          this.pool = [];
          this._init = void 0;
          this._reset = void 0;
          this._ct = void 0;
          this._init = init;
          this._reset = reset;
          this._ct = type;
        }

        borrow(...argArray) {
          let ret;
          if (this.pool.length > 0) ret = this.pool.pop();else ret = new this._ct();
          if (this._init) this._init(ret, ...argArray);
          return ret;
        }

        returns(element) {
          if (Array.isArray(element)) {
            let count = element.length;

            for (let i = 0; i < count; i++) {
              let element2 = element[i];
              if (this._reset) this._reset(element2);
              this.pool.push(element2);
            }

            element.length = 0;
          } else {
            if (this._reset) this._reset(element);
            this.pool.push(element);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9b53ec07484dcef1fd9a3f73cd1b82f106b90c06.js.map