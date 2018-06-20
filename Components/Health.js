// @flow

import Component from '../Component';

class Health extends Component {

  health: Number;

  initialise(){
    this.health = 100;
  }

  get Health(){
    return this.health;
  }

  set Health(health: Number){
    this.health = health;
  }

};

export default Health;
