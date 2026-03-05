System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ObjectType, PackageItemType, GButton, GComboBox, GComponent, GGraph, GGroup, GImage, GLabel, GList, GLoader, GLoader3D, GMovieClip, GProgressBar, GRichTextField, GScrollBar, GSlider, GTextField, GTextInput, GTree, Decls, UIPackage, UIObjectFactory, _crd;

  function _reportPossibleCrUseOfObjectType(extras) {
    _reporterNs.report("ObjectType", "./FieldTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPackageItemType(extras) {
    _reporterNs.report("PackageItemType", "./FieldTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGButton(extras) {
    _reporterNs.report("GButton", "./GButton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGComboBox(extras) {
    _reporterNs.report("GComboBox", "./GComboBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGComponent(extras) {
    _reporterNs.report("GComponent", "./GComponent", _context.meta, extras);
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

  function _reportPossibleCrUseOfGLabel(extras) {
    _reporterNs.report("GLabel", "./GLabel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGList(extras) {
    _reporterNs.report("GList", "./GList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGLoader(extras) {
    _reporterNs.report("GLoader", "./GLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGLoader3D(extras) {
    _reporterNs.report("GLoader3D", "./GLoader3D", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGMovieClip(extras) {
    _reporterNs.report("GMovieClip", "./GMovieClip", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGObject(extras) {
    _reporterNs.report("GObject", "./GObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGProgressBar(extras) {
    _reporterNs.report("GProgressBar", "./GProgressBar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGRichTextField(extras) {
    _reporterNs.report("GRichTextField", "./GRichTextField", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGScrollBar(extras) {
    _reporterNs.report("GScrollBar", "./GScrollBar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGSlider(extras) {
    _reporterNs.report("GSlider", "./GSlider", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGTextField(extras) {
    _reporterNs.report("GTextField", "./GTextField", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGTextInput(extras) {
    _reporterNs.report("GTextInput", "./GTextInput", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGTree(extras) {
    _reporterNs.report("GTree", "./GTree", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPackageItem(extras) {
    _reporterNs.report("PackageItem", "./PackageItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDecls(extras) {
    _reporterNs.report("Decls", "./UIPackage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPackage(extras) {
    _reporterNs.report("UIPackage", "./UIPackage", _context.meta, extras);
  }

  _export("UIObjectFactory", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ObjectType = _unresolved_2.ObjectType;
      PackageItemType = _unresolved_2.PackageItemType;
    }, function (_unresolved_3) {
      GButton = _unresolved_3.GButton;
    }, function (_unresolved_4) {
      GComboBox = _unresolved_4.GComboBox;
    }, function (_unresolved_5) {
      GComponent = _unresolved_5.GComponent;
    }, function (_unresolved_6) {
      GGraph = _unresolved_6.GGraph;
    }, function (_unresolved_7) {
      GGroup = _unresolved_7.GGroup;
    }, function (_unresolved_8) {
      GImage = _unresolved_8.GImage;
    }, function (_unresolved_9) {
      GLabel = _unresolved_9.GLabel;
    }, function (_unresolved_10) {
      GList = _unresolved_10.GList;
    }, function (_unresolved_11) {
      GLoader = _unresolved_11.GLoader;
    }, function (_unresolved_12) {
      GLoader3D = _unresolved_12.GLoader3D;
    }, function (_unresolved_13) {
      GMovieClip = _unresolved_13.GMovieClip;
    }, function (_unresolved_14) {
      GProgressBar = _unresolved_14.GProgressBar;
    }, function (_unresolved_15) {
      GRichTextField = _unresolved_15.GRichTextField;
    }, function (_unresolved_16) {
      GScrollBar = _unresolved_16.GScrollBar;
    }, function (_unresolved_17) {
      GSlider = _unresolved_17.GSlider;
    }, function (_unresolved_18) {
      GTextField = _unresolved_18.GTextField;
    }, function (_unresolved_19) {
      GTextInput = _unresolved_19.GTextInput;
    }, function (_unresolved_20) {
      GTree = _unresolved_20.GTree;
    }, function (_unresolved_21) {
      Decls = _unresolved_21.Decls;
      UIPackage = _unresolved_21.UIPackage;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9b663yU265CBpUJ4mjDKi4x", "UIObjectFactory", undefined);

      _export("UIObjectFactory", UIObjectFactory = class UIObjectFactory {
        constructor() {}

        static setExtension(url, type) {
          if (url == null) throw new Error("Invaild url: " + url);
          var pi = (_crd && UIPackage === void 0 ? (_reportPossibleCrUseOfUIPackage({
            error: Error()
          }), UIPackage) : UIPackage).getItemByURL(url);
          if (pi) pi.extensionType = type;
          UIObjectFactory.extensions[url] = type;
        }

        static setLoaderExtension(type) {
          UIObjectFactory.loaderType = type;
        }

        static resolveExtension(pi) {
          var extensionType = UIObjectFactory.extensions["ui://" + pi.owner.id + pi.id];
          if (!extensionType) extensionType = UIObjectFactory.extensions["ui://" + pi.owner.name + "/" + pi.name];
          if (extensionType) pi.extensionType = extensionType;
        }

        static newObject(type, userClass) {
          var obj;
          UIObjectFactory.counter++;

          if (typeof type === 'number') {
            switch (type) {
              case (_crd && ObjectType === void 0 ? (_reportPossibleCrUseOfObjectType({
                error: Error()
              }), ObjectType) : ObjectType).Image:
                return new (_crd && GImage === void 0 ? (_reportPossibleCrUseOfGImage({
                  error: Error()
                }), GImage) : GImage)();

              case (_crd && ObjectType === void 0 ? (_reportPossibleCrUseOfObjectType({
                error: Error()
              }), ObjectType) : ObjectType).MovieClip:
                return new (_crd && GMovieClip === void 0 ? (_reportPossibleCrUseOfGMovieClip({
                  error: Error()
                }), GMovieClip) : GMovieClip)();

              case (_crd && ObjectType === void 0 ? (_reportPossibleCrUseOfObjectType({
                error: Error()
              }), ObjectType) : ObjectType).Component:
                return new (_crd && GComponent === void 0 ? (_reportPossibleCrUseOfGComponent({
                  error: Error()
                }), GComponent) : GComponent)();

              case (_crd && ObjectType === void 0 ? (_reportPossibleCrUseOfObjectType({
                error: Error()
              }), ObjectType) : ObjectType).Text:
                return new (_crd && GTextField === void 0 ? (_reportPossibleCrUseOfGTextField({
                  error: Error()
                }), GTextField) : GTextField)();

              case (_crd && ObjectType === void 0 ? (_reportPossibleCrUseOfObjectType({
                error: Error()
              }), ObjectType) : ObjectType).RichText:
                return new (_crd && GRichTextField === void 0 ? (_reportPossibleCrUseOfGRichTextField({
                  error: Error()
                }), GRichTextField) : GRichTextField)();

              case (_crd && ObjectType === void 0 ? (_reportPossibleCrUseOfObjectType({
                error: Error()
              }), ObjectType) : ObjectType).InputText:
                return new (_crd && GTextInput === void 0 ? (_reportPossibleCrUseOfGTextInput({
                  error: Error()
                }), GTextInput) : GTextInput)();

              case (_crd && ObjectType === void 0 ? (_reportPossibleCrUseOfObjectType({
                error: Error()
              }), ObjectType) : ObjectType).Group:
                return new (_crd && GGroup === void 0 ? (_reportPossibleCrUseOfGGroup({
                  error: Error()
                }), GGroup) : GGroup)();

              case (_crd && ObjectType === void 0 ? (_reportPossibleCrUseOfObjectType({
                error: Error()
              }), ObjectType) : ObjectType).List:
                return new (_crd && GList === void 0 ? (_reportPossibleCrUseOfGList({
                  error: Error()
                }), GList) : GList)();

              case (_crd && ObjectType === void 0 ? (_reportPossibleCrUseOfObjectType({
                error: Error()
              }), ObjectType) : ObjectType).Graph:
                return new (_crd && GGraph === void 0 ? (_reportPossibleCrUseOfGGraph({
                  error: Error()
                }), GGraph) : GGraph)();

              case (_crd && ObjectType === void 0 ? (_reportPossibleCrUseOfObjectType({
                error: Error()
              }), ObjectType) : ObjectType).Loader:
                if (UIObjectFactory.loaderType) return new UIObjectFactory.loaderType();else return new (_crd && GLoader === void 0 ? (_reportPossibleCrUseOfGLoader({
                  error: Error()
                }), GLoader) : GLoader)();

              case (_crd && ObjectType === void 0 ? (_reportPossibleCrUseOfObjectType({
                error: Error()
              }), ObjectType) : ObjectType).Button:
                return new (_crd && GButton === void 0 ? (_reportPossibleCrUseOfGButton({
                  error: Error()
                }), GButton) : GButton)();

              case (_crd && ObjectType === void 0 ? (_reportPossibleCrUseOfObjectType({
                error: Error()
              }), ObjectType) : ObjectType).Label:
                return new (_crd && GLabel === void 0 ? (_reportPossibleCrUseOfGLabel({
                  error: Error()
                }), GLabel) : GLabel)();

              case (_crd && ObjectType === void 0 ? (_reportPossibleCrUseOfObjectType({
                error: Error()
              }), ObjectType) : ObjectType).ProgressBar:
                return new (_crd && GProgressBar === void 0 ? (_reportPossibleCrUseOfGProgressBar({
                  error: Error()
                }), GProgressBar) : GProgressBar)();

              case (_crd && ObjectType === void 0 ? (_reportPossibleCrUseOfObjectType({
                error: Error()
              }), ObjectType) : ObjectType).Slider:
                return new (_crd && GSlider === void 0 ? (_reportPossibleCrUseOfGSlider({
                  error: Error()
                }), GSlider) : GSlider)();

              case (_crd && ObjectType === void 0 ? (_reportPossibleCrUseOfObjectType({
                error: Error()
              }), ObjectType) : ObjectType).ScrollBar:
                return new (_crd && GScrollBar === void 0 ? (_reportPossibleCrUseOfGScrollBar({
                  error: Error()
                }), GScrollBar) : GScrollBar)();

              case (_crd && ObjectType === void 0 ? (_reportPossibleCrUseOfObjectType({
                error: Error()
              }), ObjectType) : ObjectType).ComboBox:
                return new (_crd && GComboBox === void 0 ? (_reportPossibleCrUseOfGComboBox({
                  error: Error()
                }), GComboBox) : GComboBox)();

              case (_crd && ObjectType === void 0 ? (_reportPossibleCrUseOfObjectType({
                error: Error()
              }), ObjectType) : ObjectType).Tree:
                return new (_crd && GTree === void 0 ? (_reportPossibleCrUseOfGTree({
                  error: Error()
                }), GTree) : GTree)();

              case (_crd && ObjectType === void 0 ? (_reportPossibleCrUseOfObjectType({
                error: Error()
              }), ObjectType) : ObjectType).Loader3D:
                return new (_crd && GLoader3D === void 0 ? (_reportPossibleCrUseOfGLoader3D({
                  error: Error()
                }), GLoader3D) : GLoader3D)();

              default:
                return null;
            }
          } else {
            if (type.type == (_crd && PackageItemType === void 0 ? (_reportPossibleCrUseOfPackageItemType({
              error: Error()
            }), PackageItemType) : PackageItemType).Component) {
              if (userClass) obj = new userClass();else if (type.extensionType) obj = new type.extensionType();else obj = UIObjectFactory.newObject(type.objectType);
            } else obj = UIObjectFactory.newObject(type.objectType);

            if (obj) obj.packageItem = type;
          }

          return obj;
        }

      });

      UIObjectFactory.counter = 0;
      UIObjectFactory.extensions = {};
      UIObjectFactory.loaderType = void 0;
      (_crd && Decls === void 0 ? (_reportPossibleCrUseOfDecls({
        error: Error()
      }), Decls) : Decls).UIObjectFactory = UIObjectFactory;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=329a43bbd4c296bfc2488f56cec4eaed3723c444.js.map