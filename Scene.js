// @flow
import ComponentManager from "./ComponentManager";
import MapEngine from "./MapEngine/MapEngine";
import MapLayer from "./MapEngine/MapLayer";
import TileMap from "./MapEngine/TileMap";
import TileSet from "./MapEngine/TileSet";

class Scene {
  manager: ComponentManager;

  mapEngine: MapEngine;

  resources: any;

  tileSet: TileSet;

  mapLayer: MapLayer;

  tileMap: TileMap;

  constructor() {
    this.manager = new ComponentManager();
    this.mapEngine = new MapEngine(16);
  }

  initialise() {
    this.manager.initialise();
    this.mapEngine.initialise();
    this.mapLayer = new MapLayer(16, 16);
    this.tileSet = new TileSet(2, 1, "../assets/images/map.png");
    this.tileMap = new TileMap(this.tileSet, this.mapLayer);
  }

  loadContent(loader: any) {
    loader.add(this.tileSet.Texture);
    this.manager.loadContent(loader);
  }

  onLoaded(stage: any) {
    this.tileMap.render();
    stage.addChild(this.tileMap.Container);
    this.manager.onLoaded(stage);
  }

  update(delta: number) {
    this.manager.update(delta);
  }

  get Manager(): ComponentManager {
    return this.manager;
  }
}

export default Scene;
