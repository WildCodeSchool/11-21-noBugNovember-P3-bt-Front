import './styles/ButtonAddProject.css'
import { Link } from 'react-router-dom'

const ButtonAddProject = () => {
  return (
    <div className='adminHome'>
      <Link to='/pageProjects'>
        <button className='buttonAjout'>+ Add new project</button>
      </Link>
    </div>
  )
}
export default ButtonAddProject
