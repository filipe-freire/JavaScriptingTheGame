class Enemy {
  constructor(game, x, y, width, height, speed, index) {
    this.game = game;

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.spriteIndex = index;

    this.java = new Image();
    this.java.src = '/img/java.png';
    this.php = new Image();
    this.php.src = '/img/php-logo.png';
    this.cSharp = new Image();
    this.cSharp.src = '/img/c-sharp.png';
    this.python = new Image();
    this.python.src = '/img/python.png';
    this.ruby = new Image();
    this.ruby.src = '/img/ruby.png';

    this.boss = new Image();
    this.boss.src = '/img/c-lang.png';

    this.spriteArr = [this.java, this.php, this.cSharp, this.python, this.ruby, this.boss];

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
