const { Game } = require("../scripts/class/game");

describe("generateSecretCode", () => {
  test("should return a secretCode composed an array with propositions", () => {
    let play = new Game("jessica", 12, 3);
    expect(play.secretCode.length).toEqual(3);
  });
});

describe("isGameContinue", () => {
  test("must return false if the player's number of tries are greater than the number of tries scheduled for the game", () => {
    const game = new Game("jess", ["blue", "yellow", "green", "pink"], 2);
    game.attemptCount = 3;
    expect(game.isGameContinue()).toEqual(false);
  });
});

describe("isGameContinue", () => {
  test("must return true if the player's number of tries are less than the number of tries scheduled for the game", () => {
    const game = new Game("jess", 12, 4);
    expect(game.isGameContinue()).toEqual(true);
  });
});

describe("increaseAttempt", () => {
  test("must increment the player's try number +1", () => {
    const game = new Game("jess", 12, 4);
    game.increaseAttempt();
    expect(game.attemptCount).toEqual(1);
  });
});

describe("increaseAttempt", () => {
  test("must return true to me if the method is used", () => {
    const game = new Game("jess", 12, 4);
    expect(game.increaseAttempt()).toEqual(true);
  });
});
