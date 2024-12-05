import { useState } from "react";
import { useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [playerNameInput, setPlayerNameInput] = useState("");

  function handleClick() {
    setPlayerNameInput(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {playerNameInput ?? "Unkown Entity"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
