/*
Given a collection of distinct numbers, return all possible permutations.

For example,
[1,2,3] have the following permutations:
[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], and [3,2,1].
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  var perms = [];
  
  function genPerms(choices, current) {
    if (choices.length === 0) {
      perms.push(current);
      return;
    }
    
    choices.forEach(function(num, i) {
      var nextChoices = choices.slice(0, i).concat(choices.slice(i + 1));
      genPerms(nextChoices, current.concat(num));
    });
  }
  
  genPerms(nums, []);
  return perms;
};
