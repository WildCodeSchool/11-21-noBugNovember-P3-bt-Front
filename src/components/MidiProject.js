import * as React from 'react'
import axios from 'axios'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useState, useEffect } from 'react'
import './styles/Midi.css'

const MidiProject = (props) => {
  const [project, setProject] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4040/projects/midicard/1').then((response) => {
      setProject(response.data[0])
    })
  }, [])

  console.log(project)

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          <div className='midiCardHeader'>
            <h4>{project.status}</h4>
            <h4>{project.projectTitle}</h4>
            <h4>{project.numProject}</h4>
          </div>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          <p>
            <ul>
              <li>
                <div className='projectFieldName'>Quantity of Experts : </div>
                <div className='projectFieldContent'>
                  {project.quantityExpert} required
                </div>
              </li>
              <li>
                <div className='projectFieldName'>Type of Expert : </div>
                <div className='projectFieldContent'>
                  {project.kindOfExpert}
                </div>
              </li>
              <li>
                <div className='projectFieldName'>Total price : </div>
                <div className='projectFieldContent'>{project.totalPrice}</div>
              </li>
              <li>
                <div className='projectFieldName'>ITW Start : </div>
                <div className='projectFieldContent'>{project.itwStart}</div>
              </li>
              <li>
                <div className='projectFieldName'>ITW Deadline : </div>
                <div className='projectFieldContent'>{project.itwDeadline}</div>
              </li>
              <li>
                <div className='projectFieldName'>Industry : </div>
                <div className='projectFieldContent'>{project.industry}</div>
              </li>
              <li>
                <div className='projectFieldName'>Job Title : </div>
                <div className='projectFieldContent'>{project.jobTitle}</div>
              </li>
              <li>
                <div className='projectFieldName'>Function : </div>
                <div className='projectFieldContent'>{project.fonction}</div>
              </li>
              <li>
                <div className='projectFieldName'>Expertise Level : </div>
                <div className='projectFieldContent'>
                  {project.expertiseLevelName}
                </div>
              </li>
              <li>
                <div className='projectFieldName'>Companies Examples : </div>
                <div className='projectFieldContent'>
                  {project.recommend_company}
                </div>
              </li>
              <li>
                <div className='projectFieldName'>Excluded Companies : </div>
                <div className='projectFieldContent'>
                  {project.exclude_company}
                </div>
              </li>
              <li>
                <div className='projectFieldName'>Geo Expertise : </div>
                <div className='projectFieldContent'>
                  {project.geoExpertise}
                </div>
              </li>
              <li>
                <div className='projectFieldName'>Languages : </div>
                <div className='projectFieldContent'>{project.languages}</div>
              </li>
              <li>
                <div className='projectFieldName'>Linkedin keywords : </div>
                <div className='projectFieldContent'>{project.linkedin}</div>
              </li>
            </ul>
          </p>
        </Typography>
      </CardContent>
    </React.Fragment>
  )

  return (
    <Box sx={{ maxWidth: 800 }} className='midiProjectContainer'>
      <Card variant='outlined' className='midiCardProject'>
        {card}
      </Card>
    </Box>
  )
}

export default MidiProject
