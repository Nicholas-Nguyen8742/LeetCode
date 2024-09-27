
var MyCalendarTwo = function() {
  this.bookings = [];
  this.overlappedBookings = []
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(start, end) {
  for (let i = 0; i < this.overlappedBookings.length; i++) {
    const [s, e] = this.overlappedBookings[i];
    if (!this.overlappedBookings[i]) {
      break;
    }
    if (this.areOverlapping(start, end, s, e)) {
      return false;
    }
  }

  for (let i = 0; i < this.bookings.length; i++) {
    const [s, e] = this.bookings[i];
    if (!this.bookings[i]) {
      break;
    }

    if (this.areOverlapping(s, e, start, end)) {
      this.overlappedBookings.push(this.getOverlapped(s, e, start, end));
    }
  }

  this.bookings.push([start, end]);
  return true;
};

MyCalendarTwo.prototype.areOverlapping = function(start1, end1, start2, end2) {
  return Math.max(start1, start2) < Math.min(end1, end2);
};

MyCalendarTwo.prototype.getOverlapped = function(start1, end1, start2, end2) {
  return [Math.max(start1, start2), Math.min(end1, end2)];
};

/** 
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */