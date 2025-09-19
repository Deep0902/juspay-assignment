import { useState } from "react";
import "./HomePage.css";
import { useTheme } from "../../ThemeContext.jsx";
import RightPanel from "../RightPanel/RightPanel.jsx";
import LeftPanel from "../LeftPanel/LeftPanel.jsx";
import DashboardMain from "./DashboardMain/DashboardMain.jsx";
function HomePage() {
  const [leftPanelOpen, setLeftPanelOpen] = useState(false);
  const [rightPanelOpen, setRightPanelOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const iconPath = (iconName) => `/${theme}/${iconName}`;

  const toggleLeftPanel = () => setLeftPanelOpen(!leftPanelOpen);
  const toggleRightPanel = () => setRightPanelOpen(!rightPanelOpen);

  return (
    <div className="layout-container">
      {/* Left Drawer */}
      <div className={`left-panel ${leftPanelOpen ? "open" : "closed"}`}>
        {/* <div className="panel-content">
          <div className="panel-header">
            <h2 className="panel-title">Navigation</h2>
            <button onClick={toggleLeftPanel} className="close-button"></button>
          </div>

          <nav className="nav">
            <a href="#" className="nav-item">
              <span>Profile</span>
            </a>
            <a href="#" className="nav-item">
              <span>Search</span>
            </a>
            <a href="#" className="nav-item">
              <span>Settings</span>
            </a>
            <a href="#" className="nav-item">
              <span>Notifications</span>
            </a>
          </nav>

          <div className="recent-section">
            <h3 className="recent-title">Recent Items</h3>
            <div className="recent-items">
              <div className="recent-item">
                <p className="recent-item-title">Project Alpha</p>
                <p className="recent-item-time">Updated 2 hours ago</p>
              </div>
              <div className="recent-item">
                <p className="recent-item-title">Task Beta</p>
                <p className="recent-item-time">Updated yesterday</p>
              </div>
            </div>
          </div>
        </div> */}
        <LeftPanel/>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        {/* Header */}
        <header className="header">
          <div className="header-left">
            <button onClick={toggleLeftPanel} className="menu-button">
              <img src={iconPath("Sidebar.svg")} alt="Sidebar" />
            </button>
            <button className="menu-button">
              <img src={iconPath("Star.svg")} alt="Star" />
            </button>
            <h1 className="title opacity-40">Dashboards</h1>
            <h1 className="title opacity-40">/</h1>
            <h1 className="title">Default</h1>
          </div>

          <div className="header-right">
            <div className="search-container">
              <img src="/Search.svg" alt="" className="search-icon"/>
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />
            </div>
            <button className="menu-button" onClick={toggleTheme}>
              <img src={iconPath("Sun.svg")} alt="Sun" />
            </button>
            <button className="menu-button">
              <img src={iconPath("ClockCounterClockwise.svg")} alt="Clock" />
            </button>
            <button className="menu-button">
              <img src={iconPath("Bell.svg")} alt="Bell" />
            </button>
            <button onClick={toggleRightPanel} className="menu-button">
              <img src={iconPath("Sidebar.svg")} alt="Sidebar" />
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="content">
          <DashboardMain />
        </main>
      </div>

      {/* Right Drawer */}
      <div className={`right-panel ${rightPanelOpen ? "open" : "closed"}`}>
        {/* <div className="right-panel-content">
          <div className="panel-header">
            <h2 className="panel-title">Filters & Options</h2>
            <button
              onClick={toggleRightPanel}
              className="close-button"
            ></button>
          </div>

          <div className="filter-section">
            <div className="filter-group">
              <h3 className="filter-title">Status Filter</h3>
              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input type="checkbox" className="checkbox" defaultChecked />
                  <span className="checkbox-text">Active</span>
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" className="checkbox" defaultChecked />
                  <span className="checkbox-text">Completed</span>
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" className="checkbox" />
                  <span className="checkbox-text">Archived</span>
                </label>
              </div>
            </div>

            <div className="filter-group">
              <h3 className="filter-title">Date Range</h3>
              <select className="select">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 3 months</option>
                <option>All time</option>
              </select>
            </div>

            <div className="filter-group">
              <h3 className="filter-title">Priority</h3>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="priority"
                    className="radio"
                    defaultChecked
                  />
                  <span className="radio-text">All</span>
                </label>
                <label className="radio-label">
                  <input type="radio" name="priority" className="radio" />
                  <span className="radio-text">High</span>
                </label>
                <label className="radio-label">
                  <input type="radio" name="priority" className="radio" />
                  <span className="radio-text">Medium</span>
                </label>
                <label className="radio-label">
                  <input type="radio" name="priority" className="radio" />
                  <span className="radio-text">Low</span>
                </label>
              </div>
            </div>

            <button className="apply-button">Apply Filters</button>
          </div>
        </div> */}
        <RightPanel/>
      </div>
    </div>
  );
}
export default HomePage;
