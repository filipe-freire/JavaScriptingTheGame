class Player {
  constructor(game) {
    this.game = game;

    this.x = 25;
    this.y = 25;

    this.width = 50;
    this.height = 50;

    this.health = 200;

    this.image = new Image();
    this.image.src = '/img/js-player.png';
  }

  runLogic() {
    const canvasBottom = this.game.canvas.height - this.height;
    if (this.y > canvasBottom) {
      this.y = canvasBottom;
    }
    if (this.y < 0) {
      this.y = 0;
    }
  }

  paint() {
    const context = this.game.context;

    context.save();
    //playerSprite.addEventListener('load', () => {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
    //});
    context.restore();
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
