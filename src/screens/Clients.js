import TabClients from '../components/TabClients';
import './styles/Clients.css';

const Clients = (props) => {
  return (
    <div className={props.isOpened ? 'tabContainerOpen' : 'tabContainerClose'}>
      <h1 className='pageTitle'>Clients</h1>
      <TabClients />
    </div>
  );
};

export default Clients;
