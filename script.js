window.addEventListener('load', () => {
  const canvasElement = document.getElementById('game');

  const game = new Game(canvasElement);
  const startButton = document.getElementById('startGame');
  let gameHasStarted = false;
  const startGameSound = () => game.clickStartSound.play();

  startButton.onclick = function startGane() {
    if (gameHasStarted === false) {
      startGameSound();
      game.playMusic();
      gameHasStarted = true;
      game.loop();
    }
  };

  /* if (gameHasStarted === false && startButton.onclick()) {
    gameHasStarted = true;
    game.loop();
  } */
  /*
  window.addEventListener('keydown', event => {
    const key = event.key;
    switch (key) {
      case 'ArrowUp':
        event.preventDefault();
        this.player.y -= 10;
        break;
      
    }
  })
  */
});
