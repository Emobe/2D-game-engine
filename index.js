import * as PIXI from "pixi.js";
import Scene from "./Scene";
import Player from "./Entities/Player";
import Input from "./Input/Input";

class NessJS {
  constructor() {
    this.mainScene = new Scene();
    this.player = new Player("hello", 0, 0, "../../assets/images/player.png");
    this.loader = new PIXI.loaders.Loader();
    this.input = new Input();
  }

  initialise() {
    this.app = new PIXI.Application({transparent: true});
    document.body.appendChild(this.app.view);
    this.app.ticker.add(delta => this.gameLoop(delta));
    this.mainScene.initialise();
    this.textures = ["player.png"];
    this.mainScene.Manager.addEntity("player", this.player);
    this.input.initialise();
    this.loadContent();
  }

  loadContent() {
    this.mainScene.loadContent(this.loader, this.app.stage);
    this.loader.on("progress", this.isLoading);
    this.loader.load(() => {
      console.log(this.mainScene);
      console.log(this.app.stage);
      this.mainScene.onLoaded(this.app.stage);
    });
  }

  isLoading(loader) {
    console.log(loader.progress + "%");
  }

  gameLoop(delta: number) {
    this.mainScene.update(delta);
  }
}

const app = new NessJS();

app.initialise();
