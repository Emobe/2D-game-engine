// @flow
import type Component from './Component';

export type ComponentList = Map<string, Component>;

class ComponentCollecton {
  components: ComponentList;

  constructor() {
    this.components = new Map();
  }

  onComponentAdded(event: CustomEvent) {}

  addComponent(item: Component) {
    this.components.set(item.constructor.name, item);
    this.onComponentAdded(new CustomEvent('Component Added', { detail: item }));
    item.initialise();
  }

  findComponent(item: Component) {
    return this.components.get(item.constructor.name);
  }

  get getAllComponents(): ComponentList {
    return this.components;
  }
}

export default ComponentCollecton;
