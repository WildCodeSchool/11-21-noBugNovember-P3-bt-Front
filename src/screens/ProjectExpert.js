import MidiProject from '../components/MidiProject'
import MidiExpert from '../components/MidiExpert'
import MaxiExpert from '../components/MaxiExpert'
import PopupProject from '../components/PopupProject'
import React, { useState } from 'react'

import './styles/ProjectExpert.css'
import FilterExpert from '../components/FilterExpert'


const ProjectExpert = (props) => {
  const [experts, setExperts] = useState([])
  const [popupProject, setPopupProject] = useState(false)
  const [project, setProject] = useState([])

  return (
    <div className='projectExpertContainer'>
      <FilterExpert 
      experts={experts} setExperts={setExperts} 
      /> 
          
      <div className='gridMidiProject'>
        <MidiProject project={project} setProject={setProject} />
      </div>
      <div className={!props.maxiExpert ? 'gridMidiExpert' : 'hidden'}>
        <MidiExpert
          experts={experts} setExperts={setExperts}
          setMaxiExpert={props.setMaxiExpert}
          maxiExpert={props.maxiExpert}
          setIdExpert={props.setIdExpert}
          project={project}
          popupProject={popupProject}
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
