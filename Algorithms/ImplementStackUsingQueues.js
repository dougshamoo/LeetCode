/*
Implement the following operations of a stack using queues.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
empty() -- Return whether the stack is empty.
Notes:
You must use only standard operations of a queue -- which means only push to back, peek/pop from front, size, and is empty operations are valid.
Depending on your language, queue may not be supported natively. You may simulate a queue by using a list or deque (double-ended queue), as long as you use only standard operations of a queue.
You may assume that all operations are valid (for example, no pop or top operations will be called on an empty stack).
*/

/**
 * @constructor
 */
var Stack = function() {
  var size= 0;
  this.q1 = [];
  this.q2 = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {
  if (!this.q2.length) {
    this.q1.push(x);
  } else {
    this.q2.push(x);
  }
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
  if (this.q1.length) {
    while (this.q1.length > 1) {
      this.q2.push(this.q1.shift());
    }
    return this.q1.shift();
  } else {
    while (this.q2.length > 1) {
      this.q1.push(this.q2.shift());
    }
    return this.q2.shift();
  }
};

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
  if (this.q1.length) return this.q1[this.q1.length - 1];
  return this.q2[this.q2.length - 1];
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
  return this.q1.length + this.q2.length === 0;
};
