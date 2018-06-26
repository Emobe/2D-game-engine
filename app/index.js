import * as PIXI from "pixi.js";
import Scene from "./Scene";
import Player from "./Entities/Player";
import Input from "./Input/Input";
import Debug from "./Debug";

class NessJS {
  constructor() {
    this.mainScene = new Scene();
    this.loader = new PIXI.loaders.Loader("../../assets/");
    this.input = new Input();
  }

  initialise() {
    this.player = new Player("hello", 0, 0, "images/player.png");
    this.app = new PIXI.Application({transparent: true});
    document.body.appendChild(this.app.view);
    this.app.ticker.add(delta => this.gameLoop(delta));
    this.mainScene.initialise();
    this.textures = ["player.png"];
    this.mainScene.Manager.addEntity("player", this.player);
    this.input.initialise();
    this.debug = new Debug(this.app.stage);
    this.loadContent();
  }

  loadContent() {
    this.mainScene.loadContent(this.loader, this.app.stage);
    this.loader.on("progress", this.isLoading);
    Debug.log("test");
    this.loader.load(() => {
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
