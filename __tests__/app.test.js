const { GameBoard } = require("../scripts/classGameBoard");

describe("generateSecretCode", () => {
  test("should return a secretCode composed an array with propositions", () => {
    let play = new GameBoard(3, 12);
    expect(play.secretCode.length).toEqual(3);
  });
});
