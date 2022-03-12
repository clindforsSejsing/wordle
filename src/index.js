import { wordsArray } from "../wordList.js";
import { compareWords } from "./compareWords.js";
import { getSecretWord } from "./filterRandomWords.js";


document.getElementById("refreshButton").addEventListener("click", refresh);

let currentGuess = [];
const list = document.getElementById("wrongWords");
const firstCardBoxes = document.getElementById("firstInput");
const winnings = document.getElementById("secondInput");
let wins = 0;
let guesses = 0;
let nmbWins = document.createElement("p");
nmbWins.setAttribute("id", "result");
winnings.append(nmbWins);

makeBoxes();

//randomised word from word-list in word.js.
let rightGuessString = getSecretWord(wordsArray, nrOfLetters());

let guessesLeft = rightGuessString.length;
console.log(rightGuessString);

showNrOfBoxes(guessesLeft);

//make btn clickable
const btnChoices = document.querySelectorAll("button");

//add click-event on btns
btnChoices.forEach((button) =>
    button.addEventListener("click", (event) => {
        let input = event.target.innerHTML;

        //control so that del and enter is not shown as regular btns
        if (input.length < 2) {
            for (let b = 0; b < rightGuessString.length; b++) {
                let currentBox = document.getElementById(b);
                if (currentBox.innerHTML == "") {
                    let userChoice = event.target.innerHTML;
                    guessesLeft--;
                    currentGuess.push((currentBox.innerHTML = userChoice));
                    return (currentBox.innerHTML = userChoice);
                }
            }
        }
        //check to be able to delete with btn Del

        if (input == "Del") {
            for (let b = currentGuess.length - 1; b >= 0; b--) {
                let currentBox = document.getElementById(b);
                let removed = currentGuess.pop();
                if (currentBox.innerHTML != "") {
                    if (removed === currentBox.innerHTML) {
                        guessesLeft++;
                        return (currentBox.innerHTML = "");
                    }
                }
            }
        }

        //checks to see if input is correct
        const currentGuessString = currentGuess.toString().replaceAll(",", "");
        if (input == "Enter" && currentGuess.length < rightGuessString.length) {
            alert("Du behöver fler bokstäver");

        }
        if (input == "Enter" && rightGuessString == currentGuessString) {
            alert("Du vann! Ordet var rätt.");
            wins++;
            guesses = 0;
            clearAll();
            currentGuess.splice(currentGuess.length * -1);

            let newWord = getSecretWord(wordsArray, nrOfLetters());
            rightGuessString = newWord;
            showNrOfBoxes(rightGuessString.length);
            list.innerHTML = "";
            nmbWins.innerHTML = "Antal Vinster: " + wins;
            listOfLetters.innerHTML = "";
            console.log(newWord);

        } else {
            alert("Pröva igen!");
            clearAll();
            //output on screen for the user to see result
            const listOfLetters = document.getElementById("listOfLetters");
            let result = document.createElement("li");
            result.setAttribute("font-weight", "bold");
            listOfLetters.append(result);

            let guessResult = compareWords(currentGuessString, rightGuessString);


            //set color to the letters
            for (let gr = 0; gr < rightGuessString.length; gr++) {
                console.log(guessResult[gr].result);
                if (guessResult[gr].result == "correct") {
                    result.innerHTML +=
                        "<span style='color:#93e910'>" + guessResult[gr].letter + "</span>";
                } else if (guessResult[gr].result == "misplaced") {
                    result.innerHTML +=
                        "<span style='color:#0000FF'>" + guessResult[gr].letter + "</span>";
                } else if (guessResult[gr].result == "incorrect") {
                    result.innerHTML +=
                        "<span style='color:#FF0000'>" + guessResult[gr].letter + "</span>";
                }
            }

            listOfLetters.appendChild(result);
            guesses++;
            currentGuess.splice(currentGuess.length * -1);
        }
    })
);
function clearAll() {
    for (let b = 0; b < rightGuessString.length; b++) {
        let currentBox = document.getElementById(b);
        currentBox.innerText = "";
    }
}
function makeBoxes() {

    for (let i = 0; i < 7; i++) {
        let createNewBox = document.createElement("div");
        createNewBox.setAttribute("id", i);
        createNewBox.setAttribute("class", "box");
        firstCardBoxes.append(createNewBox);
        createNewBox.style.visibility = "hidden";
    }
}

function showNrOfBoxes(nr) {

    for (let s = 0; s < nr; s++) {
        let box = document.getElementById(s);
        box.style.visibility = "visible";
    }

    for (let h = nr; h < 7; h++) {
        let box = document.getElementById(h);
        box.style.visibility = "hidden";
    }
}



function nrOfLetters() {
    const allWords = document.getElementById("allwords");
    const fourLetters = document.getElementById("fourletterword");
    const fiveLetters = document.getElementById("fiveletterword");
    const sixLetters = document.getElementById("sixletterword");
    const sevenLetters = document.getElementById("sevenletterword");

    if (allWords.checked) {
        return 0;
    }
    else if (fourLetters.checked) {
        return 4;
    }
    else if (fiveLetters.checked) {
        return 5;
    }
    else if (sixLetters.checked) {
        return 6;
    }
    else if (sevenLetters.checked) {
        return 7;
    }
}

function refresh() {
    guesses = 0;
    clearAll();
    currentGuess.splice(currentGuess.length * -1);
    let newWord = getSecretWord(wordsArray, nrOfLetters());
    rightGuessString = newWord;
    showNrOfBoxes(rightGuessString.length);
    list.innerHTML = "";
    nmbWins.innerHTML = "Antal Vinster: " + wins;
    listOfLetters.innerHTML = "";
    console.log(newWord);
}

