// Class Feedback : fournit des retours sur une tentative, avec les pions noirs et blancs.

class Feedback {
  constructor(numberColor) {
    this.goodValueCount = 0;
    this.badValueCount = 0;
    this.numberColor = numberColor;
  }

  checkColor(guess, secretCode) {
    for (let i = 0; i < this.numberColor; i++) {
      //si l'emplacement de la couleur correspond à l'emplacement de la couleur dans la combinaison alors goodvalue+1
      if (guess[i] === secretCode[i]) {
        this.goodValueCount += 1;
      }
      //si la couleur correspond à un autre emplacement dans la combinaison alors badvalue+1
      else {
        for (let j = 0; j < this.numberColor; j++) {
          if (guess[i] === secretCode[j]) {
            this.badValueCount += 1;
          }
        }
      }
    }
  }
}

module.exports = {
  Feedback,
};
