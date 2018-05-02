// Using a for loop
const fizzBuzzLoop = (num) => {
  const fizzes = [];
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) fizzes.push('FizzBuzz');
    else if (i % 3 === 0) fizzes.push('Fizz');
    else if (i % 5 === 0) fizzes.push('Buzz');
    else fizzes.push(i);
  }
  return fizzes;
}

// Using reducer
const fizzBuzzReducer = (num) => [...Array(num).keys()]
  .reduce((result, cv) => {
    ++cv;
    if (cv % 15 === 0) result.push('FizzBuzz');
    else if (cv % 3 === 0) result.push('Fizz');
    else if (cv % 5 === 0) result.push('Buzz');
    else result.push(cv);
    return result;
}, []);

// Using map
const fizzBuzzMap = (num) => {
  return [...Array(num).keys()]
    .map((x)   => ((++x % 3 === 0) ? fz = 'Fizz' : x))
    .map((x,i) => ((++i % 5 === 0) ? bz = 'Buzz' : x))
    .map((x,i) => ((++i % 15 === 0) ? fz + bz : x))
}

// Using a generator function
function * fizzBuzzGenerator() {
  let i = 1;
  do {
      if (i % 15 === 0) yield 'FizzBuzz';
      else if (i % 3 === 0) yield 'Fizz';
      else if (i % 5 === 0) yield 'Buzz';
      else yield i;
  } while (++i)
}

const fizzBuzzGenerated = (num) => {
  const fizzes = [];
  const fizzBuzzer = fizzBuzzGenerator();
  for (let i = 1; i <= num; i++) {
    fizzes.push(fizzBuzzer.next().value);
  }
  return fizzes;
};

module.exports = {
  fizzBuzzLoop,
  fizzBuzzReducer,
  fizzBuzzMap,
  fizzBuzzGenerated,
}
