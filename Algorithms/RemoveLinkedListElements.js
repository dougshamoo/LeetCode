/*
Remove all elements from a linked list of integers that have value val.

Example
Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
Return: 1 --> 2 --> 3 --> 4 --> 5
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  var start = head;

  function removeTraverse(node) {
    if (node === null) return;
    if (node.val === val) {
      var temp = node.next;
      start = node.next;
      node.next = null;
      return removeTraverse(temp);
    }

    while (node.next && node.next.val === val) {
      node.next = node.next.next;
    }
    removeTraverse(node.next);
  }

  removeTraverse(head);
  return start;
};
