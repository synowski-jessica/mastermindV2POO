// Class gameAttempt : boite à outil d'un essai static non instanciable

const { Game } = require("./game");

class gameAttempt {
  constructor(goodValuesCount, badValuesCount) {
    this.goodValues = goodValuesCount;
    this.badValues = badValuesCount;
  }
  static checkColor(guess, secretCode, numberColor) {
    let goodValuesCount = 0;
    let badValuesCount = 0;

    // Créer un tableau pour suivre les indices déjà comptés dans secretCode
    const countedIndices = new Array(numberColor).fill(false);

    // Première boucle: compter les "good values" et marquer les indices correspondants
    for (let i = 0; i < numberColor; i++) {
      if (guess[i] === secretCode[i]) {
        goodValuesCount += 1;
        countedIndices[i] = true; // Marque cet indice comme utilisé
      }
    }

    // Deuxième boucle: compter les "bad values" uniquement pour les indices non encore comptés
    for (let i = 0; i < numberColor; i++) {
      if (guess[i] !== secretCode[i]) {
        for (let j = 0; j < numberColor; j++) {
          if (!countedIndices[j] && guess[i] === secretCode[j]) {
            badValuesCount += 1;
            countedIndices[j] = true; // Marque cet indice comme utilisé
            break; // Stoppe la recherche dès que la couleur est trouvée
          }
        }
      }
    }
    return new gameAttempt(goodValuesCount, badValuesCount);
    // return { goodValues: goodValuesCount, badValues: badValuesCount };
  }

  static gameTurn(attemptPlayer, game) {
    if (game.isGameContinue() === true) {
      let checkAttemptPlayer = gameAttempt.checkColor(
        attemptPlayer,
        game.secretCode,
        game.numberColor
      );

      if (checkAttemptPlayer.goodValues === 4) {
        return checkAttemptPlayer;
      } else {
        game.attemptCount++;
        return checkAttemptPlayer;
      }
    }
  }
}

module.exports = {
  gameAttempt,
};
