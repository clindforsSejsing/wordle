/**
* @jest-environment jsdom
*/

import { getSecretWord } from '../src/filterRandomWords';

test('Users clicks to set a randomised word of four letters', () => {
    expect(getSecretWord(["LÅSKOLV", "NYCKEL", "LÅSA", "TRE"], 4)).toBe("LÅSA");
});

test('Users clicks to set a randomised word of five letters', () => {
    expect(getSecretWord(["LÅSKOLV", "NYCKEL", "LÅSA", "TRE", "ALLAS"], 5)).toBe("ALLAS");
});

test('Users clicks to set a randomised word of six letters', () => {
    expect(getSecretWord(["LÅSKOLV", "NYCKEL", "LÅSA", "TRE", "ALLAS"], 6)).toBe("NYCKEL");
});

test('Users clicks to set a randomised word of seven letters', () => {
    expect(getSecretWord(["LÅSKOLV", "NYCKEL", "LÅSA", "TRE", "ALLAS"], 7)).toBe("LÅSKOLV");
});

