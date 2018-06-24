// @flow
import Entity from "./Entity";

export type EntityList = Map<string, Entity>;

class EntityCollection {
  entities: EntityList;

  constructor() {
    this.entities = new Map();
  }

  addEntity(name: string, item: Entity, manager: any) {
    item.Manager = manager;
    this.entities.set(name, item);
  }

  get getAllEntities(): EntityList {
    return this.entities;
  }

  find(name: string) {
    return this.entities.get(name);
  }
}

export default EntityCollection;
