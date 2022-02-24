import BTHTLogo from "../assets/BTHT-Blue_edited.webp";
import GraphLogo from "../assets/GraphLogo.png";
import axios from "axios";
import { useState, useEffect } from 'react'

import "./styles/Header.css";

const Header = () => {
  const [stats, setStats] = useState([])
  
  useEffect(() => {
    axios
      .get("http://localhost:4040/stats/globalStats")
      .then(res => res.data)
      .then(res => console.log(res) || setStats(res))

  }, [])

  console.log("test", stats)
  stats !== [] && console.log("test2", stats[0])
  return (
      <div className="headerContainer">
      <img src={BTHTLogo} alt="logo_BTHT" id="headerLogo" />
      <div className="headerStatsContainer">
      <img src={GraphLogo} alt="graph_logo" id="headerGraphLogo" />
      <div className="headerStats">
          <p className="statItem">{stats.doneprojects} Done Projects</p>
          <p className="statItem">{stats.ongoingProjects} Ongoing Projects</p>
          <p className="statItem">{stats.DoneCA} CA</p>
          <p className="statItem">{stats.expertsWorked} Participating Experts</p>
          <p className="statItem">{stats.totalExperts} Experts</p>
          <p className="statItem">{stats.totalClients} Clients</p>
          <p className="statItem">{stats.CostExperts} Experts Cost</p>
          <p className="statItem">{stats.OngoingCA} Ongoing CA </p>
        </div>   
      </div> 
    </div>   
  );
};

export default Header;
