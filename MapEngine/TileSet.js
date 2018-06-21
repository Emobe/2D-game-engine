// @flow
import { Rectangle, TextureCache } from 'pixi.js';

class TileSet {
  tileSet: string;
  tilesWide: number;
  tilesHigh: number;
  sourceRectangles: Array<Rectangle>;

  constructor(tilesWide: number, tilesHigh: number, tileSet: string) {
    this.tileSet = tileSet;
    this.tilesWide = tilesWide;
    this.tilesHigh = tilesHigh;
    this.sourceRectangles = [];
    let tile = 0;
    for (let y = 0; y < this.tilesHigh; y++) {
      for (let x = 0; x < this.tilesWide; x++) {
        this.sourceRectangles[tile] = new Rectangle(x * 64, y * 64, 64, 64);
        tile++;
      }
    }
    console.log(this.sourceRectangles);

    this.map = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];
  }

  initialise() {
    for (let y = 0; y < this.map.length; y++) {
      for (let x = 0; x < this.map[0].length; x++) {
        this.sourceRectangles[tile] = new Rectangle(x * 64, y * 64, 64, 64);
      }
    }
  }

  loadContent(loader, stage) {
    loader.add(this.tileSet);
  }
}

export default TileSet;
