function minLength(s: string): number {
  while (s.includes('AB') || s.includes('CD')) {
    s = s.replaceAll('CD', '');
    s = s.replaceAll('AB', '');
  }

  return s.length;
};