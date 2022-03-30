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
    axios
      .get(`http://localhost:4040/projects/midicard/${id}`)
      .then((response) => {
        props.setProject(response.data[0])
      })
  }, [])

  const card = (
    <React.Fragment>
      <div className='cardContainer'>
        <CardContent>
          <Typography
            color='var(--firstColor)'
            fontFamily='var(--fontTitle)'
            gutterBottom
          >
            <div className='cardHeader'>
              <h4 className={!props.project.status && 'hidden'}>
                {props.project.status}
              </h4>
              <h4 className={!props.project.projectTitle && 'hidden'}>
                {props.project.projectTitle}
              </h4>
              <h4 className={!props.project.numProject && 'hidden'}>
                {props.project.numProject}
              </h4>
            </div>
          </Typography>
          <div className='headerCardBorder'></div>
          <Typography color='var(--firstColor)' fontFamily='var(--fontBody)'>
            <div className='groupMidMax' id='groupMidi'>
              <ul>
                <li>
                  <div className='fieldName background2'>Total Price</div>
                  <div className='fieldContent  background2'>
                    {props.project.totalPrice}
                  </div>
                </li>
                <li>
                  <div className='fieldName'>ITW Start</div>
                  <div className='fieldContent'>{props.project.itwStart}</div>
                </li>
                <li>
                  <div className='fieldName background2'>ITW Deadline</div>
                  <div className='fieldContent background2'>
                    {props.project.itwDeadline}
                  </div>
                </li>
                <li>
                  <div className='fieldName'>Number of experts</div>
                  <div className='fieldContent'>
                    {props.project.quantityExpert}
                  </div>
                </li>
                <li>
                  <div className='fieldName background2'>Type of experts</div>
                  <div className='fieldContent background2'>
                    {props.project.kindOfExpert}
                  </div>
                </li>
                <li>
                  <div className='fieldName'>Industry</div>
                  <div className='fieldContent'>{props.project.industry}</div>
                </li>
                <li>
                  <div className='fieldName background2'>
                    Companies Examples
                  </div>
                  <div className='fieldContent background2'>
                    {props.project.recommend_company}
                  </div>
                </li>
                <li>
                  <div className='fieldName'>Excluded Companies</div>
                  <div className='fieldContent'>
                    {props.project.exclude_company}
                  </div>
                </li>
                <li>
                  <div className='fieldName background2'>Job Title</div>
                  <div className='fieldContent background2'>
                    {props.project.jobTitle}
                  </div>
                </li>
                <li>
                  <div className='fieldName'>Function</div>
                  <div className='fieldContent'>{props.project.fonction}</div>
                </li>
                <li>
                  <div className='fieldName background2'>Years of Exp</div>
                  <div className='fieldContent background2'>
                    {props.project.expertiseLevelName}
                  </div>
                </li>
                <li>
                  <div className='fieldName'>Geo Expertise</div>
                  <div className='fieldContent'>
                    {props.project.geoExpertise}
                  </div>
                </li>
                <li>
                  <div className='fieldName background2'>Languages</div>
                  <div className='fieldContent background2'>
                    {props.project.languages}
                  </div>
                </li>
                <li>
                  <div className='fieldName'>Linkedin Keywords</div>
                  <div className='fieldContent'>{props.project.linkedin}</div>
                </li>
              </ul>
            </div>
            <div className='buttonCardContainer'>
              <Link to={`/maxiProjectExpert/${props.project.id}`}>
                <button
                  className='buttonAjout maxiButton'
                  onClick={() => props.setMaxiExpert(false)}
                >
                  MORE
                </button>
              </Link>
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

export default MidiProject
