import { useState } from 'react'
import TabExperts from '../components/TabExperts'
import './styles/Experts.css'

import { Link } from 'react-router-dom'

const Experts = () => {
  const [expertSelection, setExpertSelection] = useState([])
  return (
    <div className='tabContainer'>
      <div className='titleButtonContainer'>
        <h1>Experts</h1>
        <Link to='/pageExpert'>
          <button className='buttonAjout'>+ Add new expert</button>
        </Link>
        <Link to={`/pageExpertEdit/${expertSelection}`}>
          <button className='buttonAjout'>EDIT</button>
        </Link>
      </div>
      <TabExperts setExpertSelection={setExpertSelection} />
    </div>
  )
}

export default Experts
