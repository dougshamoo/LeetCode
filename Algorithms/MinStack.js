/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
*/

/**
 * @constructor
 */
var MinStack = function() {
  this.storage = [];
  this.mins = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(x) {
  if (this.mins.length === 0 || x <= this.mins[this.mins.length - 1]) {
      this.mins.push(x);
  }
  this.storage.push(x);
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
  var popped = this.storage.pop();

  if (popped === this.mins[this.mins.length - 1]) {
    this.mins.pop();
  }
  return popped;
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
  return this.storage[this.storage.length - 1];
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function() {
  return this.mins[this.mins.length - 1];
};
