
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

  const requestTotal = this.requests.length;
  const args = [t - 3000, null, t];
  
  let count = 0;
  for (let i = 0; i < requestTotal; i++) {
    args[1] = this.requests[i];
    if (Math.min(...args) === args[0] && Math.max(...args) === args[2]) {
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