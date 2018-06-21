// @flow

import Entity from '../Entity';
import Health from '../Components/Health';
import Sprite from '../Components/Sprite';
import Physics from '../Components/Physics';
import Controller from '../Components/Controller';

import Input from '../Input/Input';

class Player extends Entity {
  constructor(name: string, x: number, y: number, path: string) {
    super(
      'Player',
      x,
      y,
      new Health(),
      new Physics(),
      new Controller(),
      new Sprite('../../assets/images/player.png'),
    );
    console.log(x, y);
  }

  update(delta: number) {
    console.log('sdfsd');
    switch (Input.Key) {
      case 'w':
    }
  }
}

export default Player;
