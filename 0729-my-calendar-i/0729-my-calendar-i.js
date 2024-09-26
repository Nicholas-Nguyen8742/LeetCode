
var MyCalendar = function() {
  this.starts = [];
  this.ends = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
  for (let i = 0; i < this.starts.length; i++) {
    if (this.starts[i] == null || this.ends[i] == null) {
      break;
    }

    if (this.starts[i] < end && start < this.ends[i]) {
      return false;
    }
  }

  this.starts.push(start);
  this.ends.push(end);
  return true;
}

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */