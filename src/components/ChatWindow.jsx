import React, { useState, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import BotMessage from "./BotMessage";
import { sendMessage } from "../api";

const WELCOME_MESSAGE = {
  ok: true,
  explain: "Hey — ask me anything about the **Northwind** e-commerce DB.",
  rows: [],
  sql: null,
  chart: { type: "none" },
};

export default function ChatWindow() {
  const [messages, setMessages] = useState([
    { who: "bot", response: WELCOME_MESSAGE },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef();

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const submit = async () => {
    if (!input.trim()) return;
    const userText = input;

    setMessages((m) => [...m, { who: "user", text: userText }]);
    setInput("");
    setLoading(true);

    const history = messages
      .map((m) => {
        if (m.who === "user") {
          return { role: "user", content: m.text };
        } else {
          return { role: "assistant", content: m.response.explain };
        }
      })
      .slice(-10);

    try {
      const res = await sendMessage(userText, history);
      if (res.error) {
        setMessages((m) => [
          ...m,
          { who: "bot", response: { explain: "Error: " + res.error } },
        ]);
      } else {
        setMessages((m) => [...m, { who: "bot", response: res }]);
      }
    } catch (err) {
      setMessages((m) => [
        ...m,
        { who: "bot", response: { explain: "Server or network error." } },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-window">
      {/* Header */}
      <div className="chat-header" align="center">Northwind Insights</div>

      {/* Messages area */}
      <div className="messages-area">
        {/* This wrapper keeps the conversation centered */}
        <div className="messages-content-wrapper">
          {messages.map((m, i) =>
            m.who === "user" ? (
              <ChatMessage key={i} who="user" text={m.text} />
            ) : (
              <BotMessage key={i} response={m.response} />
            )
          )}
          <div ref={endRef} />
        </div>
      </div>

      {/* Input area */}
      <div className="input-area">
        {/* This wrapper keeps the input bar centered */}
        <div className="input-content-wrapper">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question about products, employees, orders..."
            className="chat-input"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !loading) submit();
            }}
            disabled={loading}
          />
          <button onClick={submit} disabled={loading} className="send-button">
            {loading ? "Thinking..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
}