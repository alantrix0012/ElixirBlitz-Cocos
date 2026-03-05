System.register(["cc", "fairygui-cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, fgui, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3, _crd, ccclass, property, UIManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_fairyguiCc) {
      fgui = _fairyguiCc;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f0551I4SaNMmYkryKp0WIqz", "UIManager", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      // import { GameManager } from '../scripts/GameManager';
      // import { ScoreManager } from '../scripts/ScoreManager';
      // import { GameHUDController } from './GameHUDController';
      // import { GameOverController } from './GameOverController';
      // import { LeaderboardPanelController } from './LeaderboardPanelController';
      // import { MainMenuController } from './MainMenuController';
      // import { PausePanelController } from './PausePanelController';
      // import { ScreenBase } from './ScreenBase';
      // import { SettingsController } from './SettingsController';
      // import { AudioActions, GameActions, MissActions, ScoreActions, UIActions, VolumeActions } from './contracts';
      // import { UIPanelType } from './UIPanelType';
      // import { NullAudioBridge, NullVolumeBridge } from './bridges';
      ({
        ccclass,
        property
      } = _decorator);

      _export("UIManager", UIManager = (_dec = ccclass("UIManager"), _dec2 = property(GameManager), _dec3 = property(ScoreManager), _dec(_class = (_class2 = (_class3 = class UIManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "packageAssetPath", _descriptor, this);

          _initializerDefineProperty(this, "packageName", _descriptor2, this);

          _initializerDefineProperty(this, "gameManager", _descriptor3, this);

          _initializerDefineProperty(this, "scoreManager", _descriptor4, this);

          this.screens = new Map();
          this.currentScreen = null;
          this.audio = new NullAudioBridge();
          this.volumes = new NullVolumeBridge();
        }

        onLoad() {
          UIManager.instance = this;
          fgui.UIPackage.addPackage(this.packageAssetPath);
          fgui.GRoot.inst.setContentScaleFactor(1920, 1080, fgui.UIContentScaler.SCREEN_MATCH_MODE_MATCH_HEIGHT);
          this.registerScreens();
          this.show(UIPanelType.MainMenuPanel);
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
          this.screens.set(UIPanelType.MainMenuPanel, new MainMenuController(this.packageName, gameActions, this, this.audio));
          this.screens.set(UIPanelType.SettingsPanel, new SettingsController(this.packageName, this, this.audio, this.volumes));
          this.screens.set(UIPanelType.LeaderboardPanel, new LeaderboardPanelController(this.packageName, this, this.audio, scoreActions));
          this.screens.set(UIPanelType.GameHUDPanel, new GameHUDController(this.packageName, gameActions, this, this.audio, scoreActions, missActions));
          this.screens.set(UIPanelType.PausePanel, new PausePanelController(this.packageName, gameActions, this.audio));
          this.screens.set(UIPanelType.GameOverPanel, new GameOverController(this.packageName, gameActions, this.audio, scoreActions));
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
//# sourceMappingURL=bfbbefd100c5fcab0eb21c20797e7c8343187333.js.map