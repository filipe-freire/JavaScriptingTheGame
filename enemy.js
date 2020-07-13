class Enemy {
  constructor(game, x, y, width, height, speed, index) {
    this.game = game;

    this.x = x;
    this.y = y;
    this.width = width;
    this.heigth = height;
    this.speed = speed;
    this.spriteIndex = index;

    this.spriteArr = [
      '/img/java.png',
      '/img/c-lang.jpg.png',
      '/img/php-logo.png',
      '/img/python.png',
      '/img/ruby.png'
    ];
    this.image = new Image();
    this.image.src = this.spriteArr[this.spriteIndex];
  }

  checkIntersection(player) {
    return (
      player.x + player.width > this.x &&
      player.x < this.x + this.width &&
      player.y + player.height > this.y &&
      player.y < this.y + this.height
    );
  }

  runLogic() {
    this.x -= this.speed;
  }

  paint() {
    const context = this.game.context;

    context.save();

    //enemySprite.addEventListener('load', () => {
    context.drawImage(this.image, this.x, this.y, this.width, this.heigth);
    //});

    context.restore();
  }
}
