import React, { useState, useEffect } from "react";

import "./CurrentIssue.css";

function CurrentIssue() {
  const [currentIssue, setCurrentIssue] = useState(true);

  return (
    <div className="current-issues">
      <div className="indv-issue">
        <p className="close-issue">Close Issue</p>
        <p>
          Assigned<span>Username</span>
        </p>
        <p>
          Priority<span>High</span>
        </p>
        <p>Description</p>
        <p className="description-text">
          Short description of the project describing the issue. Honestly it can
          just be lorem ipsum, but that's beside the point. We just need
          something here for now.
        </p>
      </div>
      <hr />
      <div className="indv-issue">
        <p className="close-issue">Close Issue</p>
        <p>
          Assigned<span>Username</span>
        </p>
        <p>
          Priority<span>High</span>
        </p>
        <p>Description</p>
        <p className="description-text">
          Short description of the project describing the issue. Honestly it can
          just be lorem ipsum, but that's beside the point. We just need
          something here for now.
        </p>
      </div>
      <hr />
      <div className="indv-issue">
        <p className="close-issue">Close Issue</p>
        <p>
          Assigned<span>Username</span>
        </p>
        <p>
          Priority<span>High</span>
        </p>
        <p>Description</p>
        <p className="description-text">
          Short description of the project describing the issue. Honestly it can
          just be lorem ipsum, but that's beside the point. We just need
          something here for now.
        </p>
      </div>
      <hr />
    </div>
  );
}

export default CurrentIssue;
