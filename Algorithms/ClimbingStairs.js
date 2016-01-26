/*
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  var cache = {0: 0, 1: 1, 2: 2};
  
  function climb(x) {
    if (cache[x] === undefined)
      cache[x] = climb(x - 2) + climb(x - 1);
    return cache[x];
  }
  
  return climb(n);
};
