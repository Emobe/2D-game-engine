// @flow

import Component from '../Component';

class Position extends Component {

  x: number;
  y: number;

  constructor(x: number, y: number){
    super();
    this.x = x;
    this.y = y;
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

};

export default Position;
