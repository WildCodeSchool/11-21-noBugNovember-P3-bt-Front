import ButtonAddProject from './ButtonAddProject'
import Loader from '../components/Loader'
import { Link } from 'react-router-dom'

const Project = () => {
  return (
    <>
      <ButtonAddProject />
      <Link to='/pageProjects'>Ajouter</Link>
      <Loader />
    </>
  )
}

export default Project
