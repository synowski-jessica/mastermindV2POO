const { gameAttempt } = require("../scripts/class/gameAttempt");
const { Game } = require("../scripts/class/game");

describe("checkColor", () => {
  test("must compare the player's proposal with the secret code and return the number of well-placed balls with the correct color", () => {
    expect(
      gameAttempt.checkColor(
        ["blue", "yellow", "green", "pink"],
        ["blue", "yellow", "purple", "green"],
        4
      )
    ).toEqual({ goodValues: 2, badValues: 1 });
  });
});

describe("gameTurn", () => {
  test("must perform the checkcolor method and increment attemptCount if the person has not found the correct colors in the secret code ", () => {
    let launchGame = new Game("jessica", 12, 4);
    launchGame.secretCode = ["blue", "green", "pink", "yellow"];

    expect(
      gameAttempt.gameTurn(["blue", "yellow", "green", "pink"], launchGame)
    ).toEqual({ goodValues: 1, badValues: 3 });

    expect(launchGame.attemptCount).toEqual(1);
  });
});
