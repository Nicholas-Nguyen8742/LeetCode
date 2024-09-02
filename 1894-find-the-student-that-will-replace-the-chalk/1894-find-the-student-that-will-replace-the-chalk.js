/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
  const totalChalk = chalk.reduce((sum, pieces) => sum + pieces, 0);
  let target = k % totalChalk;

  for (let i = 0; i < chalk.length; i++) {
    if (target < chalk[i]) {
      return i;
    }
    target -= chalk[i];
  }
};