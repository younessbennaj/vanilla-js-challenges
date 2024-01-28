function numberOfDaysBetweenTwoDates(a, b) {
  const DAY_IN_MS = 24 * 60 * 60 * 1000;
  const diff = Math.abs(a.getTime() - b.getTime());
  return diff / DAY_IN_MS;
}

module.exports = numberOfDaysBetweenTwoDates;