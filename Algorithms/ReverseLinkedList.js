/*
Reverse a singly linked list.
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
 * @return {ListNode}
 */

 // naive but fun implementation
var reverseList = function(head) {
    if (!head) return null;
    var nodes = [];
    function buildList(node) {
        if(!node) return;
        nodes.push(node);
        buildList(node.next);
    }
    buildList(head);
    
    return nodes.reverse().map(function(node, i) {
        if (i === nodes.length - 1) {
            node.next = null;
        } else {
            node.next = nodes[i + 1];
        }
        return node;
    })[0];
};
