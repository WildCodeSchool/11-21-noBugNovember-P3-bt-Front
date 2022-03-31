import { useState } from "react";
import TabExperts from "../components/TabExperts";
import "./styles/Experts.css";

import { Link } from "react-router-dom";

const Experts = () => {
  const [expertSelection, setExpertSelection] = useState([]);

  return (
    <div className="tabContainer">
      <div className="titleButtonContainer">
        <h1>Experts</h1>
        <TabExperts setExpertSelection={setExpertSelection} />
        <div className="buttonAjoutContainer">
          <div>
            <Link to="/pageExpert">
              <button className="buttonAjout">ADD</button>
            </Link>
          </div>
          {expertSelection.length !== 0 ? (
            <div>
              <Link to={`/pageExpertEdit/${expertSelection}`}>
                <button className="buttonAjout">EDIT</button>
              </Link>
            </div>
          ) : (
            <div>
              <a href="#">
                <button className="buttonAjout">EDIT</button>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experts;
