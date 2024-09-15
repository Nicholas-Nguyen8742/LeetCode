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
          
          if fizzCondition or buzzCondition:
              listItem = ""
              if fizzCondition: 
                  listItem = "Fizz"

              if buzzCondition:
                  listItem = listItem + "Buzz"

              list.append(listItem)              
          else: 
              list.append(str(i))

        return list