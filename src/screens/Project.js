import ButtonAddProject from '../components/ButtonAddProject'
import Loader from '../components/Loader'
import { useState } from 'react'
import './styles/Project.css'

const Project = () => {
  const [reloadProjects, setReloadProjects] = useState(true)
  return (
    <div className='projectContainer'>
      <ButtonAddProject />
      <Loader reloadProjects={reloadProjects} />
    </div>
  )
}

export default Project
