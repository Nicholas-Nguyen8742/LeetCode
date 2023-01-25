/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let X = 0;
    operations.map((el) => el === "X++" || el === "++X" ? X += 1 : X -= 1);
    return X;
};