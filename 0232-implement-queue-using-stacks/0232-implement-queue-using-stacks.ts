class Node {
  value: number;
  next: Node | null;
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MyQueue {
  first: Node | null;
  last: Node | null;
  length: number;
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(x: number): void {
    const newNode = new Node(x);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
  }

  pop(): number {
    if (this.length === 0) {
      return 0;
    }

    const removedNode = this.first;
    if (this.length === 1) {
      this.last = null;
    } else {
      this.first = this.first.next;
      removedNode.next = null;
    }

    this.length--;
    return removedNode.value;
  }

  peek(): number {
    return this.first.value;
  }

  empty(): boolean {
    return this.length === 0;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */