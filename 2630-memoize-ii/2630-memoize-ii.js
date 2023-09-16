/**
 * @param {Function} fn
 */
class Cache {
    constructor() {
        this.trie = new Map();
        this.key = Symbol();
    }

    has(args) {
        let current = this.trie;
        for (const arg of args) {
            if (!current.has(arg)) {
                return false;
            }
            current = current.get(arg);
        }
        return current?.has(this.key);
    }

    get(args) {
        let current = this.trie;
        for (const arg of args) {
            current = current.get(arg);
        }
        return current.get(this.key);

    }

    set(args, value) {
        let current = this.trie;
        for (const arg of args) {
            if (!current.has(arg)) {
                current.set(arg, new Map());
            }
            current = current.get(arg);
        }
        current.set(this.key, value);
    }
}

function memoize(fn) {
  const cache = new Cache();
    return function(...args) {
        const argsWithThis = [this, ...args];
        if (cache.has(argsWithThis)) {
            return cache.get(argsWithThis);
        }

        const value = fn.apply(this, args);
        cache.set(argsWithThis, value);
        return value;
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