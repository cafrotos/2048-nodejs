const keypress = require('keypress');
const { MOVE_KEY_CODE } = require('./constants');

// make `process.stdin` begin emitting "keypress" events

module.exports = () => {
  keypress(process.stdin);

  // listen for the "keypress" event
  process.stdin.on('keypress', function (ch, key) {
    if (key && key.ctrl && key.name == 'c') {
      console.log("Bye bye ...")
      process.stdin.pause();
      return;
    }
    switch (key.name) {
      case MOVE_KEY_CODE.UP: {
        break
      }
      case MOVE_KEY_CODE.DOWN: {
        break;
      }
      case MOVE_KEY_CODE.LEFT: {
        break;
      }
      case MOVE_KEY_CODE.RIGHT: {
        break;
      }
      default:
        break;
    }
  });

  process.stdin.setRawMode(true);
  process.stdin.resume();
}