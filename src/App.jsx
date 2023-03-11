import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Page from "./Page";

function App() {
  const [page, setPage] = useState(1);

  return (
    <div className="App">
      <Page whichPage={page} setPage={setPage} />
    </div>
  );
}

export default App;
