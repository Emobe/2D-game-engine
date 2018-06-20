// @flow
import ComponentManager from './ComponentManager';
import EntityCollection from './EntityCollection';

class Scene {

  manager: ComponentManager;

  constructor(){
    this.manager = new ComponentManager();
  }

  initialise(){
    this.manager.initialise()
  }

  loadContent(contentManager, stage){
    this.manager.loadContent(contentManager, stage);
  }

  update(delta: Number){
    this.manager.update(delta)
  }

  get Manager(): ComponentManager{
    return this.manager;
  }
}

export default Scene;
