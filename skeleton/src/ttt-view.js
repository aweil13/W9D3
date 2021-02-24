class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents() {}

  makeMove($square) {}

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
