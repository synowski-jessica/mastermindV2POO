// jeu du mastermind

const { GameBoard } = require("./scripts/class/gameBoard");
const { Player } = require("./scripts/class/player");
const { Game } = require("./scripts/class/game");
const { Feedback } = require("./scripts/class/feedback");

//initialisation du plateau de jeu
const initializedGame = new GameBoard(4, 12);

//initialisation du code secret
const secretCode = initializedGame.generateSecretCode();
console.log("code secret:" + secretCode);

//initialisation du joueur
const player = new Player("jessica");

//initialisation de la class feedback
const feedback = new Feedback(initializedGame.numberColor);

//initialisation de la partie
const game = new Game(player, secretCode, initializedGame.numberTryGame);
console.log(game);
const gameStatus = game.checkGameStatus();
console.log("gameStatus:" + gameStatus);

//tour de jeu
while (gameStatus) {
  const attemptPlayer = player.createAttemptFromString(
    "blue,brown,yellow,pink"
  );
  console.log(attemptPlayer[0]);
  game.increaseAttempt();
  feedback.checkColor(attemptPlayer[0], secretCode);
  console.log(feedback);
  if (feedback.goodValueCount === 4) {
    player.increaseAttemptsStats;
    player.increaseScore();
    return console.log("Vous avez gagné !");
  } else {
    feedback.resetBadValueCount();
    feedback.resetGoodValueCount();
    player.resetAttemps();
  }
}
return console.log(game.lostGame(gameStatus));
