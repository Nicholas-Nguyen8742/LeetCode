class NumberContainers {
  indexToNumber: Map<number, number>;
  numberToIndices: Map<number, number[]>;
  constructor() {
    this.indexToNumber = new Map();
    this.numberToIndices = new Map();
  }

  change(index: number, number: number): void {
    if (this.indexToNumber.has(index)) {
      const previousNumber = this.indexToNumber.get(index);
      const indices = this.numberToIndices.get(previousNumber);
      const idx = indices.indexOf(index);
      if (idx !== -1) indices.splice(idx, 1);

      if (indices.length === 0) {
        this.numberToIndices.delete(previousNumber);
      }
    }

    this.indexToNumber.set(index, number);
    if (!this.numberToIndices.has(number)) {
      this.numberToIndices.set(number, []);
    }
    const indices = this.numberToIndices.get(number);

    const insertPos = this.binarySearchInsertPos(indices, index);
    indices.splice(insertPos, 0, index);
  }

  find(number: number): number {
    if (this.numberToIndices.has(number) && this.numberToIndices.get(number).length > 0) {
      return this.numberToIndices.get(number)[0];
    }
    return -1;
  }

  binarySearchInsertPos(arr: number[], target: number): number {
    let left = 0, right = arr.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  }
}

/**
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */