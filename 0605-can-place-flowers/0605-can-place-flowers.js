/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let result = 0, i = 0;
    while (i < flowerbed.length) {
        const curr = flowerbed[i];
        const before = flowerbed[i - 1];
        const after = flowerbed[i + 1];
        if (((before === 0 && after === 0 && curr === 0) ||
             (before === undefined && after === 0 && curr === 0) ||
             (before === undefined && after === undefined && curr === 0) ||
             (after === undefined && before === 0  && curr === 0))) {
            flowerbed[i] = 1;
            result ++;
        }
        i++;
    }
    return result >= n; 
};