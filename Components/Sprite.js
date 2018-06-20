// @flow
import Component from '../Component';
import * as PIXI from 'pixi.js';

class Sprite extends Component {
  path: string;
  sprite: any;

  constructor(path: string) {
    super();
    this.path = path;
    this.sprite = null;
  }

  loadContent(loader, stage) {
    loader.add(this.path).load((loader, resources) => this.loadSprite(loader, resources, stage));
  }

  loadSprite(loader, resources, stage) {
    this.sprite = new PIXI.Sprite(resources[Object.keys(resources)[0]].texture);
    console.log(this.Owner);
    this.sprite.x = this.Owner.X;
    this.sprite.y = this.Owner.Y;
    console.log(this.sprite);
    stage.addChild(this.sprite);
  }

  update(delta: Number) {}

  get Sprite(){
    return this.sprite;
  }

  set Sprite(sprite){
    this.sprite = sprite;
  }

}

export default Sprite;
