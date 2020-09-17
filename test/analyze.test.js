import analyze from '../src/analyze';

const arr = [1, 8, 3, 4, 2, 6];


test('Returns an object', () => {
  expect(typeof analyze(arr)).toBe('object');
});

test('Returns an object containing average, min, max & length', () => {
  expect(analyze(arr)).toEqual({
    average: 4, min: 1, max: 8, length: 6,
  });
});

test('Returns average = 4', () => {
  expect(analyze(arr).average).toBe(4);
});

test('Returns min = 1', () => {
  expect(analyze(arr).min).toBe(1);
});

test('Returns max = 8', () => {
  expect(analyze(arr).max).toBe(8);
});

test('Returns length of array = 6', () => {
  expect(analyze(arr).length).toBe(6);
});
