import "./Pages.css";
import { useState } from "react";
import { pagesMenuItems } from "../../../data/leftPanel";
import { useTheme } from "../../../ThemeContext";

function Pages() {
  const [expandedItems, setExpandedItems] = useState({}); // No expanded by default
  const { theme } = useTheme();

  const iconPath = (iconName) => `/${theme}/${iconName}.svg`;
  const toggleExpanded = (itemKey) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemKey]: !prev[itemKey],
    }));
  };

  return (
    <div className="sidebar-container">
      <span className="section-header">Pages</span>
      <br />
      <br />
      {pagesMenuItems.map((item) => (
        <div key={item.id}>
          {(item.type === "item" || item.type === "expandable") && (
            <div>
              <div
                onClick={() =>
                  item.type === "expandable" && toggleExpanded(item.id)
                }
                className={`menu-item ${
                  item.type === "expandable" ? "expandable" : ""
                } ${item.id === "default" ? "active" : ""}`}
              >
                <span
                  className={`menu-label ${
                    item.id === "default" ? "active" : ""
                  }`}
                >
                  {item.type === "expandable" && (
                    <div className="chevron-icon">
                      {expandedItems[item.id] ? (
                        <img
                          src={iconPath("ChevronRight")}
                          alt=""
                          className="rotate-45"
                        />
                      ) : (
                        <img src={iconPath("ChevronRight")} alt="" />
                      )}
                    </div>
                  )}
                  <img src={iconPath(item.label)} alt="" />
                  {item.label}
                </span>
              </div>

              {item.type === "expandable" && expandedItems[item.id] && (
                <div className="submenu-container">
                  {item.children?.map((child) => (
                    <div key={child.id} className="submenu-item">
                      {child.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Pages;
