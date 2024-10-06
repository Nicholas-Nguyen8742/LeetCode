/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2) {
  const s1 = sentence1.split(" ");
  const s2 = sentence2.split(" ");
  
  while (s1.length && s2.length && s1[0] == s2[0]) {
    s1.shift();
    s2.shift();
  }
  
  while (s1.length && s2.length && s1[s1.length - 1] == s2[s2.length - 1]) {
    s1.pop();
    s2.pop();
  }
  
  return !s1.length || !s2.length;
};