// Class Game : gère la logique principale du jeu.

class Game {
  constructor(player, numberTry, numberColor) {
    this.player = player;
    this.attemptCount = 0;
    this.numberTry = numberTry;
    this.numberColor = numberColor;
    this.Balls = [
      "blue",
      "green",
      "red",
      "yellow",
      "purple",
      "orange",
      "pink",
      "brown",
    ];
    this.secretCode = this.generateSecretCode();
  }

  generateSecretCode() {
    let secretCode = [];
    for (let i = 0; i < this.numberColor; i++) {
      let randomColor =
        this.Balls[Math.floor(Math.random() * this.Balls.length)];
      secretCode.push(randomColor);
    }
    return secretCode;
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
