function canChange(start: string, target: string): boolean {
  const startQueue = [];
  const targetQueue = [];
  
  for (let i = 0; i < start.length; i++) {
    if (start[i] != '_') {
      startQueue.push([start[i], i]);
    }
    
    if (target[i] != '_') {
      targetQueue.push([target[i], i]);
    }
  }
  
  if (startQueue.length != targetQueue.length) {
    return false;
  }

  while (startQueue.length != 0) {
    const [startChar, startIndex] = startQueue.pop();
    const [targetChar, targetIndex] = targetQueue.pop();
    
    if (
      startChar != targetChar
      || (startChar === 'L' && startIndex < targetIndex)
      || (startChar === 'R' && startIndex > targetIndex)
    ) {
      return false;
    }
  }

  return true;
};