function halvesAreAlike(s: string): boolean {
  const vowelMap = {
    a: 'a',
    e: 'e',
    i: 'i',
    o: 'o',
    u: 'u',
  };
  
  const cleanString = s.trim().toLowerCase();
  const midPoint = cleanString.length / 2;
  const firstHalf = cleanString.slice(0, midPoint);
  const secondHalf = cleanString.slice(midPoint);
  
  let firstScore = 0;
  let secondScore = 0;

  for (let i = 0; i < midPoint; i++) {
    if (vowelMap[firstHalf[i]]) firstScore++;
    if (vowelMap[secondHalf[i]]) secondScore++
  }

  return firstScore === secondScore;
};