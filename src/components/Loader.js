import axios from 'axios';
import CardProjectsList from './CardProjectsList';
import { useState, useEffect } from 'react';
import './styles/Loader.css';

function Loader() {
  const [projects, setProjects] = useState([]);
  // const [lessProject, setLessProject] = useState(6);

  useEffect(() => {
    axios.get('http://localhost:4040/projects/').then((response) => {
      setProjects(response.data);
    });
  }, []);

  console.log(projects);

  // let seeLessProject = () => setLessProject(lessProject - 6);
  // useEffect(() => {
  //   seeLessProject();
  // }, [project.poScroll]);

  return (
    <div className='loader'>
      <div className='statusContainer'>
        <details>
          <summary>URGENT</summary>
          {projects && (
            <CardProjectsList
              projects={projects.filter(
                (project) => project.status === 'Urgent'
              )}
            />
          )}
        </details>
      </div>
      <div className='statusContainer'>
        <details>
          <summary>ACTIVE</summary>
          {projects && (
            <CardProjectsList
              projects={projects.filter(
                (project) => project.status === 'Active'
              )}
            />
          )}
        </details>
      </div>

      <div className='statusContainer'>
        <details>
          <summary>COMPLETED</summary>
          {projects && (
            <CardProjectsList
              projects={projects.filter(
                (project) => project.status === 'Completed'
              )}
            />
          )}
        </details>
      </div>

      <div className='statusContainer'>
        <details>
          <summary>TO BE CONFIRMED BY OUR CLIENT</summary>
          {projects && (
            <CardProjectsList
              projects={projects.filter(
                (project) => project.status === 'To be confirmed by our client'
              )}
            />
          )}
        </details>
      </div>

      <div className='statusContainer'>
        <details>
          <summary>NO</summary>
          {projects && (
            <CardProjectsList
              projects={projects.filter((project) => project.status === 'NO')}
            />
          )}
        </details>
      </div>
    </div>
  );
}

export default Loader;
