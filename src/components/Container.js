import * as React from 'react'
import axios from 'axios'
import Card from './Card'
import { useDrop } from 'react-dnd'
import { useState, useEffect } from 'react'
import './styles/Midi.css'

const Container = (props) => {
  const [answerYes, setAnswerYes] = useState()
  const [answerNo, setAnswerNo] = useState()
  const [answerWaiting, setAnswerWaiting] = useState()
  const [cardList, setCardList] = useState([])

  useEffect(() => {
    if (props.id === 1) {
      setAnswerYes()
      setAnswerYes(props.expertsProject.filter((expert) => expert.answer === 1))
    } else if (props.id === 2) {
      setAnswerNo()
      setAnswerNo(props.expertsProject.filter((expert) => expert.answer === 0))
    } else if (props.id === 3) {
      setAnswerWaiting()
      setAnswerWaiting(
        props.expertsProject.filter((expert) => expert.answer === null)
      )
    }
  }, [props.expertsProject])

  useEffect(() => {
    if (answerYes) {
      setCardList([])
      setCardList(answerYes)
    } else if (answerNo) {
      setCardList([])
      setCardList(answerNo)
    } else if (answerWaiting) {
      setCardList([])
      setCardList(answerWaiting)
    }
  }, [
    answerYes,
    answerNo,
    answerWaiting,
    props.expertsProject,
    props.changeColumn,
  ])

  const columnName = () => {
    if (props.id === 1) {
      return 'YES'
    } else if (props.id === 2) {
      return 'NO'
    } else if (props.id === 3) {
      return 'WAITING'
    }
  }

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'card',
    drop: (item) => addCardToBoard(item.id, item.index),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      endDrag: monitor.getDropResult(),
    }),
  }))

  const addCardToBoard = (id, index) => {
    let answer = undefined

    if (props.id === 1) {
      answer = 1
    } else if (props.id === 2) {
      answer = 0
    }

    let datas = {
      idProject: props.idProject,
      answer: answer,
    }

    const onPut = async () => {
      await axios
        .put(`http://localhost:4040/projexperts/${id}`, datas)
        .then((res) => {
          props.setChangeColumn(!props.changeColumn)
          return
        })
    }
    onPut()
  }

  return (
    <div
      className='column'
      ref={drop}
      role={'Dustbin'}
      style={{ backgroundColor: isOver && 'var(--scrollColor)' }}
    >
      <div className='columnHeader'>{columnName()}</div>
      {cardList.map((expert, i) => {
        return (
          <Card
            key={i}
            index={i}
            expert={expert}
            setMaxiExpert={props.setMaxiExpert}
            setIdExpert={props.setIdExpert}
            setIsAnswer={props.setIsAnswer}
            setAnswerEdit={props.setAnswerEdit}
          />
        )
      })}
    </div>
  )
}

export default Container
