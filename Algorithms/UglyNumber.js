/*
Write a program to check whether a given number is an ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.

Note that 1 is typically treated as an ugly number.
*/

/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  var res = false;
  function recurse(n) {
    if (n < 1) return;
    if (n === 1) {
      res = true;
      return;
    }
    else if (n % 2 === 0) recurse(n / 2);
    else if (n % 3 === 0) recurse(n / 3);
    else if (n % 5 === 0) recurse(n / 5);
  }
  recurse(num);
  return res;
};
