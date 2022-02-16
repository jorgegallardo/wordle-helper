export const filterRemainingWords = (allWords, enteredLetters) => {
  let candidates = [];
  const letters = enteredLetters.split(''); // take each letter entered
  let keeper = [];

  for (const i in allWords) {
    const currentWord = allWords[i];

    // look at every letter in the current word and make sure that none of the letters match any of the enteredLetters. if that's the case, push word to candidates array.
    for (let j = 0; j < letters.length; j++) {
      keeper.push(currentWord.includes(letters[j]));
    }
    if (!keeper.includes(true)) {
      candidates.push(currentWord);
    }
    keeper = [];
  }
  return candidates;
};
