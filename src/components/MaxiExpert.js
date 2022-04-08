import axios from 'axios'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Typography from '@mui/material/Typography'
import React, { useEffect } from 'react'
import './styles/Midi.css'

const MaxiExpert = (props) => {
  useEffect(() => {
    if (props.idExpert && props.maxiExpert) {
      axios
        .get(`http://localhost:4040/experts/maxicard/${props.idExpert}`)
        .then((res) => res.data)
        .then((res) => console.log('expert', res) || props.setExpert(res[0]))
    }
  }, [props.idExpert])

  const closeMaxiExpert = () => {
    props.setMaxiExpert(false)
    props.setIdExpert(null)
  }
  console.log(props.idExpert)
  const card = (
    <React.Fragment>
      <div className='cardContainer'>
        <CardContent id='maxiCard'>
          <Typography
            color='var(--firstColor)'
            fontFamily='var(--fontTitle)'
            gutterBottom
          >
            <div className='cardHeader'>
              <FontAwesomeIcon
                onClick={() => closeMaxiExpert()}
                icon={faCircleXmark}
                size='lg'
                className='circle'
              />
              <h4 className={!props.expert.numExpert && 'hidden'}>
                {props.expert.numExpert}
              </h4>
              <h4 className={!props.expert.firstname && 'hidden'}>
                {props.expert.firstname}
              </h4>
              <h4 className={!props.expert.lastname && 'hidden'}>
                {props.expert.lastname}
              </h4>
            </div>
          </Typography>
          <div className='headerCardBorder'></div>
          <Typography color='var(--firstColor)' fontFamily='var(--fontBody)'>
            <div className='groupMidMax'>
              <ul>
                <li>
                  <div className='fieldName background2'>Email</div>
                  <div className='fieldContent background2'>
                    {props.expert.email}
                  </div>
                </li>
                <li>
                  <div className='fieldName'>Phone</div>
                  <div className='fieldContent'>{props.expert.phone}</div>
                </li>
                <li>
                  <div className='fieldName background2'>Job Title</div>
                  <div className='fieldContent background2'>
                    {props.expert.jobTitleName}
                  </div>
                </li>
                <li>
                  <div className='fieldName'>Company</div>
                  <div className='fieldContent'>{props.expert.companyName}</div>
                </li>
                <li>
                  <div className='fieldName background2'>Practice</div>
                  <div className='fieldContent background2'>
                    {props.expert.practiceType}
                  </div>
                </li>
                <li>
                  <div className='fieldName'>Category</div>
                  <div className='fieldContent'>
                    {props.expert.kindOfExpertName}
                  </div>
                </li>
                <li>
                  <div className='fieldName background2'>HCP Type</div>
                  <div className='fieldContent background2'>
                    {props.expert.hcpTypeName}
                  </div>
                </li>
                <li>
                  <div className='fieldName'>Sector</div>
                  <div className='fieldContent'>{props.expert.sectorName}</div>
                </li>
                <li>
                  <div className='fieldName background2'>Industry</div>
                  <div className='fieldContent background2'>
                    {props.expert.industry}
                  </div>
                </li>
                <li>
                  <div className='fieldName'>Function</div>
                  <div className='fieldContent'>{props.expert.fonction}</div>
                </li>
                <li>
                  <div className='fieldName background2'>Specialty</div>
                  <div className='fieldContent background2'>
                    {props.expert.specialty}
                  </div>
                </li>
                <li>
                  <div className='fieldName'>Past Companies</div>
                  <div className='fieldContent'>
                    {props.expert.pastCompanies}
                  </div>
                </li>
                <li>
                  <div className='fieldName background2'>Geo Expertise</div>
                  <div className='fieldContent background2'>
                    {props.expert.geoExpertiseName}
                  </div>
                </li>
                <li>
                  <div className='fieldName'>Languages</div>
                  <div className='fieldContent'>{props.expert.languages}</div>
                </li>
                <li>
                  <div className='fieldName background2'>Expertise Level</div>
                  <div className='fieldContent background2'>
                    {props.expert.expertiseLevelName}
                  </div>
                </li>
                <li>
                  <div className='fieldName'>Hourly Rate</div>
                  <div className='fieldContent'>{props.expert.price}</div>
                </li>
                <li>
                  <div className='fieldName background2'>Cost</div>
                  <div className='fieldContent background2'>
                    {props.expert.cost}
                  </div>
                </li>
                <li>
                  <div className='fieldName'>Linkedin</div>
                  <div className='fieldContent'>
                    {props.expert.linkedinProfile}
                  </div>
                </li>
                <li>
                  <div className='fieldName background2'>Project</div>
                  <div className='fieldContent background2'>
                    {props.expert.numProject}
                  </div>
                </li>
                <li>
                  <div className='fieldName'>Comment</div>
                  <div className='fieldContent'>
                    {props.expert.feedbackExpert}
                  </div>
                </li>
                <li>
                  <div className='fieldName background2'>Keywords</div>
                  <div className='fieldContent background2'>
                    {props.expert.keywords}
                  </div>
                </li>
                <li>
                  <div className='fieldName'>Contact</div>
                  <div className='fieldContent'>{props.expert.contact}</div>
                </li>
              </ul>
              {!props.isAnswer && (
                <div className='buttonCardContainer'>
                  <button
                    className='buttonAjout maxiButton'
                    onClick={() => props.setPopupProject(true)}
                  >
                    ADD
                  </button>
                </div>
              )}
            </div>
          </Typography>
        </CardContent>
      </div>
    </React.Fragment>
  )

  return (
    <Box
      className={props.idExpert && props.maxiExpert ? '' : 'hidden'}
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '10px',
      }}
    >
      <Card variant='outlined' className='card'>
        {card}
      </Card>
    </Box>
  )
}

export default MaxiExpert
