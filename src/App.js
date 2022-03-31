import React, { useState, useEffect } from 'react'
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
import PageClientEdit from './screens/PageClientEdit'
import PageExpert from './screens/PageExpert'
import PageExpertEdit from './screens/PageExpertEdit'
import PageProject from './screens/PageProject'
import PageProjectEdit from './screens/PageProjectEdit'
import Project from './screens/Project'
import ProjectExpert from './screens/ProjectExpert'
import Creation from './screens/Creation'
import Protected from './screens/Protected'
import { useNavigate } from 'react-router-dom'

function App() {
  const [expert, setExpert] = useState([])
  const [idExpert, setIdExpert] = useState()
  const [maxiExpert, setMaxiExpert] = useState(false)
  const [auth, setAuth] = useState(false)
  let navigate = useNavigate()

  useEffect(() => {
    console.log('coucou')
    if (localStorage.getItem('token') !== null) {
      setAuth(true)
      navigate('/projects')
    } else {
      setAuth(false)
    }
  }, [localStorage.getItem('token')])
  // useEffect(() => {}, [auth])
  return auth ? (
    <div className='App'>
      <Header />
      <Navbar />
      {/* <Protected>
        <Header />
        <Navbar />
      </Protected> */}
      <Routes>
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
        <Route path='/creation' element={<Creation />} />
        <Route path='/pageClient' element={<PageClient />} />
        <Route path='/pageClientEdit/:id' element={<PageClientEdit />} />

        <Route path='/pageProject' element={<PageProject />} />
        <Route
          path='/projectexpert/:id'
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
          path='/maxiProjectExpert/:id'
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
        <Route path='/pageProjectEdit/:id' element={<PageProjectEdit />} />
        <Route path='/' element={<Login />} />
        <Route path='/creation' element={<Creation />} />
        <Route
          path='/projects'
          element={
            <Protected>
              <Project />
            </Protected>
          }
        />
      </Routes>
    </div>
  ) : (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/creation' element={<Creation />} />
      </Routes>
    </>
  )
}

export default App
