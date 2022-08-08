import './App.css';

function App() {
  let gamestate = 0;
  const handleClick = () => { gamestate = (gamestate + 1 ) % 2; console.log(gamestate); }
  return (
    <>
      <button class="guessSubmit" onClick={handleClick}>{gamestate}</button>
    </>
  );
}

export default App;
