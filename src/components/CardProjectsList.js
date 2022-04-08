import CardsProjects from './CardsProjects'
import './styles/CardProjectsList.css'

const CardProjectsList = (props) => {
  return (
    <div className='containerGallery'>
      <div className='cardsDisplay'>
        {props.projects.map((project) => (
          <CardsProjects key={project.id} {...project} />
        ))}
      </div>
    </div>
  )
}
export default CardProjectsList
