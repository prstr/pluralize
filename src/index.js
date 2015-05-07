'use strict';

module.exports = exports = function (num, s1, s2, s5) {
  function p(a) {
    if (a % 10 == 1 && a % 100 != 11) return 0;
    else if (a % 10 >= 2 && a % 10 <= 4 && ( a % 100 < 10 || a % 100 >= 20)) return 1;
    else return 2;
  }

  switch (p(num)) {
    case 0:
      return s1.replace('%s', num);
    case 1:
      return s2.replace('%s', num);
    default:
      return s5.replace('%s', num);
  }
};

exports.formatter = function (s1, s2, s5) {
  return function (num) {
    return exports(num, s1, s2, s5);
  };
};
