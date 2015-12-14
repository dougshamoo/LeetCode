/*
Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 
// a possibly naive solution in O(n) time, O(n) space
var singleNumber = function(nums) {
    var isSingle = {};
    
    nums.forEach(function(num) {
        isSingle[num] = isSingle[num] ? !isSingle[num] : true;
    });

    for (var key in isSingle) {
        if (isSingle[key]) return parseInt(key);
    }
};