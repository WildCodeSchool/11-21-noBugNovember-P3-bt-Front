import * as React from 'react'
// import { DragDropContext } from 'react-beautiful-dnd'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import MaxiExpert from '../components/MaxiExpert'
import MaxiProject from '../components/MaxiProject'
import AnswerExpert from '../components/AnswerExpert'
import AnswerEdit from '../components/AnswerEdit'

import './styles/ProjectExpert.css'

const MaxiProjectExpert = (props) => {
  const { id } = useParams()
  const [projectMaxi, setProjectMaxi] = useState([])
  const [isAnswer, setIsAnswer] = useState(false)
  const [answerEdit, setAnswerEdit] = useState(true)

  console.log(projectMaxi, setProjectMaxi)

  return (
    <div className='maxiProjectExpertContainer'>
      <div className='gridMaxiProject'>
        <MaxiProject
          projectMaxi={projectMaxi}
          setProjectMaxi={setProjectMaxi}
          id={id}
        />
      </div>
      <div className={!props.maxiExpert ? 'gridSmallAnswer' : 'hidden'}>
        <AnswerExpert
          id={id}
          idExpert={props.idExpert}
          setIdExpert={props.setIdExpert}
          maxiExpert={props.maxiExpert}
          setMaxiExpert={props.setMaxiExpert}
          expert={props.expert}
          setExpert={props.setExpert}
          setIsAnswer={setIsAnswer}
          setAnswerEdit={setAnswerEdit}
        />
      </div>
      <div
        className={
          props.maxiExpert && props.idExpert ? 'gridBigAnswer' : 'hidden'
        }
      >
        <MaxiExpert
          idExpert={props.idExpert}
          maxiExpert={props.maxiExpert}
          setMaxiExpert={props.setMaxiExpert}
          expert={props.expert}
          setExpert={props.setExpert}
          isAnswer={isAnswer}
        />
      </div>
      <div className={answerEdit ? 'answerEdit' : 'hidden'}>
        <AnswerEdit />
      </div>
    </div>
  )
}

export default MaxiProjectExpert
