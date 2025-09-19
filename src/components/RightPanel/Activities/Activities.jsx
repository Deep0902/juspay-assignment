import React from "react";
import "./Activities.css";
import { truncateText } from "../../../util/commonFunctions";
import activities from "../../../data/activities";
function Activities() {
  return (
    <div className="activities-panel">
      <h2 className="activities-title">Activities</h2>
      <div className="activity-list">
        {activities.map((act, idx) => (
          <div
            className={`notification-item notification-${act.type}`}
            key={idx}
          >
            <img
              src={`/avatar/Avatar${act.user}.svg`}
              alt={act.type}
              className="notification-icon"
            />
            <div className="notification-content">
              <div className="notification-heading">
                {truncateText(act.heading)}
              </div>
              <div className="notification-time">{act.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activities;
