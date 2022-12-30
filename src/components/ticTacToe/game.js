import React, { useState } from "react";
import { Board } from "./board";

export const Game = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];
  console.log(currentSquares);
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <ol></ol>
      </div>
    </div>
  );
};
