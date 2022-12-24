import React from "react";
import "./ticTacToe.css";
export const Square = ({ value }) => {
  const handleClicked = () => {
    console.log("Clicked", value);
  };
  return (
    <button className="square" onClick={handleClicked}>
      {value}
    </button>
  );
};
