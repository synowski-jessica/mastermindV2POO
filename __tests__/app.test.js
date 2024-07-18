const index = require("../index.js");

describe("secretCode", () => {
  test("should return a secretCode composed an array with 4 propositions", () => {
    expect(new index.SecretCode().secretCode().length).toEqual(4);
  });
});
