/*
Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree {3,9,20,#,#,15,7},
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  var levels = [];
  
  function traverse(node, depth) {
    if (!node) return;
    
    if (!levels[depth]) levels[depth] = [node.val];
    else levels[depth].push(node.val);
    
    traverse(node.left, depth + 1);
    traverse(node.right, depth + 1)
  }
  
  traverse(root, 0);
  return levels.reverse();  
};
