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
    this.enemiesArr = [];
    for (let i = 0; i < 15; i++) {
      const enemy = this.enemy;
      this.enemiesArr.push(enemy);
    }

    // Powerups
    this.powerup = new Powerup(
      this,
      generateRandomNumber(500, 600),
      generateRandomNumber(0, 450),
      50,
      50,
      generateRandomNumber(3, 5), //2.5, 4)
      generateRandomNumber(0, 3)
    );
    this.powerupsArr = [];
    for (let i = 0; i < 3; i++) {
      const powerup = this.powerup;
      this.powerupsArr.push(powerup);
    }

    // Bullets
    this.bullets = [];

    // Game Over
    this.isRunning = true;

    this.screenText = new Screentext(this);

    this.setKeyBindings();

    this.isPaused = false;

    // ---- Sounds ----
    // Start Game sound
    this.clickStartSound = new Audio('/start-game-sound.wav');

    // Game music
    this.gameMusic = new Audio('/Jeremy Blake - Powerup 8-bit Music.mp3');

    // Bullet being Fired
    this.fireBulletSound = new Audio('/zap.flac');

    // Bullet hitting enemy
    this.bulletHittingEnemy = new Audio('/bullet-hits-enemy.wav');

    // Enemy hits player
    this.enemyHitsPlayerSound = new Audio('/enemy-hits-player.wav');

    // Player Picks Powerup
    this.playerPicksPowerup = new Audio('/picked-powerup.mp3');

    // Game Over Sound
    this.gameOverSound = new Audio('/game-over.wav');

    // CONSTRUCTOR ENDS
  }

  playMusic() {
    this.gameMusic.play();
    console.log('music');
  }

  togglePause() {
    if (!this.isPaused) {
      this.isPaused = true;
    } else if (this.isPaused) {
      this.isPaused = false;
    }
  }

  setKeyBindings() {
    window.addEventListener('keydown', event => {
      const key = event.key;
      switch (key) {
        case 'ArrowUp':
          if (!this.isPaused) {
            event.preventDefault();
            this.player.y -= 10;
            break;
          }
        case 'ArrowDown':
          if (!this.isPaused) {
            event.preventDefault();
            this.player.y += 10;
            break;
          }
        case ' ':
          if (!this.isPaused) {
            event.preventDefault();
            if (this.bullet.bulletsLeft > 0) {
              this.bullet.bulletsLeft--;
              //console.log(this.bullet.bulletsLeft);
              const bullet = new Bullet(this);
              this.bullets.push(bullet);
              //console.log(this.bullets);
              this.fireBulletSound.play();
            } else {
              //console.log("You're out of bullets!");
            }
            break;
          }
        case 'q':
          event.preventDefault();
          this.togglePause();
      }
    });
  }

  runLogic() {
    this.player.runLogic();

    // enemy run logic
    for (let enemy of this.enemiesArr) {
      enemy.runLogic();

      const intersectingWithPlayer = enemy.checkIntersection(this.player);

      // check collision with player
      if (intersectingWithPlayer) {
        this.enemyHitsPlayerSound.play();
        const index = this.enemiesArr.indexOf(enemy);
        this.enemiesArr.splice(index, 1);
        this.player.health -= 20;
      }

      // check collision with bullet
      if (this.bullets.length > 0) {
        const intersectingWithBullet = enemy.checkIntersection(this.bullets[0]);
        // console.log(intersectingWithBullet);
        if (intersectingWithBullet) {
          this.bulletHittingEnemy.play();
          this.screenText.enemiesEliminated += 1;
          const index = this.enemiesArr.indexOf(enemy);
          this.enemiesArr.splice(index, 1);
        }
      }

      // eleminate enemy from array if it goes off canvas
      if (enemy.x + enemy.width < 0) {
        const index = this.enemiesArr.indexOf(enemy);
        this.enemiesArr.splice(index, 1);
      }
    }

    // push a new enemy into the enemiesArr whenever one is taken out of the game
    if (this.enemiesArr.length < 15) {
      const enemy = new Enemy(
        this,
        generateRandomNumber(1000, 1500),
        generateRandomNumber(0, 450),
        50,
        50,
        generateRandomNumber(3, 4.5), //2.5, 4)
        generateRandomNumber(0, 4)
      );
      this.enemiesArr.push(enemy);
    }

    // Powerup

    for (let powerup of this.powerupsArr) {
      powerup.runLogic();

      const intersectingWithPlayer = powerup.checkIntersection(this.player);
      if (intersectingWithPlayer) {
        this.playerPicksPowerup.play();
        const index = this.powerupsArr.indexOf(powerup);
        this.powerupsArr.splice(index, 1);
        this.bullet.bulletsLeft += 5;
      }
      if (powerup.x + powerup.width < 0) {
        const index = this.powerupsArr.indexOf(powerup);
        this.powerupsArr.splice(index, 1);
      }
    }

    // pushes a new powerup
    if (this.powerupsArr.length < 3) {
      const powerup = new Powerup(
        this,
        generateRandomNumber(1000, 1500),
        generateRandomNumber(0, 450),
        50,
        50,
        generateRandomNumber(3, 4.5), //2.5, 4)
        generateRandomNumber(0, 3)
      );
      this.powerupsArr.push(powerup);
    }

    // Bullet
    if (this.bullets.length > 0) {
      for (let bullet of this.bullets) {
        const index = this.bullets.indexOf(bullet);
        bullet.runLogic();
        //eleminate if it goes off canvas
        if (bullet.x > 1000) {
          this.bullets.splice(index, 1);
        }
      }
    }

    // Game Over
    if (this.player.health <= 0) {
      this.isRunning = false;
      this.gameOverSound.play();
      this.gameMusic.pause();
    }

    // Update Score
    const interval = setInterval(this.screenText.incrementScore(), 1000);
  }

  clean() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  paint() {
    this.player.paint();
    this.screenText.paint();
    for (let enemy of this.enemiesArr) {
      enemy.paint();
    }
    for (let powerup of this.powerupsArr) {
      powerup.paint();
    }
    if (this.bullets.length > 0) {
      for (let bullet of this.bullets) {
        bullet.paint();
      }
    }
  }

  loop() {
    // Run logic
    if (!this.isPaused) {
      this.runLogic();
    }

    // Erase
    this.clean();

    // Paint
    this.paint();

    if (this.isRunning) {
      setTimeout(() => {
        this.loop();
      }, 1000 / 60);
    } else {
      console.log('Game Over');
      alert(
        `Game Over! You managed to keep your code integrity from collapsing for ${Math.floor(
          this.screenText.score
        )} seconds and eliminate ${this.screenText.enemiesEliminated} threats!`
      );
    }
  }
}
