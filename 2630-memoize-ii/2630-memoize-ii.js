/**
 * @param {Function} fn
 */
class TrieNode {
    constructor() {
      this.value = null;
      this.children = new Map();
    }

    getValue(args) {
      return this.children.get(args)?.value;
    }

    setValue(args, value) {
      const childNode = this.children.get(args) ?? new TrieNode();
      childNode.value = value;
      this.children.set(args, childNode);
    }
  }
function memoize(fn) {
  const cache = new TrieNode();
    return function(...args) {
        if (args.length === 0) {
            if (cache.value !== null) {
                return cache.value;
            }
            const result = fn.apply(this, args);
            cache.value = result;
            return result;
        }
        let currNode = cache;
        args.forEach((arg) => {
            const childNode = currNode.children.get(arg) ?? new TrieNode();
            currNode.children.set(arg, childNode);
            currNode = childNode;
        });
        if (currNode.value === null) {
            const result = fn.apply(this, args);
            currNode.value = result;
        }
        return currNode.value;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */