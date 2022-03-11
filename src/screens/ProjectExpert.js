import axios from 'axios'

import React, { useState, useEffect } from 'react'

import MidiProject from '../components/MidiProject'
import MidiExpert from '../components/MidiExpert'

import search from '../assets/search.svg'

import './styles/ProjectExpert.css'

const ProjectExpert = () => {
  return (
    <div className='projectExpertContainer'>
      <div className='filter'>
        <img src={search} alt='search' width='50px' />
        <ul className='filterBar'>
          <div>Type</div>
          <div>Price</div>
          <div>Practice</div>
          <div>Industry</div>
          <div>Job Title</div>
          <div>Geo Expertise</div>
          <div>Language</div>
          <div>Years of Exp</div>
          <div>Company</div>
          <div>Feedback</div>
          <div>Keywords</div>
        </ul>
      </div>
      <MidiProject className='midiProject' />
      <MidiExpert className='midiExpert' />
    </div>
  )
}

export default ProjectExpert
