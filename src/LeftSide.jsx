import React from "react";
import background from "./assets/bg-sidebar-desktop.svg";
import "./LeftSide.css";
import Step from "./Step";

function LeftSide({ whichPage }) {
  return (
    <div
      className="left-side"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Step selected={whichPage === 1} number={1} name="YOUR INFO" />
      <Step selected={whichPage === 2} number={2} name="SELECT PLAN" />
      <Step selected={whichPage === 3} number={3} name="ADD-ONS" />
      <Step selected={whichPage === 4} number={4} name="SUMMARY" />
    </div>
  );
}

export default LeftSide;
