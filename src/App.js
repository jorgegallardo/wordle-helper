import { sortedUniqueWords } from './words';

const App = () => {
  return (
    <>
      <h1>Word Search</h1>
      <h3>To filter the list, enter only 5 letter words:</h3>
      <input type="text" placeholder="word 1"></input>
      <input type="text" placeholder="word 2"></input>
      <input type="text" placeholder="word 3"></input>
      <input type="text" placeholder="word 4"></input>
      <input type="text" placeholder="word 5"></input>

      <h3>Remaining Words:</h3>
      <ol>
        {sortedUniqueWords.map((word) => (
          <li>{word}</li>
        ))}
      </ol>
    </>
  );
};

export default App;
