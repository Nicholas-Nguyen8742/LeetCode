/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function(intervals) {
  const events = [];

  for (const [start, end] of intervals) {
    events.push([start, 1]);
    events.push([end + 1, -1]);
  }

  events.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);

  let max = 0;
  let current = 0;
  for (const [time, type] of events) {
    current += type;
    max = Math.max(max, current);
  }

  return max;
};