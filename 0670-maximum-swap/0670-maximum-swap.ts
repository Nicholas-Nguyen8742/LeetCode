function maximumSwap(num: number): number {
  const stringifiedNum: string = `${num}`;
  const arr = stringifiedNum.split('').sort((a, b) => parseInt(b) - parseInt(a));
  if (arr.join('') === stringifiedNum) {
    return num;
  }

  const cleanNumArr = stringifiedNum.split('');
  const numArr = [...cleanNumArr];
  let max = Math.max(...(stringToNumberArray(numArr)));
  let i = 0;
  while (i < numArr.length) {
    if (i === 0 && parseInt(numArr[i]) == max) {
      numArr.shift();
      max = Math.max(...(stringToNumberArray(numArr)));
    } else {
      break;
    }
  }
  
  
  const maxIndex = findLastIndex(cleanNumArr, (el) => parseInt(el) == max);
  const minSearchArr = cleanNumArr.slice(0, maxIndex);
  let min = Math.min(...(stringToNumberArray(minSearchArr)));
  let minI = 0;
  while (minI < minSearchArr.length) {
    if (parseInt(minSearchArr[0]) >= max) {
      minSearchArr.shift();
      min = Math.max(...(stringToNumberArray(minSearchArr)));
    } else {
      min = parseInt(minSearchArr[minI])
      break;
    }
  }
  
  const minIndex = cleanNumArr.findIndex((el) => parseInt(el) == min);

  cleanNumArr.splice(minIndex, 1, `${max}`);
  cleanNumArr.splice(maxIndex, 1, `${min}`);
  return parseInt(cleanNumArr.join(''));
};

function stringToNumberArray(arr: string[]): number[] {
  return arr.map((el) => parseInt(el));
}

function findLastIndex<T>(array: T[], predicate: (value: T, index: number, obj: T[]) => unknown): number {
  for (let i = array.length - 1; i >= 0; i--) {
    if (predicate(array[i], i, array)) {
      return i;
    }
  }
  return -1;
}