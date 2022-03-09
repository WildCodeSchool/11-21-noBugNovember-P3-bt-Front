import ButtonAddProject from '../components/ButtonAddProject'
import Loader from '../components/Loader'
import './styles/Project.css'

const Project = (props) => {
  return (
    <div
      className={
        props.isOpened ? 'projectContainerNavOpen' : 'projectContainerNavClose'
      }
    >
      <ButtonAddProject />
      <Loader />
    </div>
  )
}

export default Project
