/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let iteration = 0;
    let counter = n;
    return function() {
        if (iteration === 0) {
            iteration = 1;
            return counter; 
        }
        counter += 1;
        return counter;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */