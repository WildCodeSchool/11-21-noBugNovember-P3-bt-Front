import * as React from 'react'
import axios from 'axios'
import Container from './Container'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useEffect } from 'react'
import './styles/Midi.css'

const AnswerExpert = (props) => {
  useEffect(() => {
    const getDatas = () => {
      axios
        .get(`http://localhost:4040/projexperts/${props.id}`)
        .then((res) => res.data)
        .then((res) => props.setExpertsProject(res))
    }
    getDatas()
  }, [props.answerEdit, props.changeColumn])

  useEffect(() => {
    props.setChangeColumn(!props.setChangeColumn)
  }, [props.expertsProject])

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <div className='dragDropZone'>
          <Container
            id={1}
            expertsProject={props.expertsProject}
            setMaxiExpert={props.setMaxiExpert}
            setIdExpert={props.setIdExpert}
            setIsAnswer={props.setIsAnswer}
            setAnswerEdit={props.setAnswerEdit}
            idProject={props.idProject}
            changeColumn={props.changeColumn}
            setChangeColumn={props.setChangeColumn}
            setTrueFalse={props.setTrueFalse}
            trueFalse={props.trueFalse}
          />
          <Container
            id={2}
            expertsProject={props.expertsProject}
            setMaxiExpert={props.setMaxiExpert}
            setIdExpert={props.setIdExpert}
            setIsAnswer={props.setIsAnswer}
            setAnswerEdit={props.setAnswerEdit}
            idProject={props.idProject}
            changeColumn={props.changeColumn}
            setChangeColumn={props.setChangeColumn}
            setTrueFalse={props.setTrueFalse}
            trueFalse={props.trueFalse}
          />
          <Container
            id={3}
            expertsProject={props.expertsProject}
            setMaxiExpert={props.setMaxiExpert}
            setIdExpert={props.setIdExpert}
            setIsAnswer={props.setIsAnswer}
            setAnswerEdit={props.setAnswerEdit}
            idProject={props.idProject}
            changeColumn={props.changeColumn}
            setChangeColumn={props.setChangeColumn}
            setTrueFalse={props.setTrueFalse}
            trueFalse={props.trueFalse}
          />
        </div>
      </div>
    </DndProvider>
  )
}

export default AnswerExpert
