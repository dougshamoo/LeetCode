/*
Given an integer, write a function to determine if it is a power of two.
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  var exp = 0;
  var current = 1;
  while (current <= n) {
    if (current === n) return true;
    current = Math.pow(2, ++exp);
  }
  return false;
};
