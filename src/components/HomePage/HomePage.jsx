import { useState } from "react";
import { useTheme } from "../../ThemeContext.jsx";
import { getIconPath } from "../../util/commonFunctions";
import LeftPanel from "../LeftPanel/LeftPanel.jsx";
import RightPanel from "../RightPanel/RightPanel.jsx";
import DashboardMain from "./DashboardMain/DashboardMain.jsx";
import "./HomePage.css";
import TableFilter from "./TableFilter/TableFilter.jsx";
import SplashScreen from "../SplashScreen/SplashScreen.jsx";
function HomePage() {
  const [leftPanelOpen, setLeftPanelOpen] = useState(true);
  const [rightPanelOpen, setRightPanelOpen] = useState(true);
  const { theme, toggleTheme } = useTheme();
  const [useTable, setUseTable] = useState(false); // Toggle this to show TableFilter or DashboardMain

  const toggleLeftPanel = () => setLeftPanelOpen(!leftPanelOpen);
  const toggleRightPanel = () => setRightPanelOpen(!rightPanelOpen);

  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };
  return (
    <div className="layout-container">
      {showSplash && (
        <SplashScreen onAnimationComplete={handleSplashComplete} />
      )}
      {/* Left Drawer */}
      <div className={`left-panel ${leftPanelOpen ? "open" : "closed"}`}>
        <LeftPanel onClose={() => setLeftPanelOpen(false)} />
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
              <img
                src={getIconPath("Star.svg", theme)}
                alt="Star"
                className="animate-grow-rotate-shrink"
                onClick={() => setUseTable((prev) => !prev)}
              />
            </button>
            <h1 className="title opacity-40">Dashboards</h1>
            <h1 className="title opacity-40">/</h1>
            <h1 className="title">Default</h1>
          </div>

          <div className="header-right">
            <div className="search-container">
              <img
                src={getIconPath("Search.svg", theme)}
                alt=""
                className="search-icon"
              />
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
              <img
                src={getIconPath("ClockCounterClockwise.svg", theme)}
                alt="Clock"
              />
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
          {useTable ? <TableFilter /> : <DashboardMain />}
        </main>
      </div>

      {/* Right Drawer */}
      <div className={`right-panel ${rightPanelOpen ? "open" : "closed"}`}>
        <RightPanel onClose={() => setRightPanelOpen(false)} />
      </div>
    </div>
  );
}
export default HomePage;
