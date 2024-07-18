// Class Game : gère la logique principale du jeu.
// Class Player : représente un joueur, peut être utile si on veut étendre le jeu pour plusieurs joueurs ou ajouter des fonctionnalités comme un historique de jeux.

// Class Colors: représente le choix de couleur possible du mastermind
class Colors {
  constructor(colors) {
    this.colors = colors;
  }
}

//j'instancie la class Colors pour lui attribuer les couleurs possibles avec lesquelles l'utilsateur va jouer
const arrayColorsPossible = new Colors([
  "Bleu",
  "Verte",
  "Rouge",
  "Jaune",
  "Violet",
  "Orange",
  "Rose",
  "Marron",
]);

// Class SecretCode : représente le code secret à deviner.

class SecretCode extends Colors {
  constructor(colors) {
    super(colors);
  }

  secretCode() {
    let index0 = arrayColorsPossible.colors[Math.floor(Math.random() * 8)];
    let index1 = arrayColorsPossible.colors[Math.floor(Math.random() * 8)];
    let index2 = arrayColorsPossible.colors[Math.floor(Math.random() * 8)];
    let index3 = arrayColorsPossible.colors[Math.floor(Math.random() * 8)];
    let codeSecret = [index0, index1, index2, index3];
    return codeSecret;
  }
}

const secretCode = new SecretCode().secretCode();
console.log("secretCode: " + secretCode);

// Class Guess : représente une tentative de deviner le code.
// Class Feedback : fournit des retours sur une tentative, avec les pions noirs et blancs.

module.exports = {
  SecretCode,
};
