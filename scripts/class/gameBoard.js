// fichier classGameBoard qui correspond au plateau de jeu

class GameBoard {
  constructor(numberColor, numberTry) {
    this.numberColor = numberColor;
    this.numberTry = numberTry;
    this.Balls = [
      "Bleu",
      "Verte",
      "Rouge",
      "Jaune",
      "Violet",
      "Orange",
      "Rose",
      "Marron",
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
