/**
 * @template T
 * @param { (value: T, index: number, array: Array<T>) => boolean } callbackFn
 * @param {any} [thisArg]
 * @return {Array<T>}
 */
Array.prototype.myFilter = function (callbackFn, thisArg) {
  const filtered = []
  this.forEach((value, index) => {
    callbackFn.call(thisArg, value, index, this) && filtered.push(value);
  })
  return filtered;
};