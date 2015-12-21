/*
Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// O(n) time and space complexity, somewhat longwinded
var isAnagram = function(s, t) {
    var letterCounts = {};
    for (var i = 0; i < s.length; i++) {
        letterCounts[s[i]] = letterCounts[s[i]] === undefined ? 1 : letterCounts[s[i]] + 1;
    }
    
    for (var j = 0; j < t.length; j++) {
        if (letterCounts[t[j]] === undefined) return false;
        if (--letterCounts[t[j]] < 0) return false;
    }
    
    for (var letter in letterCounts) {
        if (letterCounts[letter] > 0) return false;
    }
    return true;
};