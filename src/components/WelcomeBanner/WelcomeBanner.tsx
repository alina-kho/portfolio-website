import banner from "./welcome-banner.png";
import "./welcomeBanner.scss";

export const WelcomeBanner = () => {
  return (
    <div className="welcome-banner">
      <img src={banner} width="100%" id="banner" alt="banner" />
    </div>
  );
};
