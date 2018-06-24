// @flow

import Component from "../Component";

class Physics extends Component {
  moveable: boolean;

  velX: number;

  velY: number;

  X: number;

  Y: number;

  initialise() {
    this.moveable = true;
  }

  get Moveable(): boolean {
    return this.moveable;
  }

  set Moveable(moveable: boolean) {
    this.moveable = moveable;
  }

  get VelX() {
    return this.velX;
  }

  get VelY() {
    return this.velY;
  }

  set VelX(vel: number) {
    this.velX = vel;
  }

  set VelY(vel: number) {
    this.velY = vel;
  }
}

export default Physics;
