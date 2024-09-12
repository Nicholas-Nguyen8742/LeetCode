/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const ransomArr = ransomNote.split('');
  for (let i = 0; i < magazine.length; i++) {
    if (!ransomArr.includes(magazine[i])) {
      continue;
    }
    const foundIndex = ransomArr.findIndex((el) => el === magazine[i]);
    if (foundIndex === -1) {
      continue;
    }
    ransomArr.splice(foundIndex, 1);
  }
  return ransomArr.length === 0;
};