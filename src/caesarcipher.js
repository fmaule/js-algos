const caesarCipher = (string, num) => {
  // generate an array with the alphabet a-z
  const alphabet = [...Array(26).keys()]
    .map((foo, x) => String.fromCharCode(97 + x));

  const shift = num % alphabet.length;

  return string
    .split('')
    .map((letter) => {
      if (letter === ' ') { return ' ' };
      const lowercaseLetter = letter.toLowerCase();
      const curIdx = alphabet.indexOf(lowercaseLetter);

      let newIdx = curIdx + shift;
      if (newIdx >= alphabet.length) { newIdx = newIdx - alphabet.length; }
      if (newIdx < 0 ) { newIdx = newIdx + alphabet.length; }
      if (letter === letter.toUpperCase()) { return alphabet[newIdx].toUpperCase(); }

      return alphabet[newIdx];
  }).join('');
}
module.exports = {
  caesarCipher,
}
