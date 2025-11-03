import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function SqlDisplay({ sql }) {
  return (
    <details className="sql-display">
      <summary>
        Show SQL Query
      </summary>
      {/* The <div> is for styling the <pre> tag from the library */}
      <div>
        <SyntaxHighlighter language="sql" style={vscDarkPlus} customStyle={{margin: 0, borderRadius: "8px"}}>
          {sql}
        </SyntaxHighlighter>
      </div>
    </details>
  );
}