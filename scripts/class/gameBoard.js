// fichier classGameBoard qui correspond au plateau de jeu

class GameBoard {
  constructor(numberColor, numberTryGame) {
    this.numberColor = numberColor;
    this.numberTryGame = numberTryGame;
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
}

module.exports = {
  GameBoard,
};
