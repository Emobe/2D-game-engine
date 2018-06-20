// @flow
import ComponentManager from './ComponentManager';
import Component from './Component';
import ComponentCollecton from './ComponentCollection';
import type { ComponentList } from './ComponentCollection';

type Position = { y: Number, x: Number };

class Entity extends ComponentCollecton {

  name: string;
  parent: Object;
  manager: ComponentManager;
  position: Position;

  constructor(name: string, x: Number, y: Number, ...components: Array<Component>){
    super();
    this.name = name;
    this.position = { x, y };
    document.addEventListener('Component Added', this.onComponentAdded.bind(this));
    if(components.length > 0){
      components.forEach(component => this.addComponent(component))
    }
  }

  onComponentAdded(e){
    e.detail.Owner = this;
    console.log('added');
  }

  get Manager(): ComponentManager{
    return this.manager;
  }

  set Manager(manager: ComponentManager){
    this.manager = manager;
  }

  get getAllComponents(): ComponentList{
    return this.components;
  }

  get X(): Number {
    return this.position.x;
  }

  set X(position: Number) {
    this.position.x = position;
  }

  get Y(): Number {
    return this.position.y;
  }

  set Y(position: Number) {
    this.position.y = position;
  }

}

export default Entity;
