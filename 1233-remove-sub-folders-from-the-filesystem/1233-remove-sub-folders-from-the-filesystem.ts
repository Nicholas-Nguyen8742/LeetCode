function removeSubfolders(folder: string[]): string[] {
  folder.sort();
  const result = [folder[0]];
  
  for (let i = 1; i < folder.length; i++) {
    let lastResultFolder = result[result.length - 1] + '/';
    
    if (!(folder[i].startsWith(lastResultFolder))) {
      result.push(folder[i]);
    }
  }

  return result;
};