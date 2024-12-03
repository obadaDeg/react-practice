import PropTypes from "prop-types";

export default function GameOver({ winner, onRematch, names }) {
  console.log(winner);
  console.log(names);
  console.log(names[winner]);

  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner ? <p>{names[winner]} won!</p> : <p>Draw!</p>}
      <p>
        <button onClick={onRematch}>Rematch!</button>
      </p>
    </div>
  );
}

GameOver.propTypes = {
  winner: PropTypes.string,
  onRematch: PropTypes.func,
  names: PropTypes.object,
};
