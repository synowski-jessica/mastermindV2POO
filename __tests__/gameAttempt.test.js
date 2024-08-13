const { gameAttempt } = require("../scripts/class/gameAttempt");

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
