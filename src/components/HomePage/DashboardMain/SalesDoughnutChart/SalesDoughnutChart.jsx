import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { totalSalesData } from "../../../../data/barChartData";
import "./SalesDoughnutChart.css";

const SalesDoughnutChart = () => {
  return (
    <div className="sales-chart-container">
      <h3 className="sales-chart-title">Total Sales</h3>
      <div className="chart-and-legend">
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Tooltip />
              <Pie
                data={totalSalesData}
                cx="50%"
                cy="50%"
                innerRadius={60} // Doughnut hole size
                outerRadius={90} // Outer radius of the doughnut
                fill="#8884d8"
                paddingAngle={0} // Space between segments
                dataKey="value"
                cornerRadius={12}
                startAngle={90} // Adjust start angle to match the image's rotation
                endAngle={-270} // Adjust end angle accordingly for a full circle from startAngle
              >
                {totalSalesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="sales-legend">
          {totalSalesData.map((entry, index) => (
            <div className="sales-legend-item" key={`legend-${index}`}>
              <span
                className="sales-legend-dot"
                style={{ backgroundColor: entry.color }}
              ></span>
              <span className="sales-legend-label">{entry.name}</span>
              <span className="sales-legend-value">
                ${entry.value.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesDoughnutChart;
