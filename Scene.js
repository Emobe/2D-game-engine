// @flow
import { Sprite, utils } from 'pixi.js';
import ComponentManager from './ComponentManager';
import EntityCollection from './EntityCollection';
import MapEngine from './MapEngine/MapEngine';
import MapLayer from './MapEngine/MapLayer';
import TileMap from './MapEngine/TileMap';
import TileSet from './MapEngine/TileSet';

class Scene {
  manager: ComponentManager;
  mapEngine: MapEngine;
  resources: any;
  tileSet: TileSet;
  mapLayer: MapLayer;
  tileMap: TileMap;

  constructor() {
    this.manager = new ComponentManager();
    this.mapEngine = new MapEngine(64);
  }

  initialise() {
    this.manager.initialise();
    this.mapEngine.initialise();
    this.mapLayer = new MapLayer(16, 16);
    this.tileSet = new TileSet(2, 1, '../assets/images/map.png');
    this.tileMap = new TileMap(this.tileSet, this.mapLayer);
  }

  loadContent(loader: any, stage: any) {
    console.log(this.tileMap);
    loader.add(this.tileSet.Texture);
    this.manager.loadContent(loader, stage);
  }

  renderMap(stage: any){
    this.tileMap.render();
    stage.addChild(this.tileMap.Container);
    console.log(stage);
  }

  update(delta: number) {
    this.manager.update(delta);
  }

  get Manager(): ComponentManager {
    return this.manager;
  }
}

export default Scene;
