// @flow
import type Entity from './Entity';
class Component {

  owner: Entity;

  initialise(){
  }

  loadContent(manager){
  }

  update(delta: Number){
  }

  set Owner(entity: Entity) {
    this.owner = entity
  }

  get Owner(){
    return this.owner;
  }
}

export default Component;
