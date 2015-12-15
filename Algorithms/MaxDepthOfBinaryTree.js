/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// naive solution
var maxDepth = function(root) {
  var greatestDepth = 0;

  function recurse(node, depth) {
    if (depth > greatestDepth) greatestDepth = depth;
    if (node.left) recurse(node.left, depth + 1);
    if (node.right) recurse(node.right, depth + 1);
  };

  recurse(root, 0);
  return greatestDepth;
};

// more elegant solution
function maxDepth(root) {
  if (root === null) return 0;

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}