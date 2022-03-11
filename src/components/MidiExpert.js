import axios from 'axios'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import './styles/Midi.css'
import key from '../assets/key.png'
import price from '../assets/price.png'

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
            <p style={{ fontFamily: 'Montserrat', fontWeight: '600' }} className='paddingMidiExpert'>
              Expert # {expert.numExpert}
            </p>
            <div className='separation'></div>
            <ul className= 'infoExpert' >
              <div className= 'part1'>
                <li>{expert.firstname} {expert.lastname}</li>
                <li>{expert.jobTitleName}</li>
                <li>{expert.industry}</li>
                <li>{expert.kindOfExpertName}</li>
                <li>{expert.languages}</li>
              </div>
              <div className= 'part2'>
                <li> 
                  <p style={{fontWeight: '600' }} > Current cie </p> 
                  <p >{expert.companyName} </p> 
                </li>
                <li> 
                  <p style={{fontWeight: '600' }} > Past cie </p> 
                  <p >{expert.pastCompanies} </p> 
                </li>
                <li>
                  <p style={{fontWeight: '600' }} > Keywords
                    {/* <img src={key} alt='keywords' width='16px' /> */}
                    </p>
                  <p > {expert.keywords}</p>
                </li>
                <li> 
                  <p style={{fontWeight: '600' }} > Price
                    {/* <img src={price} alt='price' width='17px' /> */}
                  </p>
                  <p >{expert.price}€ </p> 
                </li>
                <li> 
                  <p > 💸 </p><p > {expert.cost}€ </p>
                </li>
              </div>
            </ul>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default MidiExpert
