import axios from 'axios'
import React, { useEffect } from 'react'
import './styles/Midi.css'

const MidiExpert = (props) => {
  useEffect(() => {
    axios
      .get('http://localhost:4040/experts')
      .then((res) => res.data)
      .then((res) => props.setExperts(res))
  }, [props.popupProject, props.maxiExpert])

  const maxiExpert = (id) => {
    props.setMaxiExpert(true)
    props.setIdExpert(id)
  }

  return (
    <div className='midiExpertContainer'>
      {props.experts.map((expert) => (
        <div
          className={`midiExpertCard
          ${
            expert.projects_id &&
            expert.projects_id.split(', ').includes(`${props.project.id}`)
              ? 'checkExpert'
              : ''
          }
          `}
          key={expert.id}
          onClick={() => maxiExpert(expert.id)}
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
              <li>{expert.jobTitleName}</li>
              {/* kOE = Category */}
              <li>{expert.kindOfExpertName}</li>
              <li>{expert.industry}</li>
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
                <p style={{ fontWeight: '600' }}>Keywords</p>
                <p> {expert.keywords}</p>
              </li>
              <li>
                <p style={{ fontWeight: '600' }}>Hourly Rate</p>
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

export default MidiExpert
