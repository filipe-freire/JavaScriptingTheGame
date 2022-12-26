class Screentext {
  constructor(game) {
    this.game = game;

    this.finalScore;

    this.level = 1;
    this.score = 0;
    this.enemiesEliminated = 0;
    this.gameOverMessage = '';
    this.hud = this.createHud();

    this.bossBattleWarning = "BOSS BATTLE! Don't let it reach the end!";
    this.bossBattleX = 1000;
  }

  increaseLevel() {
    switch (Math.floor(this.score)) {
      case 10:
        this.level = 2;
        break;
      case 20:
        this.level = 3;
        break;
      case 40:
        this.level = 4;
        break;
      case 80:
        this.level = 5;
        break;
      case 90:
        this.level = 6;
        break;
    }
  }

  calculateFinalScore() {
    this.finalScore = this.score + this.enemiesEliminated;
  }

  printGameOverScreen() {
    const context = this.game.context;

    if (this.game.gameOver && this.level === 7 && this.game.player.health > 0) {
      context.fillStyle = 'black';

      context.fillRect(0, 0, 1000, 600);

      context.fillStyle = 'orange';
      context.font = '60px "Yatra One"';
      context.fillText(`Congratulations! You Win! 🏆`, 50, 250);

      context.font = '30px "Yatra One"';
      context.fillText(`Points: ${Math.floor(this.score)}`, 130, 400);
      context.fillText(`Languages blasted: ${this.enemiesEliminated}`, 620, 400);
      context.font = '40px "Yatra One"';
      context.fillText(`Final Score: ${Math.floor(this.finalScore)}`, 350, 500);

      context.fillStyle = 'black';
    } else {
      context.fillStyle = 'black';
      context.fillRect(0, 0, 1000, 600);
      context.fillStyle = 'orange';
      context.font = '60px "Yatra One"';
      context.fillText(`Game Over!`, 325, 220);
      context.font = '30px "Yatra One"';
      context.fillText(`Points: ${Math.floor(this.score)}`, 130, 400);
      context.fillText(`Languages blasted: ${this.enemiesEliminated}`, 620, 400);
      context.font = '40px "Yatra One"';
      context.fillText(`Final Score: ${Math.floor(this.finalScore)}`, 350, 500);
      context.fillStyle = 'black';
    }
  }

  printScore() {
    if (this.level === 7) {
      this.gameOverMessage = `Congratulations! You managed to keep your code integrity from collapsing for ${Math.floor(
        this.score
      )} seconds, eliminate ${
        this.enemiesEliminated
      } threats and defeat the final boss!! Well done 😎`;
    } else {
      this.gameOverMessage = `Game Over! You managed to keep your code integrity from collapsing for ${Math.floor(
        this.score
      )} seconds and eliminate ${this.enemiesEliminated} threats!`;
    }
  }

  createHud() {
    const context = this.game.context;
    context.fillRect(0, 500, 1000, 100);
  }

  incrementScore() {
    this.score += 27 * 0.001; // Imitates second counter.
  }

  bossBattleWarningDisplay() {
    const context = this.game.context;
    /* context.fillStyle = 'black';
    context.font = '50px "Yatra One"'; */
    context.fillText(this.bossBattleWarning, this.bossBattleX, 250);
    this.bossBattleX -= 2;
  }

  runLogic() {
    this.incrementScore();
    this.increaseLevel();
  }

  paint() {
    const context = this.game.context;
    // const score = seconds since game loads
    this.createHud();

    context.save();

    context.fillStyle = 'orange';
    context.font = '50px "Yatra One"';

    if (this.level === 7) {
      context.fillText(`Game Over!`, 350, 570);
    } else {
      context.fillText(`LEVEL ${this.level}`, 380, 570);
    }

    if (this.level === 6) {
      this.bossBattleWarningDisplay();
    }

    context.fillStyle = 'white';
    context.font = '20px monospace';

    // Prints Health
    context.fillText(`Code Integrity: ${this.game.player.health}`, 15, 570);

    // Prints Score
    context.fillText(`Score: ${Math.floor(this.score)}`, 720, 550);

    // Prints eliminated enemies
    context.fillText(`Enemies Eliminated: ${this.enemiesEliminated}`, 720, 580);

    // Prints Bullets Left
    context.fillText(`${this.game.bullet.bulletsLeft} x`, 15, 530);
    context.drawImage(this.game.bullet.image, 75, 513, 70, 20);

    context.restore();
  }
}
