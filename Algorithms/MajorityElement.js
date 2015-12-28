/*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  var counts = {};
  var answer;

  nums.forEach(function(num) {
    counts[num] = counts[num] + 1 || 1;
    if (counts[num] > nums.length / 2)
      answer = num;
  });

  return answer;
};
