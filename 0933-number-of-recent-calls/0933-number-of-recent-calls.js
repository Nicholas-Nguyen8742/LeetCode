
var RecentCounter = function() {
  this.stack = [null];
  this.requests = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  /* Add to array to track `request at time - (t)`
   * Needed to check if in range of future pings 
   */
  this.requests.push(t);

  // Inclusive Range Definition per ping
  const range = [
    t - 3000, // Low - Min
    t, // High - Max
  ];
  
  const minInclusive = range[0];
  const maxInclusive = range[1];
  
  let count = 0;
  for (let i = 0; i < this.requests.length; i++) {
    const currentRequest = this.requests[i];
    if (minInclusive <= currentRequest && currentRequest <= maxInclusive) {
      count += 1;
    }
  }

  this.stack.push(count);
  
  return count;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */