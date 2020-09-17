import { caesar, unCaesar } from '../src/cipher';

test('encription with a shift of 13', () => {
  const string = caesar('defend the east wall of the castle!!');
  expect(string).toBe('cdedmc sgd dzrs vzkk ne sgd bzrskd!!');
});

test('encription by shift-13', () => {
  const string = unCaesar('cdedmc sgd dzrs vzkk ne sgd bzrskd!!');
  expect(string).toBe('defend the east wall of the castle!!');
});