func reverseString(s []byte)  {
  var copyS []byte = make([]byte, len(s))
  copy(copyS, s)
  for i := 0; i < len(s); i++ {
    s[i] = copyS[len(copyS) - i - 1]
  }
}