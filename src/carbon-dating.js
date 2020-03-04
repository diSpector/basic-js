const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    !(typeof sampleActivity === 'string' || sampleActivity instanceof String)
    || isNaN(Number.parseInt(sampleActivity))
    || Number.parseInt(sampleActivity) <= 0 
    || Number.parseInt(sampleActivity) >= 15
  ){
  return false;
}
  sampleActivity = Number.parseFloat(sampleActivity);
  k = 0.693 / HALF_LIFE_PERIOD;
  t = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);

  return t;
};
