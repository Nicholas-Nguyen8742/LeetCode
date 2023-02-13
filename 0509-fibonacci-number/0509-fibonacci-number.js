/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const phi = (1 + Math.sqrt(5)) / 2;
    const first = Math.pow(phi, n);
    const second = Math.pow(1 - phi, n);
    return Math.round((first - second) / (Math.sqrt(5)));
};