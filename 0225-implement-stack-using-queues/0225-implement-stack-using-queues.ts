class Node {
  value: number;
  next: Node | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class MyStack {
  last: Node | null;
  length: number;
  constructor() {
    this.length = 0;
    this.last = null;
  }

  push(x: number): void {
    const newNode = new Node(x);
    if (this.length === 0) {
      this.last = newNode; 
    } else {
      newNode.next = this.last;
      this.last = newNode;
    }

    this.length++;
  }

  pop(): number {
    if (this.length === 0) {
      return 0;
    }

    let temp = this.last;
    this.last = this.last.next;
    temp.next = null;

    this.length--;
    return temp.value;
  }

  top(): number {
    return this.last.value;
  }

  empty(): boolean {
    return this.length === 0;
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */