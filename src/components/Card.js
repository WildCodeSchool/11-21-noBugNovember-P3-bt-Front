import { useDrag } from 'react-dnd'

const Card = (props) => {
  const maxiExpert = (id) => {
    props.setMaxiExpert(true)
    props.setIdExpert(id)
    props.setIsAnswer(true)
  }
  const answerEdit = (id) => {
    props.setAnswerEdit(true)
    props.setIdExpert(id)
  }

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: 'card',
      item: { id: props.expert.id, index: props.index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [props.expert.id, props.index]
  )

  return (
    <div
      ref={drag}
      className={
        props.expert.projects_id &&
        props.expert.projects_id.includes(props.project.id)
          ? 'checkExpert midiExpertCard'
          : 'midiExpertCard answerCard'
      }
      key={props.expert.id}
      style={{ border: isDragging ? '2px solid var(--firstColor)' : '0px' }}
    >
      <p
        style={{ fontFamily: 'Montserrat', fontWeight: '600' }}
        className='paddingMidiExpert'
      >
        Expert # {props.expert.numExpert}
      </p>
      <div className='separation'></div>
      <ul className='infoExpert'>
        <div className='part1'>
          <li>
            {props.expert.firstname} {props.expert.lastname}
          </li>
        </div>
        <div className='part2'>
          <li>
            <p style={{ fontWeight: '600' }}> Job Title </p>
            <p>{props.expert.jobTitleName}</p>
          </li>

          <li>
            <p style={{ fontWeight: '600' }}> Industry </p>
            <p>{props.expert.industry}</p>
          </li>

          <li>
            <p style={{ fontWeight: '600' }}> Type </p>
            <p>{props.expert.kindOfExpertName}</p>
          </li>
          <li>
            <p style={{ fontWeight: '600' }}> Languages </p>
            <p>{props.expert.languages}</p>
          </li>
          <li>
            <p style={{ fontWeight: '600' }}> Current cie </p>
            <p>{props.expert.companyName} </p>
          </li>
          <li>
            <p style={{ fontWeight: '600' }}> Past cie </p>
            <p>{props.expert.pastCompanies} </p>
          </li>
          <li>
            <p style={{ fontWeight: '600' }}>Keywords</p>
            <p> {props.expert.keywords}</p>
          </li>
          <li>
            <p style={{ fontWeight: '600' }}>Price</p>
            <p>{props.expert.price}€ </p>
          </li>
          <li>
            <p> 💸 </p>
            <p> {props.expert.cost}€ </p>
          </li>
          <li>
            <p style={{ fontWeight: '600' }}>Answer</p>
            <p>
              {props.expert.answer !== null
                ? props.expert.answer === 1
                  ? 'Yes'
                  : 'No'
                : 'Waiting'}
            </p>
          </li>
          <li>
            <p style={{ fontWeight: '600' }}>Factu</p>
            <p>{props.expert.factuByExpert}€ </p>
          </li>
          <li>
            <p style={{ fontWeight: '600' }}>Itw Day</p>
            <p>{props.expert.preferedItwDay}</p>
          </li>
        </div>
      </ul>
      <div className='buttonAjoutContainer'>
        <div>
          <button
            className='buttonAjout maxiButton'
            onClick={() => maxiExpert(props.expert.id)}
          >
            MORE
          </button>
        </div>
        <div>
          <button
            className='buttonAjout maxiButton'
            onClick={() => answerEdit(props.expert.id)}
          >
            EDIT
          </button>
        </div>
      </div>
    </div>
  )
}
export default Card
