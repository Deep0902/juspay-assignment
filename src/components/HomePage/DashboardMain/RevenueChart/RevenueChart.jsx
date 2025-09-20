import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { revenueData } from "../../../../data/barChartData";
import "./RevenueChart.css";

const RevenueChart = () => {
  return (
    <div className="revenue-chart-container">
      <div className="chart-header">
        <h3 className="chart-title">Revenue</h3>
        <span className="divider">|</span>
        <div className="legend">
          <div className="legend-item">
            <span className="dot current"></span>
            <span className="label">Current Week</span>
            <span className="value">$58,211</span>
          </div>
          <div className="legend-item">
            <span className="dot previous"></span>
            <span className="label">Previous Week</span>
            <span className="value">$68,768</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={revenueData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 14 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `${value}M`}
            domain={[0, 30]}
            ticks={[0, 10, 20, 30]}
            tick={{ fontSize: 12 }}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="Current"
            stroke="var(--previous-line)"
            strokeWidth={3}
            dot={false}
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="Previous"
            stroke="#a8c5da"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
