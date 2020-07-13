class Scoreboard {
  constructor(game) {
    this.game = game;
  }

  paint() {
    const context = this.game.context;

    context.fillStyle = 'white';
    context.font = '20px monospace';
    context.fillText('Code Integrity: ' + this.game.player.health, 750, 480);
  }
}
