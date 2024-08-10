
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

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */