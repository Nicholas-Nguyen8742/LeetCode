class MyHashMap {
  constructor() {
    this.map = Object.create(null);
  }

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
  put(key, value) {
    this.map[key] = value;
  }

/** 
 * @param {number} key
 * @return {number}
 */
  get(key) {
    return this.map[key] == null ? -1 : this.map[key];
  }

/** 
 * @param {number} key
 * @return {number}
 */
  remove(key) {
    delete this.map[key];
  }
}


/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */