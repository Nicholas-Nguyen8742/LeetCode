
var MyHashMap = function() {
  return Object.create(null, {
    put: {
      value: function(key, value) {
        this[key] = value
      },
    },
    get: {
      value: function(key) {
        return this[key] == null ? -1 : this[key]
      },
    },
    remove: {
      value: function(key) {
        delete this[key]
      },
    },
  })
};

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
// MyHashMap.prototype.put = function(key, value) {
//   this.map[key] = value;
// };

// /** 
//  * @param {number} key
//  * @return {number}
//  */
// MyHashMap.prototype.get = function(key) {
//   return this.map[key] == null ? -1 : this.map[key];
// };

// /** 
//  * @param {number} key
//  * @return {void}
//  */
// MyHashMap.prototype.remove = function(key) {
//   delete this.map[key];
// };

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */