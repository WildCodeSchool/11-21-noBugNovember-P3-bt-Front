import CardsProjects from './CardsProjects';
import useState from 'react';
import './styles/CardProjectsList.css';
import Box from '@mui/material/Box';

const CardProjectsList = (props) => {
  console.log(props);
  // const [moreProjects, setMoreProjects] = useState(4);

  // const seeMoreProjects = () => {
  //   setMoreProjects(moreProjects + 4);
  // };

  return (
    <div className='containerGallery'>
      <div className='cardsDisplay'>
        {props.projects.map((project) => (
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
