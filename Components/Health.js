// @flow

import Component from "../Component";

class Health extends Component {
  health: number;

  initialise() {
    this.health = 100;
  }

  get Health(): number {
    return this.health;
  }

  set Health(health: number) {
    this.health = health;
  }
}

export default Health;
