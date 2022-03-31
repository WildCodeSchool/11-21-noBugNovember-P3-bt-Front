import axios from "axios";
import CardProjectsList from "./CardProjectsList";
import { useState, useEffect } from "react";
import "./styles/Loader.css";

function Loader() {
  const [projects, setProjects] = useState([]);
  const [projectsU, setProjectsU] = useState(false);
  const [projectsA, setProjectsA] = useState(false);
  const [projectsC, setProjectsC] = useState(false);
  const [projectsTBC, setProjectsTBC] = useState(false);
  const [projectsNO, setProjectsNO] = useState(false);
  // const [lessProject, setLessProject] = useState(6);

  useEffect(() => {
    axios.get("http://localhost:4040/projects/minicard").then((response) => {
      setProjects(response.data);
    });
  }, []);

  return (
    <div className="loader">
      <div className="statusContainer">
        <details onToggle={() => setProjectsU(!projectsU)} open>
          <summary>URGENT</summary>
          {projectsU && (
            <CardProjectsList
              projects={projects.filter(
                (project) => project.status === "Urgent"
              )}
            />
          )}
        </details>
      </div>

      <div className="statusContainer">
        <details onToggle={() => setProjectsA(!projectsA)}>
          <summary>ACTIVE</summary>
          {projectsA && (
            <CardProjectsList
              projects={projects.filter(
                (project) => project.status === "Active"
              )}
            />
          )}
        </details>
      </div>

      <div className="statusContainer">
        <details onToggle={() => setProjectsC(!projectsC)}>
          <summary>COMPLETED</summary>
          {projectsC && (
            <CardProjectsList
              projects={projects.filter(
                (project) => project.status === "Completed"
              )}
            />
          )}
        </details>
      </div>

      <div className="statusContainer">
        <details onToggle={() => setProjectsTBC(!projectsTBC)}>
          <summary>TO BE CONFIRMED</summary>
          {projectsTBC && (
            <CardProjectsList
              projects={projects.filter(
                (project) => project.status === "To be confirmed by our client"
              )}
            />
          )}
        </details>
      </div>

      {/* <div className='statusContainer'>
        <details onToggle={() => setProjectsNO(!projectsNO)}>
          <summary>SANS STATUS</summary>
          {projectsNO && (
            <CardProjectsList
              projects={projects.filter((project) => project.status === 'NO')}
            />
          )}
        </details>
      </div> */}
    </div>
  );
}

export default Loader;
