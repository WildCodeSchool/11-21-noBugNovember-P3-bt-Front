import React, { useState } from 'react'

import MidiProject from '../components/MidiProject'
import MidiExpert from '../components/MidiExpert'

import './styles/ProjectExpert.css'
import FilterExpert from '../components/FilterExpert'

const ProjectExpert = () => {
  const [experts, setExperts] = useState([])

  return (
    <div className='projectExpertContainer'>
      <FilterExpert 
      experts={experts} setExperts={setExperts} 
      /> 
      <MidiProject />
      <MidiExpert 
      experts={experts} setExperts={setExperts} 
      />
    </div>
  )
}

export default ProjectExpert
