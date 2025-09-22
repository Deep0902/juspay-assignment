import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { totalSalesData } from "../../../../data/barChartData";
import { useTheme } from "../../../../ThemeContext";
import { memo } from "react";
import "./SalesDoughnutChart.css";

const SalesDoughnutChart = () => {
  const { theme } = useTheme();
  const totalValue = totalSalesData.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="sales-chart-container">
      <h3 className="sales-chart-title">Total Sales</h3>
      <div className="chart-and-legend">
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Tooltip
                formatter={(value, name, props) => [
                  <span className="number-font">
                    {((value / totalValue) * 100).toFixed(2)}%
                  </span>,
                  props?.payload?.item || name,
                ]}
                contentStyle={{
                  borderRadius: "10px",
                  border: "none",
                  background: theme === "dark" ? "#1C1C1C" : "#f7f9fb",
                  color: theme === "dark" ? "#FFFFFF" : "#1C1C1C",
                }}
                itemStyle={{
                  fontSize: "12px",
                  fontWeight: "400",
                  color: theme === "dark" ? "#FFFFFF" : "#1C1C1C",
                }}
              />
              <Pie
                data={totalSalesData}
                cx="50%"
                cy="50%"
                startAngle={30}
                endAngle={-330}
                innerRadius={37}
                outerRadius={60}
                dataKey="value"
                strokeWidth={4}
                paddingAngle={-10}
                cornerRadius={12}
                stroke={theme === "dark" ? "#333333" : "#FFFFFF"}
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
          {totalSalesData.map((item, index) => (
            <div className="sales-legend-item" key={index}>
              <div>
                <span
                  className="sales-legend-dot"
                  style={{
                    backgroundColor:
                      theme === "dark" ? item.colorDark : item.color,
                  }}
                ></span>
                <span className="sales-legend-label">{item.name}</span>
              </div>
              <span className="sales-legend-value number-font">
                ${item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(SalesDoughnutChart);
