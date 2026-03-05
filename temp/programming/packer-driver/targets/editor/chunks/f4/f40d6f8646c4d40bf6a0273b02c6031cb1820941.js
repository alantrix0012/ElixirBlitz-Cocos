System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, RelationItem, Relations, _crd;

  function _reportPossibleCrUseOfGComponent(extras) {
    _reporterNs.report("GComponent", "./GComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGObject(extras) {
    _reporterNs.report("GObject", "./GObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRelationItem(extras) {
    _reporterNs.report("RelationItem", "./RelationItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfByteBuffer(extras) {
    _reporterNs.report("ByteBuffer", "./utils/ByteBuffer", _context.meta, extras);
  }

  _export("Relations", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      RelationItem = _unresolved_2.RelationItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1f7df+j1Y1MyZ47EOAYuzZ1", "Relations", undefined);

      _export("Relations", Relations = class Relations {
        constructor(owner) {
          this._owner = void 0;
          this._items = void 0;
          this.handling = void 0;
          this.sizeDirty = false;
          this._owner = owner;
          this._items = new Array();
        }

        add(target, relationType, usePercent) {
          var length = this._items.length;

          for (var i = 0; i < length; i++) {
            var item = this._items[i];

            if (item.target == target) {
              item.add(relationType, usePercent);
              return;
            }
          }

          var newItem = new (_crd && RelationItem === void 0 ? (_reportPossibleCrUseOfRelationItem({
            error: Error()
          }), RelationItem) : RelationItem)(this._owner);
          newItem.target = target;
          newItem.add(relationType, usePercent);

          this._items.push(newItem);
        }

        remove(target, relationType) {
          relationType = relationType || 0;
          var cnt = this._items.length;
          var i = 0;

          while (i < cnt) {
            var item = this._items[i];

            if (item.target == target) {
              item.remove(relationType);

              if (item.isEmpty) {
                item.dispose();

                this._items.splice(i, 1);

                cnt--;
              } else i++;
            } else i++;
          }
        }

        contains(target) {
          var length = this._items.length;

          for (var i = 0; i < length; i++) {
            var item = this._items[i];
            if (item.target == target) return true;
          }

          return false;
        }

        clearFor(target) {
          var cnt = this._items.length;
          var i = 0;

          while (i < cnt) {
            var item = this._items[i];

            if (item.target == target) {
              item.dispose();

              this._items.splice(i, 1);

              cnt--;
            } else i++;
          }
        }

        clearAll() {
          var length = this._items.length;

          for (var i = 0; i < length; i++) {
            var item = this._items[i];
            item.dispose();
          }

          this._items.length = 0;
        }

        copyFrom(source) {
          this.clearAll();
          var arr = source._items;
          var length = arr.length;

          for (var i = 0; i < length; i++) {
            var ri = arr[i];
            var item = new (_crd && RelationItem === void 0 ? (_reportPossibleCrUseOfRelationItem({
              error: Error()
            }), RelationItem) : RelationItem)(this._owner);
            item.copyFrom(ri);

            this._items.push(item);
          }
        }

        dispose() {
          this.clearAll();
        }

        onOwnerSizeChanged(dWidth, dHeight, applyPivot) {
          if (this._items.length == 0) return;
          var length = this._items.length;

          for (var i = 0; i < length; i++) {
            var item = this._items[i];
            item.applyOnSelfResized(dWidth, dHeight, applyPivot);
          }
        }

        ensureRelationsSizeCorrect() {
          if (this._items.length == 0) return;
          this.sizeDirty = false;
          var length = this._items.length;

          for (var i = 0; i < length; i++) {
            var item = this._items[i];
            item.target.ensureSizeCorrect();
          }
        }

        get empty() {
          return this._items.length == 0;
        }

        setup(buffer, parentToChild) {
          var cnt = buffer.readByte();
          var target;

          for (var i = 0; i < cnt; i++) {
            var targetIndex = buffer.readShort();
            if (targetIndex == -1) target = this._owner.parent;else if (parentToChild) target = this._owner.getChildAt(targetIndex);else target = this._owner.parent.getChildAt(targetIndex);
            var newItem = new (_crd && RelationItem === void 0 ? (_reportPossibleCrUseOfRelationItem({
              error: Error()
            }), RelationItem) : RelationItem)(this._owner);
            newItem.target = target;

            this._items.push(newItem);

            var cnt2 = buffer.readByte();

            for (var j = 0; j < cnt2; j++) {
              var rt = buffer.readByte();
              var usePercent = buffer.readBool();
              newItem.internalAdd(rt, usePercent);
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f40d6f8646c4d40bf6a0273b02c6031cb1820941.js.map