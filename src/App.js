import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./components/styles/Header.css";
import "./components/styles/Navbar.css";
import Clients from "./screens/Clients";
import Experts from "./screens/Experts";
import Login from "./screens/Login";
import Projects from "./screens/Projects";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/clients" element={<Clients />} />
        <Route path="/experts" element={<Experts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
