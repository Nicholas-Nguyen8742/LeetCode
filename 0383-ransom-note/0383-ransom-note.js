/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const ransomeArray = ransomNote.split('');
  for (let i = 0; i < magazine.length; i++) {
    const char = magazine[i];
    if (ransomeArray.includes(char)) {
      const found = ransomeArray.findIndex((el) => el === char);
      ransomeArray.splice(found, 1);
    }
  }
  
  return ransomeArray.length === 0;
};