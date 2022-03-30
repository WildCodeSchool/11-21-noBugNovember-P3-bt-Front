import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./components/styles/Header.css";
import "./components/styles/Navbar.css";
import Clients from "./screens/Clients";
import Experts from "./screens/Experts";
import Header from "./components/Header";
import Login from "./screens/Login";
import MaxiProjectExpert from "./screens/MaxiProjectExpert";
import Navbar from "./components/Navbar";
import PageClient from "./screens/PageClient";
import PageClientEdit from "./screens/PageClientEdit";
import PageExpert from "./screens/PageExpert";
import PageExpertEdit from "./screens/PageExpertEdit";
import PageProject from "./screens/PageProject";
import PageProjectEdit from "./screens/PageProjectEdit";
import Project from "./screens/Project";
import ProjectExpert from "./screens/ProjectExpert";

function App() {
  const [expert, setExpert] = useState([]);
  const [idExpert, setIdExpert] = useState();
  const [maxiExpert, setMaxiExpert] = useState(false);
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/clients" element={<Clients />} />
        <Route path="/experts" element={<Experts />} />
        <Route path="/pageExpert" element={<PageExpert />} />
        <Route path="/pageExpertEdit/:id" element={<PageExpertEdit />} />
        <Route path="/pageClient" element={<PageClient />} />
        <Route path="/pageClientEdit/:id" element={<PageClientEdit />} />
        <Route path="/pageProject" element={<PageProject />} />
        <Route
          path="/projectexpert/:id"
          element={
            <ProjectExpert
              idExpert={idExpert}
              setIdExpert={setIdExpert}
              maxiExpert={maxiExpert}
              setMaxiExpert={setMaxiExpert}
              expert={expert}
              setExpert={setExpert}
            />
          }
        />
        <Route
          path="/maxiProjectExpert/:id"
          element={
            <MaxiProjectExpert
              idExpert={idExpert}
              setIdExpert={setIdExpert}
              maxiExpert={maxiExpert}
              setMaxiExpert={setMaxiExpert}
              expert={expert}
              setExpert={setExpert}
            />
          }
        />
        <Route path="/pageProjectEdit/:id" element={<PageProjectEdit />} />
        <Route path="/" element={<Login />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
