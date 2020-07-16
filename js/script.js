window.addEventListener('load', () => {
  const canvasElement = document.getElementById('game');
  const game = new Game(canvasElement);
  const newGameButton = document.getElementById('newGame');

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
      newGameButton.style.display = 'block';
    } else {
      game.togglePause();
    }
  });

  newGameButton.addEventListener('click', function () {
    // Add new game functionality here
  });
});
