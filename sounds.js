class Sounds {
  constructor(game) {
    this.game = game;

    // Start Game sound
    this.clickStartSound = new Audio('/sounds/start-game-sound.wav');
    // Game music
    this.gameMusic = new Audio('/sounds/Jeremy Blake - Powerup 8-bit Music.mp3');
    // Bullet being Fired
    this.fireBulletSound = new Audio('/sounds/zap.flac');
    // Bullet hitting enemy
    this.bulletHittingEnemy = new Audio('/sounds/bullet-hits-enemy.wav');
    // Enemy hits player
    this.enemyHitsPlayerSound = new Audio('/sounds/enemy-hits-player.wav');
    // Player Picks Powerup
    this.playerPicksPowerup = new Audio('/sounds/picked-powerup.mp3');
    // Game Over Sound
    this.gameOverSound = new Audio('/sounds/game-over.wav');
  }
}
