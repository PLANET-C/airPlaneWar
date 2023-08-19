import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("SelfPlane")
export class SelfPlane extends Component {
  start() {
    console.log(1);
  }

  update(deltaTime: number) {}
}
