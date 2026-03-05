System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, NullAudioBridge, NullVolumeBridge, _crd;

  function _reportPossibleCrUseOfAudioActions(extras) {
    _reporterNs.report("AudioActions", "./UIContracts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVolumeActions(extras) {
    _reporterNs.report("VolumeActions", "./UIContracts", _context.meta, extras);
  }

  _export({
    NullAudioBridge: void 0,
    NullVolumeBridge: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "56cbdCT2YZIU6lbskbpxnfC", "bridges", undefined);

      _export("NullAudioBridge", NullAudioBridge = class NullAudioBridge {
        playButtonClick() {// Intentionally empty: replace with your own audio integration.
        }

      });

      _export("NullVolumeBridge", NullVolumeBridge = class NullVolumeBridge {
        constructor() {
          this.main = 1;
          this.music = 1;
          this.sfx = 1;
        }

        setMainVolume(volume) {
          this.main = volume;
        }

        setMusicVolume(volume) {
          this.music = volume;
        }

        setSfxVolume(volume) {
          this.sfx = volume;
        }

        getMainVolume() {
          return this.main;
        }

        getMusicVolume() {
          return this.music;
        }

        getSfxVolume() {
          return this.sfx;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a72afa340b5fd5a2f61fffb50cf1fc6f8a74bf2d.js.map