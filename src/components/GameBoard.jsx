

export default function GameBoard({ onSelectSquare, board }) {


  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerName, columnIndex) => (
              <li key={columnIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, columnIndex)}
                  disabled = {board[rowIndex][columnIndex] === null ? false : true}
                >
                  {playerName}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
