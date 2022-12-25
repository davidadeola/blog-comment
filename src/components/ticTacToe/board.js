import React, { useState } from "react";
import { Square } from "./square";

export const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClickedSquare = (i) => {
    const nextSquares = squares.slice();
    console.log(nextSquares);
    nextSquares[i] = "X";
    console.log(nextSquares);
    setSquares(nextSquares);
    console.log(nextSquares);
  };
  return (
    <>
      <div className="board-row">
        <Square
          value={squares[0]}
          onSquareClick={() => handleClickedSquare(0)}
        />
        <Square
          value={squares[1]}
          onSquareClick={() => handleClickedSquare(1)}
        />
        <Square
          value={squares[2]}
          onSquareClick={() => handleClickedSquare(2)}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          onSquareClick={() => handleClickedSquare(3)}
        />
        <Square
          value={squares[4]}
          onSquareClick={() => handleClickedSquare(4)}
        />
        <Square
          value={squares[5]}
          onSquareClick={() => handleClickedSquare(5)}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          onSquareClick={() => handleClickedSquare(6)}
        />
        <Square
          value={squares[7]}
          onSquareClick={() => handleClickedSquare(7)}
        />
        <Square
          value={squares[8]}
          onSquareClick={() => handleClickedSquare(8)}
        />
      </div>
    </>
  );
};
