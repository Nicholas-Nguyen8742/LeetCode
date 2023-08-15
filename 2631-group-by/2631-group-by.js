/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    let map = {};
    this.forEach((el) => {
        const key = fn(el);
        key in map ? map[key].push(el) : map[key] = [el];
    });
    return map;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */