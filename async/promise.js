class MyPromise {
  // Start of constructor()
  constructor(executor) {
    this.status = 'pending';
    this.value = undefined; // ?
    this.error = undefined; // ?
    this.callbacks = []; // ?

    const resolve = (value) => {
      if (this.status === 'pending') {
        this.status = 'resolved';
        this.value = value;
        this.callbacks.forEach((callback) => callback());
      }
    };

    const reject = (error) => {
      if (this.status === 'pending') {
        this.status = 'rejected';
        this.error = error;
        this.callbacks.forEach((callback) => callback());
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  // End of constructor()

  // methode .then() disposible sur une instance de Promise
  then(callback) {
    return new MyPromise((resolve, reject) => {
      const handler = () => {
        try {
          const result = callback(this.value);
          if (result instanceof MyPromise) {
            result.then(resolve, reject);
          } else {
            resolve(result);
          }
        } catch (error) {
          reject(error);
        }
      };

      if (this.status === 'resolved') {
        handler();
      } else {
        this.callbacks.push(handler);
      }
    });
  }

  catch(callback) {
    return new MyPromise((resolve, reject) => {
      const handler = () => {
        try {
          const result = callback(this.error);
          if (result instanceof MyPromise) {
            result.then(resolve, reject);
          } else {
            resolve(result);
          }
        } catch (error) {
          reject(error);
        }
      };

      if (this.status === 'rejected') {
        handler();
      } else {
        this.callbacks.push(handler);
      }
    });
  }
}

module.exports = MyPromise;