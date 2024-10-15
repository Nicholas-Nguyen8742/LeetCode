function minimumSteps(s: string): number {
  let blackBallTotal = 0;
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "0") {
      total += blackBallTotal;
    } else {
      blackBallTotal++;
    }
  }

  return total;
};