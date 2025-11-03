import React from "react";
import ReactMarkdown from "react-markdown";

export default function ChatMessage({ who, text }) {
  return (
    <div className={`message-container ${who}`}>
      {/* And also here to get `message-bubble user` */}
      <div className={`message-bubble ${who}`}>
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
}