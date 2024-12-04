import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning_compinations";
import GameOver from "./components/GameOver";

const BOARD_SIZE = 3;
const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

// function deriveActivePlayer(gameTurns) {
//   let currentPlayer = 'X';

//   if(gameTurns.length > 0 && gameTurns[0].player === 'X') {
//     currentPlayer = 'O';
//   }

//   return currentPlayer;
// }

function App() {
  const [turns, setTurns] = useState({
    player: "X",
    log: [],
    playersName: PLAYERS,
  });
  // const [activePlayer, setActivePlayer] = useState("X");
  // const []
  // function handleSelectCell(rowIndex, colIndex) {
  //   setActivePlayer((currentActivePlayer) =>
  //     currentActivePlayer === "X" ? "O" : "X"
  //   );

  //   setTurns((prevTurns) => {
  //     const updatedTurns = {
  //       square: { row: rowIndex, col: colIndex },
  //       ...prevTurns,
  //     };
  //   });
  // }

  function handleSelectCell(rowIndex, colIndex) {
    setTurns((prevTurns) => ({
      ...prevTurns,
      player: prevTurns.player === "X" ? "O" : "X",
      log: [
        {
          player: prevTurns.player,
          position: { row: rowIndex, col: colIndex },
        },
        ...prevTurns.log,
      ],
    }));
  }

  function handleRematch() {
    setTurns((prevTurns) => ({
      player: "X",
      log: [],
      playersName: prevTurns.playersName,
    }));
    console.log(turns);
    console.log(gameBoard);
  }

  function handleChangeNames(symbol, updatedName) {
    setTurns((prevTurns) => {
      let updatedData = {
        ...prevTurns,
        playersName: { ...prevTurns.playersName, [symbol]: updatedName },
      };

      return updatedData;
    });
  }

  const gameBoard = Array.from({ length: BOARD_SIZE }, () =>
    Array(BOARD_SIZE).fill(null)
  );

  turns.log.forEach(({ player, position: { row, col } }) => {
    gameBoard[row][col] = player;
  });

  let winner;

  WINNING_COMBINATIONS.forEach((compination) => {
    const firstSquare = gameBoard[compination[0].row][compination[0].column];
    const secondSquare = gameBoard[compination[1].row][compination[1].column];
    const thirdquare = gameBoard[compination[2].row][compination[2].column];

    if (
      firstSquare &&
      firstSquare === secondSquare &&
      firstSquare === thirdquare
    ) {
      winner = firstSquare;
    }
  });

  const hasDraw = turns.log.length === 9 && !winner;

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol="X"
            isActive={turns.player === "X"}
            onNameChange={handleChangeNames}
          />
          <Player
            name="Player 2"
            symbol="O"
            isActive={turns.player === "O"}
            onNameChange={handleChangeNames}
          />
        </ol>
        <GameBoard onSelectCell={handleSelectCell} gameBoard={gameBoard} />
        {(winner || hasDraw) && (
          <GameOver
            winner={winner}
            onRematch={handleRematch}
            names={turns.playersName}
          />
        )}
      </div>
      <Log turns={turns.log} />
    </main>
  );
}

export default App;
