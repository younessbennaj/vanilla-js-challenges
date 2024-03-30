function sameFrequency(num1, num2) {
  const arr1 = String(num1).split("");
  const arr2 = String(num2).split("");
  let obj1 = arr1.reduce((acc, cur) => {
    return { ...acc, [cur]: (acc[cur] || 0) + 1 };
  }, {});
  const obj2 = arr2.reduce((acc, cur) => {
    return { ...acc, [cur]: (acc[cur] || 0) + 1 };
  }, {});

  for (let val of arr2) {
    if (!obj1[val]) {
      return false;
    }

    if (obj1[val]) {
      obj1[val] -= 1;
    }
  }

  return true;
}

describe("sameFrequency", () => {
  it("should return true if the two positive integers have the same frequency of digits", () => {
    expect(sameFrequency(182, 281)).toBe(true);
    expect(sameFrequency(34, 14)).toBe(false);
    expect(sameFrequency(3589578, 5879385)).toBe(true);
    expect(sameFrequency(22, 222)).toBe(false);
  });
});
