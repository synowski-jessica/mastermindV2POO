// Class Game : gère la logique principale du jeu.

class Game {
  constructor(player, secretCode, numberTryGame) {
    this.player = player;
    this.secretCode = secretCode;
    this.attemptCountPlayer = 0;
    this.numberTryGame = numberTryGame;
  }

  checkGameStatus() {
    if (this.attemptCountPlayer > this.numberTryGame) {
      return false;
    } else {
      return true;
    }
  }

  lostGame(checkGameStatus) {
    if (checkGameStatus === false) {
      return console.log(
        `La partie est perdue, la combinaison secrète était: ${this.secretCode}.`
      );
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
