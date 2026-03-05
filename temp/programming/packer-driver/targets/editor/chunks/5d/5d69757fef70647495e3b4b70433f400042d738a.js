System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, fgui, _decorator, Component, resources, view, GameManager, ScoreManager, UIPanelType, NullAudioBridge, NullVolumeBridge, MainMenuController, SettingsController, LeaderboardPanelController, GameHUDController, PausePanelController, GameOverController, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3, _crd, ccclass, property, UIManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAudioActions(extras) {
    _reporterNs.report("AudioActions", "../UI/UIContracts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameActions(extras) {
    _reporterNs.report("GameActions", "../UI/UIContracts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMissActions(extras) {
    _reporterNs.report("MissActions", "../UI/UIContracts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScoreActions(extras) {
    _reporterNs.report("ScoreActions", "../UI/UIContracts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIActions(extras) {
    _reporterNs.report("UIActions", "../UI/UIContracts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVolumeActions(extras) {
    _reporterNs.report("VolumeActions", "../UI/UIContracts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScoreManager(extras) {
    _reporterNs.report("ScoreManager", "./ScoreManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPanelType(extras) {
    _reporterNs.report("UIPanelType", "../UI/UIPanelType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScreenBase(extras) {
    _reporterNs.report("ScreenBase", "../UI/ScreenBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNullAudioBridge(extras) {
    _reporterNs.report("NullAudioBridge", "../UI/bridges", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNullVolumeBridge(extras) {
    _reporterNs.report("NullVolumeBridge", "../UI/bridges", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMainMenuController(extras) {
    _reporterNs.report("MainMenuController", "../UI/MainMenuController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSettingsController(extras) {
    _reporterNs.report("SettingsController", "../UI/SettingsController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLeaderboardPanelController(extras) {
    _reporterNs.report("LeaderboardPanelController", "../UI/LeaderboardPanelController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameHUDController(extras) {
    _reporterNs.report("GameHUDController", "../UI/GameHUDController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPausePanelController(extras) {
    _reporterNs.report("PausePanelController", "../UI/PausePanelController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameOverController(extras) {
    _reporterNs.report("GameOverController", "../UI/GameOverController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      resources = _cc.resources;
      view = _cc.view;
    }, function (_unresolved_2) {
      fgui = _unresolved_2;
    }, function (_unresolved_3) {
      GameManager = _unresolved_3.GameManager;
    }, function (_unresolved_4) {
      ScoreManager = _unresolved_4.ScoreManager;
    }, function (_unresolved_5) {
      UIPanelType = _unresolved_5.UIPanelType;
    }, function (_unresolved_6) {
      NullAudioBridge = _unresolved_6.NullAudioBridge;
      NullVolumeBridge = _unresolved_6.NullVolumeBridge;
    }, function (_unresolved_7) {
      MainMenuController = _unresolved_7.MainMenuController;
    }, function (_unresolved_8) {
      SettingsController = _unresolved_8.SettingsController;
    }, function (_unresolved_9) {
      LeaderboardPanelController = _unresolved_9.LeaderboardPanelController;
    }, function (_unresolved_10) {
      GameHUDController = _unresolved_10.GameHUDController;
    }, function (_unresolved_11) {
      PausePanelController = _unresolved_11.PausePanelController;
    }, function (_unresolved_12) {
      GameOverController = _unresolved_12.GameOverController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f0551I4SaNMmYkryKp0WIqz", "UIManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'resources', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIManager", UIManager = (_dec = ccclass("UIManager"), _dec2 = property(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
        error: Error()
      }), GameManager) : GameManager), _dec3 = property(_crd && ScoreManager === void 0 ? (_reportPossibleCrUseOfScoreManager({
        error: Error()
      }), ScoreManager) : ScoreManager), _dec(_class = (_class2 = (_class3 = class UIManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "packageAssetPath", _descriptor, this);

          _initializerDefineProperty(this, "packageName", _descriptor2, this);

          _initializerDefineProperty(this, "gameManager", _descriptor3, this);

          _initializerDefineProperty(this, "scoreManager", _descriptor4, this);

          this.screens = new Map();
          this.currentScreen = null;
          this.audio = new (_crd && NullAudioBridge === void 0 ? (_reportPossibleCrUseOfNullAudioBridge({
            error: Error()
          }), NullAudioBridge) : NullAudioBridge)();
          this.volumes = new (_crd && NullVolumeBridge === void 0 ? (_reportPossibleCrUseOfNullVolumeBridge({
            error: Error()
          }), NullVolumeBridge) : NullVolumeBridge)();
        }

        onLoad() {
          UIManager.instance = this;
          this.ensureGRoot();
          const visibleSize = view.getVisibleSize();
          fgui.GRoot.inst.setSize(visibleSize.width, visibleSize.height);
          this.loadUIPackage();
        }

        loadUIPackage() {
          resources.load(this.packageAssetPath, preloadErr => {
            if (preloadErr) {
              console.error(`UIManager: FairyGUI package resource '${this.packageAssetPath}' is missing or not in resources.`, preloadErr);
              return;
            }

            try {
              fgui.UIPackage.addPackage(this.packageAssetPath);
              this.onPackageLoaded();
            } catch (error) {
              console.error(`UIManager: failed to parse FairyGUI package at '${this.packageAssetPath}'. ` + "This usually means the package was not published for Cocos Creator.", error);
              console.error("UIManager: Re-publish the FairyGUI package with 'Cocos Creator' target and replace resources under assets/resources/FGUI.");
            }
          });
        }

        onPackageLoaded(err) {
          if (err) {
            console.error(`UIManager: failed to load FairyGUI package at '${this.packageAssetPath}': ${err}`);
            return;
          }

          this.registerScreens();
          this.show((_crd && UIPanelType === void 0 ? (_reportPossibleCrUseOfUIPanelType({
            error: Error()
          }), UIPanelType) : UIPanelType).MainMenuPanel);
        }

        ensureGRoot() {
          if (this.hasGRoot()) {
            return;
          }

          fgui.GRoot.create();
        }

        hasGRoot() {
          try {
            return !!fgui.GRoot.inst;
          } catch {
            return false;
          }
        }

        show(type) {
          var _this$currentScreen;

          (_this$currentScreen = this.currentScreen) == null ? void 0 : _this$currentScreen.hide();
          const next = this.screens.get(type);
          if (!next) return;
          this.currentScreen = next;
          this.currentScreen.show();
        }

        setAudioBridge(audio) {
          this.audio = audio;
        }

        setVolumeBridge(volumes) {
          this.volumes = volumes;
        }

        registerScreens() {
          const game = this.requireGame();
          const scores = this.requireScores();
          const gameActions = {
            startGame: () => game.startGame(),
            pauseGame: () => game.pauseGame(),
            resumeGame: () => game.resumeGame(),
            retryGame: () => game.retryGame(),
            goToHome: () => game.goToHome(),
            onScreenClicked: () => game.onScreenClicked()
          };
          const scoreActions = {
            getScore: () => scores.getScore(),
            getHighScore: () => scores.getHighScore(),
            onScoreChanged: listener => scores.onScoreChanged(listener),
            offScoreChanged: listener => scores.offScoreChanged(listener)
          };
          const missActions = {
            getCurrentMisses: () => game.getCurrentMisses(),
            onMissChanged: listener => game.onMissChanged(listener),
            offMissChanged: listener => game.offMissChanged(listener)
          };
          this.screens.set((_crd && UIPanelType === void 0 ? (_reportPossibleCrUseOfUIPanelType({
            error: Error()
          }), UIPanelType) : UIPanelType).MainMenuPanel, new (_crd && MainMenuController === void 0 ? (_reportPossibleCrUseOfMainMenuController({
            error: Error()
          }), MainMenuController) : MainMenuController)(this.packageName, gameActions, this, this.audio));
          this.screens.set((_crd && UIPanelType === void 0 ? (_reportPossibleCrUseOfUIPanelType({
            error: Error()
          }), UIPanelType) : UIPanelType).SettingsPanel, new (_crd && SettingsController === void 0 ? (_reportPossibleCrUseOfSettingsController({
            error: Error()
          }), SettingsController) : SettingsController)(this.packageName, this, this.audio, this.volumes));
          this.screens.set((_crd && UIPanelType === void 0 ? (_reportPossibleCrUseOfUIPanelType({
            error: Error()
          }), UIPanelType) : UIPanelType).LeaderboardPanel, new (_crd && LeaderboardPanelController === void 0 ? (_reportPossibleCrUseOfLeaderboardPanelController({
            error: Error()
          }), LeaderboardPanelController) : LeaderboardPanelController)(this.packageName, this, this.audio, scoreActions));
          this.screens.set((_crd && UIPanelType === void 0 ? (_reportPossibleCrUseOfUIPanelType({
            error: Error()
          }), UIPanelType) : UIPanelType).GameHUDPanel, new (_crd && GameHUDController === void 0 ? (_reportPossibleCrUseOfGameHUDController({
            error: Error()
          }), GameHUDController) : GameHUDController)(this.packageName, gameActions, this, this.audio, scoreActions, missActions));
          this.screens.set((_crd && UIPanelType === void 0 ? (_reportPossibleCrUseOfUIPanelType({
            error: Error()
          }), UIPanelType) : UIPanelType).PausePanel, new (_crd && PausePanelController === void 0 ? (_reportPossibleCrUseOfPausePanelController({
            error: Error()
          }), PausePanelController) : PausePanelController)(this.packageName, gameActions, this.audio));
          this.screens.set((_crd && UIPanelType === void 0 ? (_reportPossibleCrUseOfUIPanelType({
            error: Error()
          }), UIPanelType) : UIPanelType).GameOverPanel, new (_crd && GameOverController === void 0 ? (_reportPossibleCrUseOfGameOverController({
            error: Error()
          }), GameOverController) : GameOverController)(this.packageName, gameActions, this.audio, scoreActions));
        }

        requireGame() {
          if (!this.gameManager) {
            throw new Error("UIManager: gameManager reference is required.");
          }

          return this.gameManager;
        }

        requireScores() {
          if (!this.scoreManager) {
            throw new Error("UIManager: scoreManager reference is required.");
          }

          return this.scoreManager;
        }

      }, _class3.instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "packageAssetPath", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "FGUI/FGUI";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "packageName", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "FGUI_Tutorial";
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "gameManager", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "scoreManager", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5d69757fef70647495e3b4b70433f400042d738a.js.map