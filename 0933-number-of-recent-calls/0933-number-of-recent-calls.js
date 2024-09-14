
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
  
  const minInclusive = t - 3000; // Low - Min
  const maxInclusive = t; // High - Max
  
  const requestTotal = this.requests.length;
  
  let count = 0;
  for (let i = 0; i < requestTotal; i++) {
    const currentRequest = this.requests[i];
    if (minInclusive <= currentRequest && currentRequest <= maxInclusive) {
      count += 1;
    }
  }

  if (count < requestTotal) {
    this.requests.splice(0, (requestTotal - count));
  }

  this.stack.push(count);

  return count;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */