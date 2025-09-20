import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  Legend,
  YAxis,
} from "recharts";
import "./ProjectionsActuals.css";

const ProjectionsActuals = ({
  data = barChartData,
  title = "Projections vs Actuals",
}) => {
  const formatYAxis = (value) => {
    if (value === 0) return "0";
    return `${value}M`;
  };

  return (
    <div className="bar-chart-container">
      <h3 className="chart-title">{title}</h3>

      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barCategoryGap={30}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#f0f0f0"
              horizontal={true}
              vertical={false}
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 14, fill: "#666666" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#999999" }}
              tickFormatter={formatYAxis}
              domain={[0, 30]}
              ticks={[0, 10, 20, 30]}
            />
            <Tooltip />
            <Bar
              dataKey="Actuals"
              stackId="stack"
              fill="#A8C5DA"
              radius={[0, 0, 0, 0]}
              maxBarSize={60}
            />
            <Bar
              dataKey="Projections"
              stackId="stack"
              fill="#D0DFEB"
              radius={[5, 5, 0, 0]}
              maxBarSize={60}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProjectionsActuals;
