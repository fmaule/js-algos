const expect = require('expect.js');
const {
  fizzBuzzLoop,
  fizzBuzzReducer,
  fizzBuzzMap,
  fizzBuzzGenerated,
} = require('../src/fizzbuzz.js');

describe('FizzBuzz', () => {
  const fizzedExpected = [
    1,
    2,
    'Fizz',
    4,
    'Buzz',
    'Fizz',
    7,
    8,
    'Fizz',
    'Buzz',
    11,
    'Fizz',
    13,
    14,
    'FizzBuzz',
    16,
    17,
    'Fizz',
    19,
    'Buzz',
  ];

  it('implementation #1 (for loop)', () => {
    expect(fizzBuzzLoop(20)).to.eql(fizzedExpected);
  });
  it('implementation #2 (reduce)', () => {
    expect(fizzBuzzReducer(20)).to.eql(fizzedExpected);
  });
  it('implementation #3 (map)', () => {
    expect(fizzBuzzMap(20)).to.eql(fizzedExpected);
  });
  it('implementation #4 (generator fn)', () => {
    expect(fizzBuzzGenerated(20)).to.eql(fizzedExpected);
  });
});
