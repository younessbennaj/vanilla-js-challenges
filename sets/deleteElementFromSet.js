function deleteElementFromSet(set, val) {
  set.delete(val)
  return set;
}

module.exports = deleteElementFromSet;