
var MyHashSet = function() {
  return Object.create(null, {
    size: {
      value: 9137,
    },
    arr: {
      value: new Array(this.size),
    },
    add: {
      value: function(key) {
        const index = key % this.size;
        if (!this.arr[index]) {
          this.arr[index] = [key]
        } else {
          if (!this.arr[index].includes(key)) {
            this.arr[index].push(key)
          }
        }
      },
    },
    remove: {
      value: function(key) {
        const index = key % this.size;
        if (this.arr[index] && this.arr[index].includes(key)) {
          const found = this.arr[index].findIndex((item) => item === key);
          if (found !== -1) {
            this.arr[index].splice(found, 1);
          }
        }
        
      },
    },
    contains: {
      value: function(key) {
        const index = key % this.size;
        return !!(this.arr[index] && this.arr[index].includes(key));
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