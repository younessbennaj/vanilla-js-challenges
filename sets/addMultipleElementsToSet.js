function addMultipleElementsToSet(set, arr) {
  arr.forEach(element => {
    set.add(element);
  });
  return set;
}

module.exports = addMultipleElementsToSet;