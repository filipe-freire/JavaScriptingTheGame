class Screentext {
  constructor(game) {
    this.game = game;

    this.score = 0;
    this.enemiesEliminated = 0;
    this.gameOverMessage = '';

    this.hud = this.createHud();
  }

  printScore() {
    // const parentWrapper = document.querySelector('wrapper');
    // const div = document.createElement('div');
    //div.innerHTML = 'my <b>new</b> skill - <large>DOM maniuplation!</large>';
    // better to use CSS though - just set class
    if (this.score >= 60) {
      this.gameOverMessage = `Game Over! You managed to keep your code integrity from collapsing for ${Math.floor(
        this.score
      )} minutes and eliminate ${this.enemiesEliminated} threats!`;
    } else {
      this.gameOverMessage = `Game Over! You managed to keep your code integrity from collapsing for ${Math.floor(
        this.score
      )} seconds and eliminate ${this.enemiesEliminated} threats!`;
    }

    // Create Overlay
    // div.setAttribute('class', 'game-over-screen');
    // parentWrapper.appendChild(div);
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
    context.fillText(`Code Integrity: ${this.game.player.health}`, 15, 550);

    // Prints Score
    context.fillText(`Score: ${Math.floor(this.score)}`, 720, 550);

    // Prints eliminated enemies
    context.fillText(`Enemies Eliminated: ${this.enemiesEliminated}`, 720, 580);

    context.fillText(`${this.game.bullet.bulletsLeft} x`, 15, 520);
    context.drawImage(this.game.bullet.image, 60, 505, 70, 20);

    context.restore();
  }
}
