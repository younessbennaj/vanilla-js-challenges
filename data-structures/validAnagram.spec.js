function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const arr1 = str1.split("").reduce((acc, cur) => {
    return { ...acc, [cur]: (acc[cur] || 0) + 1 };
  }, {});

  const arr2 = str2.split("").reduce((acc, cur) => {
    return { ...acc, [cur]: (acc[cur] || 0) + 1 };
  }, {});

  for (const key in arr1) {
    if (arr1[key] !== arr2[key]) {
      return false;
    }
  }

  return true;
}

describe("validAnagram", () => {
  test("should return true for valid anagrams", () => {
    expect(validAnagram("anagram", "nagaram")).toBe(true);
    expect(validAnagram("cinema", "iceman")).toBe(true);
    expect(validAnagram("listen", "silent")).toBe(true);
  });

  test("should return false for invalid anagrams", () => {
    expect(validAnagram("hello", "world")).toBe(false);
    expect(validAnagram("foo", "bar")).toBe(false);
    expect(validAnagram("abc", "def")).toBe(false);
  });
});
