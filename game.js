const generateRandomNumber = (lower, upper) => {
  return Math.floor(Math.random() * (upper + 1 - lower)) + lower;
};

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');

    this.player = new Player(this);
    this.bullet = new Bullet(this);
    this.enemy = new Enemy(
      this,
      generateRandomNumber(1000, 1400),
      generateRandomNumber(0, 450),
      50,
      50,
      generateRandomNumber(3, 4.5), //2.5, 4)
      generateRandomNumber(0, 5)
    );
    this.enemies = [];
    for (let i = 0; i < 1; i++) {
      const enemy = this.enemy;
      this.enemies.push(enemy);
    }
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
          console.log('arrow up pressed');
          console.log(this.player.y);
          break;
        case 'ArrowDown':
          event.preventDefault();
          this.player.y += 10;
          console.log('arrow down pressed');
          console.log(this.player.y);
          break;
        case ' ': // doesn't work. Figure out why
          event.preventDefault();

          console.log('bullet fired.');
          break;
      }
    });
  }

  runLogic() {
    this.player.runLogic();
    this.bullet.runLogic();

    for (let enemy of this.enemies) {
      enemy.runLogic();

      const intersecting = enemy.checkIntersection(this.player);
      //console.log(intersecting);
      if (intersecting) {
        const index = this.enemies.indexOf(enemy);
        this.enemies.splice(index, 1);
        this.player.health -= 20;
      }

      if (enemy.x + enemy.width < 0) {
        const index = this.enemies.indexOf(enemy);
        this.enemies.splice(index, 1);
      }
    }
    if (this.enemies.length < 1) {
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
    /* if (bulletFired) {
      this.bullet.paint();
    }
    */
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
