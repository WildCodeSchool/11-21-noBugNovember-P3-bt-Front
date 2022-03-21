import * as React from 'react'
import axios from 'axios'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { Link } from 'react-router-dom'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './styles/Midi.css'

const MidiProject = (props) => {
  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:4040/projects/midicard/${id}`).then((response) => {
      props.setProject(response.data[0])
    })
  }, [])

  console.log(props.project)

  const card = (
    <React.Fragment>
      <div className='cardContainer'>
        <CardContent>
          <Typography color='var(--firstColor)' fontFamily='var(--fontTitle)' gutterBottom>
            <div className='cardHeader'>
              <h4 className={!props.project.status && 'hidden'}>{props.project.status}</h4>
              <h4 className={!props.project.projectTitle && 'hidden'}>{props.project.projectTitle}</h4>
              <h4 className={!props.project.numProject && 'hidden'}>{props.project.numProject}</h4>
            </div>
          </Typography>
          <div className='headerCardBorder'></div>
          <Typography color='var(--firstColor)' fontFamily='var(--fontBody)'>
            <div className='groupMidMax' id='groupMidi'>
              <ul>
                <li>
                  <div className={props.project.quantityExpert ? 'fieldName background2' : 'hidden'}>Number of experts</div>
                  <div className={props.project.quantityExpert ? 'fieldContent background2' : 'hidden'}>{props.project.quantityExpert}</div>
                </li>
                <li>
                  <div className={props.project.kindOfExpert ? 'fieldName' : 'hidden'}>Type of experts</div>
                  <div className={props.project.kindOfExpert ? 'fieldContent' : 'hidden'}>{props.project.kindOfExpert}</div>
                </li>
                <li>
                  <div className={props.project.totalPrice ? 'fieldName background2' : 'hidden'}>Total Price</div>
                  <div className={props.project.totalPrice ? 'fieldContent  background2' : 'hidden'}>{props.project.totalPrice}</div>
                </li>
                <li>
                  <div className={props.project.itwStart ? 'fieldName' : 'hidden'}>ITW Start</div>
                  <div className={props.project.itwStart ? 'fieldContent' : 'hidden'}>{props.project.itwStart}</div>
                </li>
                <li>
                  <div className={props.project.itwDeadline ? 'fieldName background2' : 'hidden'}>ITW Deadline</div>
                  <div className={props.project.itwDeadline ? 'fieldContent background2' : 'hidden'}>{props.project.itwDeadline}</div>
                </li>
                <li>
                  <div className={props.project.industry ? 'fieldName' : 'hidden'}>Industry</div>
                  <div className={props.project.industry ? 'fieldContent' : 'hidden'}>{props.project.industry}</div>
                </li>
                <li>
                  <div className={props.project.jobTitle ? 'fieldName background2' : 'hidden'}>Job Title</div>
                  <div className={props.project.jobTitle ? 'fieldContent background2' : 'hidden'}>{props.project.jobTitle}</div>
                </li>
                <li>
                  <div className={props.project.fonction ? 'fieldName' : 'hidden'}>Function</div>
                  <div className={props.project.fonction ? 'fieldContent' : 'hidden'}>{props.project.fonction}</div>
                </li>
                <li>
                  <div className={props.project.expertiseLevelName ? 'fieldName background2' : 'hidden'}>Years of Exp</div>
                  <div className={props.project.expertiseLevelName ? 'fieldContent background2' : 'hidden'}>{props.project.expertiseLevelName}</div>
                </li>
                <li>
                  <div className={props.project.recommend_company ? 'fieldName ' : 'hidden'}>Companies Examples</div>
                  <div className={props.project.recommend_company ? 'fieldContent ' : 'hidden'}>{props.project.recommend_company}</div>
                </li>
                <li>
                  <div className={props.project.exclude_company ? 'fieldName background2' : 'hidden'}>Excluded Companies</div>
                  <div className={props.project.exclude_company ? 'fieldContent background2' : 'hidden'}>{props.project.exclude_company}</div>
                </li>
                <li>
                  <div className={props.project.geoExpertise ? 'fieldName' : 'hidden'}>Geo Expertise</div>
                  <div className={props.project.geoExpertise ? 'fieldContent' : 'hidden'}>{props.project.geoExpertise}</div>
                </li>
                <li>
                  <div className={props.project.languages ? 'fieldName background2' : 'hidden'}>Languages</div>
                  <div className={props.project.languages ? 'fieldContent background2' : 'hidden'}>{props.project.languages}</div>
                </li>
                <li>
                  <div className={props.project.linkedin ? 'fieldName' : 'hidden'}>Linkedin Keywords</div>
                  <div className={props.project.linkedin ? 'fieldContent' : 'hidden'}>{props.project.linkedin}</div>
                </li>
              </ul>
            </div>
            <Link to={`/maxiProjectExpert/${props.project.id}`}>
              <div className='buttonCardContainer'>
                <button className='buttonCard'>See more informations</button>
              </div>
            </Link>
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

export default MidiProject
