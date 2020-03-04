module.exports = function getSeason(date) {
  if (typeof date === 'undefined'){
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date) || (+date.toString().split(' ')[3] != date.getFullYear())){
    throw Error;
  }
  seasons = [
    'winter',
    'winter',
    'spring',
    'spring',
    'spring',
    'summer',
    'summer',
    'summer',
    'autumn',
    'autumn',
    'autumn',
    'winter',
  ];

  month = date.getMonth();
  return seasons[month];
};
