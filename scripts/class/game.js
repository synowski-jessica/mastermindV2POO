// Class Game : gère la logique principale du jeu.

class Game {
  constructor(player, secretCode, numberTry) {
    this.player = player;
    this.secretCode = secretCode;
    this.attemptCount = 0;
    this.numberTry = numberTry;
  }

  isGameContinue() {
    return this.attemptCount <= this.numberTry;
  }

  increaseAttempt() {
    this.attemptCount++;
    return true;
  }
}

module.exports = {
  Game,
};
