window.addEventListener('load', () => {
  const canvasElement = document.getElementById('game');

  const game = new Game(canvasElement);
  // game.setKeyBindings();

  game.loop();
});
