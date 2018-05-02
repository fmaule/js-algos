/* eslint-disable no-cond-assign */

// Using a for loop
const fizzBuzzLoop = (num) => {
  const fizzes = [];
  for (let i = 1; i <= num; i += 1) {
    if (i % 15 === 0) fizzes.push('FizzBuzz');
    else if (i % 3 === 0) fizzes.push('Fizz');
    else if (i % 5 === 0) fizzes.push('Buzz');
    else fizzes.push(i);
  }
  return fizzes;
};

// Using reducer
const fizzBuzzReducer = (num) => [...Array(num).keys()]
  .reduce((result, cv) => {
    const currentValue = cv + 1;
    if (currentValue % 15 === 0) result.push('FizzBuzz');
    else if (currentValue % 3 === 0) result.push('Fizz');
    else if (currentValue % 5 === 0) result.push('Buzz');
    else result.push(currentValue);
    return result;
  }, []);

// Using map
// shouldn't return assignment :\
const fizzBuzzMap = (num) => [...Array(num).keys()]
  .map((x) => ((x += 1 % 3 === 0) ? fz = 'Fizz' : x)) // eslint-disable-line no-return-assign, no-undef, no-param-reassign
  .map((x, i) => ((i += 1 % 5 === 0) ? bz = 'Buzz' : x)) // eslint-disable-line no-return-assign, no-undef, no-param-reassign
  .map((x, i) => ((i += 1 % 15 === 0) ? fz + bz : x)); // eslint-disable-line no-return-assign, no-undef, no-param-reassign

// Using a generator function
function* fizzBuzzGenerator() {
  let i = 1;
  do {
    if (i % 15 === 0) yield 'FizzBuzz';
    else if (i % 3 === 0) yield 'Fizz';
    else if (i % 5 === 0) yield 'Buzz';
    else yield i;
  } while (i += 1);
}

const fizzBuzzGenerated = (num) => {
  const fizzes = [];
  const fizzBuzzer = fizzBuzzGenerator();
  for (let i = 1; i <= num; i += 1) {
    fizzes.push(fizzBuzzer.next().value);
  }
  return fizzes;
};

module.exports = {
  fizzBuzzLoop,
  fizzBuzzReducer,
  fizzBuzzMap,
  fizzBuzzGenerated,
};
