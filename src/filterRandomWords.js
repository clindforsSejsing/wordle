//Get the array of words and sort them out by numbers of letters. 
function getSecretWord(listOfWords, nrOfLetters) {

    let wordArray = listOfWords;

    if (nrOfLetters == 4) {
        wordArray = wordArray.filter(filter4Words);
    }
    else if (nrOfLetters == 5) {
        wordArray = wordArray.filter(filter5Words);
    }
    else if (nrOfLetters == 6) {
        wordArray = wordArray.filter(filter6Words);
    }
    else if (nrOfLetters == 7) {
        wordArray = wordArray.filter(filter7Words);
    }

    return wordArray[Math.floor(Math.random() * wordArray.length)];

}

function filter4Words(word) {
    return word.length == 4;
}

function filter5Words(word) {
    return word.length == 5;
}

function filter6Words(word) {
    return word.length == 6;
}

function filter7Words(word) {
    return word.length == 7;
}

export { getSecretWord };