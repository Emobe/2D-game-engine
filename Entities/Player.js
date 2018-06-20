// @flow

import Entity from '../Entity';
import Health from '../Components/Health';
import Sprite from '../Components/Sprite';
import Input from '../Input/Input';

class Player extends Entity{

  constructor(name: string, x: Number, y: Number, path: string){
    super('Player', 300, 0, new Health(), new Sprite('../../assets/images/player.png'));
  }
  
  update(delta: Number){
    switch(Input.Key){
      case 'w':
        this.X += 1;
    }
  }

}

export default Player;
