import {
  _decorator,
  Component,
  Prefab,
  instantiate,
  Vec3,
  view,
  Node,
} from "cc";
import { Potion } from "./Potion";
import { GameManager, GameState } from "./Managers/GameManager";
const { ccclass, property } = _decorator;

@ccclass("WeightedPotionType")
export class WeightedPotionType {
  @property(Prefab)
  prefab: Prefab | null = null;

  @property
  spawnPercentage = 0;

  pool: Potion[] = [];
}

@ccclass("PotionSpawner")
export class PotionSpawner extends Component {
  @property([WeightedPotionType])
  weightedTypes: WeightedPotionType[] = [];

  @property
  poolSizePerType = 10;

  @property
  spawnMinInterval = 1;

  @property
  spawnMaxInterval = 2;

  @property
  speedIncreaseInterval = 10;

  @property
  speedIncreaseAmount = 0.5;

  @property(Node)
  canvasNode: Node = null;

  private laneX = [0, 0, 0];
  private timer = 0;
  private nextSpawnTime = 1;
  private currentSpeedBonus = 0;
  private initialized = false;
  private speedTimer = 0;

  update(dt: number) {
    if (GameManager.instance.currentState !== GameState.Playing) return;

    this.timer += dt;
    this.speedTimer += dt;

    if (this.timer >= this.nextSpawnTime) {
      this.spawnPotion();
      this.timer = 0;
      this.nextSpawnTime = this.randomRange(
        this.spawnMinInterval,
        this.spawnMaxInterval,
      );
    }

    if (this.speedTimer >= this.speedIncreaseInterval) {
      this.speedTimer = 0;
      this.currentSpeedBonus = Math.min(
        this.currentSpeedBonus + this.speedIncreaseAmount,
        4,
      );
      this.applySpeedBonusToActive();
    }
  }

  initializeSpawner() {
    this.nextSpawnTime = this.randomRange(
      this.spawnMinInterval,
      this.spawnMaxInterval,
    );
    if (!this.initialized) {
      this.calculateLanePositions();
      this.createPools();
      this.initialized = true;
    }
    this.timer = 0;
    this.speedTimer = 0;
    this.currentSpeedBonus = 0;
  }

  resetSpawner() {
    this.timer = 0;
    for (const type of this.weightedTypes) {
      for (const potion of type.pool) {
        potion.node.active = false;
      }
    }
  }

  returnToPool(potion: Potion) {
    potion.node.active = false;
  }

  private createPools() {
    for (const type of this.weightedTypes) {
      type.pool = [];
      for (let i = 0; i < this.poolSizePerType; i += 1) {
        if (!type.prefab) continue;
        const node = instantiate(type.prefab);
        this.canvasNode.addChild(node);
        const potion = node.getComponent(Potion);
        if (!potion) continue;
        potion.initialize(this);
        node.active = false;
        type.pool.push(potion);
      }
    }
  }

  private spawnPotion() {
    const selected = this.getWeightedPotionType();
    if (!selected) return;

    const potion = selected.pool.find((p) => !p.node.active);
    if (!potion) return;

    const lane = Math.floor(Math.random() * 3);
    potion.node.setPosition(new Vec3(this.laneX[lane], this.getSpawnY(), 0));
    potion.setSpeedBonus(this.currentSpeedBonus);
    potion.node.active = true;
  }

  private getWeightedPotionType() {
    const totalWeight = this.weightedTypes.reduce(
      (s, t) => s + t.spawnPercentage,
      0,
    );
    if (totalWeight <= 0) return null;
    const r = Math.random() * totalWeight;
    let current = 0;
    for (const type of this.weightedTypes) {
      current += type.spawnPercentage;
      if (r < current) return type;
    }
    return null;
  }

  private applySpeedBonusToActive() {
    for (const type of this.weightedTypes) {
      for (const p of type.pool) {
        if (p.node.active) p.setSpeedBonus(this.currentSpeedBonus);
      }
    }
  }

  private calculateLanePositions() {
    const width = view.getVisibleSize().width;
    this.laneX[0] = -width * 0.3;
    this.laneX[1] = 0;
    this.laneX[2] = width * 0.3;
  }

  private getSpawnY() {
    return view.getVisibleSize().height * 0.6;
  }

  private randomRange(min: number, max: number) {
    return min + Math.random() * (max - min);
  }
}
