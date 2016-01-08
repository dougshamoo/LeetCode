/*
Given an integer, write a function to determine if it is a power of three.

Follow up:
Could you do it without using any loop / recursion?
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  var exp = 0;
  var current = 1;
  while (current <= n) {
    if (current === n) return true;
    current = Math.pow(3, ++exp);
  }
  return false;
};
