System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, fgui, Color, ScreenBase, UIPanelType, LeaderboardPanelController, _crd;

  function _reportPossibleCrUseOfScreenBase(extras) {
    _reporterNs.report("ScreenBase", "./ScreenBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioActions(extras) {
    _reporterNs.report("AudioActions", "./UIContracts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScoreActions(extras) {
    _reporterNs.report("ScoreActions", "./UIContracts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIActions(extras) {
    _reporterNs.report("UIActions", "./UIContracts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPanelType(extras) {
    _reporterNs.report("UIPanelType", "./UIPanelType", _context.meta, extras);
  }

  _export("LeaderboardPanelController", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Color = _cc.Color;
    }, function (_unresolved_2) {
      fgui = _unresolved_2;
    }, function (_unresolved_3) {
      ScreenBase = _unresolved_3.ScreenBase;
    }, function (_unresolved_4) {
      UIPanelType = _unresolved_4.UIPanelType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4594f13JBhG25I+mP+87WRF", "LeaderboardPanelController", undefined);

      __checkObsolete__(['Color']);

      _export("LeaderboardPanelController", LeaderboardPanelController = class LeaderboardPanelController extends (_crd && ScreenBase === void 0 ? (_reportPossibleCrUseOfScreenBase({
        error: Error()
      }), ScreenBase) : ScreenBase) {
        constructor(packageName, ui, audio, scores) {
          super(fgui.UIPackage.createObject(packageName, "LeaderboardPanel").asCom);
          this.leaderboardList = void 0;
          this.entries = [];
          this.ui = ui;
          this.audio = audio;
          this.scores = scores;
          this.popup = this.view.getChild("LeaderboardPopup").asCom;
          var backBtn = this.popup.getChild("BackButton");
          backBtn.onClick(this.onBackClicked, this);
          this.leaderboardList = this.popup.getChild("LeaderboardList");
          this.leaderboardList.itemRenderer = this.renderItem.bind(this);
        }

        hide() {
          this.playTransition("Hide", () => {
            this.view.visible = false;
          });
        }

        onShow() {
          this.showLeaderboard();
          this.playTransition("Show");
        }

        onBackClicked() {
          this.ui.show((_crd && UIPanelType === void 0 ? (_reportPossibleCrUseOfUIPanelType({
            error: Error()
          }), UIPanelType) : UIPanelType).MainMenuPanel);
          this.audio.playButtonClick();
        }

        showLeaderboard() {
          this.generateDummyData();
          this.entries.sort((a, b) => b.score - a.score);
          this.leaderboardList.numItems = this.entries.length;
        }

        generateDummyData() {
          this.entries = [{
            playerName: "John",
            score: 45
          }, {
            playerName: "Sarah",
            score: 62
          }, {
            playerName: "Mike",
            score: 52
          }, {
            playerName: "Emma",
            score: 30
          }, {
            playerName: "Alex",
            score: 70
          }, {
            playerName: "Amelia",
            score: 15
          }, {
            playerName: "Cooper",
            score: 49
          }, {
            playerName: "You",
            score: this.scores.getHighScore()
          }, {
            playerName: "Slick",
            score: 7
          }, {
            playerName: "Luna",
            score: 55
          }, {
            playerName: "Charlie",
            score: 40
          }, {
            playerName: "Olivia",
            score: 60
          }];
        }

        renderItem(index, obj) {
          var item = obj.asCom;
          var entry = this.entries[index];
          item.getChild("Rank").text = String(index + 1);
          item.getChild("Name").text = entry.playerName;
          item.getChild("Score").text = String(entry.score);
          this.highlightTopThree(item, index);

          if (entry.playerName === "You") {
            item.getChild("BG").color = new Color(0, 200, 0, 255);
          }
        }

        highlightTopThree(item, index) {
          var bg = item.getChild("BG");
          if (!bg) return;
          if (index === 0) bg.color = new Color(204, 128, 51, 255);else if (index === 1) bg.color = new Color(255, 255, 0, 255);else if (index === 2) bg.color = new Color(128, 128, 128, 255);else bg.color = new Color(255, 255, 255, 255);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0c129ede1cd36270b375c621d75c28475ec7318c.js.map