System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, FUIEvent, AlignType, VertAlignType, GLoader, GRoot, DragDropManager, _crd;

  function _reportPossibleCrUseOfFUIEvent(extras) {
    _reporterNs.report("FUIEvent", "./event/Event", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAlignType(extras) {
    _reporterNs.report("AlignType", "./FieldTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVertAlignType(extras) {
    _reporterNs.report("VertAlignType", "./FieldTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGLoader(extras) {
    _reporterNs.report("GLoader", "./GLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGObject(extras) {
    _reporterNs.report("GObject", "./GObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGRoot(extras) {
    _reporterNs.report("GRoot", "./GRoot", _context.meta, extras);
  }

  _export("DragDropManager", void 0);

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
      AlignType = _unresolved_3.AlignType;
      VertAlignType = _unresolved_3.VertAlignType;
    }, function (_unresolved_4) {
      GLoader = _unresolved_4.GLoader;
    }, function (_unresolved_5) {
      GRoot = _unresolved_5.GRoot;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "083d1F+PMVE/KoWpZtidgqe", "DragDropManager", undefined);

      __checkObsolete__(['Vec2']);

      _export("DragDropManager", DragDropManager = class DragDropManager {
        static get inst() {
          if (!DragDropManager._inst) DragDropManager._inst = new DragDropManager();
          return DragDropManager._inst;
        }

        constructor() {
          this._agent = void 0;
          this._sourceData = void 0;
          this._agent = new (_crd && GLoader === void 0 ? (_reportPossibleCrUseOfGLoader({
            error: Error()
          }), GLoader) : GLoader)();
          this._agent.draggable = true;
          this._agent.touchable = false; //important

          this._agent.setSize(100, 100);

          this._agent.setPivot(0.5, 0.5, true);

          this._agent.align = (_crd && AlignType === void 0 ? (_reportPossibleCrUseOfAlignType({
            error: Error()
          }), AlignType) : AlignType).Center;
          this._agent.verticalAlign = (_crd && VertAlignType === void 0 ? (_reportPossibleCrUseOfVertAlignType({
            error: Error()
          }), VertAlignType) : VertAlignType).Middle;
          this._agent.sortingOrder = 1000000;

          this._agent.on((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
            error: Error()
          }), FUIEvent) : FUIEvent).DRAG_END, this.onDragEnd, this);
        }

        get dragAgent() {
          return this._agent;
        }

        get dragging() {
          return this._agent.parent != null;
        }

        startDrag(source, icon, sourceData, touchId) {
          if (this._agent.parent) return;
          this._sourceData = sourceData;
          this._agent.url = icon;
          (_crd && GRoot === void 0 ? (_reportPossibleCrUseOfGRoot({
            error: Error()
          }), GRoot) : GRoot).inst.addChild(this._agent);
          var pt = (_crd && GRoot === void 0 ? (_reportPossibleCrUseOfGRoot({
            error: Error()
          }), GRoot) : GRoot).inst.getTouchPosition(touchId);
          pt = (_crd && GRoot === void 0 ? (_reportPossibleCrUseOfGRoot({
            error: Error()
          }), GRoot) : GRoot).inst.globalToLocal(pt.x, pt.y);

          this._agent.setPosition(pt.x, pt.y);

          this._agent.startDrag(touchId);
        }

        cancel() {
          if (this._agent.parent) {
            this._agent.stopDrag();

            (_crd && GRoot === void 0 ? (_reportPossibleCrUseOfGRoot({
              error: Error()
            }), GRoot) : GRoot).inst.removeChild(this._agent);
            this._sourceData = null;
          }
        }

        onDragEnd() {
          if (!this._agent.parent) //cancelled
            return;
          (_crd && GRoot === void 0 ? (_reportPossibleCrUseOfGRoot({
            error: Error()
          }), GRoot) : GRoot).inst.removeChild(this._agent);
          var sourceData = this._sourceData;
          this._sourceData = null;
          var obj = (_crd && GRoot === void 0 ? (_reportPossibleCrUseOfGRoot({
            error: Error()
          }), GRoot) : GRoot).inst.touchTarget;

          while (obj) {
            if (obj.node.hasEventListener((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
              error: Error()
            }), FUIEvent) : FUIEvent).DROP)) {
              obj.requestFocus();
              obj.node.emit((_crd && FUIEvent === void 0 ? (_reportPossibleCrUseOfFUIEvent({
                error: Error()
              }), FUIEvent) : FUIEvent).DROP, obj, sourceData);
              return;
            }

            obj = obj.parent;
          }
        }

      });

      DragDropManager._inst = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=db4238a11bf1c24ac8eb9d3f12ee9c7c6d8b9737.js.map