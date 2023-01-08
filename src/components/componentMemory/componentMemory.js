import React, { useState } from "react";
import "./componentMemory.css";
import { dataList } from "./data.js";

const ComponentMemory = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex(index + 1);
  };

  return (
    <div className="memory-container">
      <button>Next</button>
      <h1>Home made sculptures let's go</h1>
      <div>1 0f 12</div>
      <button>Show details</button>
      <img src="" alt="noferrer" />
    </div>
  );
};

export default ComponentMemory;
