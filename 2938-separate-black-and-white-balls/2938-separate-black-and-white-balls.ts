function minimumSteps(s: string): number {
  let whiteBallPosition = 0;
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "0") {
      total += i - whiteBallPosition;
      whiteBallPosition += 1;
    }
  }

  return total;
};