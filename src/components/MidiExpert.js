import axios from 'axios'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import './styles/Midi.css'
import key from '../assets/key.png'

const MidiExpert = () => {
  const [experts, setExperts] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:4040/experts')
      .then((res) => res.data)
      .then((res) => console.log('experts', res) || setExperts(res))
  }, [])

  return (
    <div className='midiExpertContainer'>
      {experts.map((expert) => (
        <div className='midiExpertCard' key={expert.id}>
          <Link to='/pageExpert'>
            <p
              style={{ fontFamily: 'Montserrat', fontWeight: '600' }}
              className='paddingMidiExpert'
            >
              Expert # {expert.numExpert}
            </p>
            <div className='separation'></div>
            <div className='paddingMidiExpert'>
              <p>
                {expert.firstname} {expert.lastname}
              </p>
              <p>{expert.jobTitleName}</p>
              <p>{expert.kindOfExpertName}</p>
              <p>{expert.languages}</p>
              <p>Current cie: {expert.companyName}</p>
              <p>Past cie: {expert.pastCompanies}</p>
              <p>
                <img src={key} alt='keywords' width='16px' /> {expert.keywords}
              </p>
              <p>Price: {expert.price}</p>
              <p>Cost: {expert.cost}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default MidiExpert
