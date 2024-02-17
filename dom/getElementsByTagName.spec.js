/* @jest-environment jsdom */
const html1 = "<div><span>Span</span><p>Paragraph</p></div>";
const html2 = "<div><ul><li>Item 1</li><li>Item 2</li></ul></div>";

function getElementsByTagName(element, tagName) {
  const result = [];
  function parseTree(el) {
    if (
      el.tagName === tagName.toUpperCase() &&
      element.tagName !== tagName.toUpperCase()
    ) {
      result.push(el);
    }

    for (let child of el.children) {
      parseTree(child);
    }
  }

  parseTree(element);

  return result;
}

describe("Get elments by tag name", () => {
  test("example 1", () => {
    document.body.innerHTML = html1;

    const elements = getElementsByTagName(document.body, "span");

    expect(elements.length).toEqual(1);
    expect(elements[0].tagName).toEqual("SPAN");
  });

  test("example 2", () => {
    document.body.innerHTML = html2;

    const elements = getElementsByTagName(document.body, "li");

    expect(elements.length).toEqual(2);
    expect(elements[0].tagName).toEqual("LI");
  });

  test("non exitent tag", () => {
    document.body.innerHTML = html2;

    const elements = getElementsByTagName(document.body, "p");

    expect(() => getElementsByTagName(document.body, "p")).not.toThrow();
    expect(elements.length).toEqual(0);
  });

  test("doesn't include himself", () => {
    document.body.innerHTML = html2;

    const elements = getElementsByTagName(document.body, "body");

    expect(elements.length).toEqual(0);
  });
});
