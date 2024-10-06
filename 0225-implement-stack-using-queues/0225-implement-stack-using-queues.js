class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

var MyStack = function() {
  this.last = null;
  this.length = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  const newNode = new Node(x);
  if (this.length === 0) {
    this.last = newNode; 
  } else {
    newNode.next = this.last;
    this.last = newNode;
  }

  this.length++;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  if (this.length === 0) {
    return undefined;
  }

  let temp = this.last;
  this.last = this.last.next;
  temp.next = null;

  this.length--;
  return temp.value;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.last.value;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */