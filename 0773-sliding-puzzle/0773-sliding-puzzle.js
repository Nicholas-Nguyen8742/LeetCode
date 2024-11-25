/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
  const target = '123450';
  const directions = [
    [1, 3],
    [0, 2, 4],
    [1, 5],
    [0, 4],
    [1, 3, 5],
    [2, 4],
  ];
  const startState = board.flat().join("");

  const visited = new Set();
  const queue = [[startState, 0]];
  visited.add(startState);

  while (queue.length > 0) {
    const [currentState, moves] = queue.shift();

    if (currentState === target) {
      return moves;
    }

    const zeroPos = currentState.indexOf("0");

    for (const newPos of directions[zeroPos]) {
      const nextState = swap(currentState, zeroPos, newPos);

      if (!visited.has(nextState)) {
        visited.add(nextState);
        queue.push([nextState, moves + 1]);
      }
    }
  }

  return -1;
};

function swap(state, i, j) {
  const splitArray = state.split("");
  [splitArray[i], splitArray[j]] = [splitArray[j], splitArray[i]];
  return splitArray.join("");
};