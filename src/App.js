import './App.css';

function App() {
  let shoppingDone = false;
  let childsAllowance;

  if (shoppingDone === true) {
    childsAllowance = 10;
  } else {
    childsAllowance = 5;
  }
  return (
    <div>
      <h1>Number guessing game</h1>

      <p>We have selected a random number between 1 and 100. See if you can guess it in 10 turns or fewer. We'll tell you if your guess was too high or too low.</p>

      <div class="form">
        <label for="guessField">Enter a guess: </label>
        <input type="number" min="1" max="100" required id="guessField" class="guessField"></input>
        <input type="submit" value="Submit guess" class="guessSubmit"></input>
      </div>

      <div class="resultParas">
        <p class="guesses"></p>
        <p class="lastResult"></p>
        <p class="lowOrHi"></p>
      </div>
    </div>
  );
}

export default App;
