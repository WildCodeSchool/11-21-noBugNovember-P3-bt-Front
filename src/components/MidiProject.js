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
          fontFamily='var(--fontTitle)'
        >
          <p>
            <ul className='midiCardRequiredContainer'>
              <div className='projectFieldName'>
                <li>
                  <div>Number of experts</div>
                </li>
                <li>
                  <div>Type of experts</div>
                </li>
                <li>
                  <div>Total Price</div>
                </li>
                <li>
                  <div>ITW Start</div>
                </li>
                <li>
                  <div>ITW Deadline</div>
                </li>
                <li>
                  <div>Industry</div>
                </li>
                <li>
                  <div>Job Title</div>
                </li>
                <li>
                  <div>Function</div>
                </li>
                <li>
                  <div>Years of Exp</div>
                </li>
                <li>
                  <div className={project.recommend_company ? '' : 'hidden'}>
                    Companies Examples
                  </div>
                </li>
                <li>
                  <div className={project.exclude_company ? '' : 'hidden'}>
                    Excluded Companies
                  </div>
                </li>
                <li>
                  <div>Geo Expertise</div>
                </li>
                <li>
                  <div>Languages</div>
                </li>
                <li>
                  <div>Linkedin Keywords</div>
                </li>
              </div>
              <div className='projectFieldContent'>
                <li>
                  <div>{project.quantityExpert}</div>
                </li>
                <li>
                  <div>{project.kindOfExpert}</div>
                </li>
                <li>
                  <div>{project.totalPrice}</div>
                </li>
                <li>
                  <div>{project.itwStart}</div>
                </li>
                <li>
                  <div>{project.itwDeadline}</div>
                </li>
                <li>
                  <div>{project.industry}</div>
                </li>
                <li>
                  <div>{project.jobTitle}</div>
                </li>
                <li>
                  <div>{project.fonction}</div>
                </li>
                <li>
                  <div>{project.expertiseLevelName}</div>
                </li>
                <li>
                  <div className={project.recommend_company ? '' : 'hidden'}>
                    {project.recommend_company}
                  </div>
                </li>
                <li>
                  <div className={project.exclude_company ? '' : 'hidden'}>
                    {project.exclude_company}
                  </div>
                </li>
                <li>
                  <div>{project.geoExpertise}</div>
                </li>
                <li>
                  <div>{project.languages}</div>
                </li>
                <li>
                  <div>{project.linkedin}</div>
                </li>
              </div>
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
          width: '500px',
          backgroundColor: 'var(--cardBgColor)',
        }}
      >
        {card}
      </Card>
    </Box>
  )
}

export default MidiProject
