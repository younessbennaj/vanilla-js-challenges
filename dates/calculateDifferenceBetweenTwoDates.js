function calculateDifferenceBetweenTwoDates(a, b) {
  function Time(start, end) {
    this.HOUR_IN_MS = 60 * 60 * 1000;
    this.MINUTE_IN_MS = 60 * 1000;
    this.SECONDE_IN_MS = 1000;

    this.init = function() {
      this.diff = Math.abs(a.getTime() - b.getTime());
      this.hours = Math.floor(this.diff / this.HOUR_IN_MS);
      this.minutes = Math.floor((this.diff - (this.hours * this.HOUR_IN_MS)) / this.MINUTE_IN_MS);
      this.secondes = Math.floor((this.diff - (this.hours * this.HOUR_IN_MS) - (this.minutes * this.MINUTE_IN_MS)) / this.SECONDE_IN_MS);
    };

    this.getTime = function() {
      return {
        hrs: this.hours, 
        min: this.minutes, 
        sec: this.secondes
      };
    };
  };

  const time = new Time(a, b);

  time.init();

  return time.getTime();
}


module.exports = calculateDifferenceBetweenTwoDates;