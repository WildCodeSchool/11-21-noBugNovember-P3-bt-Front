import TabClients from '../components/TabClients'
import './styles/Clients.css'
import { Link } from 'react-router-dom'

const Clients = () => {
  return (
    <div className='tabContainer'>
      <h1>Clients</h1>
      <Link to='/pageClient'>Ajouter</Link>
      <TabClients />
    </div>
  )
}

export default Clients
