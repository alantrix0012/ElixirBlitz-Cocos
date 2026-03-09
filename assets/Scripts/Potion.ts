import {
  _decorator,
  Component,
  view,
  UITransform,
  Collider2D,
  Contact2DType,
  IPhysics2DContact,
  Enum,
} from "cc";
import { PotionSpawner } from "./PotionSpawner";
import { PotMovement } from "./PotMovement";
import { GameManager, GameState } from "./Managers/GameManager";
const { ccclass, property } = _decorator;

export enum PotionType {
  Potion1,
  Potion2,
  Poison,
}

@ccclass("Potion")
export class Potion extends Component {
  @property
  baseSpeed = 5;

  @property
  score = 1;

  @property({ type: Enum(PotionType) })
  potionType: PotionType = PotionType.Potion1;

  private _spawner: PotionSpawner | null = null;
  private _fallSpeed = 5;

  onLoad() {
    this._fallSpeed = this.baseSpeed;
    const collider = this.getComponent(Collider2D);
    collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
  }

  initialize(owner: PotionSpawner) {
    this._spawner = owner;
  }

  update(deltaTime: number) {
    if (GameManager.instance.currentState !== GameState.Playing) return;

    const p = this.node.position;
    this.node.setPosition(p.x, p.y - this._fallSpeed * deltaTime, p.z);

    if (this.isBelowScreen()) {
      this.onMissed();
      this.returnToPool();
    }
  }

  setSpeedBonus(bonus: number) {
    this._fallSpeed = this.baseSpeed + bonus;
  }

  returnToPool() {
    this._spawner?.returnToPool(this);
  }

  protected onMissed() {
    if (this.potionType !== PotionType.Poison) {
      GameManager.instance.registerMiss();
    }
  }

  protected onCollected() {
    GameManager.instance.onPotionCollected(this);
  }

  private isBelowScreen() {
    const h = view.getVisibleSize().height;
    const ui = this.node.parent?.getComponent(UITransform);
    const world = this.node.worldPosition;
    const local = ui ? ui.convertToNodeSpaceAR(world) : this.node.position;
    return local.y < -h * 0.6;
  }

  private onBeginContact(
    _self: Collider2D,
    other: Collider2D,
    _contact: IPhysics2DContact | null,
  ) {
    console.log(`Potion ${this.node.name} collided with ${other.node.name}`);
    if (other.getComponent(PotMovement)) {
      this.onCollected();
    }
  }
}
