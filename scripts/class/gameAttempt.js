// Class gameAttempt : boite à outil d'un essai static non instanciable

class gameAttempt {
  static checkColor(guess, secretCode, numberColor) {
    let goodValuesCount = 0;
    let badValuesCount = 0;
    for (let i = 0; i < numberColor; i++) {
      //si l'emplacement de la couleur correspond à l'emplacement de la couleur dans la combinaison alors goodvalue+1
      if (guess[i] === secretCode[i]) {
        goodValuesCount += 1;
      }
      //si la couleur correspond à un autre emplacement dans la combinaison alors badvalue+1
      else {
        for (let j = 0; j < numberColor; j++) {
          if (guess[i] === secretCode[j]) {
            badValuesCount += 1;
          }
        }
      }
    }
    return { goodValues: goodValuesCount, badValues: badValuesCount };
  }
}

module.exports = {
  gameAttempt,
};
