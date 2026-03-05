import * as fgui from "../../Plugins/FairyGUI/fairygui.mjs";
import { ScreenBase } from "./ScreenBase";
import {
  AudioActions,
  GameActions,
  MissActions,
  ScoreActions,
  UIActions,
} from "./UIContracts";
import { UIPanelType } from "./UIPanelType";

export class GameHUDController extends ScreenBase {
  private scoreText: fgui.GTextField | null = null;
  private countDownText: fgui.GTextField | null = null;
  private miss1: fgui.GLoader | null = null;
  private miss2: fgui.GLoader | null = null;
  private miss3: fgui.GLoader | null = null;

  constructor(
    packageName: string,
    private readonly game: GameActions,
    private readonly audio: AudioActions,
    private readonly scores: ScoreActions,
    private readonly misses: MissActions,
  ) {
    super(fgui.UIPackage.createObject(packageName, "GameHUDPanel").asCom);

    const pauseButton = this.view.getChild("PauseButton")?.asButton;
    const inputButton = this.view.getChild("InputButton")?.asButton;
    this.scoreText = this.view.getChild("ScoreText")?.asTextField ?? null;

    this.countDownText =
      this.view.getChild("CountDownText")?.asTextField ??
      this.view.getChild("CountdownText")?.asTextField ??
      this.view.getChild("Countdown")?.asTextField ??
      null;

    if (!this.scoreText) {
      console.warn("GameHUDController: 'ScoreText' not found in GameHUDPanel.");
    }

    if (!this.countDownText) {
      console.warn(
        "GameHUDController: countdown text not found (expected CountDownText/CountdownText/Countdown).",
      );
    }

    const missedItems = this.view.getChild("MissedItems")?.asCom;
    this.miss1 = missedItems?.getChild("1")?.asLoader ?? null;
    this.miss2 = missedItems?.getChild("2")?.asLoader ?? null;
    this.miss3 = missedItems?.getChild("3")?.asLoader ?? null;

    this.countDownText && (this.countDownText.visible = false);

    pauseButton?.onClick(this.onPauseClicked, this);
    inputButton?.onClick(this.onInputClicked, this);
  }

  protected onShow(): void {
    this.scores.onScoreChanged(this.updateScore);
    this.misses.onMissChanged(this.updateMissUI);

    this.updateScore(this.scores.getScore());
    this.updateMissUI(this.misses.getCurrentMisses());
  }

  protected onHide(): void {
    this.scores.offScoreChanged(this.updateScore);
    this.misses.offMissChanged(this.updateMissUI);
  }

  async playCountdown(onComplete: () => void) {
    if (!this.countDownText) {
      onComplete();
      return;
    }

    this.countDownText.visible = true;
    for (let i = 3; i > 0; i -= 1) {
      this.countDownText.text = String(i);
      await this.delay(1000);
    }

    this.countDownText.text = "GO!";
    await this.delay(500);
    this.countDownText.visible = false;
    onComplete();
  }

  resetMissUI() {
    if (this.miss1) this.miss1.url = "ui://FGUI_Tutorial/BlueX";
    if (this.miss2) this.miss2.url = "ui://FGUI_Tutorial/BlueX";
    if (this.miss3) this.miss3.url = "ui://FGUI_Tutorial/BlueX";
  }

  private onPauseClicked() {
    this.game.pauseGame();
    this.audio.playButtonClick();
  }

  private onInputClicked() {
    this.game.onScreenClicked();
  }

  private updateScore = (score: number) => {
    if (this.scoreText) this.scoreText.text = String(score);
  };

  private updateMissUI = (currentMisses: number) => {
    this.resetMissUI();
    if (currentMisses >= 1 && this.miss3)
      this.miss3.url = "ui://FGUI_Tutorial/RedX";
    if (currentMisses >= 2 && this.miss2)
      this.miss2.url = "ui://FGUI_Tutorial/RedX";
    if (currentMisses >= 3 && this.miss1)
      this.miss1.url = "ui://FGUI_Tutorial/RedX";
  };

  private delay(ms: number) {
    return new Promise<void>((resolve) => setTimeout(resolve, ms));
  }
}
