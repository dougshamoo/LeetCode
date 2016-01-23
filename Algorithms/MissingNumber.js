/*
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

For example,
Given nums = [0, 1, 3] return 2.

Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  var targetSum = 0;
  var sum = 0;

  // calculate sum and targetSum
  for (var i = 0; i < nums.length; i++) {
    targetSum += i;
    sum += nums[i];
  }
  targetSum += nums.length;

  return targetSum - sum;
};
