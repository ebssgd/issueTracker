import React, { useState, useEffect } from "react";
import AddIssue from './components/AddIssue/AddIssue.js';
import CurrentIssue from './components/CurrentIssue/CurrentIssue.js';

import "./App.css";

function App() {
  const [addIssue, setAddIssue] = useState(true);

  return (
    <div>
      <h1>Issue Tracker</h1>
      {addIssue ? <AddIssue /> : <CurrentIssue />}
    </div>
  );
}

export default App;
