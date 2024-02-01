function fetchDataWithCallback(callback) {
  setTimeout(() => {
    if(Math.random() > 0.5) {
      callback('success')
    } else {
      callback(null, new Error('error'))
    }
  }, 500);
}

function fetchDataWithPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(Math.random() > 0.5) {
        resolve('success')
      } else {
        reject(new Error('fail'))
      }
    }, 1000)
  })
}

describe('Fetch data', () => {
  test('callback version', (done) => {
    function cb(response, error) {
      if(error) {
        expect(error instanceof Error).toBe(true)
        done()
      } else {
        expect(response).toBe('success')
        done()
      }
    }
    
    fetchDataWithCallback(cb);
  })

  describe('Promise testing', () => {
    test('promise testing with done', (done) => {
      fetchDataWithPromise().then((response) => {
        expect(response).toBe('success')
        done()
      }).catch(error => {
        expect(error).toBeInstanceOf(Error)
        done()
      })
    });

    test('test return promise', () => {
      return fetchDataWithPromise().then((response) => {
        expect(response).toBe('success')
      }).catch(error => {
        expect(error).toBeInstanceOf(Error)
      })
    });
  });

  describe('Async / Await testing', () => {
    test('should handle res/error', async () => {
      let res;
      try {
        res = await fetchDataWithPromise()
        expect(res).toBe('success')
      } catch(error) {
        expect(error).toBeInstanceOf(Error)
      }
    })
  });
});