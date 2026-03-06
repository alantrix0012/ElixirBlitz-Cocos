import * as fgui from "../../Plugins/FairyGUI/fairygui.mjs";
import { SFXType } from "../Audio/AudioEnums";
import { SFXManager } from "../Audio/SFXManager";
import { ScreenBase } from "./ScreenBase";
import { AudioActions, GameActions } from "./UIContracts";

export class PausePanelController extends ScreenBase {
  constructor(
    packageName: string,
    private readonly game: GameActions,
    private readonly audio: AudioActions,
  ) {
    super(fgui.UIPackage.createObject(packageName, "Pause Panel").asCom);
    this.popup = this.view.getChild("PausePopup").asCom;
    this.init();
  }

  override hide() {
    this.playTransition("Hide", () => {
      this.view.visible = false;
    });
  }

  protected onShow() {
    this.playTransition("Show");
  }

  private init() {
    const playButton = this.popup!.getChild("PlayButton") as fgui.GButton;
    const homeButton = this.popup!.getChild("HomeButton") as fgui.GButton;
    const retryButton = this.popup!.getChild("RetryButton") as fgui.GButton;

    playButton.onClick(this.onPlayClicked, this);
    homeButton.onClick(this.onHomeClicked, this);
    retryButton.onClick(this.onRetryClicked, this);
  }

  private onPlayClicked() {
    this.game.resumeGame();
    this.audio.playButtonClick();
    SFXManager.instance.play(SFXType.ButtonClick);
  }

  private onHomeClicked() {
    this.game.goToHome();
    this.audio.playButtonClick();
    SFXManager.instance.play(SFXType.ButtonClick);
  }

  private onRetryClicked() {
    this.game.retryGame();
    this.audio.playButtonClick();
    SFXManager.instance.play(SFXType.ButtonClick);
  }
}
