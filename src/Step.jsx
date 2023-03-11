import React from "react";
import "./Step.css";

function Step({ number, name, selected }) {
  return (
    <div className="step">
      <div
        className="number"
        style={{
          color: selected ? "black" : "white",
          backgroundColor: selected ? "#bee2fd" : "transparent",
        }}
      >
        {number}
      </div>
      <div className="step-details">
        <p className="faint">STEP {number}</p>
        <p className="step-name">{name}</p>
      </div>
    </div>
  );
}

export default Step;
