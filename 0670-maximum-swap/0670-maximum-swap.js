/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  const stringifiedNum = `${num}`;
  const arr = stringifiedNum.split('').sort((a, b) => b - a);
  if (arr.join('') === stringifiedNum) {
    return num;
  }

  const cleanNumArr = stringifiedNum.split('');
  const numArr = [...cleanNumArr];
  let max = Math.max(...numArr);
  let i = 0;
  while (i < numArr.length) {
    if (i === 0 && numArr[i] == max) {
      numArr.shift();
      max = Math.max(...numArr);
    } else {
      break;
    }
  }
  
  
  const maxIndex = cleanNumArr.findLastIndex((el) => el == max);
  const minSearchArr = cleanNumArr.slice(0, maxIndex);
  let min = Math.min(...minSearchArr);
  let minI = 0;
  while (minI < minSearchArr.length) {
    if (minSearchArr[0] >= max) {
      minSearchArr.shift();
      min = Math.max(...minSearchArr);
    } else {
      min = minSearchArr[minI]
      break;
    }
  }
  
  const minIndex = cleanNumArr.findIndex((el) => el == min);

  cleanNumArr.splice(minIndex, 1, max);
  cleanNumArr.splice(maxIndex, 1, min);
  return parseInt(cleanNumArr.join(''));
};