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
        Confirm you want to add {props.expert.lastname} {props.expert.firstname}{' '}
        to {props.project.numProject}
      </p>
      <button onClick={onSubmit}>Confirm</button>
      <button onClick={() => props.setPopupProject(false)}>Cancel</button>
    </div>
  )
}

export default PopupProject
