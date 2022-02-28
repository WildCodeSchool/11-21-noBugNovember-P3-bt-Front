import './styles/CardsProjects.css';

const CardsProjects = ( props ) => {
  console.log(props)
  return (
    <>
      <div className='cardProjectContainer'>
        <h4 className='nameProject'>{props.name}</h4>
        <p className='pProject'>
          <ul>
            <li>Expert type: {props.blabla}</li>
            <li>Industry: {props.blabla}</li>
            <li>Function: {props.id}</li>
            <li>Compagny: {props.blabla}</li>
            <li>Past Compagny: {props.blabla}</li>
            <li>Languages: {props.blabla}</li>
            <li>Keywords: {props.blabla}</li>
          </ul>
        </p>
      </div>
    </>
  );
};
export default CardsProjects;
