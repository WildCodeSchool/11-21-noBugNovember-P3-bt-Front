import './styles/ProjectExpert.css'
import MidiProject from '../components/MidiProject'
import MidiExpert from '../components/MidiExpert'

const ProjectExpert = (props) => {
  return (
    <div className='projectExpertContainer'>
      <MidiProject className='midiProject' />
      <MidiExpert />
    </div>
  )
}

export default ProjectExpert
