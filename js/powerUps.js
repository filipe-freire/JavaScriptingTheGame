class Powerup {
  constructor(game, x, y, width, height, speed, index) {
    this.game = game;

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.spriteIndex = index;

    this.angular = new Image();
    this.angular.src = '/img/powerups/angular.png';
    this.react = new Image();
    this.react.src = '/img/powerups/react.png';
    this.vue = new Image();
    this.vue.src = '/img/powerups/vuejs.png';
    this.typescript = new Image();
    this.typescript.src = '/img/powerups/TS.png';

    this.spriteArr = [this.angular, this.react, this.vue, this.typescript];

    this.image = this.spriteArr[this.spriteIndex];
  }

  checkIntersection(item) {
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
