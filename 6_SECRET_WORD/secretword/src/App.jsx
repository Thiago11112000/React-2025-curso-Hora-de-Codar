import { useState } from "react";

// components
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

// styles
import "./App.css";

// data
import { wordsList } from "./data/words";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words, setWords] = useState(wordsList);

  console.log(words);

  // starts the secret word game
  const startGame = () =>{
    setGameStage(stages[1].name)
  }

  // process the letter input
  const verifyLetter = () =>{
    setGameStage(stages[2].name)
  }

  // Restarts the game
  const retry = () =>{
    setGameStage(stages[0].name)
  }
  return (

    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
      {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
