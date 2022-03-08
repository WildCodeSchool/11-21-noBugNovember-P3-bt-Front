import { useState } from "react";
import TabExperts from "../components/TabExperts";
import "./styles/Experts.css";

import { Link } from "react-router-dom";

const Experts = () => {
  const [expertSelection, setExpertSelection] = useState([]);
  return (
    <div className="tabContainer">
      <h1>Experts</h1>
      <Link to="/pageExpert">ADD</Link>
      <Link to={`/pageExpertEdit/${expertSelection}`}>EDIT</Link>
      <TabExperts setExpertSelection={setExpertSelection} />
    </div>
  );
};

export default Experts;
