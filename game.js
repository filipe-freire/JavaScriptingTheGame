const generateRandomNumber = (lower, upper) => {
  return Math.floor(Math.random() * (upper + 1 - lower)) + lower;
};

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');

    this.player = new Player(this);
    this.bullet = new Bullet(this);
    // enemies
    this.enemy = new Enemy(
      this,
      generateRandomNumber(1000, 1400),
      generateRandomNumber(0, 450),
      50,
      50,
      generateRandomNumber(3, 5), //2.5, 4)
      generateRandomNumber(0, 5)
    );
    this.enemies = [];
    for (let i = 0; i < 15; i++) {
      const enemy = this.enemy;
      this.enemies.push(enemy);
    }
    // Bullets
    this.bullets = [];

    this.scoreboard = new Scoreboard(this);

    this.setKeyBindings();
  }

  setKeyBindings() {
    window.addEventListener('keydown', event => {
      const key = event.key;
      switch (key) {
        case 'ArrowUp':
          event.preventDefault();
          this.player.y -= 10;
          break;
        case 'ArrowDown':
          event.preventDefault();
          this.player.y += 10;
          break;
        case ' ':
          event.preventDefault();
          if (this.bullet.bulletsLeft > 0) {
            this.bullet.bulletsLeft--;
            console.log(this.bullet.bulletsLeft);
            const bullet = new Bullet(this);
            this.bullets.push(bullet);
            console.log(this.bullets);
          } else {
            console.log("You're out of bullets!");
          }
          break;
      }
    });
  }

  runLogic() {
    this.player.runLogic();

    for (let enemy of this.enemies) {
      enemy.runLogic();
      const intersectingWithPlayer = enemy.checkIntersection(this.player);
      //console.log(intersectingWithPlayer);
      if (intersectingWithPlayer) {
        const index = this.enemies.indexOf(enemy);
        this.enemies.splice(index, 1);
        this.player.health -= 20;
      }

      if (this.bullets.length > 0) {
        const intersectingWithBullet = enemy.checkIntersection(this.bullets[0]);
        console.log(intersectingWithBullet);
        if (intersectingWithBullet) {
          const index = this.enemies.indexOf(enemy);
          this.enemies.splice(index, 1);
        }
      }
      if (enemy.x + enemy.width < 0) {
        const index = this.enemies.indexOf(enemy);
        this.enemies.splice(index, 1);
      }
    }
    if (this.enemies.length < 15) {
      const enemy = new Enemy(
        this,
        generateRandomNumber(1000, 1500),
        generateRandomNumber(0, 450),
        50,
        50,
        generateRandomNumber(3, 4.5), //2.5, 4)
        generateRandomNumber(0, 4)
      );
      this.enemies.push(enemy);
    }
    // Bullet
    if (this.bullets.length > 0) {
      for (let bullet of this.bullets) {
        const index = this.bullets.indexOf(bullet);
        bullet.runLogic();
        if (bullet.x > 1000) {
          this.bullets.splice(index, 1);
        }
      }
    }
  }

  clean() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  paint() {
    this.player.paint();
    this.scoreboard.paint();
    for (let enemy of this.enemies) {
      enemy.paint();
    }
    if (this.bullets.length > 0) {
      for (let bullet of this.bullets) {
        bullet.paint();
      }
    }
  }

  loop() {
    // Run logic
    this.runLogic();

    // Erase
    this.clean();

    // Paint
    this.paint();

    setTimeout(() => {
      this.loop();
    }, 1000 / 60);
  }
}
