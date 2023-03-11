import React, { useId } from "react";
import "./AddOnsPage.css";

function AddOnsPage({ formFields, handleChange, nextPage, prevPage }) {
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
    <form className="main-section__form addons-page" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">
          <input type="checkbox" name="" id="" />
        </label>
        <label htmlFor="">
          <input type="checkbox" name="" id="" />
        </label>
        <label htmlFor="">
          <input type="checkbox" name="" id="" />
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
