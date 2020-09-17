const shift = 1;
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function characterIndices() {
  return {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
  };
}

function caesar(argument) {
  const string = argument.toLowerCase();
  let encryption = '';
  for (let i = 0; i < string.length; i += 1) {
    const char = string[i];
    const charIndex = characterIndices()[char];
    if (typeof charIndex !== 'undefined') {
      const encryptionIndex = ((charIndex - shift) + 26) % 26;
      encryption += alphabet[encryptionIndex];
    } else {
      encryption += char;
    }
  }
  return encryption;
}


function unCaesar(string) {
  let decryption = '';
  for (let index = 0; index < string.length; index += 1) {
    const char = string[index];
    const charIndex = characterIndices()[char];
    if (typeof charIndex !== 'undefined') {
      const encryptionIndex = (charIndex + shift) % 26;
      decryption += alphabet[encryptionIndex];
    } else {
      decryption += char;
    }
  }
  return decryption;
}

export { caesar, unCaesar };