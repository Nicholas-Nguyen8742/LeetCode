function minimumObstacles(grid: number[][]): number {
  const ROWS = grid.length;
  const COLUMNS = grid[0].length;

  const DIRECTIONS = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  
  const isValidCell = function(rowIndex: number, columnIndex: number) {
    return 0 <= rowIndex && rowIndex < ROWS
      && 0 <= columnIndex && columnIndex < COLUMNS;
  };

  const minObstacles = Array.from({ length: ROWS }, () => Array(COLUMNS).fill(Infinity));

  minObstacles[0][0] = grid[0][0];

  const pq = new MinHeap();
  pq.push([minObstacles[0][0], 0, 0]);

  while (!pq.isEmpty()) {
    const [obstacles, row, col] = pq.pop();

    if (row === ROWS - 1 && col === COLUMNS - 1) {
      return obstacles;
    }

    for (const [dr, dc] of DIRECTIONS) {
      const newRow = row + dr;
      const newCol = col + dc;

      if (isValidCell(newRow, newCol)) {
        const newObstacles = obstacles + grid[newRow][newCol];

        if (newObstacles < minObstacles[newRow][newCol]) {
          minObstacles[newRow][newCol] = newObstacles;
          pq.push([newObstacles, newRow, newCol]);
        }
      }
    }
  }

  return minObstacles[ROWS - 1][COLUMNS - 1];
};

class MinHeap {
  private heap: [number, number, number][];
  constructor() {
    this.heap = [];
  }

  push(item: [number, number, number]): void {
    this.heap.push(item);
    this.bubbleUp();
  }

  pop(): [number, number, number] | undefined {
    if (this.isEmpty()) return null;
    const root = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.sinkDown(0);
    }
    return root;
  }

  peek(): [number, number, number] | undefined {
    return this.heap[0];
  }

  isEmpty(): boolean {
    return this.heap.length === 0;
  }

  private bubbleUp(): void {
    let idx = this.heap.length - 1;
    const element = this.heap[idx];
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.heap[parentIdx];
      if (parent[0] <= element[0]) break;
      this.heap[idx] = parent;
      idx = parentIdx;
    }
    this.heap[idx] = element;
  }

  private sinkDown(idx): void {
    const length = this.heap.length;
    const element = this.heap[idx];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let swap = null;
      let leftChild, rightChild;
      
      if (leftChildIdx < length) {
        leftChild = this.heap[leftChildIdx];
        if (leftChild[0] < element[0]) swap = leftChildIdx;
      }
      if (rightChildIdx < length) {
        rightChild = this.heap[rightChildIdx];
        if (
          (swap === null && rightChild[0] < element[0]) || 
          (swap !== null && rightChild[0] < leftChild[0])
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.heap[idx] = this.heap[swap];
      idx = swap;
    }
    this.heap[idx] = element;
  }
};