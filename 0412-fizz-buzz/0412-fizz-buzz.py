class Solution(object):
    def fizzBuzz(self, n):
        """
        :type n: int
        :rtype: List[str]
        """
        list = []
        
        i = 1

        while i < n + 1:
          fizzCondition = i % 3 == 0
          buzzCondition = i % 5 == 0
          
          if fizzCondition == False and buzzCondition == False:
              list.append(str(i))
          elif fizzCondition and buzzCondition:
              list.append("FizzBuzz")
          elif buzzCondition:
              list.append("Buzz")
          else: 
              list.append("Fizz")
              
          i += 1

        return list