import React from "react";
import ChatWindow from "./components/ChatWindow";
import "./Chat.css"; // Import your new CSS file

export default function App() {
  // ChatWindow will now control the full-screen layout
  return (
      <ChatWindow />
  );
}