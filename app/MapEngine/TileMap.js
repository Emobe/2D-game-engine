// @flow

import {Rectangle, Container, utils, Sprite, Texture} from "pixi.js";
import MapEngine from "./MapEngine";
import type TileSet from "./TileSet";
import type MapLayer from "./MapLayer";

type Map = Array<Array<number>>;

class TileMap {
  tileSets: Array<TileSet>;

  mapLayers: Array<MapLayer>;

  container: any;

  map: Map;

  constructor(tileSets: TileSet, mapLayers: MapLayer, map: Map) {
    this.tileSets = [tileSets];
    this.mapLayers = [mapLayers];
    this.container = new Container();
    this.map = map;
  }

  render() {
    const mapTexture = utils.TextureCache[this.tileSets[0].Texture];
    const destination = new Rectangle(
      0,
      0,
      MapEngine.TileSize,
      MapEngine.TileSize
    );
    const tiles: Array<any> = [];
    this.tileSets.forEach(set => {
      set.sourceRectangles.forEach(source => {
        const texture = new Texture(mapTexture);
        texture.frame = source;
        tiles.push(texture);
      });
    });
    let sprite: any;
    this.mapLayers.forEach(layer => {
      for (let y = 0; y < layer.Height; y++) {
        destination.y = y * MapEngine.TileSize;
        for (let x = 0; x < layer.Width; x++) {
          destination.x = x * MapEngine.TileSize;
          sprite = new Sprite(tiles[this.map[y][x]]);
          sprite.position = destination;

          this.container.addChild(sprite);
        }
      }
    });
  }

  get Container() {
    return this.container;
  }

  set Map(map: Map) {
    this.map = map
  }
}

export default TileMap;
