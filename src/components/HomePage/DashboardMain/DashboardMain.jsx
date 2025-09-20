import "./DashboardMain.css";
import StatsCards from "./StatsCards/StatsCards";

function DashboardMain() {
  return (
    <>
      <h2 className="activities-title">eCommerce</h2>
      <div className="test">
        <div className="stat-card-container">
          <StatsCards />
        </div>
        <div className="test1">hi</div>
      </div>
    </>
  );
}

export default DashboardMain;
