
var RecentCounter = function() {
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
  
  const min = t - 3000; // Low - Min
  const max = t; // High - Max
  
  const requestTotal = this.requests.length;
  
  let count = 0;
  for (let i = 0; i < requestTotal; i++) {
    const args = [min, this.requests[i], max];
    if (Math.min(...args) === min && Math.max(...args) === max) {
      count += 1;
    }
  }

  if (count < requestTotal) {
    this.requests.splice(0, (requestTotal - count));
  }

  return count;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */