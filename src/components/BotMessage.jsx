import React from "react";
import ReactMarkdown from "react-markdown";
import DataTable from "./DataTable";
import DataChart from "./DataChart";
import SqlDisplay from "./SqlDisplay";

export default function BotMessage({ response }) {
  const { explain, sql, rows = [], chart = { type: "none" } } = response;

  const hasData = rows && rows.length > 0;
  const hasChart = hasData && chart.type !== "none" && chart.type !== "table";

  return (
    <div className="message-container bot">
      <div className="message-bubble bot">
        {/* 1. The text explanation */}
        <div className="bot-explanation">
          <ReactMarkdown>{explain}</ReactMarkdown>
        </div>

        {/* 2. The SQL query (collapsible) */}
        {sql && <SqlDisplay sql={sql} />}

        {/* 3. The Chart (if suggested) */}
        {hasChart && <DataChart type={chart.type} data={rows} config={chart.config} />}

        {/* 4. The Table (if no chart, but we have data) */}
        {!hasChart && hasData && <DataTable rows={rows} />}
      </div>
    </div>
  );
}