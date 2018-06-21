// @flow

import TileSet from './TileSet';

class MapEngine {

  tileSize: number;

  constructor(tileSize: number){
    this.tileSize = tileSize;
    this.tileSet = new TileSet(1, 1, '../../assets/images/map.png');
  }

  loadContent(loader, stage){
    this.tileSet.loadContent(loader, stage)
  }

}

export default MapEngine;
