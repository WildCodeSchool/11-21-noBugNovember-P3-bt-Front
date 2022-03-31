import { Link } from 'react-router-dom'
import './styles/ButtonAddProject.css'

const ButtonAddProject = () => {
  return (
    <div className='adminHome'>
      <Link to='/pageProject'>
        <button className='buttonAjout'>ADD</button>
      </Link>
    </div>
  )
}
export default ButtonAddProject
