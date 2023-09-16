/**
 * @param {Function} fn
 */
class Cache {
    constructor() {
        this.values = new Map();
        this.keys = new Map();
        this.id = 0;
    }

    getCacheKey(args) {
        return args.map(arg => {
            if (!this.keys.has(arg)) {
                this.keys.set(arg, this.id++);
            }

            return this.keys.get(arg);
        }).join('_');
    }

    has(args) {
        const key = this.getCacheKey(args);
        return this.values.has(key);
    }

    get(args) {
        const key = this.getCacheKey(args);
        return this.values.get(key);
    }

    set(args, value) {
        const key = this.getCacheKey(args);
        this.values.set(key, value);
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