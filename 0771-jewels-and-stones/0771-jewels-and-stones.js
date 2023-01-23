/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const jewel = jewels.split("");
    let count = 0;
    stones.split("").map((el) => (jewel.includes(el)) ? count += 1 : count = count);
    return count;
};