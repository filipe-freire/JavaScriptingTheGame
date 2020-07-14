window.addEventListener('load', () => {
  const canvasElement = document.getElementById('game');

  const game = new Game(canvasElement);
  const startButton = document.getElementById('startGame');
  let gameHasStarted = false;
  const startGameSound = () => game.clickStartSound.play();
  /*
  startButton.onclick = function startGane() {
    if (gameHasStarted === false) {
      startGameSound();
      game.playMusic();
      gameHasStarted = true;
      startButton.innerHTML = 'Pause';
      game.loop();
    }
  };
*/
  startButton.addEventListener('click', function () {
    if (gameHasStarted === false) {
      startGameSound();
      game.playMusic();
      gameHasStarted = true;
      startButton.innerHTML = 'Pause';
      game.loop();
    } else if (!game.isPaused) {
      startButton.innerHTML = 'Start';
      game.togglePause();
    } else if (game.isPaused) {
      startButton.innerHTML = 'Pause';
      game.togglePause();
    }
  });

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
