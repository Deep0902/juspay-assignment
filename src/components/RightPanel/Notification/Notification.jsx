import "./Notification.css";

import notifications from "../../../data/notifications";
import { truncateText } from "../../../util/commonFunctions";
import { memo } from "react";

function Notification() {
  return (
    <div className="notification-panel">
      <h2 className="notification-title">Notifications</h2>
      <div className="notification-list">
        {notifications.map((notif, idx) => (
          <div
            className={`notification-item notification-${notif.type}`}
            key={idx}
          >
            <img
              src={`/${notif.type}.svg`}
              alt={notif.type}
              className="notification-icon"
            />
            <div className="notification-content">
              <div className="notification-heading">
                {truncateText(notif.heading)}
              </div>
              <div className="notification-time">{notif.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(Notification);
