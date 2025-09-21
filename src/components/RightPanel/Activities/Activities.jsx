import { memo } from "react";
import activities from "../../../data/activities";
import { truncateText } from "../../../util/commonFunctions";
import "./Activities.css";
function Activities() {
  return (
    <div className="activities-panel">
      <h2 className="activities-title">Activities</h2>
      <div className="activity-list-wrapper" style={{ position: "relative" }}>
        <div className="activity-vertical-line" />
        <div className="activity-list">
          {activities.map((act, idx) => (
            <div
              className={`activities-item notification-${act.type}`}
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
    </div>
  );
}

export default memo(Activities);
