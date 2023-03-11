import React, { useId } from "react";
import "./SummaryPage.css";

function SummaryPage({ formFields, handleChange, nextPage }) {
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
    <form className="main-section__form summary-page" onSubmit={handleSubmit}>
      <div>
        <label htmlFor={id + "-name"} name={id + "-name"}>
          Name
        </label>
        <input
          id={id + "-name"}
          name="name"
          type="text"
          onChange={handleChange}
          value={formFields.name}
        />
        <label htmlFor={id + "-email"} name={id + "-email"}>
          Email Address
        </label>
        <input
          id={id + "-email"}
          name="email"
          type="email"
          onChange={handleChange}
          value={formFields.email}
        />
        <label htmlFor={id + "-phone"} name={id + "-phone"}>
          Phone Number
        </label>
        <input
          id={id + "-phone"}
          name="phone"
          type="phone"
          onChange={handleChange}
          value={formFields.phone}
        />
      </div>
      <button type="submit">Next Step</button>
    </form>
  );
}

export default SummaryPage;
