const { Feedback } = require("../scripts/class/feedback");

describe("checkColor", () => {
  test("must compare the player's proposal with the secret code and return the number of well-placed balls with the correct color", () => {
    let feedback = new Feedback(5);
    feedback.checkColor(
      ["blue", "red", "yellow", "green", "pink"],
      ["blue", "pink", "red", "green", "red"]
    );
    expect(feedback.goodValueCount).toEqual(2);
  });
});

describe("checkColor", () => {
  test("must compare the player's proposal with the secret code and return the number of misplaced balls with the correct color", () => {
    let feedback = new Feedback(5);
    feedback.checkColor(
      ["blue", "red", "yellow", "green", "pink"],
      ["blue", "pink", "red", "yellow", "green"]
    );
    expect(feedback.badValueCount).toEqual(4);
  });
});
