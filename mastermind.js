// jeu du mastermind

const { Player } = require("./scripts/class/player");
const { Game } = require("./scripts/class/game");
const { gameAttempt } = require("./scripts/class/gameAttempt");

//initialisation du joueur
const player = new Player("jessica");

//initialisation de la partie
const game = new Game(player, 12, 4);
console.log(game);

//tour de jeu 1
let gameTurnPlayer = gameAttempt.gameTurn(
  ["blue", "brown", "yellow", "pink"],
  game
);

console.log(gameTurnPlayer);
console.log(game);

//tour de jeu 2
let gameTurnPlayer2 = gameAttempt.gameTurn(
  ["blue", "yellow", "brown", "pink"],
  game
);

console.log(gameTurnPlayer2);
console.log(game);
