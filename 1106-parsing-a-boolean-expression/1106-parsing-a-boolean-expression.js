/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function(expression) {
  const stack = [];
  
  for (const currChar of expression) {
    if (currChar !== ')' && currChar !== ',') {
      stack.push(currChar);
    } else if (currChar === ')') {
      let exp = [];

      while (stack.length > 0 && stack[stack.length - 1] !== '(') {
        let t = stack.pop();
        exp.push(t === 't');
      }

      stack.pop();

      if (stack.length > 0) {
        const t = stack.pop();
        let v = exp[0];

        if (t === '&') {
          for (let b of exp) v = v && b;
        } else if (t === '|') {
          for (let b of exp) v = v || b;
        } else {
          v = !v;
        }

        stack.push(v ? 't' : 'f');
      }
    }
  }
  return stack[stack.length - 1] == 't';
};
