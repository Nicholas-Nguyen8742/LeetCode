
var NumberContainers = function() {
    this.indexToNumber = new Map();
    this.numberToIndices = new Map();

};

/** 
 * @param {number} index 
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function(index, number) {
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
};

/** 
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function(number) {
  if (this.numberToIndices.has(number) && this.numberToIndices.get(number).length > 0) {
    return this.numberToIndices.get(number)[0];
  }
  return -1;
};

NumberContainers.prototype.binarySearchInsertPos = function(arr, target) {
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
};

/** 
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */