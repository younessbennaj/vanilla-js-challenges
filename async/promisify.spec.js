// Before promises/async/await became the standard, it was a convention for async APIs
// in JavaScript to accept callbacks as the last argument. Many async versions of Node.js APIs
// (e.g. fs.readFile and fs.rm) have such signatures. Node.js util.promisify function was
// created to wrap around callback-based functions by returning Promises so that they can be
// used with async/await.

// Implement a function promisify that takes a function following the common callback-last
// error-first style, i.e. taking a (err, value) => ... callback as the last argument, and
// returns a version that returns promises.
const jQueryAjaxMock = require("./jquery-ajax-mock/jQueryAjaxMock");

function promisify(func) {
  return function (...args) {
    const that = this;
    return new Promise(function (resolve, reject) {
      func.call(that, ...args, function (err, res) {
        if (res) {
          resolve(res);
        } else {
          reject(err);
        }
      });
    });
  };
}

describe("Promisify", () => {
  it("should return a new instance of Promise", () => {
    function apiCall(callback) {
      jQueryAjaxMock("https://example.com", {
        data: 42,
        error: "error",
        forceSuccess: true,
        timeout: 200,
      })
        .done((res) => {
          callback(null, res);
        })
        .fail((err) => {
          callback(err);
        });
    }
    const promisedApiCall = promisify(apiCall);

    expect(promisedApiCall).toBeInstanceOf(Function);
  });

  test("resolve", async () => {
    expect.assertions(1);
    function apiCall(url, options, callback) {
      jQueryAjaxMock(url, options)
        .done((res) => {
          callback(null, res);
        })
        .fail((err) => {
          callback(err);
        });
    }
    const promisedApiCall = promisify(apiCall);

    const res = await promisedApiCall("https://example.com", {
      data: 42,
      error: "error",
      forceSuccess: true,
      timeout: 200,
    });

    expect(res).toEqual(42);
  });

  test("reject", async () => {
    expect.assertions(1);
    function apiCall(url, options, callback) {
      jQueryAjaxMock(url, options)
        .done((res) => {
          callback(null, res);
        })
        .fail((err) => {
          callback(err);
        });
    }
    const promisedApiCall = promisify(apiCall);

    try {
      const res = await promisedApiCall("https://example.com", {
        data: 42,
        error: "error",
        forceFail: true,
        timeout: 200,
      });
    } catch (err) {
      expect(err).toBe("error");
    }
  });

  test("one argument", async () => {
    function asyncIdentity(x, cb) {
      setTimeout(() => {
        cb(null, x);
      }, 10);
    }

    expect.assertions(1);
    const promisified = promisify(asyncIdentity);
    const res = await promisified(23);
    expect(res).toBe(23);
  });

  test("can access `this`", async () => {
    expect.assertions(1);
    function asyncAdd(a, b, cb) {
      setTimeout(() => {
        cb(null, a + b + this.base);
      }, 10);
    }

    const promisifiedAdd = promisify(asyncAdd);
    const obj = { base: 5, add: promisifiedAdd };
    const res = await obj.add(17, 19);
    expect(res).toBe(41);
  });
});
