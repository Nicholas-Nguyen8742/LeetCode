class Solution(object):
    def fizzBuzz(self, n):
        """
        :type n: int
        :rtype: List[str]
        """
        list = []

        for i in range(1, n + 1):
          fizzCondition = i % 3 == 0
          buzzCondition = i % 5 == 0
          
          if fizzCondition and buzzCondition:
              list.append("FizzBuzz")
          elif fizzCondition:
              list.append("Fizz")
          elif buzzCondition:
              list.append("Buzz")
          else: 
              list.append(str(i))

        return list