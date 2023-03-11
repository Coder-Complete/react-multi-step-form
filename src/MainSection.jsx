import React from "react";
import "./MainSection.css";

function MainSection({ setPage }) {
  return (
    <div className="main-section">
      <h2>Personal Info</h2>
      <p className="gray">
        Please provide your name, email address, and phone number.
      </p>
      <form className="main-section__form">
        <div>
          <label htmlFor="name-input">Name</label>
          <input id="name-input" type="text" />
          <label htmlFor="email-input">Email Address</label>
          <input id="email-input" type="email" />
          <label htmlFor="phone-input">Phone Number</label>
          <input id="phone-input" type="phone" />
        </div>
        <button type="submit" onClick={() => setPage(2)}>
          Next Step
        </button>
      </form>
    </div>
  );
}

export default MainSection;
