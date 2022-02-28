import TabExperts from "../components/TabExperts";
import "./styles/Experts.css";

import { Link } from "react-router-dom";

const Experts = () => {
  return (
    <div className="tabContainer">
      <h1>Experts</h1>
      <Link to="/pageExpert">Ajouter</Link>
      <TabExperts />
    </div>
  );
};

export default Experts;
