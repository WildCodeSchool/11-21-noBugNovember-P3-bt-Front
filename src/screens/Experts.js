import { useState } from "react";
import TabExperts from "../components/TabExperts";
import "./styles/Experts.css";

import { Link } from "react-router-dom";

const Experts = () => {
  const [expertSelection, setExpertSelection] = useState([]);

  console.log("expertSelection", expertSelection);
  return (
    <div className="tabContainer">
      <div className="titleButtonContainer">
        <h1>Experts</h1>
        <div className="buttonContainerExpert">
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
      <TabExperts setExpertSelection={setExpertSelection} />
    </div>
  );
};

export default Experts;
