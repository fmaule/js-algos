const expect = require('expect.js');
const {
  caesarCipher,
 } = require('../src/caesarcipher.js');

describe('Caesar Cipher', () => {
  const originalPhrase = 'This is Furchtbar';

  it('Shift 2', () => {
    expect(caesarCipher(originalPhrase, 2)).to.eql('Vjku ku Hwtejvdct');
  });
  it('Shift 17', () => {
    expect(caesarCipher(originalPhrase, 17)).to.eql('Kyzj zj Wlityksri');
  });
  it('Shift 26 (same as not shifting at all)', () => {
    expect(caesarCipher(originalPhrase, 26)).to.eql('This is Furchtbar');
  });
  it('Shift 28 (same as shifting +2)', () => {
    expect(caesarCipher(originalPhrase, 28)).to.eql('Vjku ku Hwtejvdct');
  });
  it('Shift -2', () => {
    expect(caesarCipher(originalPhrase, -2)).to.eql('Rfgq gq Dspafrzyp');
  });
  it('Shift -17', () => {
    expect(caesarCipher(originalPhrase, -17)).to.eql('Cqrb rb Odalqckja');
  });
  it('Shift -26 (same as not shifting at all)', () => {
    expect(caesarCipher(originalPhrase, -26)).to.eql('This is Furchtbar');
  });
  it('Shift -28 (same as shifting -2)', () => {
    expect(caesarCipher(originalPhrase, -28)).to.eql('Rfgq gq Dspafrzyp');
  });
});
