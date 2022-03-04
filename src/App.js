import { Routes, Route } from 'react-router-dom';
import './App.css';
import './components/styles/Header.css';
import './components/styles/Navbar.css';
import Clients from './screens/Clients';
import Experts from './screens/Experts';
import Login from './screens/Login';
import Project from './screens/Project';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className='App'>
      <Header />
      <Navbar isOpened={isOpened} setIsOpened={setIsOpened} />
      <Routes>
        <Route path='/clients' element={<Clients isOpened={isOpened} />} />
        <Route path='/experts' element={<Experts />} />
        <Route path='/login' element={<Login />} />
        <Route path='/projects' element={<Project isOpened={isOpened} />} />
      </Routes>
    </div>
  );
}

export default App;
