import ButtonAddProject from '../components/ButtonAddProject';
import Loader from '../components/Loader';
import './styles/Project.css';

const Project = (props) => {
  return (
    <div className='projectContainerOpen'>
      <ButtonAddProject />
      <Loader />
    </div>
  );
};

export default Project;
