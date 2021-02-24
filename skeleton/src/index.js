const View = require('./ttt-view');
const Game = require('./game');
window.Game = Game;
window.View = View;


 window.$game = new Game();
 window.$view = new View($game);

  $(() => {

  });
