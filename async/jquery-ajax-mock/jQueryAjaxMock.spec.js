const jQueryAjaxMock = require("./jQueryAjaxMock");

describe("jQueryAjaxMock", () => {
  it("should call fullfilement handler", (done) => {
    expect.assertions(1);
    const onSucess = jest.fn();

    jQueryAjaxMock("exemple.com", {
      data: "success",
      forceSuccess: true,
      timeout: 200,
    }).done((res) => {
      onSucess(res);
      expect(onSucess).toBeCalledWith("success");
      done();
    });
  });

  it("should call fullfilement handler", (done) => {
    expect.assertions(1);
    const onSucess = jest.fn();
    const onError = jest.fn();

    jQueryAjaxMock("exemple.com", {
      error: "error",
      forceFail: true,
      timeout: 100,
    })
      .done((res) => {
        onSucess(res);
        expect(onSucess).not.toBeCalledWith("success");
        done();
      })
      .fail((err) => {
        onError(err);
        expect(onError).toBeCalledWith("error");
        done();
      });
  });

  it("should succeed randomly", (done) => {
    expect.assertions(1);
    const onSucess = jest.fn();
    const onError = jest.fn();

    jQueryAjaxMock("exemple.com", {
      data: "success",
      error: "error",
      random: true,
      timeout: 100,
    })
      .done((res) => {
        onSucess(res);
        expect(onSucess).toBeCalledWith("success");
        done();
      })
      .fail((err) => {
        onError(err);
        expect(onError).toBeCalledWith("error");
        done();
      });
  });
});
