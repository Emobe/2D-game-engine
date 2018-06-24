import {Text, Container} from "pixi.js";

class Debug {
  static container: any;

  messages: Array<string>;

  constructor(stage) {
    Debug.container = new Container();
    stage.addChild(Debug.container);
  }

  static log(message: string) {
    console.log(message);
    Debug.container.addChild(new Text(message));
    console.log(Debug.container);
  }
}

export default Debug;
