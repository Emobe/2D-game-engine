// @flow
import ComponentManager from "./ComponentManager";
import Component from "./Component";
import ComponentCollecton from "./ComponentCollection";
import type {ComponentList} from "./ComponentCollection";

class Entity extends ComponentCollecton {
  name: string;

  parent: Object;

  manager: ComponentManager;

  x: number;

  y: number;

  constructor(
    name: string,
    x: number,
    y: number,
    ...components: Array<Component>
  ) {
    super();
    this.name = name;
    this.x = x;
    this.y = y;
    document.addEventListener(
      "Component Added",
      this.onComponentAdded.bind(this)
    );
    if (components.length > 0) {
      components.forEach(component => this.addComponent(component));
    }
  }

  onComponentAdded(e: any) {
    e.detail.Owner = this;
    console.log("added");
  }

  get Manager(): ComponentManager {
    return this.manager;
  }

  set Manager(manager: ComponentManager) {
    this.manager = manager;
  }

  get getAllComponents(): ComponentList {
    return this.components;
  }

  get X(): number {
    return this.x;
  }

  set X(position: number) {
    this.x = position;
  }

  get Y(): number {
    return this.y;
  }

  set Y(position: number) {
    this.y = position;
  }
}

export default Entity;
