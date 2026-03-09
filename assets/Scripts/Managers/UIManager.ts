import * as fgui from "../../Plugins/FairyGUI/fairygui.mjs";
import { _decorator, Component, Font, resources, view } from "cc";
import {
  AudioActions,
  GameActions,
  MissActions,
  ScoreActions,
  UIActions,
  VolumeActions,
} from "../UI/UIContracts";
import { GameManager, GameState } from "./GameManager";
import { ScoreManager } from "./ScoreManager";
import { UIPanelType } from "../UI/UIPanelType";
import { ScreenBase } from "../UI/ScreenBase";
import { NullAudioBridge, NullVolumeBridge } from "../UI/bridges";
import { MainMenuController } from "../UI/MainMenuController";
import { SettingsController } from "../UI/SettingsController";
import { LeaderboardPanelController } from "../UI/LeaderboardPanelController";
import { GameHUDController } from "../UI/GameHUDController";
import { PausePanelController } from "../UI/PausePanelController";
import { GameOverController } from "../UI/GameOverController";
import { AudioManager } from "../Audio/AudioManager";

const { ccclass, property } = _decorator;

@ccclass("UIManager")
export class UIManager extends Component implements UIActions {
  public static instance: UIManager;

  @property
  packageAssetPath = "FGUI/FGUI";

  @property
  packageName = "FGUI_Tutorial";

  @property(GameManager)
  gameManager: GameManager | null = null;

  @property(ScoreManager)
  scoreManager: ScoreManager | null = null;

  @property(Font)
  gameFont: Font | null = null;

  private screens = new Map<UIPanelType, ScreenBase>();
  private currentScreen: ScreenBase | null = null;

  private audio: AudioActions = new NullAudioBridge();
  private volumes: VolumeActions = new NullVolumeBridge();

  onLoad() {
    UIManager.instance = this;

    this.ensureGRoot();

    const visibleSize = view.getVisibleSize();
    fgui.GRoot.inst.setSize(visibleSize.width, visibleSize.height);

    if (this.gameFont) {
      fgui.registerFont("GameFont", this.gameFont);
    }

    this.loadUIPackage();
  }

  start() {
    this.setVolumeBridge(AudioManager.instance);
  }

  private loadUIPackage() {
    fgui.UIPackage.loadPackage(this.packageAssetPath, (err?: string) => {
      if (err) {
        console.error(
          `UIManager: failed to load FairyGUI package at '${this.packageAssetPath}': ${err}`,
        );
        console.error(
          "UIManager: Ensure the package is under assets/resources and was published with the 'Cocos Creator' target.",
        );
        return;
      }

      this.onPackageLoaded();
    });
  }

  private onPackageLoaded() {
    this.registerScreens();

    const game = this.requireGame();
    game.onStateChanged(this.onGameStateChanged);
    this.onGameStateChanged(game.currentState);
  }

  private ensureGRoot() {
    if (this.hasGRoot()) {
      return;
    }

    fgui.GRoot.create();
  }

  private hasGRoot() {
    try {
      return !!fgui.GRoot.inst;
    } catch {
      return false;
    }
  }

  onDestroy() {
    this.gameManager?.offStateChanged(this.onGameStateChanged);
  }

  private onGameStateChanged = (state: GameState) => {
    switch (state) {
      case GameState.MainMenu:
        this.show(UIPanelType.MainMenuPanel);
        return;
      case GameState.Playing:
        this.show(UIPanelType.GameHUDPanel);
        return;
      case GameState.Paused:
        this.show(UIPanelType.PausePanel);
        return;
      case GameState.GameOver:
        this.show(UIPanelType.GameOverPanel);
        return;
      default:
        return;
    }
  };

  show(type: UIPanelType): void {
    this.currentScreen?.hide();
    const next = this.screens.get(type);
    if (!next) return;

    this.currentScreen = next;
    this.currentScreen.show();
  }

  setAudioBridge(audio: AudioActions) {
    this.audio = audio;
  }

  setVolumeBridge(volumes: VolumeActions) {
    this.volumes = volumes;
  }

  private registerScreens() {
    const game = this.requireGame();
    const scores = this.requireScores();

    const gameActions: GameActions = {
      startGame: () => game.startGame(),
      pauseGame: () => game.pauseGame(),
      resumeGame: () => game.resumeGame(),
      retryGame: () => game.retryGame(),
      goToHome: () => game.goToHome(),
      onScreenClicked: () => game.onScreenClicked(),
    };

    const scoreActions: ScoreActions = {
      getScore: () => scores.getScore(),
      getHighScore: () => scores.getHighScore(),
      onScoreChanged: (listener) => scores.onScoreChanged(listener),
      offScoreChanged: (listener) => scores.offScoreChanged(listener),
    };

    const missActions: MissActions = {
      getCurrentMisses: () => game.getCurrentMisses(),
      onMissChanged: (listener) => game.onMissChanged(listener),
      offMissChanged: (listener) => game.offMissChanged(listener),
    };

    this.screens.set(
      UIPanelType.MainMenuPanel,
      new MainMenuController(this.packageName, gameActions, this, this.audio),
    );
    this.screens.set(
      UIPanelType.SettingsPanel,
      new SettingsController(this.packageName, this, this.audio, this.volumes),
    );
    this.screens.set(
      UIPanelType.LeaderboardPanel,
      new LeaderboardPanelController(
        this.packageName,
        this,
        this.audio,
        scoreActions,
      ),
    );
    this.screens.set(
      UIPanelType.GameHUDPanel,
      new GameHUDController(
        this.packageName,
        gameActions,
        this,
        this.audio,
        scoreActions,
        missActions,
      ),
    );
    this.screens.set(
      UIPanelType.PausePanel,
      new PausePanelController(this.packageName, gameActions, this.audio),
    );
    this.screens.set(
      UIPanelType.GameOverPanel,
      new GameOverController(
        this.packageName,
        gameActions,
        this.audio,
        scoreActions,
      ),
    );
  }

  private requireGame() {
    if (!this.gameManager) {
      throw new Error("UIManager: gameManager reference is required.");
    }

    return this.gameManager;
  }

  private requireScores() {
    if (!this.scoreManager) {
      throw new Error("UIManager: scoreManager reference is required.");
    }

    return this.scoreManager;
  }
}
