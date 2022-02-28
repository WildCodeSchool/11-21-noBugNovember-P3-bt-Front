import CardsProjects from './CardsProjects'
import { useState, useEffect } from 'react'
import './styles/CardProjectsList.css'
import axios from 'axios'

const CardProjectsList = () => {
  const [project, setProject] = useState([])
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
    <div className='containerGallery'>
      <div className='cardsDisplay'>
        {project.map((project) => (
          <CardsProjects
            id={project.id}
            named={project.name}
            released={project.released}
            rating={project.rating}
            satured_color={project.satured_color}
            dominant_color={project.dominant_color}
          />
        ))}
      </div>
      <div className='voirPlusContainer'>
        <div className='trait'></div>
        <div className='voirPlus'>Voir plus</div>
        <div className='trait'></div>
      </div>
    </div>
  )
}
export default CardProjectsList
