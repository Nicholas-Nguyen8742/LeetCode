/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let result = 0, i = 0;
    while (i < flowerbed.length) {
        if (((flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0 && flowerbed[i] === 0) ||
             (flowerbed[i - 1] === undefined && flowerbed[i + 1] === 0 && flowerbed[i] === 0) ||
             (flowerbed[i - 1] === undefined && flowerbed[i + 1] === undefined && flowerbed[i] === 0) ||
             (flowerbed[i + 1] === undefined && flowerbed[i - 1] === 0  && flowerbed[i] === 0))) {
            flowerbed[i] = 1;
            result ++;
        }
        i++;
    }
    return result >= n; 
};