window.addEventListener('load', () => {
  const canvasElement = document.getElementById('game');
  const game = new Game(canvasElement);
  const newGameButton = document.getElementById('newGame');

  // const startButton = document.getElementById('startGame');
  let gameHasStarted = false;
  const startGameSound = () => game.sounds.clickStartSound.play();

  const resetGame = () => {
    game.isRunning = false;
    game.isPaused = false;
    game.gameOver = false;

    game.player.movementSpeed = 15;
    game.player.x = 25;
    game.player.y = 25;
    game.player.health = 200;

    game.bullet.bulletsLeft = 50;
    game.bullet.bulletBossCounter = 0;

    game.enemiesArr = [];
    game.bossArr = [];
    game.powerupsArr = [];
    game.vuesPicked = [];
    game.bullets = [];
    game.screenText.level = 1;
    game.screenText.score = 0;
    game.screenText.enemiesEliminated = 0;
    game.screenText.gameOverMessage = '';
    game.screenText.bossBattleX = 1000;
  };

  game.startButton.addEventListener('click', function () {
    newGameButton.style.display = 'inline-block';
    if (gameHasStarted === false) {
      startGameSound();
      game.playMusic();
      gameHasStarted = true;
      game.startButton.innerHTML = 'Pause';
      game.loop();
    } else {
      startGameSound();
      game.togglePause();
    }
  });

  newGameButton.addEventListener('click', function () {
    startGameSound();
    resetGame();
    game.togglePause();
    game.sounds.gameMusic.currentTime = 0;
    //newGameButton.style.display = 'none';
  });
});
