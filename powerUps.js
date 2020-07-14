class Powerup {
  constructor(game, x, y, width, height, speed, index) {
    this.game = game;

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.spriteIndex = index;

    this.spriteArr = [
      '/img/powerups/angular.png',
      '/img/powerups/react.png',
      '/img/powerups/vuejs.png',
      '/img/powerups/TS.png'
    ];
    this.image = new Image();
    this.image.src = this.spriteArr[this.spriteIndex];
  }

  checkIntersection(item) {
    // console.log(item.x, item.width, item.y, item.height);
    // console.log(this.x, this.width, this.y, this.height);
    return (
      item.x + item.width > this.x &&
      item.x < this.x + this.width &&
      item.y + item.height > this.y &&
      item.y < this.y + this.height
    );
  }

  runLogic() {
    this.x -= this.speed;
  }

  paint() {
    const context = this.game.context;
    context.save();

    context.drawImage(this.image, this.x, this.y, this.width, this.height);

    context.restore();
  }
}
