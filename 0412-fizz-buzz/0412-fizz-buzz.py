class Solution(object):
    def fizzBuzz(self, n):
        """
        :type n: int
        :rtype: List[str]
        """
        list = []
        i = 1
        while i <= n:
          fizzCondition = i % 3 == 0
          buzzCondition = i % 5 == 0
          
          if fizzCondition or buzzCondition:
              listItem = ""
              if fizzCondition: 
                  listItem = "Fizz"

              if buzzCondition:
                  listItem = listItem + "Buzz"

              list.append(listItem)              
          else: 
              list.append(str(i))
          i += 1

        return list