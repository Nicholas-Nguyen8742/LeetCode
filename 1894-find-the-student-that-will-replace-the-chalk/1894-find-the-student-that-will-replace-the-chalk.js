/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
  const totalChalk = chalk.reduce((sum, pieces) => sum + pieces, 0);
  k = k % totalChalk;

  for (let i = 0; i < chalk.length; i++) {
    if (k < chalk[i]) {
      return i;
    }
    k -= chalk[i];
  }
};