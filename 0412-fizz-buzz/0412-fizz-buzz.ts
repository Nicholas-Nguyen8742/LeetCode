function fizzBuzz(n: number): string[] {    
  const arr = [];

  // Loop starting at 1 then going to target - (n)
  for (let i = 1; i <= n; i++) {
    // Condition: None of above - Action: "<number>"
    let indexString = `${i}`;

    // Condition: Divisible by 3 - Action: Fizz
    if (i % 3 === 0) {
      indexString = "Fizz";
    }

    // Condition: Divisble by 5 - Action: Buzz
    if (i % 5 === 0) {
      indexString.includes("Fizz") ? indexString += "Buzz" : indexString = "Buzz";
    }
    
    arr.push(indexString);
  }

  return arr;
};