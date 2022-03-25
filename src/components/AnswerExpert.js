import * as React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

import './styles/Midi.css'

const AnswerExpert = (props) => {
  const [expertsProject, setExpertsProject] = useState([])
  useEffect(() => {
    axios
      .get(`http://localhost:4040/projexperts/${props.id}`)
      .then((res) => res.data)
      .then((res) => console.log('experts', res) || setExpertsProject(res))
  }, [props.answerEdit])

  const maxiExpert = (id) => {
    props.setMaxiExpert(true)
    props.setIdExpert(id)
    props.setIsAnswer(true)
  }

  const answerEdit = (id) => {
    props.setAnswerEdit(true)
    props.setIdExpert(id)
  }

  console.log(props)

  return (
    <div className='midiExpertContainer'>
      {expertsProject.map((expert) => (
        <div
          className={
            expert.projects_id && expert.projects_id.includes(props.project.id)
              ? 'checkExpert midiExpertCard'
              : 'midiExpertCard answerCard'
          }
          key={expert.id}
        >
          <p
            style={{ fontFamily: 'Montserrat', fontWeight: '600' }}
            className='paddingMidiExpert'
          >
            Expert # {expert.numExpert}
          </p>
          <div className='separation'></div>
          <ul className='infoExpert'>
            <div className='part1'>
              <li>
                {expert.firstname} {expert.lastname}
              </li>
            </div>
            <div className='part2'>
              <li>
                <p style={{ fontWeight: '600' }}> Job Title </p>
                <p>{expert.jobTitleName}</p>
              </li>

              <li>
                <p style={{ fontWeight: '600' }}> Industry </p>
                <p>{expert.industry}</p>
              </li>

              <li>
                <p style={{ fontWeight: '600' }}> Type </p>
                <p>{expert.kindOfExpertName}</p>
              </li>
              <li>
                <p style={{ fontWeight: '600' }}> Languages </p>
                <p>{expert.languages}</p>
              </li>
              <li>
                <p style={{ fontWeight: '600' }}> Current cie </p>
                <p>{expert.companyName} </p>
              </li>
              <li>
                <p style={{ fontWeight: '600' }}> Past cie </p>
                <p>{expert.pastCompanies} </p>
              </li>
              <li>
                <p style={{ fontWeight: '600' }}>Keywords</p>
                <p> {expert.keywords}</p>
              </li>
              <li>
                <p style={{ fontWeight: '600' }}>Price</p>
                <p>{expert.price}€ </p>
              </li>
              <li>
                <p> 💸 </p>
                <p> {expert.cost}€ </p>
              </li>
              <li>
                <p style={{ fontWeight: '600' }}>Answer</p>
                <p>
                  {expert.answer !== null
                    ? expert.answer === 1
                      ? 'Yes'
                      : 'No'
                    : 'Waiting'}
                </p>
              </li>
              <li>
                <p style={{ fontWeight: '600' }}>Factu</p>
                <p>{expert.factuByExpert}€ </p>
              </li>
              <li>
                <p style={{ fontWeight: '600' }}>Itw Day</p>
                <p>{expert.preferedItwDay}</p>
              </li>
            </div>
          </ul>
          <div className='buttonAjoutContainer'>
            <div>
              <button
                className='buttonAjout maxiButton'
                onClick={() => maxiExpert(expert.id)}
              >
                MORE
              </button>
            </div>
            <div>
              <button
                className='buttonAjout maxiButton'
                onClick={() => answerEdit(expert.id)}
              >
                EDIT
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnswerExpert
