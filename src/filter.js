export const filterRemainingWords = (allWords, enteredLetters) => {
  let candidates = [];

  for (const i in allWords) {
    const currentWord = allWords[i];

    if (enteredLetters.length === 5) {
      if (
        !currentWord.includes(enteredLetters[0]) &&
        !currentWord.includes(enteredLetters[1]) &&
        !currentWord.includes(enteredLetters[2]) &&
        !currentWord.includes(enteredLetters[3]) &&
        !currentWord.includes(enteredLetters[4])
      )
        candidates.push(allWords[i]);
    } else if (enteredLetters.length === 10) {
      if (
        !currentWord.includes(enteredLetters[0]) &&
        !currentWord.includes(enteredLetters[1]) &&
        !currentWord.includes(enteredLetters[2]) &&
        !currentWord.includes(enteredLetters[3]) &&
        !currentWord.includes(enteredLetters[4]) &&
        !currentWord.includes(enteredLetters[5]) &&
        !currentWord.includes(enteredLetters[6]) &&
        !currentWord.includes(enteredLetters[7]) &&
        !currentWord.includes(enteredLetters[8]) &&
        !currentWord.includes(enteredLetters[9])
      ) {
        candidates.push(allWords[i]);
      }
    } else if (enteredLetters.length === 15) {
      if (
        !currentWord.includes(enteredLetters[0]) &&
        !currentWord.includes(enteredLetters[1]) &&
        !currentWord.includes(enteredLetters[2]) &&
        !currentWord.includes(enteredLetters[3]) &&
        !currentWord.includes(enteredLetters[4]) &&
        !currentWord.includes(enteredLetters[5]) &&
        !currentWord.includes(enteredLetters[6]) &&
        !currentWord.includes(enteredLetters[7]) &&
        !currentWord.includes(enteredLetters[8]) &&
        !currentWord.includes(enteredLetters[9]) &&
        !currentWord.includes(enteredLetters[10]) &&
        !currentWord.includes(enteredLetters[11]) &&
        !currentWord.includes(enteredLetters[12]) &&
        !currentWord.includes(enteredLetters[13]) &&
        !currentWord.includes(enteredLetters[14])
      ) {
        candidates.push(allWords[i]);
      }
    } else if (enteredLetters.length === 20) {
      if (
        !currentWord.includes(enteredLetters[0]) &&
        !currentWord.includes(enteredLetters[1]) &&
        !currentWord.includes(enteredLetters[2]) &&
        !currentWord.includes(enteredLetters[3]) &&
        !currentWord.includes(enteredLetters[4]) &&
        !currentWord.includes(enteredLetters[5]) &&
        !currentWord.includes(enteredLetters[6]) &&
        !currentWord.includes(enteredLetters[7]) &&
        !currentWord.includes(enteredLetters[8]) &&
        !currentWord.includes(enteredLetters[9]) &&
        !currentWord.includes(enteredLetters[10]) &&
        !currentWord.includes(enteredLetters[11]) &&
        !currentWord.includes(enteredLetters[12]) &&
        !currentWord.includes(enteredLetters[13]) &&
        !currentWord.includes(enteredLetters[14]) &&
        !currentWord.includes(enteredLetters[15]) &&
        !currentWord.includes(enteredLetters[16]) &&
        !currentWord.includes(enteredLetters[17]) &&
        !currentWord.includes(enteredLetters[18]) &&
        !currentWord.includes(enteredLetters[19])
      ) {
        candidates.push(allWords[i]);
      }
    } else {
      console.log('weird number of letters');
      return;
    }
  }

  return candidates;
};
