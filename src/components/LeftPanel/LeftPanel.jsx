import { useState } from "react";
import Dashboard from "./Dashboard/Dashboard";
import "./LeftPanel.css";
import Pages from "./Pages/Pages";
import { getIconPath } from "../../util/commonFunctions";
import { useTheme } from "../../ThemeContext";
function LeftPanel({ onClose }) {
  const { theme } = useTheme();
  const [selectedToggle, setSelectedToggle] = useState("Favourites");
  return (
    <>
      <button
        className="left-panel-close-btn"
        onClick={onClose}
        aria-label="Close left panel"
      >
        <img src={getIconPath("Sidebar.svg", theme)} alt="Sidebar" />
      </button>
      <div className="left-panel-content">
        <div className="profile">
          <img src="/Profile.svg" alt="" />
          <span className="profile-name">ByeWind</span>
        </div>
        <div className="toggle-switch">
          <span
            className={`toggle-option${
              selectedToggle === "Favourites" ? " selected" : ""
            }`}
            onClick={() => setSelectedToggle("Favourites")}
          >
            Favourites
          </span>
          <span
            className={`toggle-option${
              selectedToggle === "Recently" ? " selected" : ""
            }`}
            onClick={() => setSelectedToggle("Recently")}
          >
            Recently
          </span>
        </div>
        <div className="bullet-points">
          <ul>
            <li>Overview</li>
            <li>Projects</li>
          </ul>
        </div>
      </div>
      <Dashboard />
      <Pages />
    </>
  );
}
export default LeftPanel;
