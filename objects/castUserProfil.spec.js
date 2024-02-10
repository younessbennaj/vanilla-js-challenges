// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in
function castUserProfil(obj) {
  const { fn, ln, size, weight } = obj;
  return {
    fn,
    ln,
    ...(size && { size: size + "cm" }),
    ...(weight && { weight: weight + "kg" }),
  };
}

describe("Extracting information from objects", () => {
  it("should return an object", () => {
    const user1 = { fn: "Lisa", ln: "Müller", age: 17, size: 175, weight: 67 };
    expect(castUserProfil(user1)).toBeInstanceOf(Object);
  });

  it("should return correct information about user", () => {
    const user1 = { fn: "Lisa", ln: "Müller", age: 17, size: 175, weight: 67 };
    const expectedUser1 = {
      fn: "Lisa",
      ln: "Müller",
      size: "175cm",
      weight: "67kg",
    };
    const user2 = {
      fn: "Martin",
      ln: "Harper",
      age: 26,
      email: "martin.harper@test.de",
      weight: 102,
    };
    const expectedUser2 = { fn: "Martin", ln: "Harper", weight: "102kg" };
    const user3 = {
      fn: "Andrew",
      ln: "Harper",
      age: 81,
      size: 175,
      weight: 71,
    };
    const expectedUser3 = {
      fn: "Andrew",
      ln: "Harper",
      size: "175cm",
      weight: "71kg",
    };
    const user4 = {
      fn: "Matthew",
      ln: "Müller",
      age: 19,
      email: "matthew@mueller.de",
    };
    const expectedUser4 = { fn: "Matthew", ln: "Müller" };
    expect(castUserProfil(user1)).toStrictEqual(expectedUser1);
    expect(castUserProfil(user2)).toStrictEqual(expectedUser2);
    expect(castUserProfil(user3)).toStrictEqual(expectedUser3);
    expect(castUserProfil(user4)).toStrictEqual(expectedUser4);
  });
});
