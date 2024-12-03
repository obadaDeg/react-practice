import PropTypes from "prop-types";
import { useState } from "react";

export default function Player({ name, symbol, isActive, onNameChange }) {
  //   const [isEditing, setIsEditing ] = useState(false); // removed

  const [editingState, setEditingState] = useState({
    playerName: name,
    isEditing: false,
  });

  function handleEditBtn() {
    if (editingState.isEditing) {
      onNameChange(symbol, editingState.playerName);
    }

    setEditingState((prev) => ({ ...prev, isEditing: !prev.isEditing }));
    // setIsEditing(!isEditing); // is not effitient way
  }

  function handleInputName(e) {
    const newName = e.target.value;
    setEditingState((prev) => ({
      ...prev,
      playerName: newName,
    }));
  }

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {editingState.isEditing ? (
          <input
            type="text"
            required
            value={editingState.playerName}
            onChange={handleInputName}
          />
        ) : (
          <span className="player-name">{editingState.playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditBtn}>
        {editingState.isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onNameChange: PropTypes.func.isRequired,
};
