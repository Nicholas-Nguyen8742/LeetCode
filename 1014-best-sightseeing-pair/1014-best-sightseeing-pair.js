/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
  const length = values.length;

  let max = 0, maxLeftScore = values[0];
        
  for (let i = 1; i < values.length; i++) {
    const currentRightScore = values[i] - i;

    max = Math.max(max, maxLeftScore + currentRightScore);
    maxLeftScore = Math.max(maxLeftScore, values[i] + i);
  }

  return max;
};