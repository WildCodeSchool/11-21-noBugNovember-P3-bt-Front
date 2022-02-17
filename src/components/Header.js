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
          <p className="statItem">Stats 1</p>
          <p className="statItem">Stats 2</p>
          <p className="statItem">Stats 3</p>
          <p className="statItem">Stats 4</p>
          <p className="statItem">Stats 5</p>
          <p className="statItem">Stats 6</p>
          <p className="statItem">Stats 7</p>
          <p className="statItem">Stats 8</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
