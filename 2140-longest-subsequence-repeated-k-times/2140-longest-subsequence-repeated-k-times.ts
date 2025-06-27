function isKRepeated(s: string, pattern: string, k: number): boolean {
  let i = 0, matched = 0;

  for (const char of s) {
    if (char === pattern[i]) {
      i++;
      if (i === pattern.length) {
        i = 0;
        matched++;
        if (matched === k) return true;
      }
    }
  }

  return false;
}

function longestSubsequenceRepeatedK(s: string, k: number): string {
  const frequency = { };
  for (const char of s) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  const candidate = Object.keys(frequency)
    .filter((char) => frequency[char] >= k)
    .sort()
    .reverse();

  const queue = [...candidate];

  let result = '';
  while (queue.length) {
    const curr = queue.shift();
    if (curr.length > result.length) {
      result = curr;
    }

    for (const c of candidate) {
      const next = curr + c;
      if (isKRepeated(s, next, k)) {
        queue.push(next);
      }
    }
  }

  return result;
};