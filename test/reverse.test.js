import reverseString from '../src/reverse';

test('Reverses a given string', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('dime')).not.toBe('dime');
});