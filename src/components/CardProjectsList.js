import CardsProjects from './CardsProjects'
import './styles/CardProjectsList.css'

const CardProjectsList = (props) => {


  return (
    <div className='containerGallery'>
      <div className='cardsDisplay'>
        {props.project.map((project) => (
          <CardsProjects
            // id={project.id}
            numProjects={project.numProjects}
            projectTitle={project.projectTitle}
            totalPrice={project.totalPrice}
            status={project.status}
            projectType={project.projectType}
            itwStart={project.itwStart}
            itwDeadline={project.itwDeadline}
            quantityExpert={project.quantityExpert}
            kindOfExpert={project.kindOfExpert}
            practice={project.practice}
            industry={project.industry}
            recommand_company={project.recommand_company}
            exclude_company={project.exclude_company}
            jobTitle={project.projectType}
            fonction={project.fonction}
            expertiseLevelName={project.expertiseLevelName}
            geoExpertise={project.geoExpertise}
            languages={project.languages}
            linkedin={project.linkedin}
            clientComment={project.clientComment}
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
