function clamp(value, lower, upper) {
  return Math.max(Math.min(value, upper), lower);
}

/*/

ex: 

clamp(5, 3, 10) => 5

clamp(12, 3, 10) => 10

clamp(3, 5, 10) => 5

clamp(-10, -3, 22) => -3

clamp(8, 2, 8) => 8 

clamp(-5, -5, 5) => -5

/*/

describe("Restrict a number within the inclusive lower and upper bounds", () => {
  test("positive value", () => {
    expect(clamp(5, 3, 10)).toBe(5);
    expect(clamp(12, 3, 10)).toBe(10);
    expect(clamp(3, 5, 10)).toBe(5);
  });

  test("negative value", () => {
    expect(clamp(-5, -10, -1)).toBe(-5);
    expect(clamp(-5, -3, -2)).toBe(-3);
    expect(clamp(-10, -100, -15)).toBe(-15);
  });

  test("mixed value", () => {
    expect(clamp(-5, -10, 10)).toBe(-5);
    expect(clamp(10, -3, 8)).toBe(8);
    expect(clamp(-200, -100, 1000)).toBe(-100);
  });
});
