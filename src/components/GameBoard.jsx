import { useState } from "react";
import PropTypes from "prop-types";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ activePlayer, onSelectCell }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectCell(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [...prevGameBoard.map((cell) => [...cell])];
      console.log(updatedBoard);

      updatedBoard[rowIndex][colIndex] = activePlayer;
      return updatedBoard;
    });

    onSelectCell();
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((cell, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectCell(rowIndex, colIndex)}>
                  {cell}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

GameBoard.propTypes = {
  activePlayer: PropTypes.string.isRequired,
  onSelectCell: PropTypes.func.isRequired,
};
