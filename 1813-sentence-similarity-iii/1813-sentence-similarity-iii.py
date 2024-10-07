class Solution(object):
    def areSentencesSimilar(self, sentence1, sentence2):
        """
        :type sentence1: str
        :type sentence2: str
        :rtype: bool
        """
        s1 = list(sentence1.split())
        s2 = list(sentence2.split())
        
        while s1 and s2 and s1[0] == s2[0]:
            s1.pop(0)
            s2.pop(0)
          
        while s1 and s2 and s1[-1] == s2[-1]:
            s1.pop(-1)
            s2.pop(-1)
          
        return not s1 or not s2
        