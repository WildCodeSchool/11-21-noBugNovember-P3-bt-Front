import BTHTLogo from "../assets/BTHT-Blue_edited.webp";
import GraphLogo from "../assets/GraphLogo.png";

import "./styles/Header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <img src={BTHTLogo} alt="logo_BTHT" id="headerLogo" />
      <div className="headerStatsContainer">
        <img src={GraphLogo} alt="graph_logo" id="headerGraphLogo" />
        <div className="headerStats">
          <p className="statItem">2 Projets en cours</p>
          <p className="statItem">60 Experts inscrits</p>
          <p className="statItem">5 Clients</p>
          <p className="statItem">5000€ CA projets en cours</p>
          <p className="statItem">25000€ CA projets terminés</p>
          <p className="statItem">Coût Expert</p>
          <p className="statItem">31 Projets terminés</p>
          <p className="statItem">47 Experts ayant participé</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
