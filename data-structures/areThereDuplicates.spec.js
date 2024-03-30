function areThereDuplicates(...args) {
  const fc = args.reduce((acc, cur) => {
    return { ...acc, [cur]: (acc[cur] || 0) + 1 };
  }, {});

  for (let key in fc) {
    if (fc[key] > 1) {
      return true;
    }
  }

  return false;
}

function areThereDuplicates2(...args) {
  const copy = [...args];

  copy.sort((a, b) => {
    if (a < b) {
      return -1;
    }

    if (a > b) {
      return 1;
    }

    return 0;
  });

  let i = 0;
  let j = 1;

  while (j < copy.length) {
    if (copy[i] !== copy[j]) {
      i = j;
    } else {
      return true;
    }
    j++;
  }

  return false;
}

describe("areThereDuplicates", () => {
  test("should return true if there are duplicates (frequency counter)", () => {
    expect(areThereDuplicates(1, 2, 3)).toBe(false);
    expect(areThereDuplicates(1, 2, 2)).toBe(true);
    expect(areThereDuplicates("a", "b", "c", "a")).toBe(true);
  });

  test("should return true if there are duplicates (multiple pointer)", () => {
    expect(areThereDuplicates2(1, 2, 3, 2, 3, 1, 1, 3)).toBe(true);
    expect(areThereDuplicates2(10, 9, 7, 9, 2, 1)).toBe(true);
    expect(areThereDuplicates2(1, 2, 3)).toBe(false);
    expect(areThereDuplicates2("b", "c", "a")).toBe(false);
    expect(areThereDuplicates2("a", "b", "c", "a")).toBe(true);
  });
});
