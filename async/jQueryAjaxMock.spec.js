/**
 * Simule une requête AJAX avec des options de configuration.
 * @param {string} url - L'URL de la requête AJAX.
 * @param {Object} options - Les options de configuration.
 * @param {boolean} [options.forceFail=false] - Indique si la requête doit échouer intentionnellement.
 * @param {boolean} [options.forceSuccess=false] - Indique si la requête doit réussir intentionnellement.
 * @param {number} [options.timeout=0] - La durée maximale (en millisecondes) avant que la requête ne soit résolue ou rejetée.
 * @param {boolean} [options.random=false] - Indique si le résultat de la requête doit être généré de manière aléatoire.
 * @param {*} [options.data=null] - Les données à renvoyer en cas de succès.
 * @param {*} [options.error=null] - Les données à renvoyer en cas d'erreur.
 * @returns {JQuery.Promise} - Une promesse jQuery représentant l'état de la requête AJAX simulée.
 * @example
 * jQueryAjaxMock('exemple.com', { forceFail: true, timeout: 1000 })
 *   .done(function() {
 *     console.log("success");
 *   })
 *   .fail(function() {
 *     console.log("error");
 *   });
 * @example
 * // Une requête qui réussit intentionnellement avec un résultat aléatoire.
 * jQueryAjaxMock('exemple.com', { forceSuccess: true, random: true })
 *   .done(function(result) {
 *     console.log("success with result:", result);
 *   })
 *   .fail(function() {
 *     console.log("error");
 *   });
 */

function jQueryAjaxMock(
  url,
  {
    data = null,
    error = null,
    forceFail = false,
    forceSuccess = false,
    random = true,
    timeout = 100,
  }
) {
  let successHandler;
  let errorHandler;

  const httpRequestMock = {
    done,
    fail,
  };

  function done(onDone) {
    successHandler = onDone;
    return httpRequestMock;
  }

  function fail(onFail) {
    errorHandler = onFail;
    return httpRequestMock;
  }

  setTimeout(() => {
    if (forceFail) {
      errorHandler(error);
    }

    if (forceSuccess) {
      successHandler(data);
    }

    if (random && !forceFail && !forceSuccess) {
      if (Math.random() > 0.4) {
        errorHandler(error);
      } else {
        successHandler(data);
      }
    }
  }, timeout);

  return httpRequestMock;
}

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
