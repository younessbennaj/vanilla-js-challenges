function flatten(arr) {
  const newArr = [];
  let copy = arr.slice()

  while(copy.length) {
      const item = copy.shift();
      if(!Array.isArray(item)) {
          newArr.push(item);
      } else {
          copy = [...item, ...copy];
      }
  }
  
  return newArr;
}

module.exports = flatten;