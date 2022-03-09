import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./components/styles/Header.css";
import "./components/styles/Navbar.css";
import Clients from "./screens/Clients";
import Experts from "./screens/Experts";
import Login from "./screens/Login";
import Project from "./screens/Project";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import PageExpert from "./screens/PageExpert";
import PageExpertEdit from "./screens/PageExpertEdit";
import ProjectExpert from "./screens/ProjectExpert";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/clients" element={<Clients />} />
        <Route path="/experts" element={<Experts />} />
        <Route path="/pageExpert" element={<PageExpert />} />
        <Route path="/pageExpertEdit/:id" element={<PageExpertEdit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/projectexpert" element={<ProjectExpert />} />
      </Routes>
    </div>
  );
}

export default App;
