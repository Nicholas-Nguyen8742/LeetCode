
var MyHashSet = function() {
  return Object.create(null, {
    set: {
      value: new Array(),
    },
    add: {
      value: function(key) {
        if (this.contains(key)) {
          return;
        }
        this.set.push(key)
      },
    },
    remove: {
      value: function(key) {
        const found = this.set.findIndex((element) => element === key);
        if (found !== -1) {
          this.set.splice(found, 1);
        }
      },
    },
    contains: {
      value: function(key) {
        return this.set.includes(key);
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