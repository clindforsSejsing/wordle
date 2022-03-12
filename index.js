import { wordsArray } from "./word.js";
import { compareWords } from "./compareWords.js";


let currentGuess = [];
const list = document.getElementById("wrongWords");
const firstCardBoxes = document.getElementById("firstInput");
const winnings = document.getElementById("secondInput");
let wins = 0;
let guesses = 0;
let nmbWins = document.createElement('p');
nmbWins.setAttribute('id', 'result');
winnings.append(nmbWins);



//randomised word from word-list in word.js. 
let rightGuessString = wordsArray[Math.floor(Math.random() * wordsArray.length)];
let guessesLeft = rightGuessString.length;
console.log(rightGuessString);


makeBoxes();

//make btn clickable
const btnChoices = document.querySelectorAll('button');



//fill each box with a letter
btnChoices.forEach(button => button.addEventListener("click", (event) => {
    let input = event.target.innerHTML;


    //control so that del and enter is not shown as regular btns
    if (input.length < 2) {

        for (let b = 0; b < rightGuessString.length; b++) {
            let currentBox = document.getElementById(b);
            if (currentBox.innerHTML == "") {
                let userChoice = event.target.innerHTML;
                guessesLeft--;
                currentGuess.push(currentBox.innerHTML = userChoice);
                return currentBox.innerHTML = userChoice;
            }
        }
    }
    //check to be able to delete with btn Del

    if (input == "Del") {
        for (let b = 0; b < currentGuess.length; b++) {
            let currentBox = document.getElementById(b);
            let removed = currentGuess.pop();
            if (currentBox.innerHTML != "") {
                if (removed === currentBox.innerHTML) {
                    guessesLeft++;
                    return currentBox.innerHTML = "";
                }
            }
        }
    }

    const currentGuessString = currentGuess.toString().replaceAll(",", "")
    if (input == "Enter" && currentGuess.length < 5) {
        alert('Du behöver fler bokstäver');
        return false;
    }
    if (input == "Enter" && (rightGuessString == currentGuessString)) {
        alert('Du vann! Ordet var rätt.');
        wins++;
        guesses = 0;
        clearAll();
        currentGuess.splice(-5);
        let newWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
        rightGuessString = newWord;
        list.innerHTML = "";
        nmbWins.innerHTML = 'Antal Vinster: ' + wins;
        listOfLetters.innerHTML = "";
        console.log(newWord);
        return true;
    } else {
        alert('Pröva igen!');
        window.alert("currentGuess: " + currentGuess.toString());
        clearAll();

        const listOfLetters = document.getElementById("listOfLetters");
        let result = document.createElement('li');
        result.setAttribute('font-weight', 'bold');
        listOfLetters.append(result);

        let guessResult = compareWords(currentGuessString, rightGuessString);
        console.log(currentGuessString, rightGuessString);
        //set color to the letters 
        for (let gr = 0; gr < rightGuessString.length; gr++) {
            console.log(guessResult[gr].result);
            if (guessResult[gr].result == "correct") { result.innerHTML += "<span style='color:#93e910'>" + guessResult[gr].letter + "</span>"; }
            else if (guessResult[gr].result == "misplaced") { result.innerHTML += "<span style='color:#0000FF'>" + guessResult[gr].letter + "</span>"; }
            else if (guessResult[gr].result == "incorrect") { result.innerHTML += "<span style='color:#FF0000'>" + guessResult[gr].letter + "</span>"; }

        }

        listOfLetters.appendChild(result);
        guesses++;
        currentGuess.splice(-5);
    }

}));
function clearAll() {

    for (let b = 0; b < rightGuessString.length; b++) {
        let currentBox = document.getElementById(b);
        currentBox.innerText = "";
    }

};
function makeBoxes() {


    let rightGuess = rightGuessString.length;

    for (let i = 0; i < rightGuess; i++) {
        let createNewBox = document.createElement('div');
        createNewBox.setAttribute('id', i);
        createNewBox.setAttribute('class', 'box');
        firstCardBoxes.append(createNewBox);
    }
};
// function compareWords(guess, correctWord) {
//     let letterArray = [];
//     //controls to see if letter is correct and at correct spot
//     for (let c = 0; c < correctWord.length; c++) {
//         if (guess[c] == correctWord[c]) {
//             letterArray[c] = { letter: guess[c], result: "correct" };

//         } else {
//             let letterFound = false;
//             for (let i = 0; i < correctWord.length; i++) {
//                 if (guess[c] == correctWord[i]) {
//                     letterArray[c] = { letter: guess[c], result: "misplaced" };
//                     letterFound = true;
//                     break;
//                 }
//             }

//             if (!letterFound) {
//                 letterArray[c] = { letter: guess[c], result: "incorrect" };
//             }
//         }

//     }
//     return letterArray;
// };

// export { compareWords };



// console.log(wordsArray);
// console.log(wordsArray.length);
// console.log(wordsArray[10]);