import { _decorator, Component, sys } from "cc";
import { GameManager, GameState } from "./GameManager";
const { ccclass } = _decorator;

@ccclass("ScoreManager")
export class ScoreManager extends Component {
  public static instance: ScoreManager;
  private static readonly HIGH_SCORE_KEY = "HIGH_SCORE";

  private _score = 0;
  private _highScore = 0;
  private scoreListeners = new Set<(score: number) => void>();

  get score() {
    return this._score;
  }

  get highScore() {
    return this._highScore;
  }

  onLoad() {
    ScoreManager.instance = this;
    this._highScore = Number(
      sys.localStorage.getItem(ScoreManager.HIGH_SCORE_KEY) ?? 0,
    );
  }

  addScore(points: number) {
    if (GameManager.instance.currentState !== GameState.Playing) return;
    this._score += points;
    this.emitScoreChanged();
  }

  resetScore() {
    this._score = 0;
    this.emitScoreChanged();
  }

  checkForHighScore() {
    if (this._score > this._highScore) {
      this._highScore = this._score;
      sys.localStorage.setItem(
        ScoreManager.HIGH_SCORE_KEY,
        String(this._highScore),
      );
    }
  }

  getScore() {
    return this._score;
  }

  getHighScore() {
    return this._highScore;
  }

  onScoreChanged(listener: (score: number) => void) {
    this.scoreListeners.add(listener);
  }

  offScoreChanged(listener: (score: number) => void) {
    this.scoreListeners.delete(listener);
  }

  private emitScoreChanged() {
    this.scoreListeners.forEach((listener) => listener(this._score));
  }
}
