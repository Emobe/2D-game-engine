// @flow

import Component from '../Component';

class Physics extends Component {

  moveable: boolean;

  initialise(){
    this.movable = true;
  }

  get Moveable(): boolean{
    return this.moveable;
  }

  set Moveable(moveable: boolean){
    this.moveable = moveable;
  }

};

export default Physics;