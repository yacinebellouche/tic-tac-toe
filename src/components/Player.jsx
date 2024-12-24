import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [inputState, setInputState] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  const [buttonName, setButtonName] = useState("Edit");
  function handleUpdateName(event) {
    setPlayerName(event.target.value);
  }
  function handleEditClick() {
    setInputState((inputstate) => !inputstate); //always pass a function for instant updating.
    setButtonName((prevState) => (prevState === "Edit" ? "Save" : "Edit"));
    if (inputState) {
      onChangeName(symbol, playerName);
    }
  }

  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {inputState ? (
            <input
              type="text"
              required
              value={playerName}
              onChange={handleUpdateName}
            />
          ) : (
            <span className="player-name">{playerName}</span>
          )}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{buttonName}</button>
      </li>
    </>
  );
}
