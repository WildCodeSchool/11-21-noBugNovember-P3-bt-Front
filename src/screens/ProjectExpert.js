import MidiProject from '../components/MidiProject'
import MidiExpert from '../components/MidiExpert'
import MaxiExpert from '../components/MaxiExpert'
import PopupProject from '../components/PopupProject'
import React, { useState } from 'react'

import search from '../assets/search.svg'

import './styles/ProjectExpert.css'

const ProjectExpert = (props) => {
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
      <div className={!props.maxiExpert ? 'gridMidiExpert' : 'hidden'}>
        <MidiExpert
          setMaxiExpert={props.setMaxiExpert}
          maxiExpert={props.maxiExpert}
          setIdExpert={props.setIdExpert}
          project={project}
          popupProject={popupProject}
          idExpert={props.idExpert}
        />
      </div>
      <div
        className={
          props.maxiExpert && props.idExpert ? 'gridMaxiExpert' : 'hidden'
        }
      >
        <MaxiExpert
          idExpert={props.idExpert}
          maxiExpert={props.maxiExpert}
          setMaxiExpert={props.setMaxiExpert}
          setPopupProject={setPopupProject}
          expert={props.expert}
          setExpert={props.setExpert}
        />
      </div>
      <div className={popupProject ? 'centerPopupProject' : 'hidden'}>
        <PopupProject
          setPopupProject={setPopupProject}
          setMaxiExpert={props.setMaxiExpert}
          idExpert={props.idExpert}
          expert={props.expert}
          project={project}
          setProject={setProject}
        />
      </div>
    </div>
  )
}

export default ProjectExpert
