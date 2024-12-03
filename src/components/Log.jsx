import PropTypes from "prop-types";

export default function Log({ turns  }) {
  return (
    <ol id="log">
      {turns.map(({player, position: {row, col}}) => {
        return <li key={row * 3 + col}>{`${player} has selected ${(row * 3 + col) + 1}`}</li>
      })}
    </ol>
  );
}

Log.propTypes = {
  turns: PropTypes.array.isRequired,
};
