// @flow

import { Sprite, TextureCache } from 'pixi.js';
import Tile from './Tile';
import TileSet from './TileSet';
import TileMap from './TileMap';
import MapLayer from './MapLayer';

class MapEngine {
  static tileSize: number;
  tileSet: TileSet;
  mapLayer: MapLayer;
  map: TileMap;

  constructor(tileSize: number) {
    MapEngine.tileSize = tileSize;
    this.tileSet = new TileSet(1, 1, '../../assets/images/map.png');
    this.mapLayer = new MapLayer(40, 40);
  }

  initialise() {
    let tile;
    for (let y = 0; y < this.mapLayer.Height; y++) {
      for (let x = 0; x < this.mapLayer.Width; x++) {
        tile = new Tile(1, 0);
        this.mapLayer.setTile(x, y, tile);
      }
    }
    this.map = new TileMap(this.tileSet, this.mapLayer);
  }

  loadContent(loader: any, stage: any) {
    this.tileSet.loadContent(loader, stage);
  }

  static get TileSize(): number {
    return this.tileSize;
  }
}

export default MapEngine;
