// @flow

import Component from "../Component";
import Input from "../Input/Input";

class Controller extends Component {
  moveable: boolean;

  speed: number;

  initialise() {
    this.moveable = true;
    this.speed = 5;
  }

  update(): void {
    switch (Input.key) {
      case "w":
        this.Owner.Y = this.Owner.Y - this.speed;
        break;
      case "a":
        this.Owner.X = this.Owner.X - this.speed;
        break;
      case "s":
        this.Owner.Y = this.Owner.Y + this.speed;
        break;
      case "d":
        this.Owner.X = this.Owner.X + this.speed;
        break;
      default:
        break;
    }
  }
}

export default Controller;
