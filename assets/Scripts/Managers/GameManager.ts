import { _decorator, Component } from "cc";
import { Potion, PotionType } from "../Potion";
import { PotionSpawner } from "../PotionSpawner";
import { PotMovement } from "../PotMovement";
import { ScoreManager } from "./ScoreManager";
import { MusicManager } from "../Audio/MusicManager";
import { MusicType } from "../Audio/AudioEnums";

const { ccclass, property } = _decorator;

export enum GameState {
  MainMenu,
  Playing,
  Paused,
  GameOver,
}

@ccclass("GameManager")
export class GameManager extends Component {
  public static instance: GameManager;

  @property(PotionSpawner)
  spawner: PotionSpawner | null = null;

  @property(PotMovement)
  pot: PotMovement | null = null;

  @property
  maxMisses = 3;

  private _currentState: GameState = GameState.MainMenu;
  private _currentMisses = 0;
  private missListeners = new Set<(misses: number) => void>();
  private stateListeners = new Set<(state: GameState) => void>();

  get currentState() {
    return this._currentState;
  }

  onLoad() {
    GameManager.instance = this;
  }

  start() {
    this.setState(GameState.MainMenu);
    MusicManager.instance.playMusic(MusicType.Home);
  }

  startGame() {
    this._currentMisses = 0;
    this.emitMissChanged();
    ScoreManager.instance.resetScore();
    this.spawner?.initializeSpawner();
    this.pot?.resetPot();
    this.setState(GameState.Playing);
    MusicManager.instance.playMusic(MusicType.Game);
  }

  onScreenClicked() {
    if (this._currentState !== GameState.Playing) return;
    this.pot?.handleInput();
  }

  registerMiss() {
    if (this._currentState !== GameState.Playing) return;
    this._currentMisses += 1;
    this.emitMissChanged();
    if (this._currentMisses >= this.maxMisses) {
      this.gameOver();
    }
  }

  onPotionCollected(potion: Potion) {
    if (this._currentState !== GameState.Playing) return;

    if (potion.potionType === PotionType.Poison) {
      this.gameOver();
    } else {
      ScoreManager.instance.addScore(potion.score);
    }

    potion.returnToPool();
  }

  pauseGame() {
    if (this._currentState !== GameState.Playing) return;
    this.setState(GameState.Paused);
  }

  resumeGame() {
    if (this._currentState !== GameState.Paused) return;
    this.setState(GameState.Playing);
  }

  goToHome() {
    this.spawner?.resetSpawner();
    this.pot?.resetPot();
    ScoreManager.instance.resetScore();
    this._currentMisses = 0;
    this.emitMissChanged();
    this.setState(GameState.MainMenu);
    MusicManager.instance.playMusic(MusicType.Home);
  }

  gameOver() {
    if (this._currentState !== GameState.Playing) return;
    ScoreManager.instance.checkForHighScore();
    this.setState(GameState.GameOver);
    MusicManager.instance.playMusic(MusicType.GameOver);
  }

  retryGame() {
    this.spawner?.resetSpawner();
    this.pot?.resetPot();
    ScoreManager.instance.resetScore();
    this.startGame();
  }

  getCurrentMisses() {
    return this._currentMisses;
  }

  onMissChanged(listener: (misses: number) => void) {
    this.missListeners.add(listener);
  }

  offMissChanged(listener: (misses: number) => void) {
    this.missListeners.delete(listener);
  }

  onStateChanged(listener: (state: GameState) => void) {
    this.stateListeners.add(listener);
  }

  offStateChanged(listener: (state: GameState) => void) {
    this.stateListeners.delete(listener);
  }

  private emitMissChanged() {
    this.missListeners.forEach((listener) => listener(this._currentMisses));
  }

  private setState(state: GameState) {
    this._currentState = state;
    this.stateListeners.forEach((listener) => listener(this._currentState));
  }
}
