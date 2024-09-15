function fizzBuzz(n: number): string[] {    
  const arr = [];

  for (let i = 1; i <= n; i++) {
    const fizz = i % 3 === 0 ? "Fizz" : '';
    const buzz = i % 5 === 0 ? "Buzz" : '';
    
    arr.push((i % 3 === 0 || i % 5 === 0) ? fizz + buzz : `${i}`);
  }

  return arr;
};