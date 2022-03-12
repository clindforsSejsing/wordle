function compareWords(guess, correctWord) {
    let letterArray = [];
    //checks to see if letter is correct and at correct spot
    for (let c = 0; c < correctWord.length; c++) {
        if (guess[c] == correctWord[c]) {
            letterArray[c] = { letter: guess[c], result: "correct" };
        } else {
            let letterFound = false;
            for (let i = 0; i < correctWord.length; i++) {
                if (guess[c] == correctWord[i]) {
                    letterArray[c] = { letter: guess[c], result: "maybemisplaced" };
                    letterFound = true;
                    break;
                }
            }

            if (!letterFound) {
                letterArray[c] = { letter: guess[c], result: "incorrect" };
            }
        }
    }

    //if they are marked as maybemisplaced- check to see if they are misplaced
    for (let c = 0; c < correctWord.length; c++) {
        if (letterArray[c].result != "correct") {
            for (let g = 0; g < letterArray.length; g++) {
                if (letterArray[g].result == "maybemisplaced") {
                    if (letterArray[g].letter == correctWord[c]) {
                        letterArray[g].result = "misplaced";
                        break;
                    }
                }
            }
        }
    }

    //Replace all remaining maybemisplaced with incorrect
    for (let m = 0; m < letterArray.length; m++) {
        if (letterArray[m].result == "maybemisplaced") {
            letterArray[m].result = "incorrect";
        }
    }

    return letterArray;
}

export { compareWords };
