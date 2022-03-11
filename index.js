import { wordsArray } from "./word.js";

const fiveGuesses = 6;
let guessesLeft = fiveGuesses;
const currentGuess = [];
const lettersChosen = [];
const list = document.getElementById("wrongWords");
const firstCardBoxes = document.getElementById("firstInput");


//randomised word from word-list in word.js. 

let rightGuessString = wordsArray[Math.floor(Math.random() * wordsArray.length)]
console.log(rightGuessString)

makeBoxes();

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

    // alert("input: " + input + " rightGuessString " + rightGuessString + " currentGuess " + currentGuess.toString().replaceAll(",", ""));
    if (input == "Enter" && currentGuess.length < 5) {
        alert('Du behöver fler bokstäver');
        return false;
    }
    if (input == "Enter" && rightGuessString == currentGuess.toString().toString().replaceAll(",", "")) {
        alert('Du vann! Ordet var rätt.');
        let allCorrect = true;
        boxInput = "";

        // for (let l = 0; l < rightGuessString.length; l++) {
        //     if (currentGuess[l] == rightGuessString[l]) {
        //     }
        //     else {
        //         console.log('Pröva igen!');
        //         allCorrect = false;
        //     }


        // }
    } else {
        alert('Pröva igen!');
        // console.log(currentGuess);
        // wrongGuesses();
        lettersChosen.push(currentGuess.toString().toString().replaceAll(",", ""));
        console.log(lettersChosen);
        list.innerHTML = lettersChosen;




    }

    //forts att kontrollera om bokstäverna finns med, om de ärpå rätt plats, om de inte finns med- gråmarkera i tangentbordet. 

    //skriva test

    //om tid finns; algoritm b i nytt dokument. 

}
));




// console.log(wordsArray);
// console.log(wordsArray.length);
// console.log(wordsArray[10]);