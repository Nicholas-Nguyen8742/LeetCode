function takeCharacters(s: string, k: number): number {
  const count = [0, 0, 0];
  const n = s.length;

  for (const c of s) {
    count[c.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  for (let i = 0; i < 3; i++) {
    if (count[i] < k) {
      return -1;
    }
  }
  
  const window = [0, 0, 0];
  let left = 0;
  let maxWindow = 0;

  for (let right = 0; right < s.length; right++) {
    window[s.charCodeAt(right) - "a".charCodeAt(0)]++;

    while (
      left <= right &&
      (count[0] - window[0] < k || count[1] - window[1] < k || count[2] - window[2] < k)
    ) {
      window[s.charCodeAt(left) - "a".charCodeAt(0)]--;
      left++;
    }

      maxWindow = Math.max(maxWindow, right - left + 1);
    }

  return n - maxWindow;
};