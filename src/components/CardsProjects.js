import './styles/CardsProjects.css'

const CardsProjects = (props) => {
  console.log(props)
  return (
    <>
      <div className='cardProjectContainer'>
        <h4 className='nameProject'>{props.numProjects}</h4>
        <p className='Project'>
          <ul>
            <li>Expert type: {props.projectTitle}</li>
            <li>Industry: {props.totalPrice}</li>
            <li>Function: {props.status}</li>
          </ul>
        </p>
      </div>
    </>
  )
}
export default CardsProjects
