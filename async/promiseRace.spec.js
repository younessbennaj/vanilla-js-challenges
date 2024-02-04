// Let's implement our own version of Promise.race(), a promiseRace 
// function, with the difference being the function takes in an array 
// instead of an iterable.
function promiseRace(iterable) {  
  return new Promise((resolve, reject) => {
    iterable.forEach((element) => {
      if (element instanceof Promise) {
        element.then((value) => {
          resolve(value)
        }, err => {
          reject(err)
        })
      } else {
        Promise.resolve(element).then((value) => {
          resolve(value)
        })
      }
    })
  });
}

// Expect.assertions(number) verifies that a certain number of assertions are called during a test. 
// This is often useful when testing asynchronous code, in order to make sure that assertions in a 
// callback actually got called.

describe('promiseRace', () => {
  describe('One promise', () => {
    describe('resolve', () => {
  
      test('value', async () => {
        expect.assertions(1)
        const p0 = 2;

        const res = await promiseRace([p0]);
        expect(res).toEqual(2);
      })

      test('instant', async () => {
        expect.assertions(1);
        const p0 = Promise.resolve(2);
        const res = await promiseRace([p0]);
        expect(res).toEqual(2);
      })

      test('delayed', async () => {
        expect.assertions(1);
        const p0 = new Promise(resolve => setTimeout(() => resolve(2), 100));
        const res = await promiseRace([p0]);
        expect(res).toEqual(2);
      })      
    })

    describe('reject', () => {

      test('instant', async () => {
        expect.assertions(1);
        const p0 = Promise.reject(2)
        try {
          await promiseRace([p0]);
        } catch(err) {
          expect(err).toEqual(2)
        }
      })

      test('delayed', async () => {
        expect.assertions(1);
        const p0 = new Promise((_, reject) => setTimeout(() => reject(2), 100));
        try {
          await promiseRace([p0]);
        } catch(err) {
          expect(err).toEqual(2)
        }
      })      
    })
  })

  describe('Multiple promises', () => {
    describe('All resolve', () => {
      test('value', async () => {
        expect.assertions(1)
        const p0 = 2;
        const p1 = 4;
        const p2 = 6;

        const res = await promiseRace([p0, p1, p2]);
        expect(res).toEqual(2);
      })

      test('value', async () => {
        expect.assertions(1)
        const p0 = Promise.resolve(2);
        const p1 = Promise.resolve(4);
        const p2 = Promise.resolve(6);

        const res = await promiseRace([p0, p1, p2]);
        expect(res).toEqual(2);
      })

      test('delayed', async () => {
        expect.assertions(1);
        const p0 = new Promise((resolve) => setTimeout(() => resolve(2), 300));
        const p1 = new Promise((resolve) => setTimeout(() => resolve(4), 100));
        const p2 = new Promise((resolve) => setTimeout(() => resolve(6), 200));
       
        const res = await promiseRace([p0, p1, p2]);
       
        expect(res).toEqual(4);
      })

      test('mixture 1', async () => {
        expect.assertions(1);
        const p0 = new Promise((resolve) => setTimeout(() => resolve(2), 300));
        const p1 = Promise.resolve(4);
        const p2 = 6;
       
        const res = await promiseRace([p0, p1, p2]);
       
        expect(res).toEqual(4);
      })

      test('mixture 2', async () => {
        expect.assertions(1);
        const p0 = 2;
        const p1 = new Promise((resolve) => setTimeout(() => resolve(2), 300));
        const p2 = Promise.resolve(4);
       
        const res = await promiseRace([p0, p1, p2]);
       
        expect(res).toEqual(2);
      })


    });

    describe('All reject', () => {
      test('value', async () => {
        expect.assertions(1)
        const p0 = Promise.reject(2);
        const p1 = Promise.reject(4);
        const p2 = Promise.reject(6);

        try {
          await promiseRace([p0, p1, p2]);
        } catch(err) {
          expect(err).toEqual(2);
        }
      })

      test('delayed', async () => {
        expect.assertions(1);
        const p0 = new Promise((_, reject) => setTimeout(() => reject(2), 300));
        const p1 = new Promise((_, reject) => setTimeout(() => reject(4), 100));
        const p2 = new Promise((_, reject) => setTimeout(() => reject(6), 200));
       
        try {
          await promiseRace([p0, p1, p2]);
        } catch(err) {
          expect(err).toEqual(4);
        }
      })

      test('mixture', async () => {
        expect.assertions(1);
        const p0 = new Promise((_, reject) => setTimeout(() => reject(2), 300));
        const p1 = Promise.reject(4);
       
        try {
          await promiseRace([p0, p1]);
        } catch(err) {
          expect(err).toEqual(4);
        }
      })
    });

    describe('Mix of resolve and reject', () => {
      test('instant reject instant resolve', async () => {
        expect.assertions(1);
        const p0 = Promise.reject(42);
        const p1 = Promise.resolve(2);

        await expect(promiseRace([p0, p1])).rejects.toBe(42);
      });
    });
  })
});