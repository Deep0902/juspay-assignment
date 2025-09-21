import Activities from "./Activities/Activities";
import Contacts from "./Contacts/Contacts";
import Notification from "./Notification/Notification";
import { useTheme } from "../../ThemeContext";
import { getIconPath } from "../../util/commonFunctions";
import "./RightPanel.css";
import { memo } from "react";

function RightPanel({ onClose }) {
  const { theme } = useTheme();
  return (
    <>
      <button
        className="right-panel-close-btn"
        onClick={onClose}
        aria-label="Close right panel"
      >
        <img src={getIconPath("Sidebar.svg", theme)} alt="Sidebar" />
      </button>
      <Notification />
      <Activities />
      <Contacts />
    </>
  );
}
export default memo(RightPanel);
