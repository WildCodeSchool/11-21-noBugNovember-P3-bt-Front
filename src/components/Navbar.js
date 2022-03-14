import Chevron from "../assets/chevron.svg";
// import client from "../assets/client.png";
// import avatar from "../assets/avatar.png";
// import avatar2 from "../assets/avatar2.svg";
// import deal from "../assets/deal.png";
// import experts from "../assets/experts.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserDoctor,
  faUserTie,
  faDiagramProject,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./styles/Navbar.css";

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);

  const Open = () => {
    setIsOpened(!isOpened);
    document.querySelector(".navbar").classList.toggle("opened");
    document.querySelector(".navbarOpener").classList.toggle("opened");
    document.querySelector("#chevronLogo").classList.toggle("opened");
  };

  return (
    <div
      className="navbar"
      // onMouseEnter={() => open()}
      // onMouseLeave={() => close()}
    >
      <div className="navbarOpener" onClick={() => Open()}>
        <img src={Chevron} alt="chevron" id="chevronLogo" />
      </div>
      <div className="navbarLinksContainer"></div>
      <ul className="navbarLinksWrapper">
        {/* <NavLink
          to="/user"
          className={({ isActive }) =>
            isActive ? "navbarLink activeLink" : "navbarLink"
          }
        >
          <img src={avatar2} className="navbarLinkLogo" />
          <span className={isOpened ? "namesDisplayed" : "navbarLinkName"}>
            Alexis{" "}
          </span>
        </NavLink> */}
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "navbarLink activeLink" : "navbarLink"
          }
        >
          <FontAwesomeIcon
            icon={faDiagramProject}
            // className="navbarLinkLogo"
            style={{ fontSize: "30px" }}
          />
          {/* <img src={deal} alt="projectLogo" className="navbarLinkLogo" /> */}
          <span className={isOpened ? "namesDisplayed" : "navbarLinkName"}>
            Projects
          </span>
        </NavLink>
        <NavLink
          to="/clients"
          className={({ isActive }) =>
            isActive ? "navbarLink activeLink" : "navbarLink"
          }
        >
          <FontAwesomeIcon
            icon={faUserTie}
            // className="navbarLinkLogo"
            style={{ fontSize: "30px" }}
          />

          {/* <img src={client} alt="clientLogo" className="navbarLinkLogo" /> */}
          <span className={isOpened ? "namesDisplayed" : "navbarLinkName"}>
            Clients
          </span>
        </NavLink>
        <NavLink
          to="/experts"
          className={({ isActive }) =>
            isActive ? "navbarLink activeLink" : "navbarLink"
          }
        >
          <FontAwesomeIcon
            icon={faUserDoctor}
            // className="navbarLinkLogo"
            // size="xl"
            style={{ fontSize: "30px" }}
          />
          {/* <img src={experts} alt="expertLogo" className="navbarLinkLogo" /> */}
          <span className={isOpened ? "namesDisplayed" : "navbarLinkName"}>
            Experts
          </span>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
