// @flow

import type Entity from './Entity';
import type Component from './Component';
import EntityCollection from './EntityCollection';

class ComponentManager extends EntityCollection {

  constructor() {
    super();
    this.entities.forEach((value, key, map) => console.log(value, key, map));
  }

  initialise() {
    this.entities.forEach((entity: Entity) => {
      entity.getAllComponents.forEach((component: Component) =>
        component.initialise()
      );
    });
  }

  loadContent(contentManager, stage) {
    this.getAllEntities.forEach((entity: Entity) => {
      entity.getAllComponents.forEach((component: Component) =>{
        switch(component.constructor.name){
          case "Sprite": 
            return component.loadContent(contentManager, stage);
          default: 
            return component.loadContent(contentManager);
        }
      });
    });
  }

  unloadGraphics() {}

  update(delta: Number) {
    this.entities.forEach((entity: Entity) => {
      entity.getAllComponents.forEach((component: Component) =>
        component.update(delta)
      );
    });
    //  });
  }

  render() {
    //  this.entities.forEach(entity => entity.render());
  }

  set Stage(stage){
    this.stage = stage;
  }
}

export default ComponentManager;
