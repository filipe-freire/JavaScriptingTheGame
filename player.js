class Player {
  constructor(game) {
    this.game = game;

    this.x = 25;
    this.y = 25;

    this.width = 50;
    this.height = 50;

    this.health = 200;
  }

  fireBullet() {}

  runLogic() {
    const canvasBottom = this.game.canvas.height - this.height;
    if (this.y > canvasBottom) {
      this.y = canvasBottom;
    }
  }

  paint() {
    const context = this.game.context;

    let playerSprite = new Image();
    playerSprite.src = '/img/js-player.png';

    playerSprite.addEventListener('load', () => {
      context.drawImage(playerSprite, this.x, this.y, this.width, this.height);
    });

    /*
    // Draw a circle
    context.beginPath();
    context.arc(100, 100, 20, 0, 2 * Math.PI);
    context.fillStyle = '#062950';
    context.fill();

    context.strokeStyle = 'silver';
    context.stroke();
    */
  }
}
