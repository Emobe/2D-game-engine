// @flow
import {Rectangle} from "pixi.js";
import MapEngine from "./MapEngine";

class TileSet {
  texture: string;

  tilesWide: number;

  tilesHigh: number;

  sourceRectangles: Array<Rectangle>;

  map: Array<Array<number>>;

  constructor(tilesWide: number, tilesHigh: number, texture: string) {
    this.texture = texture;
    this.tilesWide = tilesWide;
    this.tilesHigh = tilesHigh;
    this.sourceRectangles = [];
    let tile = 0;
    for (let y = 0; y < this.tilesHigh; y++) {
      for (let x = 0; x < this.tilesWide; x++) {
        this.sourceRectangles[tile] = new Rectangle(
          x * MapEngine.TileSize,
          y * MapEngine.TileSize,
          MapEngine.TileSize,
          MapEngine.TileSize
        );
        tile++;
      }
    }
    console.log(this.sourceRectangles);
  }

  loadContent(loader: any) {
    loader.add(this.texture);
  }

  get Texture(): string {
    return this.texture;
  }
}

export default TileSet;
