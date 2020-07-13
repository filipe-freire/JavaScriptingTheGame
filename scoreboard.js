class Scoreboard {
  constructor(game) {
    this.game = game;
  }

  paint() {
    const context = this.game.context;
    // const score = seconds since game loads

    context.save();

    context.fillStyle = 'white';
    context.font = '20px monospace';
    context.fillText('Code Integrity: ' + this.game.player.health, 750, 480);

    context.restore();
  }
}
