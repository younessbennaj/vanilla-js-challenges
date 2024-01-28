function addDaysToExistingDate(a, b) {
  const DAY_IN_MS = 1000 * 60 * 60 * 24;
  return a.getTime() + DAY_IN_MS * b;
}

module.exports = addDaysToExistingDate;