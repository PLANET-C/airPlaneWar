import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("BackgroundMoving")
export class BackgroundMoving extends Component {
  @property(Node)
  public plane1: Node = null;

  @property(Node)
  public plane2: Node = null;

  private _bgMvSpeed = 5;

  private _bgMvUpperLimit = 19.8;

  start() {
    this._init;
  }

  update(deltaTime: number) {
    this._doBgMv(deltaTime);
  }

  private _doBgMv(deltaTime: number) {
    this.plane1.setPosition(
      0,
      0,
      this.plane1.position.z + this._bgMvSpeed * deltaTime
    );
    this.plane2.setPosition(
      0,
      0,
      this.plane2.position.z + this._bgMvSpeed * deltaTime
    );
    if (this.plane1.position.z >= this._bgMvUpperLimit) {
      this.plane1.setPosition(0, 0, -this._bgMvUpperLimit);
    } else if (this.plane2.position.z >= this._bgMvUpperLimit) {
      this.plane2.setPosition(0, 0, -this._bgMvUpperLimit);
    }
  }

  private _init() {
    this.plane1.setPosition(0, 0, 0);
    this.plane2.setPosition(0, 0, -this._bgMvUpperLimit);
  }
}
