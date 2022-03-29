import { Routes, Route } from 'react-router-dom'
import './App.css'
import './components/styles/Header.css'
import './components/styles/Navbar.css'
import Clients from './screens/Clients'
import Experts from './screens/Experts'
import Header from './components/Header'
import Login from './screens/Login'
import MaxiProjectExpert from './screens/MaxiProjectExpert'
import Navbar from './components/Navbar'
import PageClient from './screens/PageClient'
import PageExpert from './screens/PageExpert'
import PageExpertEdit from './screens/PageExpertEdit'
import PageProject from './screens/PageProject'
import Project from './screens/Project'
import ProjectExpert from './screens/ProjectExpert'
import Protected from './screens/Protected'

function App() {
  return (
    <div className='App'>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route
          path='/clients'
          element={
            <Protected>
              <Clients />
            </Protected>
          }
        />
        <Route
          path='/experts'
          element={
            <Protected>
              <Experts />
            </Protected>
          }
        />
        <Route path='/pageExpert' element={<PageExpert />} />
        <Route path='/pageExpertEdit/:id' element={<PageExpertEdit />} />
        <Route path='/maxiProjectExpert/:id' element={<MaxiProjectExpert />} />
        <Route path='/pageClient' element={<PageClient />} />
        <Route path='/pageProject' element={<PageProject />} />
        <Route
          path='/projects'
          element={
            <Protected>
              <Project />
            </Protected>
          }
        />
        <Route path='/projectexpert/:id' element={<ProjectExpert />} />
      </Routes>
    </div>
  )
}

export default App
