/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
  if (s.length != goal.length) {
    return false;
  }
  
  const length = s.length;
  
  for (let i = 0; i < length; i++) {
    s = s.substring(1, length) + s.substring(0, 1);
    if (s === goal) {
      return true;
    }
  }
  return false;
};