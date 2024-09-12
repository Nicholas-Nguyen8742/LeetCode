/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const ransomArr = ransomNote.split('');
  for (let i = 0; i < magazine.length; i++) {
    const foundIndex = ransomArr.findIndex((el) => el === magazine[i]);
    if (foundIndex === -1) {
      continue;
    }
    ransomArr.splice(foundIndex, 1);
  }
  return ransomArr.length === 0;
};