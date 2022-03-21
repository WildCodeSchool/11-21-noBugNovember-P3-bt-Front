import TabClients from '../components/TabClients'
import { useState } from 'react'
import './styles/Clients.css'
import { Link } from 'react-router-dom'

const Clients = (props) => {
  const [clientSelection, setClientSelection] = useState([])
  return (
    <div className='tabContainer'>
      <div className='titleButtonContainer'>
        <h1 className='pageTitle'>Clients</h1>
        <TabClients />
        <div className='buttonAjoutContainer'>
          <div>
            <Link to='/pageClient'>
              <button className='buttonAjout'>ADD</button>
            </Link>
          </div>
          {clientSelection.length !== 0 ? (
            <div>
              <Link to={`/pageClientEdit/${clientSelection}`}>
                <button className='buttonAjout'>EDIT</button>
              </Link>
            </div>
          ) : (
            <div>
              <a href='#'>
                <button className='buttonAjout'>EDIT</button>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Clients
