import { useState } from "react";
import TabClients from "../components/TabClients";
import "./styles/Clients.css";
import { Link } from "react-router-dom";

const Clients = (props) => {
  const [clientSelection, setClientSelection] = useState([]);

  console.log("clientSelection", clientSelection);

  return (
    <div className="tabContainer">
      <h1>Clients</h1>
      <TabClients setClientSelection={setClientSelection} />
      <div className="titleButtonContainer">
        <div className="buttonContainerExpert">
          <div>
            <Link to="/pageClient">
              <button className="buttonAjout">ADD</button>
            </Link>
          </div>
          {clientSelection.length !== 0 ? (
            <div>
              <Link to={`/pageClientEdit/${clientSelection}`}>
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

export default Clients;
