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
const gameStatus = game.checkStatus();
console.log("gameStatus:" + gameStatus);

//tour de jeu
if (gameStatus) {
  const attemptPlayer = ["blue", "brown", "yellow", "pink"];
  game.increaseAttempt();
  attempt0 = gameAttempt.checkColor(
    attemptPlayer,
    secretCode,
    initializedGame.numberColor
  );
  console.log(attempt0.goodValues);
  if (attempt0.goodValues === 4) {
    player.increaseAttemptsStats;
    player.increaseScore();
    return true;
  } else {
    player.resetAttemps();
  }
}
return false;
