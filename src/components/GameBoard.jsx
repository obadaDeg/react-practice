import PropTypes from "prop-types";

export default function GameBoard({ gameBoard, onSelectCell }) {
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   function handleSelectCell(rowIndex, colIndex) {
  //     setGameBoard((prevGameBoard) => {
  //       const updatedBoard = [...prevGameBoard.map((cell) => [...cell])];
  //       console.log(updatedBoard);

  //       updatedBoard[rowIndex][colIndex] = activePlayer;
  //       return updatedBoard;
  //     });

  //     onSelectCell();
  //   }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((cell, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectCell(rowIndex, colIndex)}
                  disabled={cell !== null}
                >
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
  //   activePlayer: PropTypes.string.isRequired,
  gameBoard: PropTypes.array.isRequired,
  onSelectCell: PropTypes.func.isRequired,
};
