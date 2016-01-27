/*
Given two binary trees, write a function to check if they are equal or not.

Two binary trees are considered equal if they are structurally identical and the nodes have the same value.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  var isSame = true;
  
  function checkTrees(node1, node2) {
    if (!node1 && !node2) return;
    if ((!node1 && node2) || (node1 && !node2)) {
      isSame = false;
      return;
    }
    if (node1.val !== node2.val) {
      isSame = false;
      return;
    }
    checkTrees(node1.left, node2.left);
    checkTrees(node1.right, node2.right);
  }
  
  checkTrees(p, q);
  return isSame;
};
