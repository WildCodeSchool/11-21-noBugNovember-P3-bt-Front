import axios from 'axios'
import './styles/Midi.css'

const PopupProject = (props) => {
  const onSubmit = async () => {
    props.setPopupProject(false)
    await axios.post('http://localhost:4040/projexperts/', {
      expert_id: props.expert.id,
      project_id: props.project.id,
    })
    props.setMaxiExpert(false)
  }

  return (
    <div className='popupProject'>
      <p>
        Do you really want to add {props.expert.lastname}{' '}
        {props.expert.firstname} to {props.project.numProject} ?
      </p>
      <button className='buttonAjout maxiButton' onClick={onSubmit}>
        YES
      </button>
      <button
        className='buttonAjout maxiButton'
        onClick={() => props.setPopupProject(false)}
      >
        NO
      </button>
    </div>
  )
}

export default PopupProject
