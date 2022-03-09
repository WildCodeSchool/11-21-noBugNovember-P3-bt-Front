import TabClients from '../components/TabClients'
import './styles/Clients.css'

import { Link } from 'react-router-dom'

const Clients = (props) => {
  return (
    <div className='tabContainer'>
      <div className='titleButtonContainer'>
        <h1 className='pageTitle'>Clients</h1>
        <Link to='/pageExpert'>
          <button className='buttonAjout'>+ Add new client</button>
        </Link>
      </div>
      <TabClients />
    </div>
  )
}

export default Clients
