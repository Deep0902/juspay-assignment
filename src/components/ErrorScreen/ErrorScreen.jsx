import "./ErrorScreen.css";
import { useNavigate } from "react-router-dom";
function ErrorScreen() {
  const navigate = useNavigate();
  return (
    <div className="splash-screen">
      <div className="splash-logo">
        <img src="/juspaylogo.svg" alt="JusPay Logo" />
      </div>

      <div className="splash-text">
        <h1 className="splash-title">Oops! Something went wrong 😬</h1>
        <br />
        <button className="homepage-button" onClick={() => navigate("/")}>
          Take me to the Homepage
        </button>
      </div>
    </div>
  );
}
export default ErrorScreen;
