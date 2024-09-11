/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
  if (s1 === s2) {
    return true;
  }

  if (s1.length !== s2.length) {
    return false;
  }
  
  const misMatches = [];

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      misMatches.push(i);
    }
    
    if (misMatches.length > 2) {
      return false;
    }
  }
  
  return s1[misMatches[0]] === s2[misMatches[1]] && s1[misMatches[1]] === s2[misMatches[0]];
};