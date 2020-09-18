import capitalize from '../src/capitalize';

test('Capitalizes the first letter of a string', () => {
  expect(capitalize('joy')).toBe('Joy');
  expect(capitalize('sad')).not.toBe('sad');
});