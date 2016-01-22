/*
Invert a binary tree.

     4
   /   \
  2     7
 / \   / \
1   3 6   9
to
     4
   /   \
  7     2
 / \   / \
9   6 3   1
Trivia:
This problem was inspired by this original tweet by Max Howell:
Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so fuck off.
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  var head = root;
  traverse(head);
  
  return head;
  
  function traverse(node) {
    if (!node) return;
    
    swapChildren(node);
    traverse(node.left);
    traverse(node.right);
  }
  
  function swapChildren(node) {
    var temp = node.left;
    node.left = node.right;
    node.right = temp;
  }
};
