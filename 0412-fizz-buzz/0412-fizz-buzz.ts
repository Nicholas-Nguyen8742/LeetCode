function fizzBuzz(n: number): string[] {    
  const arr = [];

  for (let i = 1; i <= n; i++) {
    const fizzCondition = i % 3 === 0;
    const buzzCondition = i % 5 === 0;
    const fizz = fizzCondition ? "Fizz" : '';
    const buzz = buzzCondition ? "Buzz" : '';
    
    arr.push((fizzCondition || buzzCondition) ? fizz + buzz : `${i}`);
  }

  return arr;
};