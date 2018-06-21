// @flow
import Tile from './Tile';

class MapLayer {

  width: number;
  height: number;
  map: Array<Array<Tile>>;

  constructor(width, height){
    this.width = width;
    this.height = height;
    this.map = [[]];
    for (let y = 0; y < this.width; y++) {
      for (let x = 0; x < this.height; x++) {
        this.map[y][x] = new Tile(0, 0);
      }
    }
  }

};


export default MapLayer;
