/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?


Above is a 3 x 7 grid. How many possible unique paths are there?

Note: m and n will be at most 100.
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// naive recursive solution without DP or memoization... too slow
var uniquePaths = function(m, n) {
  var count = 0;
  
  function genPaths(row, col) {
    //base case
    if (row === m - 1 && col === n - 1) {
      return ++count;
    }
    if (row === m || col === n) return;
    // move down or right
    genPaths(row + 1, col);
    genPaths(row, col + 1);
  }
  
  genPaths(0, 0);
  return count;
};

var uniquePaths = function(m, n) {
  var cache = [[1]];
  
  function countPaths(i, j) {
    if (cache[i] === undefined) cache[i] = [];
    if (cache[i][j] !== undefined) {
      return cache[i][j];
    }
    if (i === 0 || j === 0) {
      cache[i][j] = 1;
      return 1;
    }
    cache[i][j] = countPaths(i-1, j) + countPaths(i, j-1);
    return cache[i][j];
  }
  
  return countPaths(m-1, n-1);
};
