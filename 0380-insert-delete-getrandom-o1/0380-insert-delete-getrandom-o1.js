
var RandomizedSet = function() {
  this.map = new Map();
  this.stack = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.search = function(val) {
  return this.map.has(val);
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.search(val)) {
    return false;
  }

  this.stack.push(val);
  this.map.set(val, this.stack.length - 1);
  return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  const valueIndex = this.map.get(val);
  if (valueIndex == null) {
    return false;
  }
  
  this.stack[valueIndex] = this.stack[this.stack.length - 1];
  this.map.set(this.stack[valueIndex], valueIndex);
  this.stack.pop();
  this.map.delete(val);
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  const randomIndex = Math.floor(Math.random() * this.stack.length);
  return this.stack[randomIndex];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */