import React, { useState } from "react";
import InfoPage from "./pages/InfoPage";
import PlanPage from "./pages/PlanPage";
import AddOnsPage from "./pages/AddOnsPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import LeftSide from "./LeftSide";
import MainSection from "./MainSection";
import "./MultiStepForm.css";
import SummaryPage from "./pages/SummaryPage";

function MultiStepForm() {
  const [pageNumber, setPageNumber] = useState(1);
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "Arcade",
    yearly: false,
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  });

  function nextPage() {
    setPageNumber(pageNumber + 1);
  }

  function prevPage() {
    setPageNumber(pageNumber - 1);
  }

  function handleChange(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormFields({ ...formFields, [e.target.name]: value });
  }

  function getTitleAndSubtitle() {
    switch (pageNumber) {
      case 1:
        return [
          "Personal info",
          "Please provide your name, email address, and phone number.",
        ];
      case 2:
        return [
          "Select your plan",
          "You have the option of monthly or yearly billing.",
        ];
      case 3:
        return ["Pick add-ons", "Add-ons help enhance your gaming experience."];
      case 4:
        return [
          "Finishing up",
          "Double-check everything looks OK before confirming.",
        ];
      default:
        return ["", ""];
    }
  }

  function getPageComponent() {
    switch (pageNumber) {
      case 1:
        return (
          <InfoPage
            formFields={formFields}
            handleChange={handleChange}
            nextPage={nextPage}
          />
        );
      case 2:
        return (
          <PlanPage
            formFields={formFields}
            handleChange={handleChange}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        );
      case 3:
        return (
          <AddOnsPage
            formFields={formFields}
            handleChange={handleChange}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        );
      case 4:
        return (
          <SummaryPage
            formFields={formFields}
            nextPage={nextPage}
            prevPage={prevPage}
            setPageNumber={setPageNumber}
          />
        );
      case 5:
        return <ConfirmationPage />;
      default:
        return null;
    }
  }

  const [title, subtitle] = getTitleAndSubtitle();

  return (
    <div className="multi-page-form">
      <LeftSide pageNumber={pageNumber} />
      <MainSection
        title={title}
        subtitle={subtitle}
        content={getPageComponent()}
      />
    </div>
  );
}

export default MultiStepForm;
