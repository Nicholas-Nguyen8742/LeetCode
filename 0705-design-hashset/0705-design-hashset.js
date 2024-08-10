
var MyHashSet = function() {
  return Object.create(null, {
    add: {
      value: function(key) {
        this[key] = key;
      },
    },
    remove: {
      value: function(key) {
        delete this[key];
      },
    },
    contains: {
      value: function(key) {
        return key in this;
      },
    },
  });
};

// /** 
//  * @param {number} key
//  * @return {void}
//  */
// MyHashSet.prototype.add = function(key) {
    
// };

// /** 
//  * @param {number} key
//  * @return {void}
//  */
// MyHashSet.prototype.remove = function(key) {
    
// };

// /** 
//  * @param {number} key
//  * @return {boolean}
//  */
// MyHashSet.prototype.contains = function(key) {
    
// };

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */