import banner from "./welcome-banner.png";
import "./welcomeBanner.scss";
import { useNavigate } from "react-router-dom";

export const WelcomeBanner = () => {
  const navigate = useNavigate();
  return (
    <div className="welcome-banner">
      <img src={banner} width="100%" id="banner" alt="banner" />
      <div className="greeting-container">
        <div className="greeting">
          <span>Hi,</span>
          <br />
          <span>
            I am <span className="letter-span">A</span>lina,
          </span>
          <br />
          <span>a self-driven web-developer</span>
        </div>
        <button
          className="call-to-action-button"
          onClick={() => navigate("/#projects")}
        >
          Check out my projects
        </button>
      </div>
    </div>
  );
};
