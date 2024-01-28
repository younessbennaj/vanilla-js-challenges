function pause() {
  const start = new Date().getTime();
  while (new Date().getTime() - start < 3000);
}

module.exports = pause;
