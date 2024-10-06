function clearDigits(s: string): string {
  const firstDigitIndex = s.search(/\d/);
  if (firstDigitIndex === -1) {
    return s;
  }

  let nearestLeft;
  let index = firstDigitIndex - 1;

  while (nearestLeft == null || index < 0) {
    if ((s[index]).search(/\d/) !== 0) {
      nearestLeft = index;
    } else {
      index--;
    }
  }

  if (nearestLeft == null) {
    return s;
  }
  let str = replaceString(s, firstDigitIndex);
  str = replaceString(str, nearestLeft);

  return clearDigits(str);
};

function replaceString(s: string, index: number) {
  return s.substring(0, index) + s.substring(index + 1);
};