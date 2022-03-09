import axios from "axios";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import MidiProject from '../components/MidiProject'

import key from '../assets/key.png'
import search from '../assets/search.svg'

import './styles/ProjectExpert.css'

const ProjectExpert = (props) => {
  const [experts, setExperts] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:4040/experts")
      .then((res) => res.data)
      .then((res) => console.log("experts", res) || setExperts(res));
  }, []);

  return (
    <div className='projectExpertContainer'>
      <div className="filter">
        <img src={search} alt="search" width="50px"/>
        <ul className="filterBar">
          <div>Type</div>
          <div>Price</div>
          <div>Practice</div>
          <div>Industry</div>
          <div>Job Title</div>
          <div>Geo Expertise</div>
          <div>Language</div>
          <div>Years of Exp</div>
          <div>Company</div>
          <div>Excluded Company</div>
          <div>Keywords</div>
        </ul>
      </div>
      <MidiProject className='midiProject' />
      <div className='experts'> 
        {experts.map((expert)=> (
          <div className='midiExpert' key={expert.id}>
              <Link to="/pageExpert">
              <p style={{fontFamily: "Montserrat", fontWeight:"600"}} className='paddingMidiExpert'>Expert # {expert.numExpert}</p>
              <div className="separation"></div>
              <div className="paddingMidiExpert">
              <p>{expert.firstname}{" "}{expert.lastname}</p>
              <p>{expert.jobTitleName}</p>
              <p>{expert.kindOfExpertName}</p>
              <p>{expert.languages}</p>
              <p>Current cie: {expert.companyName}</p>
              <p>Past cie: {expert.pastCompanies}</p>
              <p><img src={key} alt='keywords' width='16px'/>{" "}{expert.keywords}</p>
              <p>Price: {expert.price}</p>
              <p>Cost: {expert.cost}</p>
              </div>
              </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectExpert
