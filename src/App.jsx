import React from "react";
import "./App.css";
import "./theme.css";
import PWABadge from "./PWABadge.jsx";
import { ThemeProvider, useTheme } from "./ThemeContext.jsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.jsx";
function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} style={{ marginBottom: 24 }}>
      Switch to {theme === "light" ? "Dark" : "Light"} Theme
    </button>
  );
}

function AppContent() {
  const { theme } = useTheme();
  return (
    <div
      className="themed-bg"
      style={{
        minHeight: "100vh",
        background: `var(--${theme}-bg-primary)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ThemeToggleButton />
      <h1
        className="themed-text"
        style={{ color: `var(--${theme}-text-primary)` }}
      >
        This is Juspay Assignment
      </h1>
      <PWABadge />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      {/* <AppContent /> */}
      <Router>
        <Routes>
          <Route path="/" index element={<HomePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
