import React, { useState, useId } from "react";
import "./MainSection.css";

function MainSection({ title, subtitle, content }) {
  return (
    <div className="main-section">
      <h2 className="main-section__title">{title}</h2>
      <p className="main-section__subtitle">{subtitle}</p>
      {content}
    </div>
  );
}

export default MainSection;
