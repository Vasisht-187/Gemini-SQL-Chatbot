import React from "react";
import {
  ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
  PieChart, Pie, Cell,
  LineChart, Line
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

export default function DataChart({ type, data, config }) {
  const { x_key, y_key } = config || {};

  if (!x_key || !y_key) {
    console.warn("Chart config missing x_key or y_key", config);
    return null;
  }
  
  const processedData = data.map(item => ({
      ...item,
      [y_key]: parseFloat(item[y_key])
  }));

  const chartComponent = () => {
    switch (type) {
      case "bar":
        return (
          <BarChart data={processedData}>
            <XAxis dataKey={x_key} fontSize="12px" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey={y_key} fill="#2563eb" />
          </BarChart>
        );

      case "pie":
        return (
          <PieChart>
            <Pie
              data={processedData}
              dataKey={y_key}
              nameKey={x_key}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label={(entry) => entry[x_key]}
            >
              {processedData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        );
      
      case "line":
          return (
            <LineChart data={processedData}>
              <XAxis dataKey={x_key} fontSize="12px" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey={y_key} stroke="#2563eb" strokeWidth={2} />
            </LineChart>
          );

      default:
        return null;
    }
  }

  return (
    <div className="data-chart-container">
      <ResponsiveContainer width="100%" height={300}>
        {chartComponent()}
      </ResponsiveContainer>
    </div>
  )
}