// @flow
import Component from '../Component';
import * as PIXI from 'pixi.js';

class Sprite extends Component {
  path: string;
  sprite: any;

  constructor(path: string) {
    super();
    this.path = path;
  }

  loadContent(loader: any, stage: any) {
    loader.add(this.path);//.load((loader, resources) => this.loadSprite(loader, resources, stage));
  }

  loadSprite(loader: any, resources: any, stage: any) {
//    this.sprite = new PIXI.Sprite(resources[Object.keys(resources)[0]].texture);
//    stage.addChild(this.sprite);
  }

  update(delta: number){
    if(this.sprite){
    this.sprite.x = this.Owner.X;
    this.sprite.y = this.Owner.Y;
    }
  }

  get Sprite(): any{
    return this.sprite;
  }

  set Sprite(sprite: any){
    this.sprite = sprite;
  }

}

export default Sprite;
