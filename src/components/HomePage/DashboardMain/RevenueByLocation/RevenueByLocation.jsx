import "./RevenueByLocation.css";
import { getIconPath } from "../../../../util/commonFunctions";
import { useTheme } from "../../../../ThemeContext";
const locations = [
  { name: "New York", value: 72 },
  { name: "San Francisco", value: 39 },
  { name: "Sydney", value: 25 },
  { name: "Singapore", value: 61 },
];

const maxValue = Math.max(...locations.map((loc) => loc.value));

function RevenueByLocation() {
  const { theme } = useTheme();
  return (
    <div className="location-card">
      <h2 className="location-title">Revenue by Location</h2>
      <img src={getIconPath("WorldMap.svg", theme)} alt="WorldMap" />
      <div>
        {locations.map((location) => (
          <div className="location-row" key={location.name}>
            <span className="location-name">{location.name}</span>
            <span className="location-value">{location.value}K</span>
            <div className="progress-bar-bg">
              <div className="progress-bar-fg" style={{ width: `${location.value}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RevenueByLocation;
