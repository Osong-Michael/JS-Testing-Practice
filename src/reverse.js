const reverseString = (string) => {
  let reversed = '';
  for (let i = string.length - 1; i >= 0; i -= 1) {
    reversed += string[i];
  }
  return reversed;
};

export default reverseString;