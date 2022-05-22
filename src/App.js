import React, { useState, useEffect } from "react";
import AddIssue from "./components/AddIssue/AddIssue.js";
import CurrentIssue from "./components/CurrentIssue/CurrentIssue.js";

import "./App.css";

function App() {
  const [addIssue, setAddIssue] = useState(false);

  return (
    <div className="App">
      <h1>Issue Tracker</h1>
      <div className="grey-card-container">
        {addIssue ? <AddIssue /> : <CurrentIssue />}
      </div>
      <div className="view-selection-div">
        <button className="view-button">Current Issue</button>
        <button className="view-button active-button">Add Issue</button>
      </div>
    </div>
  );
}

export default App;
