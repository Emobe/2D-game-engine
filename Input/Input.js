// @flow

class Input {
  static key: ?string;
  static lastKey: ?string;

  constructor() {
    Input.key = null;
    Input.lastKey = null;
  }

  initialise(){
    window.addEventListener('keydown', this.onKeyDown, false);
    window.addEventListener('keyup', this.onKeyUp, false);
  }

  onKeyDown(event: KeyboardEvent){
    Input.lastKey = Input.key;
    Input.key = event.key;
  }

  onKeyUp(event: KeyboardEvent){
    Input.lastKey = Input.key;
    Input.key = null;
  }
  
  static get Key(): ?string{
    return Input.key;
  }
  
  static get LastKey(): ?string{
    return Input.lastKey;
  }
}

export default Input;
