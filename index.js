import { wordsArray } from "./word.js";

const fiveGuesses = 6;
let guessesLeft = fiveGuesses;
let currentGuess = [];
const lettersChosen = [];
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
console.log(rightGuessString);


makeBoxes();

let boxOne = document.getElementById('0');
let boxTwo = document.getElementById('1');
let boxThree = document.getElementById('2');
let boxFour = document.getElementById('3');
let boxFive = document.getElementById('4');

//make btn clickable
const btnChoices = document.querySelectorAll('button');



//fill each box with a letter
btnChoices.forEach(button => button.addEventListener("click", (event) => {
    //     console.log(event.target.innerHTML);
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
            let userChoice = event.target.innerHTML;
            guessesLeft--;
            currentGuess.push(boxTwo.innerHTML = userChoice);
            return boxTwo.innerHTML = userChoice;
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

    if (input == "Enter" && currentGuess.length < 5) {
        alert('Du behöver fler bokstäver');
        return false;
    }
    if (input == "Enter" && (rightGuessString == currentGuess.toString().replaceAll(",", ""))) {
        alert('Du vann! Ordet var rätt.');
        wins++;
        guesses = 0;
        clearAll();
        currentGuess.splice(-5);
        lettersChosen.splice(-25);
        let newWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
        rightGuessString = newWord;
        list.innerHTML = "";
        nmbWins.innerHTML = 'Antal Vinster: ' + wins;
        listOfLetters.innerHTML = "";
        console.log(newWord);
        return true;
    } else {
        alert('Pröva igen!');

        clearAll();
        lettersChosen.push(currentGuess.toString().replaceAll(",", ""));
        list.innerHTML = lettersChosen;
        currentGuess.splice(-5);
        console.log(lettersChosen);

        const listOfLetters = document.getElementById("listOfLetters");
        let result = document.createElement('li');
        listOfLetters.append(result);

        //controls to see if letter is correct and at correct spot
        for (let c = 0; c < 5; c++) {
            if (lettersChosen[guesses][c] == rightGuessString[c]) {
                result.innerHTML += (lettersChosen[guesses][c] + " " + ' letter is in place||');

            } else {
                let letterFound = false;
                for (let i = 0; i < rightGuessString.length; i++) {
                    if (lettersChosen[guesses][c] == rightGuessString[i]) {
                        result.innerText += (lettersChosen[guesses][c] + ' letter is misplaced||');
                        letterFound = true;
                        break;
                    }
                }

                if (!letterFound) {
                    result.innerText += (lettersChosen[guesses][c] + ' letter is incorrect||');
                    //listOfLetters.appendChild(wrongLetter);
                }
            }

        }
        listOfLetters.appendChild(result);
        guesses++;
    }

}));
function clearAll() {
    boxOne.innerText = "";
    boxTwo.innerText = "";
    boxThree.innerText = "";
    boxFour.innerText = "";
    boxFive.innerText = "";
}
function makeBoxes() {

    console.log(firstCardBoxes);
    let rightGuess = rightGuessString.length;

    for (let i = 0; i < rightGuess; i++) {
        let createNewBox = document.createElement('div');
        createNewBox.setAttribute('id', i);
        createNewBox.setAttribute('class', 'box');
        firstCardBoxes.append(createNewBox);
    }
}




// console.log(wordsArray);
// console.log(wordsArray.length);
// console.log(wordsArray[10]);