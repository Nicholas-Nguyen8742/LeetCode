/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    const boxesLength = boxes.length;
    const result = new Array(boxesLength).fill(0);

    for (let i = 0; i < boxesLength; i++) {
        if (boxes[i] === '1') {
            for (let j = 0; j < boxesLength; j++) {
                result[j] += Math.abs(j - i)
            }
        }
    }

    return result;
};