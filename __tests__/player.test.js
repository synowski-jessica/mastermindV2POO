const { Player } = require("../scripts/class/player");

describe("makeAttempt", () => {
  test("should return the player's proposal to an array", () => {
    let player = new Player("jessica");
    player.makeAttempt("blue,red");
    player.makeAttempt("yellow,green");
    expect(player.attempts).toEqual([
      ["blue", "red"],
      ["yellow", "green"],
    ]);
  });
});

describe("getStatPlayer", () => {
  test("should return the player's success percentage", () => {
    let player = new Player("jessica");
    player.score = 2;
    player.attemptsStats = 8;
    expect(player.getStatPlayer()).toEqual(25);
  });
});
