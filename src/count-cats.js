module.exports = function countCats(matrix) {
  res = 0;
  matrix.forEach(outer => {
    outer.forEach(inner => {
      if (inner === '^^'){
        res++;
      }
    });
  });
  return res;
};
