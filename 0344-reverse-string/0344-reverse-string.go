func reverseString(s []byte)  {
  var lenS int = len(s)
  var copyS []byte = make([]byte, lenS)

  copy(copyS, s)

  for i := 0; i < lenS; i++ {
    var counter int = lenS - i - 1
    s[i] = copyS[counter]
  }
}