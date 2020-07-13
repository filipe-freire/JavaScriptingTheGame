class Bullet {
  constructor(game) {
    this.game = game;

    this.x = this.game.player.x + this.game.player.width;
    this.y = this.game.player.y + this.game.player.height;

    this.image = new Image();
    this.image.src = '/img/error_404.png';
  }

  runLogic() {
    this.x += 2;
  }

  paint() {
    const context = this.game.context;

    this.image.addEventListener('load', () => {
      context.drawImage(this.image, this.x, this.y, 60, 14);
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
