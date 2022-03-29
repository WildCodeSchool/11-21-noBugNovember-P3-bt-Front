import BTHTLogo from '../assets/BTHT-Blue_edited.webp'
import GraphLogo from '../assets/GraphLogo.png'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import './styles/Header.css'

const Header = () => {
  const [stats, setStats] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:4040/stats/globalStats')
      .then((res) => res.data)
      .then((res) => setStats(res))
  }, [])

  return (
    <div className='headerContainer'>
      <img src={BTHTLogo} alt='logo_BTHT' id='headerLogo' />
      <div className='headerStatsContainer'>
        {/* <img src={GraphLogo} alt="graph_logo" id="headerGraphLogo" /> */}
        <div className='headerStats'>
          <p className='statItem'>
            <FontAwesomeIcon
              icon={faChartLine}
              // className="navbarLinkLogo"
              size='xl'
              style={{
                color: '#373472',
                marginRight: '0.7em',
                fontSize: '20px',
              }}
            />
            {stats.ongoingProjects} Ongoing Projects
          </p>
          <p className='statItem'>${stats.OngoingCA} Ongoing CA </p>
          {/* <p className="statItem">{stats.doneprojects} Done Projects</p> */}
          <p className='statItem'>{stats.totalProjects} Projects</p>
          <p className='statItem'>{stats.totalExperts} Experts</p>
          <p className='statItem'>{stats.DoneCA} CA</p>
          {/* <p className="statItem">
            {stats.expertsWorked} Participating Experts
          </p> */}
          {/* <p className="statItem">{stats.totalClients} Clients</p> */}
          <p className='statItem'>${stats.CostExperts} Experts Cost</p>
        </div>
      </div>
    </div>
  )
}

export default Header
