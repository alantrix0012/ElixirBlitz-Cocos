import {
  _decorator,
  Component,
  EventMouse,
  Input,
  input,
  Vec3,
  view,
} from "cc";
import { GameManager, GameState } from "./Managers/GameManager";
const { ccclass, property } = _decorator;

@ccclass("PotMovement")
export class PotMovement extends Component {
  @property
  moveSpeed = 10;

  private positions: Vec3[] = [];
  private currentIndex = 1;

  start() {
    this.calculatePositions();
    this.node.setPosition(this.positions[this.currentIndex]);
    input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
  }

  update(dt: number) {
    if (GameManager.instance.currentState !== GameState.Playing) return;

    const current = this.node.position;
    const target = this.positions[this.currentIndex];
    const t = Math.min(1, this.moveSpeed * dt);
    this.node.setPosition(
      current.x + (target.x - current.x) * t,
      current.y + (target.y - current.y) * t,
      current.z,
    );
  }

  onMouseDown(event: EventMouse) {
    if (event.getButton() === EventMouse.BUTTON_LEFT) {
      this.handleInput();
    }
  }

  handleInput() {
    this.currentIndex = (this.currentIndex + 1) % this.positions.length;
  }

  resetPot() {
    this.currentIndex = 0;
    this.node.setPosition(this.positions[this.currentIndex]);
  }

  private calculatePositions() {
    const width = view.getVisibleSize().width;
    const height = view.getVisibleSize().height;
    const y = -height * 0.35;

    this.positions = [
      new Vec3(-width * 0.3, y, 0),
      new Vec3(0, y, 0),
      new Vec3(width * 0.3, y, 0),
    ];
  }
}
