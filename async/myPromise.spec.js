// Mock Promise class to understand anatomy of promise object
class MyPromise {
  constructor(executor) {
    this.status = 'pending';
    this.success = null;
    this.error = null;
    // Chuck of logic behind resolve() function that we can call into executor function logic
    function resolveFunc(resolveVal) {
      this.success = resolveVal;
    }
    function rejectFunc(rejectVal) {
      this.error = rejectVal;
    }
    try {
      executor(resolveFunc.bind(this), rejectFunc.bind(this));
    } catch(error) {
      throw new Error(`Promise resolver ${executor} is not a function`);
    }
  } 

  then(onFulfillment, onRejection) {
    if(onFulfillment && this.success) {
      // the return of the fullfillment method is binded to "success" instance property value 
      // this mecanism allow value to be used through then method chaining
      this.success = onFulfillment(this.success);
    }

    if(onRejection && this.error) {
      onRejection(this.error);
    }

    return this;
  }

  catch(onRejection) {
    if(onRejection && this.error) {
      onRejection(this.error);
    }
  }
}

describe('Promise instance', () => {
  it('should throw error if executor is not passed correctly', () => {
    // executor: function that contains asynchronous operation
    expect(() => new MyPromise()).toThrow(new Error("Promise resolver undefined is not a function"));
    expect(() => new MyPromise('hello')).toThrow(new Error("Promise resolver hello is not a function"));
    expect(() => new MyPromise(function() {})).not.toThrow();
  })

  it('should be instancied with pending status', () => {
    const promise = new MyPromise(function() {});
    expect(promise.status).toBe('pending');
  })

  it('should be able to call a resolve function into executor logic in case of async operation success', () => {
    const executor = function(resolve) {
      // ... asynchronous operation succeeded
      resolve('success');
    }
    expect(() => new MyPromise(executor)).not.toThrow(TypeError);
  })

  describe('"then" instance method', () => {
    it('should be provided with a "then" instance method', () => {
      const promise = new MyPromise(function() {});
      expect(() => promise.then()).not.toThrow(TypeError);
    })

    test('fulfillment handler should be called with value passed to resolve function if provided', () => {
      const resolveFuncVal = 'success';
      const rejectFuncVal = 'failed'
      const executor = function(resolveFunc, rejectFunc) {
        // Do some asynchronous operation here
        // mock asynchronous operation success with resolveFuncVal
        const asyncOpSucceeded = true
        // if asynchronous operation succeeded
        if(asyncOpSucceeded) {
          // we can call resolve function with 
          resolveFunc(resolveFuncVal);
        } else {
          rejectFunc(rejectFuncVal);
        }
      }

      let valueToTest;
      let errorToTest;

      const promise = new MyPromise(executor)
      promise.then(function(res) {
        // res: expect to be the value passed to resolveFunc() into executor logic
        valueToTest = res;
      }, function(err) {
        errorToTest = err;
      })

      expect(valueToTest).toBe(resolveFuncVal)
      expect(errorToTest).toBe(undefined)
    })

    test('rejection handler should be called with value passed to reject function if provided', () => {
      const resolveFuncVal = 'success';
      const rejectFuncVal = 'failed'

      const executor = function(resolveFunc, rejectFunc) {
        // Do some asynchronous operation here
        // mock asynchronous operation success with resolveFuncVal
        const asyncOpSucceeded = false
        // if asynchronous operation succeeded
        if(asyncOpSucceeded) {
          // we can call resolve function with 
          resolveFunc(resolveFuncVal);
        } else {
          rejectFunc(rejectFuncVal);
        }
      }

      let valueToTest;
      let errorToTest;

      const promise = new MyPromise(executor)

      // .then(..., onRejection)
      promise.then(function(res) {
        // res: expect to be the value passed to resolveFunc() into executor logic
        valueToTest = res;
      }, function(err) {
        // err: expect to be the value passed to rejectFunc() into executor logic
        errorToTest = err;
      })
    
      expect(errorToTest).toBe(rejectFuncVal)
      expect(valueToTest).toBe(undefined)
    })
  })

  describe('"catch" instance method', () => {
    test('Promise intance should be provided with a catch() instance method', () => {
      const promise = new MyPromise(function() {});
      expect(() => promise.catch()).not.toThrow(TypeError);
    })

    test('catch rejection handler should be called', () => {
      const resolveFuncVal = 'success';
      const rejectFuncVal = 'failed'

      const executor = function(resolveFunc, rejectFunc) {
        // Do some asynchronous operation here
        // mock asynchronous operation success with resolveFuncVal
        const asyncOpSucceeded = false
        // if asynchronous operation succeeded
        if(asyncOpSucceeded) {
          // we can call resolve function with 
          resolveFunc(resolveFuncVal);
        } else {
          rejectFunc(rejectFuncVal);
        }
      }

      let valueToTest;
      let errorToTest;

      const promise = new MyPromise(executor)

      // .then(..., onRejection)
      promise.then(function(res) {
        // res: expect to be the value passed to resolveFunc() into executor logic
        valueToTest = res;
      }).catch(function(err) {
        // err: expect to be the value passed to rejectFunc() into executor logic
        errorToTest = err;
      })
    
      expect(errorToTest).toBe(rejectFuncVal)
      expect(valueToTest).toBe(undefined)
    })
  })

  describe('promise chaining', () => {
    test('chaining then() method', () => {
      const promise = new MyPromise((resolve) => { 
        // ... asnyc operation 
        resolve(10);
      });
      
      const addTwo = (number) => {  
        return number + 2;
      };
      
      const divideByThree = (number) => {  
        return number / 3;
      };
      
      const square = (number) => {
        return number * number;
      };
      
      // Chaining them all together
      promise.then(addTwo).then(divideByThree).then(square).then((number) => {
        expect(number).toBe(16)
      });
    })
  })
});