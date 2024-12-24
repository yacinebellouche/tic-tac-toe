import { useState } from "react";

export default function Players() {
  const [playerName1, setPLayer1] = useState("player 1");
  const [playerName2, setPLayer2] = useState("player 2");

  function changePlayer(number) {
    if (number === 1) {
      setPLayer1(2);
      setPLayer2(1);
    } else {
      setPLayer1(1);
      setPLayer2(2);
    }
  }

  return (
    <>
      <li className="player">
        <span className="player-name">
          <input type="text" placeholder={playerName1} />
        </span>
        <span className="player-symbol">O</span>
        <button onClick={changePlayer(1)}>pick</button>
      </li>

      <li className="player">
        <span className="player-name">
          <input type="text" placeholder={playerName2} />
        </span>
        <span className="player-symbol">X</span>
        <button onClick={changePlayer(2)}>pick</button>
      </li>
    </>
  );
}
