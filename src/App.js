import { useState } from 'react';
import { sortedUniqueWords } from './words';
import { filterRemainingWords } from './filter.js';

const App = () => {
  const [firstWord, setFirstWord] = useState('');
  const [secondWord, setSecondWord] = useState('');
  // const [thirdWord, setThirdWord] = useState('');
  // const [fourthWord, setFourthWord] = useState('');
  // const [fifthWord, setFifthWord] = useState('');

  const updateFirstWord = (event) => {
    setFirstWord(event.target.value);
  };
  const updateSecondWord = (event) => {
    setSecondWord(event.target.value);
  };

  let remainingWords = sortedUniqueWords;
  const filteredWords = filterRemainingWords(
    sortedUniqueWords,
    firstWord + secondWord
  );
  if (filteredWords) remainingWords = filteredWords;

  return (
    <>
      <h1>Word Search</h1>
      <h3>To filter the list, enter only 5 letter words:</h3>
      <input
        type="text"
        placeholder="word 1"
        maxLength={5}
        onChange={updateFirstWord}
        value={firstWord}
      />
      {
        <input
          type="text"
          placeholder="word 2"
          maxLength={5}
          onChange={updateSecondWord}
          value={secondWord}
        />
        /*
      <input type="text" placeholder="word 3" maxLength={5}></input>
      <input type="text" placeholder="word 4" maxLength={5}></input>
      <input type="text" placeholder="word 5" maxLength={5}></input> */
      }

      <h3>Remaining Words: {remainingWords ? remainingWords.length : '0'}</h3>
      <ol>
        {remainingWords
          // .filter((word) => word.includes(firstWord))
          .map((word, index) => (
            <li key={index}>{word}</li>
          ))}
      </ol>
    </>
  );
};

export default App;
