/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function(arr, mat) {
    let numToIndexMap = {};

    for (let i = 0; i < arr.length; i++) {
        numToIndexMap[arr[i]] = i;
    }

    let result = Infinity;
    let rows = mat.length, columns = mat[0].length;

    for (let i = 0; i < rows; i++) {
        let lastElementIndex = -Infinity;
        for (let j = 0; j < columns; j++) {
            let indexVal = numToIndexMap[mat[i][j]];
            lastElementIndex = Math.max(lastElementIndex, indexVal);
        }

        result = Math.min(result, lastElementIndex);
    }

    for (let j = 0; j < columns; j++) {
        let lastElementIndex = -Infinity;
            for (let i = 0; i < rows; i++) {
                let indexVal = numToIndexMap[mat[i][j]];
                lastElementIndex = Math.max(lastElementIndex, indexVal);
            }
            result = Math.min(result, lastElementIndex)
    }
    return result;
};