import * as fgui from "../../Plugins/FairyGUI/fairygui.mjs";
import { ScreenBase } from "./ScreenBase";
import { AudioActions, GameActions, UIActions } from "./UIContracts";
import { UIPanelType } from "./UIPanelType";

export class MainMenuController extends ScreenBase {
  constructor(
    packageName: string,
    private readonly game: GameActions,
    private readonly ui: UIActions,
    private readonly audio: AudioActions,
  ) {
    super(fgui.UIPackage.createObject(packageName, "MainMenuPanel").asCom);
    this.init();
  }

  private init() {
    const playBtn = this.view.getChild("PlayButton") as fgui.GButton;
    const settingsBtn = this.view.getChild("SettingsButton") as fgui.GButton;
    const leaderboardBtn = this.view.getChild(
      "LeaderboardButton",
    ) as fgui.GButton;

    playBtn.onClick(this.onPlayClicked, this);
    settingsBtn.onClick(this.onSettingsClicked, this);
    leaderboardBtn.onClick(this.onLeaderboardClicked, this);
  }

  private onPlayClicked() {
    this.game.startGame();
    this.audio.playButtonClick();
  }

  private onSettingsClicked() {
    this.ui.show(UIPanelType.SettingsPanel);
    this.audio.playButtonClick();
  }

  private onLeaderboardClicked() {
    this.ui.show(UIPanelType.LeaderboardPanel);
    this.audio.playButtonClick();
  }
}
