// @flow
import ComponentManager from './ComponentManager';
import EntityCollection from './EntityCollection';
import MapEngine from './MapEngine/MapEngine';

class Scene {

  manager: ComponentManager;
  map: MapEngine;
  resources: any;

  constructor(){
    this.manager = new ComponentManager();
    this.map = new MapEngine();
  }

  initialise(){
    this.manager.initialise()
  }

  loadContent(loader: any, stage: any){
    this.manager.loadContent(loader, stage);
    this.map.loadContent(loader, stage);
  }

  update(delta: number){
    this.manager.update(delta)
  }

  get Manager(): ComponentManager{
    return this.manager;
  }
}

export default Scene;
