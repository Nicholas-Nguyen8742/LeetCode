/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const jew = jewels.split("");
    let count = 0;
    stones.split("").map((el) => (jew.includes(el)) ? count += 1 : count = count);
    return count;
};