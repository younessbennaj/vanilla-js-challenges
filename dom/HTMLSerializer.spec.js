function serializeHTML(tree) {
  function getEscapePrefix(level) {
    return "\n" + "\t".repeat(level - 1);
  }

  function getOpeningTag(tagName) {
    return "<" + tagName + ">";
  }

  function getClosingTag(tagName) {
    return "</" + tagName + ">";
  }

  const result = [];
  let level = 0;

  function parseTree(element) {
    level++;
    if (element.tag) {
      result.push(getEscapePrefix(level));
      result.push(getOpeningTag(element.tag));
      for (let child of element.children) {
        parseTree(child);
      }
      result.push(getEscapePrefix(level));
      result.push(getClosingTag(element.tag));
    } else {
      result.push(getEscapePrefix(level));
      result.push(element);
    }
    level--;
  }

  parseTree(tree);

  // remove the first "new line" escape character
  result.shift();

  return result.join("");
}

describe("HTML Serializer", () => {
  it("should return a string", () => {
    const tree = {
      tag: "div",
      children: [
        {
          tag: "p",
          children: ["Paragrah"],
        },
        {
          tag: "span",
          children: ["Span"],
        },
      ],
    };
    expect(typeof serializeHTML(tree)).toEqual("string");
  });

  test("simple html string", () => {
    const tree = {
      tag: "div",
      children: [
        {
          tag: "p",
          children: ["Paragrah"],
        },
        {
          tag: "span",
          children: ["Span"],
        },
      ],
    };
    const ouput =
      "<div>\n\t<p>\n\t\tParagrah\n\t</p>\n\t<span>\n\t\tSpan\n\t</span>\n</div>";
    serializeHTML(tree);
    expect(serializeHTML(tree)).toBe(ouput);
  });

  test("more complexe html string", () => {
    const tree = {
      tag: "html",
      children: [
        {
          tag: "head",
          children: [
            {
              tag: "title",
              children: ["List and Links Page"],
            },
          ],
        },
        {
          tag: "body",
          children: [
            {
              tag: "h2",
              children: ["Favorite Links"],
            },
            {
              tag: "ul",
              children: [
                {
                  tag: "li",
                  children: ["Item1"],
                },
                {
                  tag: "li",
                  children: ["Item2"],
                },
                {
                  tag: "li",
                  children: ["Item3"],
                },
              ],
            },
          ],
        },
      ],
    };

    const ouput =
      "<html>\n\t<head>\n\t\t<title>\n\t\t\tList and Links Page\n\t\t</title>\n\t</head>\n\t<body>\n\t\t<h2>\n\t\t\tFavorite Links\n\t\t</h2>\n\t\t<ul>\n\t\t\t<li>\n\t\t\t\tItem1\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\tItem2\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\tItem3\n\t\t\t</li>\n\t\t</ul>\n\t</body>\n</html>";
    serializeHTML(tree);
    expect(serializeHTML(tree)).toBe(ouput);
  });
});
