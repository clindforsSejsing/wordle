import { wordsArray } from "./word.js";
//* Make a game of wordle:
/* 1. The game chose a word from a list and make the user know how many letters the word has. 
2. The user guesses by writing into an input, a word with the same amount of letters.
3. If the word is correct- user wins. 
4. Word not correct? Then teh game gives feedback: if the letter is correct, if the letter is correct but at the wrong spot in the word, or if the letter is not in the secret word. 
5. The input with the correct letters (and at the right place) should stay in place when the user gets more chanses to guess the word. 
6. The guesses have no limits. The user gets a notification when the correct word is guessed. 
*///*@author CLS

console.log(wordsArray);
console.log(wordsArray.length);
console.log(wordsArray[10]);