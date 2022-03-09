import TabExperts from '../components/TabExperts'
import './styles/Experts.css'

import { Link } from 'react-router-dom'

const Experts = () => {
  return (
    <div className='tabContainer'>
      <div className='titleButtonContainer'>
        <h1 className='pageTitle'>Experts</h1>
        <Link to='/pageExpert'>
          <button className='buttonAjout'>+ Add new expert</button>
        </Link>
      </div>
      <TabExperts />
    </div>
  )
}

export default Experts
