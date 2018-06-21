// @flow
import Entity from './Entity';
import Health from './Components/Health';
import type ComponentManager from './ComponentManager';

export type EntityList = Map<string, Entity>;

class EntityCollection {
  entities: EntityList;

  constructor(manager: any) {
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
