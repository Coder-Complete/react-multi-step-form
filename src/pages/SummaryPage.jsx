import React, { useId } from "react";
import "./SummaryPage.css";

function SummaryPage({ formFields, prevPage, nextPage }) {
  return (
    <div className="main-section__form summary-page">
      <div className="summary-page__content">
        <div className="summary-page__content--main">
          <div className="summary-page__content--plan">
            <div>
              <p>Arcade (monthly)</p>
              <button>Change</button>
            </div>
            <p>$9/mo</p>
          </div>
          <hr />
          <div className="summary-page__content--addons">
            <div>
              <p>Online service</p>
              <p>+$1/mo</p>
            </div>
            <div>
              <p>Larger storage</p>
              <p>+$2/mo</p>
            </div>
          </div>
        </div>
        <div className="summary-page__content__total">
          <p>Total (per month)</p>
          <p className="purple">+$12/mo</p>
        </div>
      </div>
      <div className="summary-page__button-container">
        <button className="back-button" onClick={() => prevPage()}>
          Go back
        </button>
        <button
          className="next-button"
          type="submit"
          onClick={() => nextPage()}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default SummaryPage;
