/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  const stack = [];

  for (let i = 0; i < asteroids.length; i++) {
    const lastAst = stack[stack.length - 1];
    const currAst = asteroids[i];

    if (lastAst > 0 && currAst < 0) {
      if (currAst + lastAst === 0) {
        stack.pop();
      } else if (Math.abs(lastAst) < Math.abs(currAst)) {
        stack.pop();
        i--;
      }
    } else {
      stack.push(currAst);
    }
  }

  return stack;
};