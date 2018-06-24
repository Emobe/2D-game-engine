// @flow
import type Entity from "./Entity";

class Component {
  owner: Entity;

  initialise() {}

  loadContent(loader: any) {}

  onLoaded(stage: any) {}

  update(delta: number) {}

  set Owner(entity: Entity) {
    this.owner = entity;
  }

  get Owner(): Entity {
    return this.owner;
  }
}

export default Component;
