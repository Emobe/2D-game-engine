// @flow

import type Entity from "./Entity";
import type Component from "./Component";
import EntityCollection from "./EntityCollection";

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

  loadContent(loader: any) {
    this.getAllEntities.forEach((entity: Entity) => {
      entity.getAllComponents.forEach((component: Component) => {
        return component.loadContent(loader);
      });
    });
  }

  onLoaded(stage: any) {
    this.getAllEntities.forEach((entity: Entity) => {
      entity.getAllComponents.forEach((component: Component) => {
        console.log(component);
        if (component.constructor.name === "Sprite") {
          component.onLoaded(stage);
        }
      });
    });
  }

  unloadGraphics() {}

  update(delta: number) {
    this.entities.forEach((entity: Entity) => {
      entity.getAllComponents.forEach((component: Component) => {
        component.update(delta);
      });
    });
    //  });
  }

  set Stage(stage: any) {
    this.stage = stage;
  }
}

export default ComponentManager;
