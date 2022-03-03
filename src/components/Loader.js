import axios from 'axios';
import CardProjectsList from './CardProjectsList';
import { useState, useEffect } from 'react';
import './styles/Loader.css';

function Loader() {
  const [project, setProject] = useState([]);
  const [projectU, setProjectU] = useState([]);
  const [projectA, setProjectA] = useState([]);
  const [projectC, setProjectC] = useState([]);
  const [projectTBC, setProjectTBC] = useState([]);
  const [projectNO, setProjectNO] = useState([]);
  // const [lessProject, setLessProject] = useState(6);

  useEffect(() => {
    axios.get('http://localhost:4242/projects/').then((response) => {
      setProject(response.data);
    });
  }, []);

  console.log(project);

  // let seeLessProject = () => setLessProject(lessProject - 6);
  // useEffect(() => {
  //   seeLessProject();
  // }, [project.poScroll]);

  return (
    <div className='loader'>
      <div className='statusContainer'>
        <details>
          <summary>URGENT</summary>
          {project && <CardProjectsList project={project} />}
        </details>
      </div>
      <div className='statusContainer'>
        <details>
          <summary>ACTIVE</summary>
          {project && <CardProjectsList project={project} />}
        </details>
      </div>

      <div className='statusContainer'>
        <details>
          <summary>COMPLETED</summary>
          {project && <CardProjectsList project={project} />}
        </details>
      </div>

      <div className='statusContainer'>
        <details>
          <summary>TO BE CONFIRMED BY OUR CLIENT</summary>
          {project && <CardProjectsList project={project} />}
        </details>
      </div>

      <div className='statusContainer'>
        <details>
          <summary>NO</summary>
          {project && <CardProjectsList project={project} />}
        </details>
      </div>
    </div>
  );
}

export default Loader;
