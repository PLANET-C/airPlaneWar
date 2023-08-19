import { _decorator, Component, Material, MeshRenderer, Node } from "cc";
const { ccclass, property, executeInEditMode, menu, requireComponent } =
  _decorator;

@ccclass("gameManager")
@executeInEditMode(true)
@requireComponent(MeshRenderer)
@menu("自定义脚本/gameManager")
export class gameManager extends Component {
  @property
  public a = 1;

  @property
  public b = 2;

  @property(Material)
  public c: Material = null;

  private _init = false;

  protected onLoad(): void {
    console.log("onLoad");
  }
  onEnable() {
    console.log("onEnable");
  }

  start() {
    console.log("start");
  }

  update() {
    if (this._init === false) {
      console.log("update");
    }
  }
  lateUpdate() {
    if (this._init === false) {
      console.log("lateUpdate");
      this._init = true;
    }
  }
  onDisable() {
    console.log("onDisable");
    this._init = false;
  }

  onDestroy() {
    console.log("onDestroy");
  }
}
