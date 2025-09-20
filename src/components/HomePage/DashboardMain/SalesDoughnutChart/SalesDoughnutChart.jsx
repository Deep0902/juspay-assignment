import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./SalesDoughnutChart.css";

const data = [
  { name: "Direct", value: 300.56, color: "#121212" },
  { name: "Affiliate", value: 135.18, color: "#c3f2d2" }, // Light green
  { name: "Sponsored", value: 154.02, color: "#b0c4de" }, // Light blue
  { name: "E-mail", value: 48.96, color: "#d2ebfc" }, // Very light blue
];

const SalesDoughnutChart = () => {
  // Calculate total for percentage display in legend if needed, though not directly in the image's legend
  // For the custom tooltip, we calculate it inside CustomTooltip component
  const totalSales = data.reduce((sum, entry) => sum + entry.value, 0);

  return (
    <div className="sales-chart-container">
      <h3 className="sales-chart-title">Total Sales</h3>
      <div className="chart-and-legend">
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Tooltip />
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60} // Doughnut hole size
                outerRadius={90} // Outer radius of the doughnut
                fill="#8884d8"
                paddingAngle={5} // Space between segments
                dataKey="value"
                startAngle={90} // Adjust start angle to match the image's rotation
                endAngle={-270} // Adjust end angle accordingly for a full circle from startAngle
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="sales-legend">
          {data.map((entry, index) => (
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
