// Class Game : gère la logique principale du jeu.

class Game {
  constructor(player, secretCode, numberTry) {
    this.player = player;
    this.secretCode = secretCode;
    this.attemptCountPlayer = 0;
    this.numberTry = numberTry;
  }

  checkStatus() {
    if (this.attemptCountPlayer > this.numberTry) {
      return false;
    } else {
      return true;
    }
  }

  increaseAttempt() {
    this.attemptCount++;
    return true;
  }
}

module.exports = {
  Game,
};
