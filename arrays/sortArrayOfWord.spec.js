const array1 = [
  "apple",
  "banana",
  "grape",
  "orange",
  "kiwi",
  "mango",
  "pear",
  "strawberry",
  "watermelon",
  "pineapple",
];
const array2 = [
  "carrot",
  "broccoli",
  "potato",
  "tomato",
  "cucumber",
  "spinach",
  "lettuce",
  "onion",
  "pepper",
  "zucchini",
];
const array3 = [
  "elephant",
  "lion",
  "giraffe",
  "zebra",
  "tiger",
  "rhinoceros",
  "hippopotamus",
  "cheetah",
  "kangaroo",
  "koala",
];

const sortedArray1 = [
  "apple",
  "banana",
  "grape",
  "kiwi",
  "mango",
  "orange",
  "pear",
  "pineapple",
  "strawberry",
  "watermelon",
];
const sortedArray2 = [
  "broccoli",
  "carrot",
  "cucumber",
  "lettuce",
  "onion",
  "pepper",
  "potato",
  "spinach",
  "tomato",
  "zucchini",
];
const sortedArray3 = [
  "cheetah",
  "elephant",
  "giraffe",
  "hippopotamus",
  "kangaroo",
  "koala",
  "lion",
  "rhinoceros",
  "tiger",
  "zebra",
];

const reversedArray1 = [
  "watermelon",
  "strawberry",
  "pineapple",
  "pear",
  "orange",
  "mango",
  "kiwi",
  "grape",
  "banana",
  "apple",
];
const reversedArray2 = [
  "zucchini",
  "tomato",
  "spinach",
  "potato",
  "pepper",
  "onion",
  "lettuce",
  "cucumber",
  "carrot",
  "broccoli",
];
const reversedArray3 = [
  "zebra",
  "tiger",
  "rhinoceros",
  "lion",
  "koala",
  "kangaroo",
  "hippopotamus",
  "giraffe",
  "elephant",
  "cheetah",
];

function sortArrayOfWord(arr, order) {
  if (order === "asc") return arr.sort();
  if (order === "desc") return arr.sort().reverse();
}

describe("Sort array of word", () => {
  test("asc order", () => {
    expect(sortArrayOfWord(array1, "asc")).toStrictEqual(sortedArray1);
    expect(sortArrayOfWord(array2, "asc")).toStrictEqual(sortedArray2);
    expect(sortArrayOfWord(array3, "asc")).toStrictEqual(sortedArray3);
  });

  test("asc order", () => {
    expect(sortArrayOfWord(array1, "desc")).toStrictEqual(reversedArray1);
    expect(sortArrayOfWord(array2, "desc")).toStrictEqual(reversedArray2);
    expect(sortArrayOfWord(array3, "desc")).toStrictEqual(reversedArray3);
  });
});
