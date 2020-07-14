class Screentext {
  constructor(game) {
    this.game = game;

    this.score = 0;
    this.enemiesEliminated = 0;

    this.hud = this.createHud();
  }

  createHud() {
    const context = this.game.context;

    context.fillRect(0, 500, 1000, 100);
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
    this.hud = this.createHud();

    context.save();

    context.fillStyle = 'white';
    context.font = '20px monospace';

    // Prints Health
    context.fillText(`Code Integrity: ${this.game.player.health}`, 720, 520);

    // Prints Score
    context.fillText(`Score: ${Math.floor(this.score)}`, 720, 550);

    // Prints eliminated enemies
    context.fillText(`Enemies Eliminated: ${this.enemiesEliminated}`, 720, 580);

    context.font = '18px monospace';
    context.fillText(`Error 404's left: ${this.game.bullet.bulletsLeft}`, 15, 520);

    context.restore();
  }
}
