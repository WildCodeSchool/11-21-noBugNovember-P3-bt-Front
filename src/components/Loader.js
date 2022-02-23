import CardProjectsList from './CardProjectsList';
import './styles/Loader.css';

function Loader() {
  return (
    <div className='loader'>
      <div className='urgentcontainer'>
        <details>
          <summary>URGENT</summary>
          <CardProjectsList />
        </details>
      </div>

      <div className='tbeConfirmed'>
        <details>
          <summary>TO BE CONFIRMED BY OUR CLIENT</summary>
          <CardProjectsList />
        </details>
      </div>

      <div className='completed'>
        <details>
          <summary>COMPLETED</summary>
          <CardProjectsList />
        </details>
      </div>
    </div>
  );
}

export default Loader;
