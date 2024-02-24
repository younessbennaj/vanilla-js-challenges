/* @jest-environment jsdom */

function insertNext(el, nodeString) {
  el.insertAdjacentHTML("afterend", nodeString);
}

describe("Insert DOM node next to target element", () => {
  test("should appear in DOM", () => {
    document.body.innerHTML = '<div><span id="one">One</span></div>';

    const nodeToInsert = '<span id="two">Two</span>';

    insertNext(document.getElementById("one"), nodeToInsert);

    const element1 = document.getElementById("one");
    const element2 = document.getElementById("two");

    expect(element1).not.toBeNull();
    expect(element2).not.toBeNull();

    console.log(document.body.innerHTML);
  });
});
