import ButtonAddProject from '../components/ButtonAddProject'
import Loader from '../components/Loader'
import './styles/Project.css'

const Project = () => {
  return (
    <div className='projectContainer'>
      <ButtonAddProject />
      <Loader />
    </div>
  )
}

export default Project
