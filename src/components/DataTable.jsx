import React from "react";

export default function DataTable({ rows }) {
  if (!rows || rows.length === 0) return null;

  const headers = Object.keys(rows[0]);

  return (
    <div className="data-table-container">
      <table className="data-table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {headers.map((header) => (
                <td key={header}>{String(row[header])}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}