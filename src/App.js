import { Routes, Route } from 'react-router-dom'
import './App.css'
import './components/styles/Header.css'
import './components/styles/Navbar.css'
import Clients from './screens/Clients'
import Experts from './screens/Experts'
import Login from './screens/Login'
import PageExpert from './screens/PageExpert'
import Project from './screens/Project'
import ProjectExpert from './screens/ProjectExpert'
import Header from './components/Header'
import Navbar from './components/Navbar'
import { useState } from 'react'


function App() {
  const [isOpened, setIsOpened] = useState(false)
  return (
    <div className="App">
      <Header />
      <Navbar isOpened={isOpened} setIsOpened={setIsOpened} />
      <Routes>
        <Route path="/experts" element={<Experts />} />
        <Route path="/pageExpert" element={<PageExpert />} />
        <Route path="/login" element={<Login />} />
        <Route path='/clients' element={<Clients isOpened={isOpened} />} />
        <Route path='/projects' element={<Project isOpened={isOpened} />} />
        <Route path='/projectexpert' element={<ProjectExpert />} />
      </Routes>
    </div>
  )
}

export default App
