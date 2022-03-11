import { wordsArray } from "./word.js";

const fiveGuesses = 6;
let guessesLeft = fiveGuesses;
let currentGuess = [];
let nextLetter = 0;

//randomised word from word-list in word.js. 
let rightGuessString = wordsArray[Math.floor(Math.random() * wordsArray.length)]
console.log(rightGuessString)

//make btn clickable

const btnChoices = document.querySelectorAll('button');

let boxOne = document.getElementById('boxOne');
const boxTwo = document.getElementById('boxTwo');
const boxThree = document.getElementById('boxThree');
const boxFour = document.getElementById('boxFour');
const boxFive = document.getElementById('boxFive');


//fill each box with a letter
btnChoices.forEach(button => button.addEventListener("click", (event) => {
    console.log(event.target.innerHTML);
    let input = event.target.innerHTML;

    //control so that del and enter is not shown as regular btns
    if (input.length < 2) {

        if (boxOne.innerHTML == "") {
            let userChoice = event.target.innerHTML;
            guessesLeft--;
            currentGuess.push(boxOne.innerHTML = userChoice);
            return boxOne.innerHTML = userChoice;
        }
        if (boxTwo.innerHTML == "") {
            let userChoiceTwo = event.target.innerHTML;
            guessesLeft--;
            currentGuess.push(boxTwo.innerHTML = userChoiceTwo);
            return boxTwo.innerHTML = userChoiceTwo;
        }
        if (boxThree.innerHTML == "") {
            let userChoiceThree = event.target.innerHTML;
            guessesLeft--;
            currentGuess.push(boxThree.innerHTML = userChoiceThree);
            return boxThree.innerHTML = userChoiceThree;
        }
        if (boxFour.innerHTML == "") {
            let userChoiceFour = event.target.innerHTML;
            guessesLeft--;
            currentGuess.push(boxFour.innerHTML = userChoiceFour);
            return boxFour.innerHTML = userChoiceFour;
        }
        if (boxFive.innerHTML == "") {
            let userChoiceFive = event.target.innerHTML;
            guessesLeft--;
            currentGuess.push(boxFive.innerHTML = userChoiceFive);
            return boxFive.innerHTML = userChoiceFive;
        }
    }
    //check to be able to delete with btn Del

    if (input == "Del") {
        let removed = currentGuess.pop();
        if (boxFive.innerHTML != "") {
            console.log(removed);
            if (removed === boxFive.innerHTML) {
                guessesLeft++;
                return boxFive.innerHTML = "";
            }
        }
        if (boxFour.innerHTML != "") {
            console.log(removed);
            if (removed === boxFour.innerHTML) {
                guessesLeft++;
                return boxFour.innerHTML = "";
            }

        }
        if (boxThree.innerHTML != "") {
            console.log(removed);
            if (removed === boxThree.innerHTML) {
                guessesLeft++;
                return boxThree.innerHTML = "";
            }

        }
        if (boxTwo.innerHTML != "") {
            console.log(removed);
            if (removed === boxTwo.innerHTML) {
                guessesLeft++;
                return boxTwo.innerHTML = "";
            }

        }
        if (boxOne.innerHTML != "") {
            console.log(removed);
            if (removed === boxOne.innerHTML) {
                guessesLeft++;
                return boxOne.innerHTML = "";
            }

        }
    }
    alert("input: " + input + " rightGuessString " + rightGuessString + " currentGuess " + currentGuess.toString().replaceAll(",", ""));
    if (input == "Enter" && rightGuessString == currentGuess.toString().toString().replaceAll(",", "")) {
        alert('ok');
        let allCorrect = true;
        for (var l = 0; l < 4; l++) {
            if (currentGuess[l] == rightGuessString[l]) {

            }
            else {
                allCorrect = false;
            }
        }

        //what happens when u push enter? 
    }
}
));

//make a function that checks if the whole array of currentguess matches the index in wordsArray.



// console.log(wordsArray);
// console.log(wordsArray.length);
// console.log(wordsArray[10]);