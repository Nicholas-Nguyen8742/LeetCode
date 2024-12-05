function canChange(start: string, target: string): boolean {
  let startLength = start.length, [startIndex, targetIndex] = [0, 0];

  while (startIndex < startLength || targetIndex < startLength) {
    while (startIndex < startLength && start[startIndex] == '_') startIndex++;
    
    while (targetIndex < startLength && target[targetIndex] == '_') targetIndex++;
    
    
    if (
      start[startIndex] != target[targetIndex]
      || (start[startIndex] === 'L' && startIndex < targetIndex)
      || (start[startIndex] === 'R' && startIndex > targetIndex)
    ) {
      return false;
    }
    
    startIndex++;
    targetIndex++;
  }

  return true;
};