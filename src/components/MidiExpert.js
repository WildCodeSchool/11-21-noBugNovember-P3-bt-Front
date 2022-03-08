import axios from 'axios'
import { useState, useEffect } from 'react'
import './styles/Midi.css'

const MidiExpert = (props) => {
  const [expert, setExpert] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4040/experts/midiexpert').then((response) => {
      setExpert(response.data)
    })
  }, [])

  console.log(expert)

  return <div></div>
}

export default MidiExpert
