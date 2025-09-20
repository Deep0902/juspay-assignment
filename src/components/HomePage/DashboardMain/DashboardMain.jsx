import "./DashboardMain.css";
import ProjectionsActuals from "./ProjectionsActuals/ProjectionsActuals";
import StatsCards from "./StatsCards/StatsCards";
import barChartData from "../../../data/barChartData";
import RevenueChart from "./RevenueChart/RevenueChart";
import SalesDoughnutChart from "./SalesDoughnutChart/SalesDoughnutChart";
import RevenueByLocation from "./RevenueByLocation/RevenueByLocation";
import TopSellingProducts from "./TopSellingProducts/TopSellingProducts";

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
      <div className="revenue-charts-container">
        <div className="chart-revenue">
          <RevenueChart />
        </div>
        <div className="revenue-by-location">
          <RevenueByLocation />
        </div>
      </div>
      <div className="sales-section">
        <div className="sales-table"><TopSellingProducts/></div>
        <div className="sales-total">
          <SalesDoughnutChart />
        </div>
      </div>
    </>
  );
}

export default DashboardMain;
