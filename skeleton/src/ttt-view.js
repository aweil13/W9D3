class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents() {
    const $li = $('li');
    const $ul = $('ul')
    const toggleClass = (e) => {
      $li.toggleClass('x o');
      this.game.playMove([1,1]);
    }
    $('ul').on('click', this.makeMove);
  }

  makeMove($square) {
    debugger
    if (this.game.currentPlayer === 'x'){
    $square.text('x')}
    else {$square.text('o')}
  }

  setupBoard() {
    const $ul = $('<ul>');

    for (let i = 0; i < 9; i++) {
      let $li = $('<li>');
      $ul.append($li);      
    }
    return this.$el.append($ul);
  }
}



module.exports = View;
