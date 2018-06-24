// @flow

import Entity from "../Entity";
import Health from "../Components/Health";
import Sprite from "../Components/Sprite";
import Physics from "../Components/Physics";
import Controller from "../Components/Controller";

class Player extends Entity {
  constructor(name: string, x: number, y: number, path: string) {
    super(
      "Player",
      x,
      y,
      new Health(),
      new Physics(),
      new Controller(),
      new Sprite(path)
    );
    console.log(x, y);
  }
}

export default Player;
