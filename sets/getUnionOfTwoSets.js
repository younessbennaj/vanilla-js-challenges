function getUnionOfTwoSets(a, b) {
  const newSet = new Set(b);
    a.forEach(item => {
        if(!newSet.has(item)) {
            newSet.add(item);
        }
    })
  return newSet;
}

module.exports = getUnionOfTwoSets;