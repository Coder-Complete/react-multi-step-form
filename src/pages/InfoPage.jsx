import React, { useId, useState } from "react";
import "./InfoPage.css";

function InfoPage({ formFields, handleChange, nextPage }) {
  const [errors, setErrors] = useState({});
  const id = useId();

  function validate() {
    let errs = {};
    let returnValue = true;
    if (formFields.name === "") {
      errs["name"] = "This field is required";
      returnValue = false;
    }
    if (formFields.email === "") {
      errs["email"] = "This field is required";
      returnValue = false;
    } else if (!formFields.email.includes("@")) {
      errs["email"] = "@ is required";
      returnValue = false;
    } else if (formFields.email.endsWith("@")) {
      errs["email"] = "There needs to be text after the @ symbol";
      returnValue = false;
    }
    if (formFields.phone === "") {
      errs["phone"] = "This field is required";
      returnValue = false;
    } else if (!new RegExp("^[0-9]*$").test(formFields.phone.trim())) {
      errs["phone"] = "Only use numbers";
      returnValue = false;
    }
    if (Object.keys(errs).length) setErrors(errs);
    return returnValue;
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
    <form className="main-section__form info-page" onSubmit={handleSubmit}>
      <div>
        <label htmlFor={id + "-name"} name={id + "-name"}>
          Name
          {errors["name"] && <p className="red">{errors["name"]}</p>}
        </label>
        <input
          id={id + "-name"}
          name="name"
          type="text"
          onChange={handleChange}
          value={formFields.name}
          className={errors["name"] ? "input-error" : ""}
        />
        <label htmlFor={id + "-email"} name={id + "-email"}>
          Email Address
          {errors["email"] && <p className="red">{errors["email"]}</p>}
        </label>
        <input
          id={id + "-email"}
          name="email"
          text="email"
          onChange={handleChange}
          value={formFields.email}
          className={errors["email"] ? "input-error" : ""}
        />
        <label htmlFor={id + "-phone"} name={id + "-phone"}>
          Phone Number
          {errors["phone"] && <p className="red">{errors["phone"]}</p>}
        </label>
        <input
          id={id + "-phone"}
          name="phone"
          type="phone"
          onChange={handleChange}
          value={formFields.phone}
          className={errors["phone"] ? "input-error" : ""}
        />
      </div>
      <button type="submit">Next Step</button>
    </form>
  );
}

export default InfoPage;
