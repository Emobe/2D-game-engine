// @flow

import Component from '../Component';
import Input from '../Input/Input';

class Controller extends Component {

  moveable: boolean;

  initialise(){
    this.movable = true;
  }

  update(delta: number){
    switch(Input.key){
      case 'w': 
        return this.Owner.Y = this.Owner.Y - 1;
      case 'a': 
        return this.Owner.X = this.Owner.X - 1;
      case 's': 
        return this.Owner.Y = this.Owner.Y + 1;
      case 'd': 
        return this.Owner.X = this.Owner.X + 1;
    }
  }
};

export default Controller;
