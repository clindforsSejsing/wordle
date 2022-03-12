/**
* @jest-environment jsdom
*/
import { compareWords } from '../compareWords.js';


test('Users guess and the randomised word is the same', () => {
    expect(compareWords('TESLA', 'TESLA')).toStrictEqual([{ letter: 'T', result: "correct" }, { letter: 'E', result: "correct" }, { letter: 'S', result: "correct" }, { letter: 'L', result: "correct" }, { letter: 'A', result: "correct" }]);
});


test('Users guess has one wrong letter', () => {
    expect(compareWords('TEKLA', 'TESLA')).toStrictEqual([{ letter: 'T', result: "correct" }, { letter: 'E', result: "correct" }, { letter: 'K', result: "incorrect" }, { letter: 'L', result: "correct" }, { letter: 'A', result: "correct" }]);
});


test('Users guess has two letters misplaced', () => {
    expect(compareWords('TELSA', 'TESLA')).toStrictEqual([{ letter: 'T', result: "correct" }, { letter: 'E', result: "correct" }, { letter: 'L', result: "misplaced" }, { letter: 'S', result: "misplaced" }, { letter: 'A', result: "correct" }]);
});


test('Users guess has three letters of same kind, but only two are misplaced, one should be incorrect', () => {
    expect(compareWords('OOOOX', 'DODDO')).toStrictEqual([{ letter: 'O', result: "misplaced" }, { letter: 'O', result: "correct" }, { letter: 'O', result: "incorrect" }, { letter: 'O', result: "incorrect" }, { letter: 'X', result: "incorrect" }]);
});
