import Chevron from "../assets/chevron.svg";
import Client from "../assets/client.png";
import Expert from "../assets/expert.png";
import Project from "../assets/project.png";

import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarOpener">
        <img src={Chevron} alt="chevron" />
      </div>
      <div className="navbarLinksContainer">
        <ul className="navbarLinksWrapper">
          <li className="navbarLink">
            <img src={Project} alt="projectLogo" className="navbarLinkLogo" />
            <span className="navbarLinkName">Projects</span>
          </li>
          <li className="navbarLink">
            <img src={Client} alt="clientLogo" className="navbarLinkLogo" />
            <span className="navbarLinkName">Clients</span>
          </li>
          <li className="navbarLink">
            <img src={Expert} alt="expertLogo" className="navbarLinkLogo" />
            <span className="navbarLinkName">Experts</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
