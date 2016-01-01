/*
Determine whether an integer is a palindrome. Do this without extra space.
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  return String(x).split('').reverse().join('') === String(x);
};
