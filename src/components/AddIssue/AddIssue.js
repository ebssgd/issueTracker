import React, { useState, useEffect } from "react";

import "./AddIssue.css";

function AddIssue() {
  const [addIssue, setAddIssue] = useState(true);

  return (
    <div className="add-issue">
      <form>
        <label>
          Description
          <input type="text" />
        </label>
        <label>
          Assign To:
          <select name="forDev" id="forDev">
            <option value="Jim">Jim</option>
            <option value="Olivia">Olivia</option>
            <option value="Guillermo">Guillermo</option>
            <option value="Svetlana">Svetlana</option>
          </select>
        </label>
        <label>
          Priority Level:
          <select name="priority" id="priority">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Immediate">Immediate</option>
          </select>
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddIssue;
