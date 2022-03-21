import * as React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

import './styles/Midi.css'

const AnswerExpert = (props) => {
  const [expertsProject, setExpertsProject] = useState([])
  useEffect(() => {
    axios
      .get(`http://localhost:4040/projects/experts/${props.id}`)
      .then((res) => res.data)
      .then((res) => console.log('experts', res) || setExpertsProject(res))
  }, [])

  console.log(expertsProject)

  return (
    <div className='midiExpertContainer'>
      {expertsProject.map((expert) => (
        <div className={expert.projects_id && expert.projects_id.includes(props.project.id) ? 'checkExpert midiExpertCard' : 'midiExpertCard'} key={expert.id}>
          <p style={{ fontFamily: 'Montserrat', fontWeight: '600' }} className='paddingMidiExpert'>
            Expert # {expert.numExpert}
          </p>
          <div className='separation'></div>
          <ul className='infoExpert'>
            <div className='part1'>
              <li>
                {expert.firstname} {expert.lastname}
              </li>
              <li>{expert.jobTitleName}</li>
              <li>{expert.industry}</li>
              <li>{expert.kindOfExpertName}</li>
              <li>{expert.languages}</li>
            </div>
            <div className='part2'>
              <li>
                <p style={{ fontWeight: '600' }}> Current cie </p>
                <p>{expert.companyName} </p>
              </li>
              <li>
                <p style={{ fontWeight: '600' }}> Past cie </p>
                <p>{expert.pastCompanies} </p>
              </li>
              <li>
                <p style={{ fontWeight: '600' }}>
                  {' '}
                  Keywords
                  {/* <img src={key} alt='keywords' width='16px' /> */}
                </p>
                <p> {expert.keywords}</p>
              </li>
              <li>
                <p style={{ fontWeight: '600' }}>
                  {' '}
                  Price
                  {/* <img src={price} alt='price' width='17px' /> */}
                </p>
                <p>{expert.price}€ </p>
              </li>
              <li>
                <p> 💸 </p>
                <p> {expert.cost}€ </p>
              </li>
            </div>
          </ul>
        </div>
      ))}
    </div>
  )
}

export default AnswerExpert
