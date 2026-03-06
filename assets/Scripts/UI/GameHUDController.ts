import * as fgui from "../../Plugins/FairyGUI/fairygui.mjs";
import { SFXType } from "../Audio/AudioEnums";
import { SFXManager } from "../Audio/SFXManager";
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
  private scoreText: fgui.GTextField;
  private countDownText: fgui.GTextField;
  private miss1: fgui.GLoader;
  private miss2: fgui.GLoader;
  private miss3: fgui.GLoader;

  constructor(
    packageName: string,
    private readonly game: GameActions,
    private readonly ui: UIActions,
    private readonly audio: AudioActions,
    private readonly scores: ScoreActions,
    private readonly misses: MissActions,
  ) {
    super(fgui.UIPackage.createObject(packageName, "GameHUDPanel").asCom);

    const pauseButton = this.view.getChild("PauseButton") as fgui.GButton;
    const inputButton = this.view.getChild("InputButton") as fgui.GButton;
    this.scoreText = this.view.getChild("ScoreText") as fgui.GTextField;
    this.countDownText = this.view.getChild("CountDownText") as fgui.GTextField;

    const missedItems = this.view.getChild("MissedItems").asCom;
    this.miss1 = missedItems.getChild("1") as fgui.GLoader;
    this.miss2 = missedItems.getChild("2") as fgui.GLoader;
    this.miss3 = missedItems.getChild("3") as fgui.GLoader;

    this.countDownText.visible = false;

    pauseButton.onClick(this.onPauseClicked, this);
    inputButton.onClick(this.onInputClicked, this);
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
    console.log("Countdown started");
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
    this.miss1.url = "ui://FGUI_Tutorial/BlueX";
    this.miss2.url = "ui://FGUI_Tutorial/BlueX";
    this.miss3.url = "ui://FGUI_Tutorial/BlueX";
  }

  private onPauseClicked() {
    this.audio.playButtonClick();
    this.game.pauseGame();
    SFXManager.instance.play(SFXType.ButtonClick);
  }

  private onInputClicked() {
    this.game.onScreenClicked();
  }

  private updateScore = (score: number) => {
    this.scoreText.text = String(score);
  };

  private updateMissUI = (currentMisses: number) => {
    this.resetMissUI();
    if (currentMisses >= 1) this.miss3.url = "ui://FGUI_Tutorial/RedX";
    if (currentMisses >= 2) this.miss2.url = "ui://FGUI_Tutorial/RedX";
    if (currentMisses >= 3) this.miss1.url = "ui://FGUI_Tutorial/RedX";
  };

  private delay(ms: number) {
    return new Promise<void>((resolve) => setTimeout(resolve, ms));
  }
}
