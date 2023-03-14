import React, { useId } from "react";
import "./SummaryPage.css";

function SummaryPage({ formFields, prevPage, nextPage, setPageNumber }) {
  const prices = {
    plan: {
      arcade: {
        monthly: 9,
        yearly: 90,
      },
      advanced: {
        monthly: 12,
        yearly: 120,
      },
      pro: {
        monthly: 15,
        yearly: 150,
      },
    },
    addon: {
      onlineService: {
        monthly: 1,
        yearly: 10,
      },
      largerStorage: {
        monthly: 2,
        yearly: 20,
      },
      customizableProfile: {
        monthly: 2,
        yearly: 20,
      },
    },
  };

  function calcTotal() {
    let total = 0;
    if (formFields.yearly) {
      total += prices.plan[`${formFields.plan.toLowerCase()}`].yearly;
      if (formFields.onlineService) total += prices.addon.onlineService.yearly;
      if (formFields.largerStorage) total += prices.addon.largerStorage.yearly;
      if (formFields.customizableProfile)
        total += prices.addon.customizableProfile.yearly;
    } else {
      total += prices.plan[`${formFields.plan.toLowerCase()}`].monthly;
      if (formFields.onlineService) total += prices.addon.onlineService.monthly;
      if (formFields.largerStorage) total += prices.addon.largerStorage.monthly;
      if (formFields.customizableProfile)
        total += prices.addon.customizableProfile.monthly;
    }
    return `+$${total}/${formFields.yearly ? "yr" : "mo"}`;
  }

  function getPlanPrice() {
    let price =
      prices.plan[`${formFields.plan.toLowerCase()}`][
        `${formFields.yearly ? "yearly" : "monthly"}`
      ];
    let duration = formFields.yearly ? "yr" : "mo";
    return `$${price}/${duration}`;
  }

  let planName = formFields.plan;
  if (planName[0]) planName.charAt(0).toUpperCase();
  return (
    <div className="main-section__form summary-page">
      <div className="summary-page__content">
        <div className="summary-page__content--main">
          <div className="summary-page__content--plan">
            <div>
              <b className="blue">
                {planName} ({formFields.yearly ? "Yearly" : "Monthly"})
              </b>
              <button onClick={() => setPageNumber(2)}>Change</button>
            </div>
            <b className="blue">{getPlanPrice()}</b>
          </div>
          {(formFields.onlineService ||
            formFields.largerStorage ||
            formFields.customizableProfile) && <hr />}
          <div className="summary-page__content--addons">
            {formFields.onlineService && (
              <div>
                <p>Online service</p>
                <p>{formFields.yearly ? "+$10/yr" : "+$1/mo"}</p>
              </div>
            )}
            {formFields.largerStorage && (
              <div>
                <p>Larger storage</p>
                <p>{formFields.yearly ? "+$20/yr" : "+$2/mo"}</p>
              </div>
            )}
            {formFields.customizableProfile && (
              <div>
                <p>Customizable profile</p>
                <p>{formFields.yearly ? "+$20/yr" : "+$2/mo"}</p>
              </div>
            )}
          </div>
        </div>
        <div className="summary-page__content__total">
          <p>Total (per {formFields.yearly ? "year" : "month"})</p>
          <p className="purple">{calcTotal()}</p>
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
          Confirm
        </button>
      </div>
    </div>
  );
}

export default SummaryPage;
