// server/tests/unit/example.test.js
const sum = (a, b) => a + b;

describe("Simple math utility", () => {
  test("adds two numbers correctly", () => {
    expect(sum(2, 3)).toBe(5);
  });
});