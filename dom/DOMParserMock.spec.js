/*
  const html = "<div><span>Span</span><p>Paragraph</p></div>";

  const document = DOMParserMock(html);

  document.children => [...]

  document.getElementsByTagName => [...]

  document.innerHTML =>

  {
      body: {
        tagName: "BODY",
        children: [
          {
            tagName: "DIV",
            children: [
              {
                tagName: "SPAN",
                children: [],
                innerHTML: "Span",
              },
              {
                tagName: "P",
                children: [],
                innerHTML: "Paragraph",
              },
            ],
            innerHTML: "<span>Span</span><p>Paragraph</p>",
          },
        ],
        innerHTML: "<div><span>Span</span><p>Paragraph</p></div>",
      },
    };
*/