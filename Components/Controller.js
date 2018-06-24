// @flow

import Component from "../Component";
import Input from "../Input/Input";

class Controller extends Component {
  moveable: boolean;

  initialise() {
    this.moveable = true;
  }

  update(): void {
    switch (Input.key) {
      case "w":
        this.Owner.Y = this.Owner.Y - 1;
        break;
      case "a":
        this.Owner.X = this.Owner.X - 1;
        break;
      case "s":
        this.Owner.Y = this.Owner.Y + 1;
        break;
      case "d":
        this.Owner.X = this.Owner.X + 1;
        break;
      default:
        break;
    }
  }
}

export default Controller;
