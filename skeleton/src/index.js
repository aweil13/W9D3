const View = require('./ttt-view');
const Game = require('./game');
window.Game = Game;
window.View = View;

const sel = 'lord';

const $game = new Game();
const $view = new View($game);

  $(() => {

  });
