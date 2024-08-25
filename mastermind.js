// jeu du mastermind

const { GameBoard } = require("./scripts/class/gameBoard");
const { Player } = require("./scripts/class/player");
const { Game } = require("./scripts/class/game");
const { gameAttempt } = require("./scripts/class/gameAttempt");

//initialisation du plateau de jeu
const initializedGame = new GameBoard(4, 12);

//initialisation du code secret
const secretCode = initializedGame.generateSecretCode();
console.log("code secret:" + secretCode);

//initialisation du joueur
const player = new Player("jessica");

//initialisation de la partie
const game = new Game(player, secretCode, initializedGame.numberTry);
console.log(game);

//tour de jeu
let gameTurnPlayer = gameAttempt.gameTurn(
  ["blue", "brown", "yellow", "pink"],
  game.isGameContinue(),
  secretCode,
  initializedGame.numberColor
);
