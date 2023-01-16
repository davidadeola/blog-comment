import React, { useState } from "react";
import "./componentMemory.css";
import { sculptureList } from "./data.js";

const ComponentMemory = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex(index + 1);
  };

  let sculpture = sculptureList[index];

  return (
    <div className="memory-container">
      <button onClick={handleNext}>Next</button>
      <h1>
        <i>{sculpture.name}</i>
        by {sculpture.artist}
      </h1>
      <div>1 0f {sculptureList.length}</div>
      <button>Show details</button>
      <img src="" alt="noferrer" />
    </div>
  );
};

export default ComponentMemory;
