/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let row = 0;
    while (row < matrix.length) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === target) {
                return true;
            }
        }
        row++;
    }
    return false;
};