function minAddToMakeValid(s: string): number {
  if (!s.length) {
    return 0; 
  }

  let open = 0, count = 0, i = 0;
  while (i < s.length) {   
    if (s[i] === '(') {
      open++;
    } else {
      if (open > 0) {
        open--;
      } else {
        count++;
      }
    }
    i++;
  }
  return count + open;
};