function reverseVowels(s: string): string {
  const arr = stringToMatchArr(s);
  const filter = filterArrReverse(arr);
  let j = filter.length - 1;
  filter.forEach((el) => {
      arr[filter[j][1]] = el[0];
      j--;
  });
  return arr.join('');
};

function isMatch(el: string, i: number): (string | number)[] | string {
  const regex = /[aeiou]/gi;
  return el.match(regex) ? [el, i] : el;
};

function isArray(el: unknown): boolean {
  return Array.isArray(el);
};

function stringToMatchArr(string): (string | number)[] | string[] {
  return string.split('').map(isMatch);
}

function filterArrReverse(arr:(string | number)[] | string[]) {
  return arr.filter(isArray).reverse();
};
