class RandomizedSet {
  map: Map<number, number>;
  stack: number[];
  constructor() {
    this.map = new Map();
    this.stack = [];
  }

  search(val: number): boolean {
    return this.map.has(val);
  }

  insert(val: number): boolean {
    if (this.search(val)) {
      return false;
    }
    
    this.map.set(val, this.stack.length);
    this.stack.push(val);
    return true;
  }

  remove(val: number): boolean {
    if (this.search(val)) {
      const valueIndex = this.map.get(val);
      this.stack[valueIndex] = this.stack[this.stack.length - 1];
      this.map.set(this.stack[valueIndex], valueIndex);
      this.stack.pop();
      this.map.delete(val);
      return true;
    }
    return false;
  }

  getRandom(): number {
    const randomIndex = Math.floor(Math.random() * this.map.size);
    return this.stack[randomIndex];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */