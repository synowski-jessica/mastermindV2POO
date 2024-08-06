const { Player } = require("../scripts/class/player");

describe("createAttemptFromString", () => {
  test("should return the player's proposal to an array", () => {
    let player = new Player("jessica");
    player.createAttemptFromString("blue,red");
    player.createAttemptFromString("yellow,green");
    expect(player.attempts).toEqual([
      ["blue", "red"],
      ["yellow", "green"],
    ]);
  });
});

describe("increaseScore", () => {
  test("must return a +1 score increment", () => {
    let player = new Player("jessica");
    player.increaseScore();
    expect(player.score).toEqual(1);
  });
});

describe("increaseAttemptsStats", () => {
  test("must return a +1 score increment", () => {
    let player = new Player("jessica");
    player.increaseAttemptsStats();
    expect(player.attemptsStats).toEqual(1);
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

describe("resetAttemps", () => {
  test("must clear the player's proposal board", () => {
    let player = new Player("jessica");
    player.createAttemptFromString("blue,red");
    player.resetAttemps();
    expect(player.attempts).toEqual([]);
  });
});
