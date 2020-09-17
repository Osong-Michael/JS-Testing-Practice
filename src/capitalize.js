function capitalize(string) {
  let newString = '';
  for (let i = 0; i < string.length; i += 1) {
    const firstLetter = i === 0 ? string[i].toUpperCase() : string[i].toLowerCase();
    newString += firstLetter;
  }
  return newString;
}

export default capitalize;