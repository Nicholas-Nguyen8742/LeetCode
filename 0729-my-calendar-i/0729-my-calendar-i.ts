class MyCalendar {
  bookings: [number, number][];
  constructor() {
    this.bookings = [];
  }

  book(start: number, end: number): boolean {
    for (let i = 0; i < this.bookings.length; i++) {
      const [s, e] = this.bookings[i];
      if (!this.bookings[i]) {
        break;
      }

      if (s < end && start < e) {
        return false;
      }
    }

    this.bookings.push([start, end]);
    return true;
  }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */