System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, Font, Layers, resources, ScrollBarDisplayType, UIConfig, _crd, _fontRegistry;

  function registerFont(name, font, bundle) {
    if (font instanceof Font) _fontRegistry[name] = font;else {
      (bundle || resources).load(font || name, Font, (err, asset) => {
        _fontRegistry[name] = asset;
      });
    }
  }

  function getFontByName(name) {
    return _fontRegistry[name];
  }

  function _reportPossibleCrUseOfScrollBarDisplayType(extras) {
    _reporterNs.report("ScrollBarDisplayType", "./FieldTypes", _context.meta, extras);
  }

  _export({
    UIConfig: void 0,
    registerFont: registerFont,
    getFontByName: getFontByName
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Color = _cc.Color;
      Font = _cc.Font;
      Layers = _cc.Layers;
      resources = _cc.resources;
    }, function (_unresolved_2) {
      ScrollBarDisplayType = _unresolved_2.ScrollBarDisplayType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fad1c6PaiFJqZomHJ8EVSMP", "UIConfig", undefined);

      __checkObsolete__(['AssetManager', 'Color', 'Font', 'Layers', 'resources']);

      _export("UIConfig", UIConfig = class UIConfig {
        constructor() {} //Default font name


      });

      UIConfig.defaultFont = "Arial";
      //Resource using in Window.ShowModalWait for locking the window.
      UIConfig.windowModalWaiting = void 0;
      //Resource using in GRoot.ShowModalWait for locking the screen.
      UIConfig.globalModalWaiting = void 0;
      //When a modal window is in front, the background becomes dark.
      UIConfig.modalLayerColor = new Color(0x33, 0x33, 0x33, 0x33);
      //Default button click sound
      UIConfig.buttonSound = void 0;
      UIConfig.buttonSoundVolumeScale = 1;
      UIConfig.horizontalScrollBar = void 0;
      UIConfig.verticalScrollBar = void 0;
      //Scrolling step in pixels
      UIConfig.defaultScrollStep = 25;
      //Deceleration ratio of scrollpane when its in touch dragging.
      UIConfig.defaultScrollDecelerationRate = 0.967;
      //Default scrollbar display mode. Recommened visible for Desktop and Auto for mobile.
      UIConfig.defaultScrollBarDisplay = (_crd && ScrollBarDisplayType === void 0 ? (_reportPossibleCrUseOfScrollBarDisplayType({
        error: Error()
      }), ScrollBarDisplayType) : ScrollBarDisplayType).Visible;
      //Allow dragging the content to scroll. Recommeded true for mobile.
      UIConfig.defaultScrollTouchEffect = true;
      //The "rebound" effect in the scolling container. Recommeded true for mobile.
      UIConfig.defaultScrollBounceEffect = true;
      //Resources for PopupMenu.
      UIConfig.popupMenu = void 0;
      //Resources for seperator of PopupMenu.
      UIConfig.popupMenu_seperator = void 0;
      //In case of failure of loading content for GLoader, use this sign to indicate an error.
      UIConfig.loaderErrorSign = void 0;
      //Resources for tooltips.
      UIConfig.tooltipsWin = void 0;
      //Max items displayed in combobox without scrolling.
      UIConfig.defaultComboBoxVisibleItemCount = 10;
      // Pixel offsets of finger to trigger scrolling.
      UIConfig.touchScrollSensitivity = 20;
      //Default Gloader assetsBundle Name.
      UIConfig.loaderAssetsBundleName = void 0;
      // Pixel offsets of finger to trigger dragging.
      UIConfig.touchDragSensitivity = 10;
      // Pixel offsets of mouse pointer to trigger dragging.
      UIConfig.clickDragSensitivity = 2;
      // When click the window, brings to front automatically.
      UIConfig.bringWindowToFrontOnClick = true;
      UIConfig.frameTimeForAsyncUIConstruction = 0.002;
      UIConfig.linkUnderline = true;
      //Default group name of UI node.<br/>
      UIConfig.defaultUILayer = Layers.Enum.UI_2D;
      _fontRegistry = {};
      ;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=62115a9e173d7b74e2657d1298364e10c3f7be48.js.map