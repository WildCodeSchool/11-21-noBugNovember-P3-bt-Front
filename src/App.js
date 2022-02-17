import { Routes, Route } from "react-router-dom";
import "./App.css";
import Clients from "./screens/Clients";
import Experts from "./screens/Experts";
import Login from "./screens/Login";
import Projects from "./screens/Projects";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
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
