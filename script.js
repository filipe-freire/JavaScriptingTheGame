window.addEventListener('load', () => {
  const canvasElement = document.getElementById('game');
  const game = new Game(canvasElement);

  // const startButton = document.getElementById('startGame');
  let gameHasStarted = false;
  const startGameSound = () => game.sounds.clickStartSound.play();

  game.startButton.addEventListener('click', function () {
    if (gameHasStarted === false) {
      startGameSound();
      game.playMusic();
      gameHasStarted = true;
      game.startButton.innerHTML = 'Pause';
      game.loop();
    } else {
      game.togglePause();
    }
  });
});
