function compareWords(guess, correctWord) {
    let letterArray = [];
    //controls to see if letter is correct and at correct spot
    for (let c = 0; c < correctWord.length; c++) {
        if (guess[c] == correctWord[c]) {
            letterArray[c] = { letter: guess[c], result: "correct" };

        } else {
            let letterFound = false;
            for (let i = 0; i < correctWord.length; i++) {
                if (guess[c] == correctWord[i]) {
                    letterArray[c] = { letter: guess[c], result: "misplaced" };
                    letterFound = true;
                    break;
                }
            }

            if (!letterFound) {
                letterArray[c] = { letter: guess[c], result: "incorrect" };
            }
        }

    }
    return letterArray;
};

export { compareWords };