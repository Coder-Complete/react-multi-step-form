import React from "react";
import "./PlanPage.css";
import arcade from "../assets/icon-arcade.svg";
import advanced from "../assets/icon-advanced.svg";
import pro from "../assets/icon-pro.svg";

function PlanPage({ formFields, handleChange, nextPage, prevPage }) {
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
          <label
            style={
              formFields.plan === "arcade"
                ? {
                    border: "1px solid var(--dark-purple)",
                    backgroundColor: "var(--selected-background)",
                  }
                : {}
            }
          >
            <img src={arcade} alt="" />
            <b className="blue">Arcade</b>
            <p>{formFields.yearly ? "$90/yr" : "$9/mo"}</p>
            {formFields.yearly && <p className="blue">2 months free</p>}
            <input
              type="radio"
              name="plan"
              value="arcade"
              onChange={handleChange}
              checked={formFields.plan === "arcade"}
            />
          </label>
          <label
            style={
              formFields.plan === "advanced"
                ? {
                    border: "1px solid var(--dark-purple)",
                    backgroundColor: "var(--selected-background)",
                  }
                : {}
            }
          >
            <img src={advanced} alt="" />
            <b className="blue">Advanced</b>
            <p>{formFields.yearly ? "$120/yr" : "$12/mo"}</p>
            {formFields.yearly && <p className="blue">2 months free</p>}
            <input
              type="radio"
              name="plan"
              value="advanced"
              onChange={handleChange}
              checked={formFields.plan === "advanced"}
            />
          </label>

          <label
            style={
              formFields.plan === "pro"
                ? {
                    border: "1px solid var(--dark-purple)",
                    backgroundColor: "var(--selected-background)",
                  }
                : {}
            }
          >
            <img src={pro} alt="" />
            <b className="blue">Pro</b>
            <p>{formFields.yearly ? "$150/yr" : "$15/mo"}</p>
            {formFields.yearly && <p className="blue">2 months free</p>}
            <input
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
