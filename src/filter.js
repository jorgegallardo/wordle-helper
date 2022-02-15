export const filterRemainingWords = (allWords, testWord) => {
  //let testWord = 'wontsdazedbulgychimp';

  let candidates = [];

  for (const i in allWords) {
    const currentWord = allWords[i];

    if (testWord.length === 5) {
      if (
        !currentWord.includes(testWord[0]) &&
        !currentWord.includes(testWord[1]) &&
        !currentWord.includes(testWord[2]) &&
        !currentWord.includes(testWord[3]) &&
        !currentWord.includes(testWord[4])
      )
        candidates.push(allWords[i]);
    } else if (testWord.length === 10) {
      if (
        !currentWord.includes(testWord[0]) &&
        !currentWord.includes(testWord[1]) &&
        !currentWord.includes(testWord[2]) &&
        !currentWord.includes(testWord[3]) &&
        !currentWord.includes(testWord[4]) &&
        !currentWord.includes(testWord[5]) &&
        !currentWord.includes(testWord[6]) &&
        !currentWord.includes(testWord[7]) &&
        !currentWord.includes(testWord[8]) &&
        !currentWord.includes(testWord[9])
      ) {
        candidates.push(allWords[i]);
      }
    } else if (testWord.length === 15) {
      if (
        !currentWord.includes(testWord[0]) &&
        !currentWord.includes(testWord[1]) &&
        !currentWord.includes(testWord[2]) &&
        !currentWord.includes(testWord[3]) &&
        !currentWord.includes(testWord[4]) &&
        !currentWord.includes(testWord[5]) &&
        !currentWord.includes(testWord[6]) &&
        !currentWord.includes(testWord[7]) &&
        !currentWord.includes(testWord[8]) &&
        !currentWord.includes(testWord[9]) &&
        !currentWord.includes(testWord[10]) &&
        !currentWord.includes(testWord[11]) &&
        !currentWord.includes(testWord[12]) &&
        !currentWord.includes(testWord[13]) &&
        !currentWord.includes(testWord[14])
      ) {
        candidates.push(allWords[i]);
      }
    } else if (testWord.length === 20) {
      if (
        !currentWord.includes(testWord[0]) &&
        !currentWord.includes(testWord[1]) &&
        !currentWord.includes(testWord[2]) &&
        !currentWord.includes(testWord[3]) &&
        !currentWord.includes(testWord[4]) &&
        !currentWord.includes(testWord[5]) &&
        !currentWord.includes(testWord[6]) &&
        !currentWord.includes(testWord[7]) &&
        !currentWord.includes(testWord[8]) &&
        !currentWord.includes(testWord[9]) &&
        !currentWord.includes(testWord[10]) &&
        !currentWord.includes(testWord[11]) &&
        !currentWord.includes(testWord[12]) &&
        !currentWord.includes(testWord[13]) &&
        !currentWord.includes(testWord[14]) &&
        !currentWord.includes(testWord[15]) &&
        !currentWord.includes(testWord[16]) &&
        !currentWord.includes(testWord[17]) &&
        !currentWord.includes(testWord[18]) &&
        !currentWord.includes(testWord[19])
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
