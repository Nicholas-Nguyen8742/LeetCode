class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


var MyQueue = function() {
  this.first = null;
  this.last = null;
  this.length = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  const newNode = new Node(x);
  if (this.length === 0) {
    this.first = newNode;
    this.last = newNode;
  } else {
    this.last.next = newNode;
    this.last = newNode;
  }
  
  this.length++;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (this.length === 0) {
    return undefined;
  }

  const removedNode = this.first;
  if (this.length === 1) {
    this.last = null;
  } else {
    this.first = this.first.next;
    removedNode.next = null;
  }

  this.length--;
  return removedNode.value;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  return this.first.value;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */