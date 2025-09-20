import { useState } from "react";
import "./HomePage.css";
import { useTheme } from "../../ThemeContext.jsx";
import RightPanel from "../RightPanel/RightPanel.jsx";
import LeftPanel from "../LeftPanel/LeftPanel.jsx";
import DashboardMain from "./DashboardMain/DashboardMain.jsx";
import TableFilter from "./TableFilter/TableFilter.jsx";
import { getIconPath } from "../../util/commonFunctions";
function HomePage() {
  const [leftPanelOpen, setLeftPanelOpen] = useState(true);
  const [rightPanelOpen, setRightPanelOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleLeftPanel = () => setLeftPanelOpen(!leftPanelOpen);
  const toggleRightPanel = () => setRightPanelOpen(!rightPanelOpen);

  return (
    <div className="layout-container">
      {/* Left Drawer */}
      <div className={`left-panel ${leftPanelOpen ? "open" : "closed"}`}>
        <LeftPanel />
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        {/* Header */}
        <header className="header">
          <div className="header-left">
            <button onClick={toggleLeftPanel} className="menu-button">
              <img src={getIconPath("Sidebar.svg", theme)} alt="Sidebar" />
            </button>
            <button className="menu-button">
              <img src={getIconPath("Star.svg", theme)} alt="Star" />
            </button>
            <h1 className="title opacity-40">Dashboards</h1>
            <h1 className="title opacity-40">/</h1>
            <h1 className="title">Default</h1>
          </div>

          <div className="header-right">
            <div className="search-container">
              <img src={getIconPath("Search.svg", theme)} alt="" className="search-icon" />
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />
            </div>
            <button className="menu-button" onClick={toggleTheme}>
              <img src={getIconPath("Sun.svg", theme)} alt="Sun" />
            </button>
            <button className="menu-button">
              <img src={getIconPath("ClockCounterClockwise.svg", theme)} alt="Clock" />
            </button>
            <button className="menu-button" onClick={toggleRightPanel}>
              <img src={getIconPath("Bell.svg", theme)} alt="Bell" />
            </button>
            <button onClick={toggleRightPanel} className="menu-button">
              <img src={getIconPath("Sidebar.svg", theme)} alt="Sidebar" />
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="content">
          {/* <TableFilter /> */}
          <DashboardMain/>
        </main>
      </div>

      {/* Right Drawer */}
      <div className={`right-panel ${rightPanelOpen ? "open" : "closed"}`}>
        <RightPanel />
      </div>
    </div>
  );
}
export default HomePage;
