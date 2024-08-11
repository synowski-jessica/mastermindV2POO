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

describe("resetGoodValueCount", () => {
  test("must reset goodValueCount", () => {
    let feedback = new Feedback(5);
    feedback.goodValueCount = 4;
    feedback.resetGoodValueCount();
    expect(feedback.goodValueCount).toEqual(0);
  });
});

describe("resetGoodValueCount", () => {
  test("must return true to me if the method is used", () => {
    let feedback = new Feedback(5);
    expect(feedback.resetGoodValueCount()).toEqual(true);
  });
});

describe("resetBadValueCount", () => {
  test("must reset badValueCount", () => {
    let feedback = new Feedback(5);
    feedback.badValueCount = 4;
    feedback.resetBadValueCount();
    expect(feedback.badValueCount).toEqual(0);
  });
});

describe("resetBadValueCount", () => {
  test("must return true to me if the method is used", () => {
    let feedback = new Feedback(5);
    expect(feedback.resetBadValueCount()).toEqual(true);
  });
});
