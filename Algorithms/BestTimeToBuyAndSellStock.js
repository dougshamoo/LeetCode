/*
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var minSoFar, maxProfit = 0;
  prices.forEach(function(p) {
    if (minSoFar === undefined || p < minSoFar) {
      minSoFar = p;
    } else if (p - minSoFar > maxProfit){
      maxProfit = p - minSoFar;
    }
  });
  
  return maxProfit;
};
