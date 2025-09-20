import contacts from "../../../data/contacts";
import { truncateText } from "../../../util/commonFunctions";
import "./Contacts.css";
function Contacts() {
  return (
    <div className="contacts-panel">
      <h2 className="contacts-title">Contacts</h2>
      <div className="notification-list">
        {contacts.map((notif, idx) => (
          <div className={`contact-item notification-${notif.type}`} key={idx}>
            <img
              src={`/contacts/Contact${notif.user}.svg`}
              alt={notif.type}
              className="notification-icon"
            />
            <div className="notification-content">
              <div className="notification-heading">
                {truncateText(notif.name)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contacts;
