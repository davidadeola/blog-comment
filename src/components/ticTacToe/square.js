import React, { useState } from "react";
import "./ticTacToe.css";
export const Square = ({ value, onSquareClick }) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};
