/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    const arr = [];
    for (let i = 1; i <= n + 1; i++) {
        if (arr.length === k) {
            return arr.pop();
        }
        
        if (n % i === 0) {
            arr.push(i);
        }
    }

    return -1;
};