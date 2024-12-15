function longestCommonPrefix(strs: string[]): string {
    let string = '';
    let i = 0;
    while (i < strs[0].length) {
        if (!(Array.from({ length: strs.length }, (x, index) => strs[0].charAt(i) === strs[index].charAt(i)).includes(false))) {
        string += strs[0].charAt(i);
         } else {
           return string;
         }
        i++;
    }
    return string;
};