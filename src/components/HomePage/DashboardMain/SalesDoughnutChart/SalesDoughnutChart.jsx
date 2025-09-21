import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { totalSalesData } from "../../../../data/barChartData";
import { useTheme } from "../../../../ThemeContext";
import { memo } from "react";

const SalesDoughnutChart = () => {
  const { theme } = useTheme();
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
                innerRadius={40}
                outerRadius={70}
                fill="#8884d8"
                paddingAngle={0}
                dataKey="value"
                cornerRadius={6}
                startAngle={90}
                endAngle={-270}
                stroke="none"
              >
                {totalSalesData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={theme === "dark" ? entry.colorDark : entry.color}
                  />
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
                style={{
                  backgroundColor:
                    theme === "dark" ? entry.colorDark : entry.color,
                }}
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

export default memo(SalesDoughnutChart);
