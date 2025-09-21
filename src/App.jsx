import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import ErrorScreen from "./components/ErrorScreen/ErrorScreen.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import "./theme.css";
import { ThemeProvider } from "./ThemeContext.jsx";

function App() {
  
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="*" index element={<ErrorScreen />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
