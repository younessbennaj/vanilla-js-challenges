function nearestQuarterHour(date) {
  let d = new Date(date);
  d = new Date(d.setUTCSeconds(0, 0));
  const MINUTE_IN_MS = 60 * 1000;
  const QUARTER_MINUTE_IN_MS = 15 * MINUTE_IN_MS;
  const NB_QUARTER_MINUTE_IN_DATE = Math.floor((d.getMinutes() * MINUTE_IN_MS) / QUARTER_MINUTE_IN_MS);
  const minutes = (NB_QUARTER_MINUTE_IN_DATE * QUARTER_MINUTE_IN_MS) + QUARTER_MINUTE_IN_MS;
  d = new Date(d.setUTCMinutes(0, 0, 0));
  d = new Date(d.getTime() + minutes);
  return d.toISOString();
}

module.exports = nearestQuarterHour;