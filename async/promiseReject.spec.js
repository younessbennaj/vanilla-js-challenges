/*
Unlike Promise.resolve(), Promise.reject() always wraps reason
in a new Promise object, even when reason is already a Promise.

Implement the Promise.reject() function as promiseReject
*/
function promiseReject(errorMessage) {
  return new Promise(function(resolve, reject) {
    reject(errorMessage)
  });
}

describe('promiseReject function', () => {
  it('should return a promise instance', () => {
    const errorMessage = 'Mayday!'
    const rejectionHandler = function(error) {
      expect(error).toBe(errorMessage)
    }
    const promise = promiseReject('Mayday!').catch(rejectionHandler)
    expect(promise).toBeInstanceOf(Promise)
  });

  it('should always call rejection handler', async () => {
    const errorMessage = 'Mayday!'
    const rejectionHandler = function(error) {
      expect(error).toBe(errorMessage)
    }

    await promiseReject(errorMessage).catch(rejectionHandler)
  })
});