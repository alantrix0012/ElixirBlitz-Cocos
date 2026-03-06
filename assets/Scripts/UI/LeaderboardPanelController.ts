import * as fgui from "../../Plugins/FairyGUI/fairygui.mjs";
import { Color } from "cc";
import { ScreenBase } from "./ScreenBase";
import { AudioActions, ScoreActions, UIActions } from "./UIContracts";
import { UIPanelType } from "./UIPanelType";
import { SFXManager } from "../Audio/SFXManager";
import { SFXType } from "../Audio/AudioEnums";

interface LeaderboardEntry {
  playerName: string;
  score: number;
}

export class LeaderboardPanelController extends ScreenBase {
  private leaderboardList: fgui.GList;
  private entries: LeaderboardEntry[] = [];

  constructor(
    packageName: string,
    private readonly ui: UIActions,
    private readonly audio: AudioActions,
    private readonly scores: ScoreActions,
  ) {
    super(fgui.UIPackage.createObject(packageName, "LeaderboardPanel").asCom);
    this.popup = this.view.getChild("LeaderboardPopup").asCom;

    const backBtn = this.popup.getChild("BackButton") as fgui.GButton;
    backBtn.onClick(this.onBackClicked, this);

    this.leaderboardList = this.popup.getChild("LeaderboardList") as fgui.GList;
    this.leaderboardList.itemRenderer = this.renderItem.bind(this);
  }

  override hide() {
    this.playTransition("Hide", () => {
      this.view.visible = false;
    });
  }

  protected onShow() {
    this.showLeaderboard();
    this.playTransition("Show");
  }

  private onBackClicked() {
    this.ui.show(UIPanelType.MainMenuPanel);
    this.audio.playButtonClick();
    SFXManager.instance.play(SFXType.ButtonClick);
  }

  private showLeaderboard() {
    this.generateDummyData();
    this.entries.sort((a, b) => b.score - a.score);
    this.leaderboardList.numItems = this.entries.length;
  }

  private generateDummyData() {
    this.entries = [
      { playerName: "John", score: 45 },
      { playerName: "Sarah", score: 62 },
      { playerName: "Mike", score: 52 },
      { playerName: "Emma", score: 30 },
      { playerName: "Alex", score: 70 },
      { playerName: "Amelia", score: 15 },
      { playerName: "Cooper", score: 49 },
      { playerName: "You", score: this.scores.getHighScore() },
      { playerName: "Slick", score: 7 },
      { playerName: "Luna", score: 55 },
      { playerName: "Charlie", score: 40 },
      { playerName: "Olivia", score: 60 },
    ];
  }

  private renderItem(index: number, obj: fgui.GObject) {
    const item = obj.asCom;
    const entry = this.entries[index];

    (item.getChild("Rank") as fgui.GTextField).text = String(index + 1);
    (item.getChild("Name") as fgui.GTextField).text = entry.playerName;
    (item.getChild("Score") as fgui.GTextField).text = String(entry.score);

    this.highlightTopThree(item, index);

    if (entry.playerName === "You") {
      (item.getChild("BG") as fgui.GImage).color = new Color(0, 200, 0, 255);
    }
  }

  private highlightTopThree(item: fgui.GComponent, index: number) {
    const bg = item.getChild("BG") as fgui.GImage;
    if (!bg) return;

    if (index === 0) bg.color = new Color(204, 128, 51, 255);
    else if (index === 1) bg.color = new Color(255, 255, 0, 255);
    else if (index === 2) bg.color = new Color(128, 128, 128, 255);
    else bg.color = new Color(255, 255, 255, 255);
  }
}
