// @flow

class Tile {

  tileIndex: number;
  tileSet: number;

  constructor(tileIndex: number, tileSet: number){
    this.tileIndex = tileIndex;
    this.tileSet = tileSet;
  }

  get TileSet(): number{
    return this.tileSet;
  }

  get TileIndex(): number{
    return this.tileIndex;
  }

};

export default Tile;
