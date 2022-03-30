import * as React from 'react'
import AnswerEdit from '../components/AnswerEdit'
import AnswerExpert from '../components/AnswerExpert'
import MaxiExpert from '../components/MaxiExpert'
import MaxiProject from '../components/MaxiProject'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './styles/ProjectExpert.css'

const MaxiProjectExpert = (props) => {
  const { id } = useParams()
  const [projectMaxi, setProjectMaxi] = useState([])
  const [isAnswer, setIsAnswer] = useState(true)
  const [answerEdit, setAnswerEdit] = useState(false)
  const [changeColumn, setChangeColumn] = useState(false)
  const [expertsProject, setExpertsProject] = useState([])
  const [trueFalse, setTrueFalse] = useState(false)

  useEffect(() => {
    setTrueFalse(!trueFalse)
  }, [expertsProject])

  return (
    <div className='maxiProjectExpertContainer'>
      <div className='gridMaxiProject'>
        <MaxiProject
          projectMaxi={projectMaxi}
          setProjectMaxi={setProjectMaxi}
          setMaxiExpert={props.setMaxiExpert}
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
          answerEdit={answerEdit}
          idProject={id}
          changeColumn={changeColumn}
          setChangeColumn={setChangeColumn}
          expertsProject={expertsProject}
          setExpertsProject={setExpertsProject}
          trueFalse={trueFalse}
          setTrueFalse={setTrueFalse}
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
        {answerEdit && (
          <AnswerEdit
            setAnswerEdit={setAnswerEdit}
            answerEdit={answerEdit}
            idExpert={props.idExpert}
            idProject={id}
          />
        )}
      </div>
    </div>
  )
}

export default MaxiProjectExpert
