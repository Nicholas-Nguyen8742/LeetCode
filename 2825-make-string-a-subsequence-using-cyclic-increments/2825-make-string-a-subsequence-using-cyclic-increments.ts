function canMakeSubsequence(str1: string, str2: string): boolean {
  let str2Index = 0, str1Length = str1.length, str2Length = str2.length;
  
  for (let i = 0; i < str1Length; i++) {
    const shouldIncrease = str2Index < str2Length && (
      str1[i] == str2[str2Index]
      || String.fromCharCode(((str1.charCodeAt(i) - 97 + 1) % 26) + 97) === str2[str2Index]
    );
    
    if (shouldIncrease) {
      str2Index++;
    }
  }

  return str2Index == str2Length;
};