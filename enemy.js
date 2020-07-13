class Enemy {
  constructor(game, x, y, width, height, speed, sprite) {
    this.game = game;

    this.x = x;
    this.y = y;
    this.width = width;
    this.heigth = height;
    this.speed = speed;
    this.spriteSrc = sprite;
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

    let enemySprite = new Image();
    enemySprite.src = this.spriteSrc;

    enemySprite.addEventListener('load', () => {
      context.drawImage(enemySprite, this.x, this.y, this.width, this.heigth);
    });
  }
}
