import { NavHashLink } from "react-router-hash-link";
import "./navbar.scss";
import logo from "./logo-portfolio.png";

export const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <div className="links-section">
        <NavHashLink smooth to={"#about"} className="nav-link">
          About
        </NavHashLink>
        <NavHashLink smooth to={"#projects"} className="nav-link">
          Projects
        </NavHashLink>
        <NavHashLink smooth to={"#tool-stack"} className="nav-link">
          Tool stack
        </NavHashLink>
        <NavHashLink smooth to={"#contacts"} className="nav-link">
          Contacts
        </NavHashLink>
      </div>
    </div>
  );
};
