class Screentext {
  constructor(game) {
    this.game = game;

    this.score = 0;
  }

  incrementScore() {
    this.score += 27 * 0.001; // Imitates second counter.
  }

  runLogic() {
    this.score++;
  }

  paint() {
    const context = this.game.context;
    // const score = seconds since game loads

    context.save();

    context.fillStyle = 'white';
    context.font = '20px monospace';

    // Prints Health
    context.fillText(`Code Integrity: ${this.game.player.health}`, 750, 480);

    // Prints Score
    context.fillText(`Score: ${Math.floor(this.score)}`, 750, 450);

    context.font = '18px monospace';
    context.fillText(`Error 404's left: ${this.game.bullet.bulletsLeft}`, 15, 480);

    context.restore();
  }
}
