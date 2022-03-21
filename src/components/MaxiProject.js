import * as React from 'react'
import axios from 'axios'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useEffect } from 'react'

import './styles/Midi.css'

const MaxiProject = (props) => {
  useEffect(() => {
    console.log(props.projectMaxi)
    axios.get(`http://localhost:4040/projects/maxicard/${props.id}`).then((response) => {
      props.setProjectMaxi(response.data[0])
    })
  }, [])

  console.log(props.projectMaxi, props.setProjectMaxi)

  const card = (
    <React.Fragment>
      <div className={props.projectMaxi ? 'maxiProjectContainer' : 'hidden'}>
        <CardContent>
          <Typography color='var(--firstColor)' fontFamily='var(--fontTitle)' gutterBottom>
            <div className='cardHeader'>
              <h4 className={!props.projectMaxi.numProject && 'hidden'}>{props.projectMaxi.numProject}</h4>
            </div>
          </Typography>
          <div className='headerCardBorder'></div>
          <Typography color='var(--firstColor)' fontFamily='var(--fontBody)'>
            <div className='groupMidMax' id='groupMidi'>
              <ul>
                <li>
                  <div className='fieldName background2'>Status</div>
                  <div className='fieldContent background2'>{props.projectMaxi.status}</div>
                </li>
                <li>
                  <div className='fieldName'>Project Title</div>
                  <div className='fieldContent'>{props.projectMaxi.projectTitle}</div>
                </li>
                <li>
                  <div className='fieldName background2'>Number of experts</div>
                  <div className='fieldContent background2'>{props.projectMaxi.quantityExpert}</div>
                </li>
                <li>
                  <div className='fieldName'>Project Type</div>
                  <div className='fieldContent'>{props.projectMaxi.projectType}</div>
                </li>
                <li>
                  <div className='fieldName background2'>Practice</div>
                  <div className='fieldContent background2'>{props.projectMaxi.practice}</div>
                </li>
                <li>
                  <div className='fieldName'>Type of experts</div>
                  <div className='fieldContent'>{props.projectMaxi.kindOfExpert}</div>
                </li>
                <li>
                  <div className='fieldName background2'>Total Price</div>
                  <div className='fieldContent background2'>{props.projectMaxi.totalPrice}</div>
                </li>
                <li>
                  <div className='fieldName'>ITW Start</div>
                  <div className='fieldContent'>{props.projectMaxi.itwStart}</div>
                </li>
                <li>
                  <div className='fieldName background2'>ITW Deadline</div>
                  <div className='fieldContent background2'>{props.projectMaxi.itwDeadline}</div>
                </li>
                <li>
                  <div className='fieldName'>Industry</div>
                  <div className='fieldContent'>{props.projectMaxi.industry}</div>
                </li>
                <li>
                  <div className='fieldName background2'>Job Title</div>
                  <div className='fieldContent background2'>{props.projectMaxi.jobTitle}</div>
                </li>
                <li>
                  <div className='fieldName'>Function</div>
                  <div className='fieldContent'>{props.projectMaxi.fonction}</div>
                </li>
                <li>
                  <div className='fieldName background2'>Years of Exp</div>
                  <div className='fieldContent background2'>{props.projectMaxi.expertiseLevelName}</div>
                </li>
                <li>
                  <div className='fieldName'>Companies Examples</div>
                  <div className='fieldContent'>{props.projectMaxi.recommend_company}</div>
                </li>
                <li>
                  <div className='fieldName background2'>Excluded Companies</div>
                  <div className='fieldContent background2'>{props.projectMaxi.exclude_company}</div>
                </li>
                <li>
                  <div className='fieldName'>Geo Expertise</div>
                  <div className='fieldContent'>{props.projectMaxi.geoExpertise}</div>
                </li>
                <li>
                  <div className='fieldName background2'>Languages</div>
                  <div className='fieldContent background2'>{props.projectMaxi.languages}</div>
                </li>
                <li>
                  <div className='fieldName'>Linkedin Keywords</div>
                  <div className='fieldContent'>{props.projectMaxi.linkedin}</div>
                </li>
                <li>
                  <div className='fieldName background2'>Client Comment</div>
                  <div className='fieldContent background2'>{props.projectMaxi.clientComment}</div>
                </li>
              </ul>
            </div>
          </Typography>
        </CardContent>
      </div>
    </React.Fragment>
  )

  return (
    <Box>
      <Card variant='outlined' className='card'>
        {card}
      </Card>
    </Box>
  )
}

export default MaxiProject