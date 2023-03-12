import React, { useId } from "react";
import "./PlanPage.css";
import arcade from "../assets/icon-arcade.svg";
import advanced from "../assets/icon-advanced.svg";
import pro from "../assets/icon-pro.svg";

function PlanPage({ formFields, handleChange, nextPage, prevPage }) {
  const id = useId();

  function validate() {
    return true;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      nextPage();
    } else {
      console.log("not validated");
    }
  }

  return (
    <form className="main-section__form plan-page" onSubmit={handleSubmit}>
      <div>
        <div className="plan-page__options">
          <label htmlFor={id + "-plan-arcade"}>
            <img src={arcade} alt="" />
            <p>Arcade</p>
            <p>{formFields.yearly ? "$90/yr" : "$9/mo"}</p>
            <input
              id={id + "-plan-arcade"}
              type="radio"
              name="plan"
              value="arcade"
              onChange={handleChange}
              checked={formFields.plan === "arcade"}
            />
          </label>
          <label htmlFor={id + "-plan-advanced"}>
            <img src={advanced} alt="" />
            <p>Advanced</p>
            <p>{formFields.yearly ? "$120/yr" : "$12/mo"}</p>
            <input
              id={id + "-plan-advanced"}
              type="radio"
              name="plan"
              value="advanced"
              onChange={handleChange}
              checked={formFields.plan === "advanced"}
            />
          </label>

          <label htmlFor={id + "-plan-pro"}>
            <img src={pro} alt="" />
            <p>Pro</p>
            <p>{formFields.yearly ? "$150/yr" : "$15/mo"}</p>
            <input
              id={id + "-plan-pro"}
              type="radio"
              name="plan"
              value="pro"
              onChange={handleChange}
              checked={formFields.plan === "pro"}
            />
          </label>
        </div>
        <div className="plan-page__switch-container">
          <span>Monthly</span>
          <label className="plan-page__switch">
            <input
              type="checkbox"
              name="yearly"
              onChange={handleChange}
              checked={formFields.yearly}
            />
            <span className="plan-page__slider"></span>
          </label>
          <span>Yearly</span>
        </div>
      </div>
      <div className="plan-page__button-container">
        <button className="back-button" onClick={() => prevPage()}>
          Go back
        </button>
        <button className="next-button" type="submit">
          Next Step
        </button>
      </div>
    </form>
  );
}

export default PlanPage;
