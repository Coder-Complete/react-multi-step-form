import React from "react";
import "./AddOnsPage.css";

function AddOnsPage({ formFields, handleChange, nextPage, prevPage }) {
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
    <form className="main-section__form addons-page" onSubmit={handleSubmit}>
      <div className="addons-page__options">
        <label
          style={
            formFields.onlineService
              ? {
                  border: "1px solid var(--dark-purple)",
                  backgroundColor: "var(--selected-background)",
                }
              : {}
          }
        >
          <input
            type="checkbox"
            name="onlineService"
            checked={formFields.onlineService}
            onChange={handleChange}
          />
          <div>
            <p className="blue">Online service</p>
            <p>Access to multiplayer games</p>
          </div>
          <span className="purple">
            {formFields.yearly ? "+$10/yr" : "+$1/mo"}
          </span>
        </label>
        <label
          style={
            formFields.largerStorage
              ? {
                  border: "1px solid var(--dark-purple)",
                  backgroundColor: "var(--selected-background)",
                }
              : {}
          }
        >
          <input
            type="checkbox"
            name="largerStorage"
            checked={formFields.largerStorage}
            onChange={handleChange}
          />
          <div>
            <p className="blue">Larger storage</p>
            <p>Extra 1TB of cloud save</p>
          </div>
          <span className="purple">
            {formFields.yearly ? "+$20/yr" : "+$2/mo"}
          </span>
        </label>
        <label
          style={
            formFields.customizableProfile
              ? {
                  border: "1px solid var(--dark-purple)",
                  backgroundColor: "var(--selected-background)",
                }
              : {}
          }
        >
          <input
            type="checkbox"
            name="customizableProfile"
            checked={formFields.customizableProfile}
            onChange={handleChange}
          />
          <div>
            <p className="blue">Customizable Profile</p>
            <p>Custom theme on your profile</p>
          </div>
          <span className="purple">
            {formFields.yearly ? "+$20/yr" : "+$2/mo"}
          </span>
        </label>
      </div>
      <div className="addons-page__button-container">
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

export default AddOnsPage;
