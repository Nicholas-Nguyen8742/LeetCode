/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let result = 0;
    if (flowerbed.length <= 2) {
        if (flowerbed[0] !== 1) {
            result++;
        }
        return result >= n;
    }
    const lastElementIndex = flowerbed.length - 1;
    if (flowerbed[0] === 0 && flowerbed[1] === 0 && flowerbed[0] !== 1) {
        flowerbed[0] = 1;
        result++;
    }
    if (flowerbed[lastElementIndex] === 0 && flowerbed[lastElementIndex - 1] === 0 && flowerbed[lastElementIndex] !== 1) {
        flowerbed[lastElementIndex] = 1;
        result ++;
    }
    for (let i = 1; i <= flowerbed.length; i++) {
        if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0 && flowerbed[i] !== 1) {
            flowerbed[i] = 1;
            result ++;
        }
    }
    return result >= n; 
};