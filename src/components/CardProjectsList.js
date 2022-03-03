import CardsProjects from './CardsProjects';
import './styles/CardProjectsList.css';
import Box from '@mui/material/Box';

const CardProjectsList = (props) => {
  console.log(props);

  return (
    <div className='containerGallery'>
      <div className='cardsDisplay'>
        {props.project.map((project) => (
          <CardsProjects key={project.id} {...project} />
        ))}
      </div>
      <div className='voirPlusContainer'>
        <div className='trait'></div>
        <div className='voirPlus'>Voir plus</div>

        <div className='trait'></div>
      </div>
    </div>
  );
};
export default CardProjectsList;
