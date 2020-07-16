class Sounds {
  constructor(game) {
    this.game = game;

    // Start Game sound
    this.clickStartSound = new Audio('/sounds/start-game-sound.wav');
    this.clickStartSound.volume = 0.3;
    // Game music
    this.gameMusic = new Audio('/sounds/Jeremy Blake - Powerup 8-bit Music.mp3');
    this.gameMusic.volume = 0.5;
    // Bullet being Fired
    this.fireBulletSound = new Audio('/sounds/zap.flac');
    this.fireBulletSound.volume = 0.3;
    // Bullet hitting enemy
    this.bulletHittingEnemy = new Audio('/sounds/bullet-hits-enemy.wav');
    this.bulletHittingEnemy.volume = 0.3;
    // Enemy hits player
    this.enemyHitsPlayerSound = new Audio('/sounds/enemy-hits-player.wav');
    this.enemyHitsPlayerSound.volume = 0.5;
    // Player Picks Powerup
    this.playerPicksPowerup = new Audio('/sounds/picked-powerup.mp3');
    this.playerPicksPowerup.volume = 0.3;
    // Game Over Sound
    this.gameOverSound = new Audio('/sounds/game-over.wav');
    this.gameOverSound.volume = 0.3;
  }
}
