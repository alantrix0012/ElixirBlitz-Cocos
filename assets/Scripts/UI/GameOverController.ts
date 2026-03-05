import * as fgui from "../../Plugins/FairyGUI/fairygui.mjs";
import { ScreenBase } from "./ScreenBase";
import { AudioActions, GameActions, ScoreActions } from "./UIContracts";

export class GameOverController extends ScreenBase {
  constructor(
    packageName: string,
    private readonly game: GameActions,
    private readonly audio: AudioActions,
    private readonly scores: ScoreActions,
  ) {
    super(fgui.UIPackage.createObject(packageName, "Game Over Panel").asCom);
    this.init();
  }

  protected onShow() {
    const scoreText = this.view
      .getChild("Scorebox")
      .asCom.getChild("Score") as fgui.GTextField;
    scoreText.text = `SCORE : ${this.scores.getScore()}`;
  }

  private init() {
    const homeBtn = this.view.getChild("HomeButton") as fgui.GButton;
    const retryBtn = this.view.getChild("RetryButton") as fgui.GButton;

    homeBtn.onClick(this.onHomeClicked, this);
    retryBtn.onClick(this.onRetryClicked, this);
  }

  private onHomeClicked() {
    this.game.goToHome();
    this.audio.playButtonClick();
  }

  private onRetryClicked() {
    this.game.retryGame();
    this.audio.playButtonClick();
  }
}
