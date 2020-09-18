import { caesar, unCaesar } from '../src/cipher';

test('Encription with a shift of 1', () => {
  const string = caesar('defend the east wall of the castle!!');
  expect(string).toBe('cdedmc sgd dzrs vzkk ne sgd bzrskd!!');
});


test('Encription with a shift of 1 and maitaining character cases', () => {
  const string = caesar('ManGo');
  expect(string).toBe('LzmFn');
});


test('Decription by unshift of 1', () => {
  const string = unCaesar('cdedmc sgd dzrs vzkk ne sgd bzrskd!!');
  expect(string).toBe('defend the east wall of the castle!!');
});


test('Decription by unshift of 1 maintaining character cases', () => {
  const string = unCaesar('LzmFn');
  expect(string).toBe('ManGo');
});