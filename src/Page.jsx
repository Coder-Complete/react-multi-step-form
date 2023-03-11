import React from "react";
import LeftSide from "./LeftSide";
import MainSection from "./MainSection";
import "./Page.css";

function Page({ whichPage, setPage }) {
  return (
    <div className="page">
      <LeftSide whichPage={whichPage} />
      <MainSection setPage={setPage} whichPage={whichPage} />
    </div>
  );
}

export default Page;
