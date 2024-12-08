/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function(events) {
  const times = [];
  
  for (const event of events) {
    times.push([event[0], 1, event[2]]);
    times.push([event[1] + 1, 0, event[2]]);
  }
  
  let result = 0, max = 0;
  times.sort((a, b) => {
    if (a[0] != b[0]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });

  for (const [_, isStart, value] of times) {
    if (isStart) {
      result = Math.max(result, value + max);
    } else {
      max = Math.max(max, value);
    }
  }
  
  return result;
};