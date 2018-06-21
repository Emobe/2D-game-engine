
//import 'styles/index.scss';
import * as PIXI from 'pixi.js';
import Scene from './Scene';
import Player from './Entities/Player';
import Input from './Input/Input';

class NessJS {
  constructor(){
    this.mainScene = new Scene();
    this.player = new Player('hello', 0, 0);
    this.loader = new PIXI.loaders.Loader();
    this.input = new Input();
  }

  initialise() {
    this.app = new PIXI.Application({ transparent: true });
    document.body.appendChild(this.app.view);
    this.app.ticker.add(delta => this.gameLoop(delta));
    this.mainScene.initialise();
    this.textures = ['player.png'];
    this.mainScene.Manager.addEntity('player', this.player)
    this.input.initialise();
    this.loadContent();
  }

  loadContent() {
    //const assets = textures.map(texture => root.concat(texture));
    //this.mainScene.load
    //PIXI.loader.add(assets).load(this.main.bind(this));
    this.mainScene.loadContent(this.loader, this.app.stage);
    this.loader.on('progress', this.isLoading);
    this.loader.load((loader, resources) => console.log(resources, loader));
  }

  isLoading(loader){
    console.log(loader.progress + '%');
  }

  gameLoop(delta: number){
    this.mainScene.update(delta);
    //this.input.update();
  }
}

const app = new NessJS();

app.initialise();
