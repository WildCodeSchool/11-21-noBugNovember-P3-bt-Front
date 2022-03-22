import * as React from 'react'
// import { DragDropContext } from 'react-beautiful-dnd'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import MaxiProject from '../components/MaxiProject'
import AnswerExpert from '../components/AnswerExpert'

import './styles/ProjectExpert.css'

const MaxiProjectExpert = (props) => {
  const { id } = useParams()
  const [projectMaxi, setProjectMaxi] = useState([])

  console.log(projectMaxi, setProjectMaxi)

  return (
    <div className='maxiProjectExpertContainer'>
      <MaxiProject
        projectMaxi={projectMaxi}
        setProjectMaxi={setProjectMaxi}
        id={id}
      />
      <AnswerExpert id={id} />
    </div>
  )
}

export default MaxiProjectExpert
