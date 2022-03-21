import MidiProject from '../components/MidiProject'
import MidiExpert from '../components/MidiExpert'
import MaxiExpert from '../components/MaxiExpert'
import PopupProject from '../components/PopupProject'
import React, { useState } from 'react'

import search from '../assets/search.svg'

import './styles/ProjectExpert.css'

const ProjectExpert = () => {
  const [expert, setExpert] = useState([])
  const [idExpert, setIdExpert] = useState()
  const [maxiExpert, setMaxiExpert] = useState(false)
  const [popupProject, setPopupProject] = useState(false)
  const [project, setProject] = useState([])

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
      <div className='gridMidiProject'>
        <MidiProject project={project} setProject={setProject} />
      </div>
      <div className={!maxiExpert ? 'gridMidiExpert' : 'hidden'}>
        <MidiExpert setMaxiExpert={setMaxiExpert} setIdExpert={setIdExpert} project={project} />
      </div>
      <div className={maxiExpert && idExpert ? 'gridMaxiExpert' : 'hidden'}>
        <MaxiExpert idExpert={idExpert} maxiExpert={maxiExpert} setMaxiExpert={setMaxiExpert} setPopupProject={setPopupProject} expert={expert} setExpert={setExpert} />
      </div>
      <div className={popupProject ? 'centerPopupProject' : 'hidden'}>
        <PopupProject setPopupProject={setPopupProject} idExpert={idExpert} expert={expert} project={project} setProject={setProject} />
      </div>
    </div>
  )
}

export default ProjectExpert
