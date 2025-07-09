function maxFreeTime(eventTime: number, k: number, startTime: number[], endTime: number[]): number {
  let n = startTime.length, result = 0, time = 0;

  for (let i = 0; i < n; i++) {
    time += endTime[i] - startTime[i];
    let left = i <= k - 1 ? 0 : endTime[i - k];
    let right = i === n - 1 ? eventTime : startTime[i + 1];
    result = Math.max(result, right - left - time);
    if (i >= k - 1) {
      time -= endTime[i - k + 1] - startTime[i - k + 1];
    }
  }

  return result;
};