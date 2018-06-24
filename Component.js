// @flow
import type Entity from "./Entity";

class Component {
  owner: Entity;

  initialise() {}

  loadContent(_: any) {}

  onLoaded(_: any) {}

  update(_: number) {}

  set Owner(entity: Entity) {
    this.owner = entity;
  }

  get Owner(): Entity {
    return this.owner;
  }
}

export default Component;
