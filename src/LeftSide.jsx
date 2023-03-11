import React from "react";
import background from "./assets/bg-sidebar-desktop.svg";
import "./LeftSide.css";
import Step from "./Step";

function LeftSide({ pageNumber }) {
  return (
    <div
      className="left-side"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Step selected={pageNumber === 1} number={1} name="YOUR INFO" />
      <Step selected={pageNumber === 2} number={2} name="SELECT PLAN" />
      <Step selected={pageNumber === 3} number={3} name="ADD-ONS" />
      <Step selected={pageNumber === 4} number={4} name="SUMMARY" />
    </div>
  );
}

export default LeftSide;
