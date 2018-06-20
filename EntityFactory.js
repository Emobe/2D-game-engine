// @flow
import type ComponentManager from './ComponentManager';
import type Component from './Component';
import Entity from './Entity';

class EntityFactory {
  manager: ComponentManager;

  constructor(manager: ComponentManager) {
    this.manager = manager;
  }

  Create(name: string, ...components: Array<Component>): Entity{

    const entity = new Entity(name, ...components)
    return entity;
    
  }
}
