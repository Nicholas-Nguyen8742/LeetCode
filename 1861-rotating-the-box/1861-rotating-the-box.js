/**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function(box) {
  const rows = box.length;
  const columns = box[0].length;
  const result = Array.from({ length: columns }, () => Array(rows).fill(''));

  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      result[i][j] = box[j][i];
    }
  }

  for (let i = 0; i < columns; i++) {
    result[i].reverse();
  }

  for (let j = 0; j < rows; j++) {
    let lowestRow = columns - 1;
    for (let i = columns - 1; i >= 0; i--) {
      if (result[i][j] === '#') {
        result[i][j] = '.';
        result[lowestRow][j] = '#';
        lowestRow--;
      } else if (result[i][j] === '*') {
        lowestRow = i - 1;
      }
    }
  }

  return result;
};