import React from "react";
import "./ConfirmationPage.css";
import thankYouIcon from "../assets/icon-thank-you.svg";

function ConfirmationPage() {
  return (
    <div className="main-section__form confirmation-page">
      <img src={thankYouIcon} alt="" />
      <h2 className="blue">Thank You!</h2>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default ConfirmationPage;
