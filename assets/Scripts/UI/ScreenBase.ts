import * as fgui from "../../Plugins/FairyGUI/fairygui.mjs";

export abstract class ScreenBase {
  protected view: fgui.GComponent;
  protected popup: fgui.GComponent | null = null;

  constructor(view: fgui.GComponent) {
    this.view = view;
    this.view.makeFullScreen();
    this.view.visible = false;
    fgui.GRoot.inst.addChild(this.view);
  }

  show() {
    this.view.visible = true;
    this.onShow();
  }

  hide() {
    this.onHide();
    this.view.visible = false;
  }

  protected onShow() {}
  protected onHide() {}

  protected playTransition(name: string, onComplete?: () => void) {
    const transition = this.view.getTransition(name);
    if (!transition) {
      onComplete?.();
      return;
    }

    if (onComplete) {
      transition.play(onComplete);
      return;
    }

    transition.play();
  }
}
