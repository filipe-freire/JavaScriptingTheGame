class Player {
  constructor(game) {
    this.game = game;

    this.movementSpeed = 15;

    this.x = 25;
    this.y = 25;

    this.width = 70;
    this.height = 70;

    this.health = 200;

    this.image = new Image();
    this.image.src = '/img/js-player.png';
  }

  runLogic() {
    const canvasBottom = 500 - this.height;
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
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
    context.restore();
  }
}
