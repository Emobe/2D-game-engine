// @flow
import {Sprite as PixiSprite, utils} from "pixi.js";
import Component from "../Component";

class Sprite extends Component {
  path: string;

  sprite: any;

  constructor(path: string) {
    super();
    this.path = path;
  }

  loadContent(loader: any) {
    loader.add(this.path);
  }

  onLoaded(stage: any) {
    console.log('sdfsd');
    this.sprite = new PixiSprite(utils.TextureCache[this.path]);
    stage.addChild(this.sprite);
  }

  update() {
    if (this.sprite) {
      this.sprite.x = this.Owner.X;
      this.sprite.y = this.Owner.Y;
    }
  }

  get Sprite(): any {
    return this.sprite;
  }

  set Sprite(sprite: any) {
    this.sprite = sprite;
  }
}

export default Sprite;
