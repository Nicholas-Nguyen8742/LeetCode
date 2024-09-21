/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
  if (Array.isArray(obj)) {
    return obj.length === 0;
  }
  
  let isObject = true;
  for (const key in obj) {
    if (key != null) {
      return false;
    }
  }
  return isObject;
};
