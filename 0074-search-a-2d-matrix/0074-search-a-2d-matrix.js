/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let row = 0;
    while (row < matrix.length) {
        let col = 0;
        while (col < matrix[row].length) {
            if (matrix[row][col] === target) {
                return true;
            }
            col++;
        }
        row++;
    }
    return false;
};