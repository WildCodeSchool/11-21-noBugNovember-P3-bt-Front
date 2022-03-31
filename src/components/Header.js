import axios from 'axios'
import BTHTLogo from '../assets/BTHT-Blue_edited.webp'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './styles/Header.css'

const Header = () => {
  const [stats, setStats] = useState([])
  let margin = ((stats.DoneCA - stats.CostExperts) / stats.DoneCA) * 100

  useEffect(() => {
    axios
      .get('http://localhost:4040/stats/globalStats')
      .then((res) => res.data)
      .then((res) => setStats(res))
  }, [])

  return (
    <div className='headerContainer'>
      <NavLink to='../'>
        <img src={BTHTLogo} alt='logo_BTHT' id='headerLogo' />
      </NavLink>
      <div className='headerStatsContainer'>
        <div className='headerStats'>
          <p className='statItem'>
            <FontAwesomeIcon
              icon={faChartLine}
              size='xl'
              style={{
                color: '#373472',
                marginRight: '0.7em',
                fontSize: '20px',
              }}
            />
            {stats.ongoingProjects} Ongoing Projects
          </p>
          <p className='statItem'>€{stats.OngoingCA} Ongoing TO </p>
          <p className='statItem'>{stats.totalProjects} Projects</p>
          <p className='statItem'>{stats.totalExperts} Experts</p>
          <p className='statItem'>€{stats.DoneCA} Total TO</p>
          <p className='statItem'>€{stats.CostExperts} Total Expert Cost</p>
          <p className='statItem'>{margin.toFixed(2)} % Gross Margin</p>
        </div>
      </div>
    </div>
  )
}

export default Header
