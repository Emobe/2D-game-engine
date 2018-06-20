
//import 'styles/index.scss';
import * as PIXI from 'pixi.js';
import Scene from './Scene';
import Player from './Entities/Player';
import Input from './Input/Input';

class NessJS {
  constructor(){
    this.mainScene = new Scene();
    this.player = new Player();
    this.contentManager = new PIXI.loaders.Loader();
    this.input = new Input();
  }

  initialise() {
    this.app = new PIXI.Application({ transparent: true });
    document.body.appendChild(this.app.view);
    this.app.ticker.add(delta => this.gameLoop(delta));
    this.mainScene.initialise();
    this.textures = ['player.png'];
    this.mainScene.Manager.addEntity('player', new Player())
    this.input.initialise();
    this.loadContent();
  }

  loadContent() {
    //const assets = textures.map(texture => root.concat(texture));
    //this.mainScene.load
    //PIXI.loader.add(assets).load(this.main.bind(this));
    this.mainScene.loadContent(this.contentManager, this.app.stage);
    console.log(this.app.stage);
  }

  gameLoop(delta: Number){
    this.mainScene.update(delta);
    //this.input.update();
  }
}

const app = new NessJS();

app.initialise();
