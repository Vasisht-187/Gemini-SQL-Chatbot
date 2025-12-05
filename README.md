# Gemini SQL Chatbot: Frontend

This directory contains the **React User Interface** for the Gemini SQL Chatbot.

This is a clean, full-screen, single-page application that provides the user-facing chat experience. It is designed to be highly responsive, handling everything from simple text replies to complex, dynamic data visualizations.

## 🌟 Features

  * **Full-Screen Interface:** A modern, app-like, and responsive chat layout.
  * **Rich Data Rendering:** Automatically displays database results in a clean, scrollable **table**.
  * **Dynamic Charting:** Renders **Bar**, **Pie**, and **Line** charts on-the-fly based on the AI's suggestions (using `recharts`).
  * **Markdown Support:** Correctly renders the AI's explanations, including **bold text**, lists, and other formatting (using `react-markdown`).
  * **SQL Syntax Highlighting:** Displays the generated SQL query in a collapsible, easy-to-read format (using `react-syntax-highlighter`).

## 🛠️ Technology Stack

  * **React:** For building the user interface.
  * **axios:** For making API calls to the Python backend.
  * **recharts:** For rendering dynamic data visualizations.
  * **react-markdown:** To safely render the AI's Markdown-formatted explanations.
  * **react-syntax-highlighter:** For pretty-printing the SQL queries.
  * **CSS:** A single `src/Chat.css` file for all styling (no complex frameworks).

## 🚀 Getting Started

**Prerequisite:** This is *only* the frontend. You must have the [backend server](../backend/README.md) running first for this application to work.

-----

### 1\. Install Dependencies

Navigate to this `frontend` directory in your terminal and install the required `npm` packages.

```bash
npm install
```

### 2\. Run the Application

Once the dependencies are installed, run the React development server.

```bash
npm start
```

This will open the chatbot in your browser, usually at **`http://localhost:3000`**.

## 🔌 Backend Connection

All API calls are managed in `src/api.js`.

By default, it is configured to send requests to `http://localhost:5000/api/chat`. If your backend is running on a different port, you must update the `baseURL` in this file.

## 📁 Project Structure

A quick overview of the key components:

```
src/
│
├── api.js                    # Manages all `axios` API calls to the backend.
├── Chat.css                  # Contains all CSS styling for the application.
├── App.jsx                   # The root component.
│
└── components/
    ├── ChatWindow.jsx        # Core component: manages state, input, and messages.
    ├── ChatMessage.jsx       # Renders the user's message bubble.
    ├── BotMessage.jsx        # Renders the AI's response (text, SQL, and data).
    ├── DataTable.jsx         # Renders the data grid/table.
    ├── DataChart.jsx         # Renders the `recharts` visual (bar, pie, line).
    └── SqlDisplay.jsx        # Renders the collapsible, highlighted SQL.
```




<img width="1918" height="1078" alt="abcdefghijkl" src="https://github.com/user-attachments/assets/7ef2c820-8b2d-4aeb-900c-677d8125e8bd" />

