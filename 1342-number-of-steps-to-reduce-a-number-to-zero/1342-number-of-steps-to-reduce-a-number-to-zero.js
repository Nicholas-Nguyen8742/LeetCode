/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num, steps = 0) {
  if (num === 0) {
    return steps;
  }
  
  if (num % 2 === 0) {
    num = num / 2;
  } else {
    num -= 1;
  }
  
  steps++;
  
  return numberOfSteps(num, steps);
};