class MyCalendar {
  starts: number[];
  ends: number[];

  constructor() {
    this.starts = [];
    this.ends = [];
  }

  book(start: number, end: number): boolean {
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
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */