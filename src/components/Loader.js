import CardProjectsList from './CardProjectsList'
import './styles/Loader.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Loader() {
  const [project, setProject] = useState([])
  const [projectU, setProjectU] = useState([])
  const [projectA, setProjectA] = useState([])
  const [projectC, setProjectC] = useState([])
  const [projectTBC, setProjectTBC] = useState([])
  const [projectNO, setProjectNO] = useState([])
  // const [lessProject, setLessProject] = useState(6);

  useEffect(() => {
    axios.get('http://localhost:4242/projects/').then((response) => {
      setProject(response.data)
    })
  }, [])

  console.log(project)

  // let seeLessProject = () => setLessProject(lessProject - 6);
  // useEffect(() => {
  //   seeLessProject();
  // }, [project.poScroll]);

  return (
    <div className='loader'>
      <div className='urgentcontainer'>
        <details>
          <summary>URGENT</summary>
          <CardProjectsList />
        </details>
      </div>
      <div className='urgentcontainer'>
        <details>
          <summary>ACTIVE</summary>
          <CardProjectsList />
        </details>
      </div>

      <div className='completed'>
        <details>
          <summary>COMPLETED</summary>
          <CardProjectsList />
        </details>
      </div>

      <div className='tbeConfirmed'>
        <details>
          <summary>TO BE CONFIRMED BY OUR CLIENT</summary>
          <CardProjectsList />
        </details>
      </div>

      <div className='completed'>
        <details>
          <summary>NO</summary>
          <CardProjectsList />
        </details>
      </div>
    </div>
  )
}

export default Loader
