import "./DashboardMain.css";
import ProjectionsActuals from "./ProjectionsActuals/ProjectionsActuals";
import StatsCards from "./StatsCards/StatsCards";
import barChartData from "../../../data/barChartData";

function DashboardMain() {
  return (
    <>
      <h2 className="activities-title">eCommerce</h2>
      <div className="test">
        <div className="stat-card-container">
          <StatsCards />
        </div>
        <div className="test1">
          <ProjectionsActuals
            data={barChartData}
            title="Projections vs Actuals"
          />
        </div>
      </div>
    </>
  );
}

export default DashboardMain;
