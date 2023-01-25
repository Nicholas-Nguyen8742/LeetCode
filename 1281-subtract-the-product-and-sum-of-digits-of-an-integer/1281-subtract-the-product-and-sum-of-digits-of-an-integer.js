/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const split = n.toString().split('').map((el) => parseInt(el));
    const product = split.reduce((acc, curr) => acc * curr);
    const added = split.reduce((acc, curr) => acc + curr);
    return product - added;
};