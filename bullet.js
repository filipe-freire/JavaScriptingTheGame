class Bullet {
  constructor(game) {
    this.game = game;

    this.x = this.game.player.x + this.game.player.width / 2;
    this.y = this.game.player.y + this.game.player.height / 2;

    this.width = 60;
    this.height = 14;

    this.image = new Image();
    this.image.src = '/img/error_404.png';

    this.bulletsLeft = 5;
  }

  runLogic() {
    this.x += 35;
  }

  paint() {
    const context = this.game.context;

    context.save();

    //this.image.addEventListener('load', () => {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
    //});

    context.restore();
  }
}
