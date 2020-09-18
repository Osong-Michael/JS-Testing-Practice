import calculator from '../src/calculator';

test('Returns the sum of two numbers', () => {
  expect(calculator.add(5, 7)).toBe(12);
});

test('Returns the difference between two numbers', () => {
  expect(calculator.subtract(10, 5)).toBe(5);
});

test('Returns the quotient of two numbers', () => {
  expect(calculator.divide(12, 3)).toBe(4);
});

test('Returns product of two numbers', () => {
  expect(calculator.multiply(10, 10)).toBe(100);
});