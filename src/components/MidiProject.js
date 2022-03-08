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
        <Typography
          sx={{ fontSize: 14 }}
          color='var(--firstColor)'
          fontFamily='var(--fontTitle)'
          gutterBottom
        >
          <div className='midiCardHeader'>
            <h4>{project.status}</h4>
            <h4>{project.projectTitle}</h4>
            <h4>{project.numProject}</h4>
          </div>
        </Typography>
        <div id='headerMidiCardBorder'></div>
        <Typography
          sx={{ mb: 1.5 }}
          color='var(--firstColor)'
          fontFamily='var(--fontBody)'
        >
          <p>
            <ul className='midiCardRequiredContainer'>
              <li>
                <div className='projectFieldName'>Number of experts</div>
                <div className='projectFieldContent'>
                  {project.quantityExpert}
                </div>
              </li>
              <li>
                <div className='projectFieldName'>Type of experts</div>
                <div className='projectFieldContent'>
                  {project.kindOfExpert}
                </div>
              </li>
              <li>
                <div className='projectFieldName'>Total Price</div>
                <div className='projectFieldContent'>{project.totalPrice}</div>
              </li>
              <li>
                <div className='projectFieldName'>ITW Start</div>
                <div className='projectFieldContent'>{project.itwStart}</div>
              </li>
              <li>
                <div className='projectFieldName'>ITW Deadline</div>
                <div className='projectFieldContent'>{project.itwDeadline}</div>
              </li>
              <li>
                <div className='projectFieldName'>Industry</div>
                <div className='projectFieldContent'>{project.industry}</div>
              </li>
              <li>
                <div className='projectFieldName'>Job Title</div>
                <div className='projectFieldContent'>{project.jobTitle}</div>
              </li>
              <li>
                <div className='projectFieldName'>Function</div>
                <div className='projectFieldContent'>{project.fonction}</div>
              </li>
              <li>
                <div className='projectFieldContent'>
                  {project.expertiseLevelName}
                </div>
              </li>
              <li>
                <div
                  className={
                    project.recommend_company ? 'projectFieldName' : 'hidden'
                  }
                >
                  Companies Examples
                </div>
                <div
                  className={
                    project.recommend_company ? 'projectFieldContent' : 'hidden'
                  }
                >
                  {project.recommend_company}
                </div>
              </li>
              <li>
                <div
                  className={
                    project.exclude_company ? 'projectFieldName' : 'hidden'
                  }
                >
                  Excluded Companies
                </div>
                <div
                  className={
                    project.exclude_company ? 'projectFieldContent' : 'hidden'
                  }
                >
                  {project.exclude_company}
                </div>
              </li>
              <li>
                <div className='projectFieldName'>Geo Expertise</div>
                <div className='projectFieldContent'>
                  {project.geoExpertise}
                </div>
              </li>
              <li>
                <div className='projectFieldName'>Languages</div>
                <div className='projectFieldContent'>{project.languages}</div>
              </li>
              <li>
                <div className='projectFieldName'>Linkedin Keywords</div>
                <div className='projectFieldContent'>{project.linkedin}</div>
              </li>
            </ul>
          </p>
        </Typography>
      </CardContent>
    </React.Fragment>
  )

  return (
    <Box className='midiProjectContainer'>
      <Card
        variant='outlined'
        className='midiCardProject'
        style={{
          width: '400px',
          backgroundColor: 'var(--cardBgColor)',
        }}
      >
        {card}
      </Card>
    </Box>
  )
}

export default MidiProject
