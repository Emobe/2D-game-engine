// @flow
import Tile from './Tile';

class MapLayer {

  height: number;
  width: number;
  map: any//Array<Array<Tile>>;

  constructor(height: number, width: number){
    this.width = width;
    this.height = height;
    console.log(width, height);
    // $FlowFixMe
    this.map = Array.from(Array(this.height), () => new Array(this.width));
    for (let y = 0; y < this.width; y++) {
      for (let x = 0; x < this.height; x++) {
        this.map[y][x] = new Tile(0, 0);
      }
    }
  }

  setTile(x: number, y: number, tile: Tile){
    //this.map[y][x] == tile;
  }

  getTile(x: number, y: number){
    return this.map[y][x];
  }

  get Width(): number{
    return this.width;
  }

  get Height(): number{
    return this.height;
  }
};


export default MapLayer;
