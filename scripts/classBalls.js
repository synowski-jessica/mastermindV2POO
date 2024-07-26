// Class Balls: représente les boules du mastermind
class Balls {
  constructor(colors) {
    this.colors = colors;
  }
}

//j'instancie la class Colors pour lui attribuer les couleurs possibles avec lesquelles l'utilsateur va jouer
const arrayColorsPossible = new Balls([
  "Bleu",
  "Verte",
  "Rouge",
  "Jaune",
  "Violet",
  "Orange",
  "Rose",
  "Marron",
]);
