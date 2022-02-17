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
          <p className="statItem">2 Current Projects</p>
          <p className="statItem">5000€ Current $</p>
          <p className="statItem">25000€ Done $</p>
          <p className="statItem">31 Done Projects</p>
          <p className="statItem">60 Experts</p>
          <p className="statItem">5 Clients</p>
          <p className="statItem">Experts Cost</p>
          <p className="statItem">47 Attended experts</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
