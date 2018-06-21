// @flow

import type Entity from './Entity';
import type Component from './Component';
import EntityCollection from './EntityCollection';

class ComponentManager extends EntityCollection {

  stage: any;

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

  loadContent(loader: any, stage: any) {
    this.getAllEntities.forEach((entity: Entity) => {
      entity.getAllComponents.forEach((component: Component) =>{
        switch(component.constructor.name){
          case "Sprite": 
            return component.loadContent(loader, stage);
          default: 
            return component.loadContent(loader);
        }
      });
    });
  }

  unloadGraphics() {}

  update(delta: number) {
    this.entities.forEach((entity: Entity) => {
      entity.getAllComponents.forEach((component: Component) =>{
        component.update(delta)
      });
    });
    //  });
  }

  render() {
    //  this.entities.forEach(entity => entity.render());
  }

  set Stage(stage: any){
    this.stage = stage;
  }
}

export default ComponentManager;
