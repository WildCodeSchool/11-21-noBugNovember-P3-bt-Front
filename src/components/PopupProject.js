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
      <div className='buttonAjoutContainer'>
        <button className='smallButton' onClick={onSubmit}>
          Yes
        </button>
        <button
          className='smallButton'
          onClick={() => props.setPopupProject(false)}
        >
          No
        </button>
      </div>
    </div>
  )
}

export default PopupProject
